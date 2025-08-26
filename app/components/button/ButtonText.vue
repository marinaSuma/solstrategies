<template>
  <button class="button-text">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button-text {
  cursor: pointer;

  display: flex;
  gap: fn.toVw(12);
  align-items: center;

  color: $color-text;
}
</style>
