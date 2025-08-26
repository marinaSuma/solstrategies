<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script setup>
import variables from '~~/config/variables.json';

defineProps({
  gridwidth: {
    type: String,
    default: '100%',
  },
  gridheight: {
    type: String,
    default: null,
  },
  columns: {
    type: [Number, String],
    default: variables.layout.grid.columns,
  },
  gap: {
    type: Number,
    default: variables.layout.grid.gutter,
  },
});
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  column-gap: fn.toVw(v-bind(gap));

  width: v-bind(gridwidth);
  height: v-bind(gridheight);
  padding-right: fn.toVw($layout-container-desktop);
  padding-left: fn.toVw($layout-container-desktop);

  @include mx.mobile {
    display: block;
    padding-right: fn.toVw($layout-container-mobile);
    padding-left: fn.toVw($layout-container-mobile);
  }
}
</style>
