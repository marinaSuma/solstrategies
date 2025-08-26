<template>
  <div v-if="useDevice().isDesktop" ref="el" class="base-cursor">
    <Transition name="fade">
      <div v-if="cursor.show" class="drag" :class="{ 'is--clicked': cursor.clicked }">
        <p>Drag</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const el = useTemplateRef('el');

const cursor = useCursor();

let xTo: gsap.QuickToFunc, yTo: gsap.QuickToFunc;

const animateCursor = (e: MouseEvent) => {
  if (xTo && yTo) {
    xTo(e.clientX);
    yTo(e.clientY);
  }
};

onMounted(() => {
  if (!useDevice().isDesktop) return;

  if (el.value) {
    gsap.set(el.value, { xPercent: -50, yPercent: -50 });

    xTo = gsap.quickTo(el.value, 'x', { duration: 0.45 });
    yTo = gsap.quickTo(el.value, 'y', { duration: 0.45 });

    useEventListener(window, 'mousemove', animateCursor);
  }
});
</script>

<style scoped lang="scss">
.base-cursor {
  pointer-events: none;

  position: fixed;
  z-index: 9999;
  top: 0%;
  left: 0%;
  transform: translate(-50%, -50%);

  @include mx.mobile {
    display: none;
  }

  .drag {
    position: absolute;
    top: fn.toVw(20);
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: fn.toVw(90);
    height: fn.toVw(90);
    padding: fn.toVw(6);
    border-radius: 50%;

    font-size: fn.toVw(16);
    line-height: 1;
    color: $color-background;
    white-space: nowrap;

    background: $color-primary;

    transition:
      opacity 0.5s ease,
      transform 0.3s ease;

    &.is--clicked {
      transform: translateX(-50%) scale(0.9);
    }
  }
}
</style>
