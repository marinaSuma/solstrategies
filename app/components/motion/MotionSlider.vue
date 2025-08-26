<template>
  <div ref="elContainer" class="section-slider">
    <div ref="elSlider" class="slider">
      <div ref="elWrapper" class="slider-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  desktopEnable: {
    type: Boolean,
    default: true,
  },
  mobileEnable: {
    type: Boolean,
    default: true,
  },
  gapDesktop: {
    type: Number,
    default: 10,
  },
  gapMobile: {
    type: Number,
    default: 10,
  },
  lerpFactor: {
    type: Number,
    default: 0.25,
  },
  dragSensitivity: {
    type: Number,
    default: 0.8,
    validator: (value) => value >= 0 && value <= 1,
  },
  mobileDragSensitivity: {
    type: Number,
    default: 2.5,
    validator: (value) => value >= 0 && value <= 3,
  },
  speedDecay: {
    type: Number,
    default: 0.85,
  },
  snap: {
    type: Boolean,
    default: false,
  },
  snapStrength: {
    type: Number,
    default: 0.1,
  },
  bounceStrength: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(['progress', 'next', 'prev']);

const elContainer = ref();
const elSlider = ref();
const elWrapper = ref();

const isDragging = ref(false);
const dragStart = ref(0);
const dragStartTarget = ref(0);
const current = ref(0);
const target = ref(0);
const speed = ref(0);
const lspeed = ref(0);
const previousTime = ref(0);
const deltaTime = ref(0);
const maxScroll = ref(0);
const touchStartY = ref(0);
const isScrollingVertically = ref(false);
const dragThreshold = 15; // Increased threshold for better detection

let touchInitialized = false;

let tickerFunction;
let ctx;

const getStepWidth = () => {
  if (!elWrapper.value) return 0;
  const firstChild = elWrapper.value.children?.[0];
  if (!(firstChild instanceof HTMLElement)) return 0;
  const styles = getComputedStyle(elWrapper.value);
  const gap = parseFloat(styles.columnGap || '0') || 0;
  return firstChild.offsetWidth + gap;
};

const next = () => {
  const step = getStepWidth();
  if (step === 0) return;
  const desired = target.value - step;
  // Clamp hard to bounds for discrete navigation
  target.value = gsap.utils.clamp(maxScroll.value, 0, desired);
  emit('next');
};

const prev = () => {
  const step = getStepWidth();
  if (step === 0) return;
  const desired = target.value + step;
  target.value = gsap.utils.clamp(maxScroll.value, 0, desired);
  emit('prev');
};

defineExpose({ next, prev });

const calculateBounds = () => {
  if (!elWrapper.value || !elSlider.value) return;

  const wrapperWidth = elWrapper.value.scrollWidth;
  const containerWidth = elSlider.value.clientWidth;

  maxScroll.value = wrapperWidth <= containerWidth ? 0 : -(wrapperWidth - containerWidth);
};

const applyBounds = (value) => {
  if (value > 0) {
    return value * 0.5;
  } else if (value < maxScroll.value) {
    return maxScroll.value + (value - maxScroll.value) * 0.5;
  }
  return value;
};

const snapToBounds = () => {
  if (target.value > 0) {
    target.value = 0;
    speed.value = 0;
  } else if (target.value < maxScroll.value) {
    target.value = maxScroll.value;
    speed.value = 0;
  }
};

const updateAnimation = (time) => {
  if (!elWrapper.value) return;

  const currentTime = time;
  deltaTime.value = previousTime.value === 0 ? 0.016 : currentTime - previousTime.value;
  previousTime.value = currentTime;

  if (isDragging.value) {
    target.value = applyBounds(target.value);
  } else {
    if (target.value > 0) {
      target.value += (0 - target.value) * props.bounceStrength;
    } else if (target.value < maxScroll.value) {
      target.value += (maxScroll.value - target.value) * props.bounceStrength;
    }

    if (props.snap && !isDragging.value) {
      const currentSnap = Math.round(target.value);
      if (currentSnap <= 0 && currentSnap >= maxScroll.value) {
        const diff = currentSnap - target.value;
        target.value += diff * props.snapStrength;
      }
    }
  }

  current.value = mathUtils().damp(current.value, target.value, 1 / props.lerpFactor, deltaTime.value);
  gsap.set(elWrapper.value, { x: current.value });

  // Calculate and emit progress
  const progress = maxScroll.value === 0 ? 0 : Math.abs(current.value) / Math.abs(maxScroll.value);
  const clampedProgress = Math.max(0, Math.min(1, progress));
  emit('progress', clampedProgress);

  lspeed.value = mathUtils().damp(lspeed.value, speed.value, 1 / props.lerpFactor, deltaTime.value);
  speed.value *= props.speedDecay;
};

const handleDragStart = (event) => {
  isDragging.value = true;
  dragStart.value = event.clientX || event.touches?.[0]?.clientX || 0;
  dragStartTarget.value = target.value;
  if (elWrapper.value) elWrapper.value.style.cursor = 'grabbing';
};

const handleDragMove = (event) => {
  if (!isDragging.value || !elWrapper.value) return;

  const clientX = event.clientX || event.touches?.[0]?.clientX || 0;
  const deltaX = clientX - dragStart.value;

  // Apply sensitivity in 0-1 range (0 = no movement, 1 = full movement)
  // Scale the sensitivity to create a natural feeling
  const sensitivity = gsap.utils.clamp(0, 1, props.dragSensitivity) * 2;
  target.value = dragStartTarget.value + deltaX * sensitivity;

  if (event.movementX) {
    // Scale speed based on sensitivity as well
    speed.value += event.movementX * sensitivity * 0.05;
  }
};

const handleTouchStart = (e) => {
  // Do not block touch if it's not directly on a draggable element
  if (!elWrapper.value) return;

  // Record both X and Y positions
  touchStartY.value = e.touches[0].clientY;
  dragStart.value = e.touches[0].clientX;
  dragStartTarget.value = target.value;

  // Reset flags
  touchInitialized = false;
  isScrollingVertically.value = false;
  isDragging.value = false;
};

const handleTouchMove = (e) => {
  if (!elWrapper.value) return;

  // Calculate horizontal and vertical distances
  const touchCurrentX = e.touches[0].clientX;
  const touchCurrentY = e.touches[0].clientY;
  const deltaX = Math.abs(touchCurrentX - dragStart.value);
  const deltaY = Math.abs(touchCurrentY - touchStartY.value);

  // Only initialize once per touch gesture
  if (!touchInitialized) {
    // If clearly moving more horizontally
    if (deltaX > dragThreshold && deltaX > deltaY * 1.5) {
      isDragging.value = true;
      e.preventDefault(); // Now prevent default to enable horizontal dragging
      elWrapper.value.style.cursor = 'grabbing';
    }
    // If clearly moving more vertically
    else if (deltaY > dragThreshold && deltaY > deltaX * 1.2) {
      isScrollingVertically.value = true;
      // Allow regular scrolling behavior
    }

    // Consider the direction initialized if either condition was met
    if (isDragging.value || isScrollingVertically.value) {
      touchInitialized = true;
    }
  }

  // If we've determined we're doing horizontal dragging, handle it
  if (isDragging.value) {
    e.preventDefault();
    const clientX = e.touches[0].clientX;
    const deltaX = clientX - dragStart.value;

    // Apply mobile-specific sensitivity for lighter touch control
    const sensitivity = props.mobileDragSensitivity;
    target.value = dragStartTarget.value + deltaX * sensitivity;

    // Use touch velocity for speed with lighter multiplier for mobile
    const movementX = clientX - (e.touches[0]._lastX || clientX);
    e.touches[0]._lastX = clientX;

    speed.value += movementX * sensitivity * 0.08;
  }
  // Otherwise, let the browser handle vertical scrolling naturally
};

const handleDragEnd = () => {
  isDragging.value = false;
  isScrollingVertically.value = false;
  if (elWrapper.value) elWrapper.value.style.cursor = 'grab';

  snapToBounds();

  if (props.snap) {
    const snappedValue = Math.round(target.value);
    if (snappedValue <= 0 && snappedValue >= maxScroll.value) {
      target.value = snappedValue;
    }
  }
};

const handleResize = () => {
  calculateBounds();

  if (target.value < maxScroll.value) {
    target.value = maxScroll.value;
    current.value = maxScroll.value;
  }
};

onMounted(() => {
  ctx = gsap.context(() => {
    if ((props.desktopEnable && !IS_MOBILE.value) || (props.mobileEnable && IS_MOBILE.value)) {
      calculateBounds();

      gsap.set(elWrapper.value, { x: 0 });
      elWrapper.value.style.cursor = 'grab';
      // Allow vertical scrolling by default
      elWrapper.value.style.touchAction = 'pan-y';

      useEventListener(elWrapper, 'mousedown', handleDragStart);
      useEventListener(window, 'mousemove', handleDragMove);
      useEventListener(window, 'mouseup', handleDragEnd);

      // Use passive: true for touchstart to allow scrolling
      useEventListener(elWrapper, 'touchstart', handleTouchStart, { passive: true });
      // Keep passive: false for touchmove to allow preventDefault in horizontal drag case
      useEventListener(window, 'touchmove', handleTouchMove, { passive: false });
      useEventListener(window, 'touchend', handleDragEnd);

      useWindowResize(handleResize);

      previousTime.value = 0;
      tickerFunction = updateAnimation;
      gsap.ticker.add(tickerFunction);
    }
  }, elContainer.value);
});

onUnmounted(() => {
  if (tickerFunction) {
    gsap.ticker.remove(tickerFunction);
  }
  ctx?.revert();
});
</script>

<style scoped lang="scss">
.section-slider {
  user-select: none;
  overflow: visible;

  .slider {
    overflow: visible;
    display: flex;
    flex-direction: column;

    .slider-wrapper {
      will-change: transform;

      display: flex;
      flex-wrap: nowrap;
      gap: fn.toVw(v-bind('$props.gapDesktop'));

      width: max-content;

      @include mx.mobile {
        gap: fn.toVw(v-bind('$props.gapMobile'));
      }
    }
  }
}
</style>
