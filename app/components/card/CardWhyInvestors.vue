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
