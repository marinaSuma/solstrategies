<template>
<section ref="el" class="banner">

  <div class="bg fadeinUp">
    <MediaImg src="/about-bg2.webp" alt="Programable Background" />
  </div>
  <div class="container">
    <div class="title-container">
      <div class="shape top fadeinUp">
        <MediaImg src="/aboutShapeTop.svg" alt="Shape" />
      </div>
     <div class="title">
      <Text tag="h2" variant="heading2" data-split data-linereveal>We believe Solana will be the <b>future of programmable finance</b> </Text>
    </div>
    <div class="shape bottom fadeinUp">
      <MediaImg src="/aboutShapeBottom.svg" alt="Shape" />
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
  section.banner {
    position: relative;
    height: 570px;
    display: flex;
    align-items: center;
  }
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

  .title-container{
    max-width: 810px;
    margin: 0 auto;
    .title {
      margin: 20px 0;
      .font-heading2 {
        text-align: center;
        font-size: 60px;
      }
    }

    .shape {
      &.top {
        position: relative;
        left: -80px;
        width: calc(220 / var(--base-vw) * var(--base-multiplier));
      }
      &.bottom {
        position: absolute;
        right: -150px;
        top: 150px;
        width: calc(300 / var(--base-vw) * var(--base-multiplier));
      }

      @include mx.mobile {
        
      }
    }

   
  }


  



  

</style>