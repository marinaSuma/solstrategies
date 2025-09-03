<template>
<section ref="el" class="video">
 <div class="bg">
    <MediaImg src="/video-bg.webp" alt="Video Background" />
  </div>
    <div class="video-content">

      <div class="video-in">

          
      </div>
    </div>

</section>
</template>



<script setup>

const el = useTemplateRef('el');
let ctx;
</script>



<style scoped lang="scss">
  .bg {
    top: 0;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    }

</style>
