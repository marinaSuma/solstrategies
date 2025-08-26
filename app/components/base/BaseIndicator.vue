<template>
  <div v-if="isLoadingMotion" ref="el" class="base-indicator" />
</template>

<script setup>
import gsap from 'gsap';

const el = useTemplateRef('el');
const isLoadingMotion = ref(true);

const preloadProgress = usePreloadProgress();

const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: 800,
  throttle: 50,
  estimatedProgress: (duration, elapsed) => (2 / Math.PI) * 100 * Math.atan(((elapsed / duration) * 100) / 50),
});

const animateProgress = (value) => {
  ctx = gsap.context(() => {
    gsap.to(el.value, {
      scaleX: gsap.utils.mapRange(1, 100, 0, 1, value),
      xPercent: value < 100 ? 0 : 100,
      duration: value < 100 ? 0.3 : 0.8,
      transformOrigin: 'left',
      ease: value < 100 ? 'power2.out' : 'power2.inOut',
      onComplete: () => {
        if (value >= 100) {
          clear();
          isLoadingMotion.value = false;
        }
      },
    });
  });
};

let ctx;

onMounted(() => {
  callOnce(() => {
    watch(preloadProgress, (val) => {
      animateProgress(val);
    });
  });

  watch(isLoading, (val) => {
    if (val) {
      isLoadingMotion.value = true;
      start();
    } else {
      finish();
    }
  });

  watch(progress, (val) => {
    if (!isLoading.value) return;
    animateProgress(val);
  });
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<style scoped lang="scss">
.base-indicator {
  will-change: transform;

  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  transform-origin: left;
  transform: scaleX(0);

  overflow: hidden;

  width: 100%;
  height: 4px;

  background-color: $color-primary;
}
</style>
