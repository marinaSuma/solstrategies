<template>
<section ref="el" class="audio">

  <div class="bg">
    <MediaImg src="/audio-bg.webp" alt="Audio Background" />
  </div>
  <div class="container">

     <div class="title">
      <Text tag="h2" variant="heading2" data-split data-linereveal> Upcoming Events</Text>
    </div>

    <div class="audio-content">
      <Text class="desc color-gray" data-split data-linereveal reveal-delay="0.15"> Sol Strategies First Quarter 2025 Financial Results Webcast and Conference Call</Text>

      <div class="audio-in">

          
      </div>

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
    right: 0;
    pointer-events: none;
    position: absolute;
    width: 80%;
    z-index: -1;

    }

</style>