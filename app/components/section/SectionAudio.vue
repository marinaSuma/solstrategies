<template>
<section ref="el" class="audio">

  <div class="bg">
    <MediaImg src="/audio-bg.webp" alt="Audio Background" />
  </div>
  <div class="container">

     <div class="title">
      <Text tag="h2" variant="heading2" data-split data-linereveal> Recent financial results</Text>
    </div>

    <div class="audio-content">
      <Text class="desc " data-split data-linereveal reveal-delay="0.15"> Sol Strategies First Quarter 2025 Financial Results <br> Webcast and Conference Call</Text>

      <div class="audio-in">

          <audio controls>
            <source src="/SOLQ325-082625.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
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
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    }

</style>