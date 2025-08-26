<template>
  <div class="media">
    <MediaVideo v-if="props.video" :src="props.video" :poster="props.image" />
    <MediaImg v-else :src="props.image" :alt="props.alt || 'Image'" />
  </div>
</template>

<script setup>
const props = defineProps({
  video: String,
  image: String,
  alt: String,
});
</script>

<style lang="scss" scoped>
.media {
  width: 100%;
  height: 100%;
}
</style>
