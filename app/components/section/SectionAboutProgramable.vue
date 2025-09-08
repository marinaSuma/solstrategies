<template>
<section ref="el" class="banner">

  <div class="bg">
    <MediaImg src="/about-bg2.webp" alt="Programable Background" />
  </div>
  <div class="container">
    <div class="shape top">
      <MediaImg src="/aboutShapeTop.svg" alt="Shape" />
    </div>
     <div class="title">
      <Text tag="h2" variant="heading2" data-split data-linereveal>We believe Solana will <br> be the <b>future of programmable <br>finance</b> </Text>
    </div>
    <div class="shape bottom">
      <MediaImg src="/aboutShapeBottom.svg" alt="Shape" />
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
    background-color: #fafaf6;
    }

  .title .font-heading2 {
    text-align: center;
  }

  section.banner {
    position: relative;
    height: 440px;
    display: flex;
    align-items: center;
}

</style>