<template>
  <div ref="el" class="number">
    <span class="current">
      <span class="placeholder">{{ totalLength }} &nbsp;</span>
      <div class="current__wrapper">
        <span ref="elInner" class="current__inner">
          <span v-for="(_, index) in props.data" :key="`number-${index}`">{{ index + 1 }}</span>
        </span>
      </div>
    </span>
    <span class="inactive">
      —
      <span class="total">{{ totalLength }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: [Object, Array],
  },
  current: {
    type: Number,
  },
});

const el = useTemplateRef('el');
const elInner = useTemplateRef('elInner');

const currentIndexText = computed(() => {
  return props.current;
});

const totalLength = computed(() => {
  return props.data.length;
});

let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    watch(currentIndexText, () => {
      gsap.to(elInner.value, {
        yPercent: `-${currentIndexText.value}00`,
      });
    });
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<style scoped lang="scss">
.number {
  position: relative;
  overflow-y: clip;
  display: flex;

  .current {
    position: relative;
    inset: 0;
    overflow: hidden;
    height: max-content;

    .placeholder {
      opacity: 0;
    }

    .current__wrapper,
    .current__inner {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
    }
  }

  .inactive {
    opacity: 0.5;
  }
}
</style>
