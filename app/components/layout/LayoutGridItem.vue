<template>
  <div class="grid-item">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  start: {
    type: [Number, String],
    default: 1,
  },
  end: {
    type: [Number, String],
    default: -1,
  },
  row: {
    type: [Number, String],
    default: null,
  },
  alignself: {
    type: String,
    default: null,
  },
  margin: {
    type: String,
    default: null,
  },
  padding: {
    type: String,
    default: null,
  },
  order: {
    type: Number,
    default: null,
  },
});
</script>

<style scoped lang="scss">
.grid-item {
  grid-column: v-bind(start) / v-bind(end);
  grid-row: v-bind(row);
  align-self: v-bind(alignself);
  order: v-bind(order);

  margin: v-bind(margin);
  padding: v-bind(padding);
}
</style>
