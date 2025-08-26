<template>
  <div ref="elSlider" class="carousel">
    <div ref="elTrack" class="slider__track">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'MotionCarousel' });

const props = defineProps({
  autoplayMs: { type: Number, default: 3000 },
  pauseOnHover: { type: Boolean, default: true },
  thresholdRatio: { type: Number, default: 0.2 },
  thresholdMinPx: { type: Number, default: 24 },
  loop: { type: Boolean, default: true },
});

let ctx;

const elSlider = useTemplateRef('elSlider');
const elTrack = useTemplateRef('elTrack');

const currentIndex = ref(0);
const slideCount = ref(0);
const slideWidth = ref(0);

const isDragging = ref(false);
const dragStartX = ref(0);
const startX = ref(0);
const currentX = ref(0);

const getPointerX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

const clampIndex = (index) => Math.max(0, Math.min(index, (slideCount.value || 1) - 1));

const updateMetrics = () => {
  if (!elSlider.value || !elTrack.value) return;
  slideCount.value = elTrack.value.children.length;
  const firstSlide = elTrack.value.children[0];
  const measuredSlideWidth = firstSlide instanceof HTMLElement ? firstSlide.clientWidth : 0;
  slideWidth.value = measuredSlideWidth || elSlider.value.clientWidth;
  gsap.set(elTrack.value, { x: -currentIndex.value * slideWidth.value });
};

const goToIndex = (index) => {
  if (!elTrack.value) return;
  const next = props.loop ? ((index % slideCount.value) + slideCount.value) % slideCount.value : clampIndex(index);
  currentIndex.value = next;
  gsap.to(elTrack.value, { x: -next * slideWidth.value, duration: 0.6, ease: 'power3.out' });
};

const goToNext = () => {
  if (slideCount.value <= 1) return;
  goToIndex(currentIndex.value + 1);
};

const goToPrev = () => {
  if (slideCount.value <= 1) return;
  goToIndex(currentIndex.value - 1);
};

const handleDragStart = (e) => {
  if (!elTrack.value) return;
  isDragging.value = true;
  dragStartX.value = getPointerX(e);
  startX.value = -currentIndex.value * slideWidth.value;
  currentX.value = startX.value;
  gsap.killTweensOf(elTrack.value);
  elTrack.value.style.cursor = 'grabbing';
  pause();
};

const handleDragMove = (e) => {
  if (!isDragging.value || !elTrack.value) return;
  const dx = getPointerX(e) - dragStartX.value;
  let nextX = startX.value + dx;
  const maxX = 0;
  const minX = -(slideCount.value - 1) * slideWidth.value;
  if (!props.loop) {
    if (nextX > maxX) nextX = maxX + (nextX - maxX) * 0.35;
    if (nextX < minX) nextX = minX + (nextX - minX) * 0.35;
  }
  currentX.value = nextX;
  gsap.set(elTrack.value, { x: nextX });
};

const handleDragEnd = () => {
  if (!isDragging.value || !elTrack.value) return;
  isDragging.value = false;
  elTrack.value.style.cursor = 'grab';

  const dx = currentX.value - startX.value;
  const threshold = Math.max(props.thresholdMinPx, slideWidth.value * props.thresholdRatio);
  if (dx <= -threshold) {
    goToNext();
  } else if (dx >= threshold) {
    goToPrev();
  } else {
    goToIndex(currentIndex.value);
  }
  resume();
};

const { pause, resume } = useIntervalFn(
  () => {
    if (document.hidden) return;
    if (isDragging.value) return;
    goToNext();
  },
  computed(() => props.autoplayMs),
  { immediate: false },
);

onMounted(() => {
  ctx = gsap.context(() => {
    nextTick(() => {
      updateMetrics();
      if (elTrack.value) {
        gsap.set(elTrack.value, { x: 0 });
        elTrack.value.style.cursor = 'grab';
      }
      resume();
    });

    useWindowResize(updateMetrics);

    useEventListener(elSlider, 'mousedown', handleDragStart);
    useEventListener(window, 'mousemove', handleDragMove);
    useEventListener(window, 'mouseup', handleDragEnd);

    useEventListener(elSlider, 'touchstart', handleDragStart, { passive: true });
    useEventListener(window, 'touchmove', handleDragMove, { passive: false });
    useEventListener(window, 'touchend', handleDragEnd);

    if (props.pauseOnHover) {
      useEventListener(elSlider, 'mouseenter', pause);
      useEventListener(elSlider, 'mouseleave', resume);
    }
  }, elSlider.value);
});

onUnmounted(() => {
  pause();
  ctx?.revert();
});
</script>

<style scoped lang="scss">
.carousel {
  overflow: hidden;
}

.slider__track {
  will-change: transform;
  display: flex;
  flex-wrap: nowrap;
}
</style>
