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
              <Text class="color-gray" variant="body22" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.15">
                <b>Our mission</b> is to be the institutional <br> backbone of the Solana ecosystem; <br> bridging traditional finance with <br> decentralized infrastructure.
              </Text>
              <Text class="color-gray" variant="body22" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.22">
                <b>Our vision</b> is to build the infrastructure <br> that powers the next generation of <br> financial markets.
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
    padding-top: 110px;
    padding-bottom: 60px;
    height: 100vh;
  }


  .container {
    @include mx.desktop {
      margin-top: fn.toVw(-100);
    }
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
      @include mx.tablet {
        max-width: 100%;
        width: 100%;
      }

      .title__text {
        width: 100%;
      }

      .title {
        font-size: 70px;
        font-weight: 300;
        line-height: 1.008;

        @include mx.mobile {
          
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
        align-self: start;
        margin-top: 20px;
        max-width: 100%;
        width: 100%;
      }

      @include mx.tablet {
        max-width: 100%;
        width: 100%;
      }

      .description__text {
        // max-width: 360px;
        width: 100%;

        p + p {
          margin-top: 20px;
        }
      }

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
    @include mx.mobile {
      height: 40%;
    }
    .media-img {
      img {
        @include mx.mobile {
          object-position: right;
        }
      }
    }
}





</style>
