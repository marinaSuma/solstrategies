<template>
  <div class="text-logo" :class="{ 'is--footer': props.isFooter }">
    <MediaImg class="image" src="/logoonly.png" alt="Logo" />
    <IconLogotext />
  </div>
</template>

<script setup>
const props = defineProps({
  isFooter: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
.text-logo {
  display: flex;
  gap: fn.toVw(8.9);
  align-items: center;
  width: fn.toVw(270);

  @include mx.mobile {
    width: fn.toVw(208);
  }

  &.is--footer {
    width: fn.toVw(376);

    @include mx.mobile {
      width: fn.toVw(267);
    }

    .image {
      position: relative;
      top: fn.toVw(-3);
      width: fn.toVw(53);
    }
  }

  .image {
    position: relative;
    top: fn.toVw(-3);
    width: fn.toVw(40);
  }
}
</style>
