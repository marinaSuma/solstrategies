<template>
  <div class="card">
    <div v-if="props.background" class="bg">
      <MediaImg :src="props.background" alt="Background of card" />
    </div>
    <slot />
  </div>
</template>



<script setup>
const props = defineProps({
  background: String
});
</script>

<style scoped lang="scss">


.bg {
  position: absolute;
  z-index: 0;
  inset: 0;

  width: 100%;
  height: 100%;
}


</style>
