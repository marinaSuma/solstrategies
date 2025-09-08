<template>
  <section ref="el" class="hero">
    <div class="bg-right">
      <MediaImg src="/about-bgTop.png" alt="About Background" />
      <!-- <MediaImg :provider="false" src="/thumbnail.jpg" alt="Logo" /> -->
    </div>




    
    <div class="container">
      <div class="wrapper">
        <div class="title-wrapper">
          <div class="title__text">
            <Text class="title" tag="h2" data-split data-linereveal reveal-notrigger reveal-waitpreloader> Building Solana's <br><b>Financial Future</b> </Text>
          </div>
        </div>

        <div class="description">
          <div class="description__text">
            <Text class="color-gray" tag="p" variant="body22" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.18">
              <b>Our mission</b> is to be the institutional backbone of the Solana ecosystem; bridging traditional finance with decentralized infrastructure.
            </Text>
            <Text class="color-gray" tag="p" variant="body22" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.22">
              <b>Our vision</b> is to build the infrastructure that powers the next generation of financial markets.
            </Text>
          </div>

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
.hero {
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  @include mx.mobile {
    flex-direction: column;
    min-height: auto;
    padding-top: fn.toVw(160);
  }

  .container {
    @include mx.desktop {
      margin-top: fn.toVw(-100);
    }
  }
}


.bg-right {
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    width: 100%;
}

.wrapper {
  display: flex;
  gap: fn.toVw(46);
  flex-direction: column;
  max-width: 1110px;

  @include mx.mobile {
    flex-direction: column;
    gap: fn.toVw(14);
  }

  .title-wrapper {
    flex-shrink: 0;
    width: 100%;
    max-width: fn.toVw(900);
    align-self: flex-start;

    .title__text {
      width: 100%;
    }

    .title {
      font-size: 70px;
      font-weight: 300;
      line-height: 1.008;

      @include mx.mobile {
        font-size: 60px;
      }

      b {
        font-weight: 500;
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: fn.toVw(67);
    align-self: end;

    @include mx.mobile {
      gap: fn.toVw(40);
    }

    .description__text {
      // max-width: 360px;
      width: 100%;

      // p + p {
      //   margin-top: 20px;
      // }
    }

  }
}

</style>
