<template>
  <section ref="el" class="growth">
    <div class="content">
      <div class="text">
        <Text tag="h2" variant="heading1" data-split data-linereveal> Our Dual-Engine Growth Strategy </Text>
        <Text class="description color-gray" data-split data-linereveal>
          We operate through two synergistic business arms connected by our enterprise validator network—creating multiple revenue streams and
          compounding value.
        </Text>
      </div>

      <div ref="elList" class="list">
        <div class="circle left">
          <div class="bg-border">
            <IconCircleleft />
          </div>

          <Text class="title" tag="h3" variant="body26">Investment Engine</Text>
          <Text class="desc" variant="body16">Strategic SOL acquisition and staking</Text>

          <div class="point">
            <ul>
              <li>
                <span> <b>$395k+ SOL treasury</b> (~$92M CAD)</span>
              </li>
              <li>
                <span> <b>$500M</b> convertible facility for continued accumulation </span>
              </li>
              <li>
                <span> <b>All holdings staked</b> through proprietary validators </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="separator left">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.63668" cy="9.63668" r="9.63668" transform="matrix(1 0 0 -1 0.410156 20.1392)" fill="#FF9751" />
          </svg>
        </div>

        <div class="circle center">
          <div class="bg-border">
            <IconCirclecenter />
          </div>

          <Text class="title" tag="h3" variant="body26">Validator Advantage</Text>
          <Text class="desc" variant="body16">
            Enables strategic SOL acquisition while generating transaction fee revenue across market conditions.
          </Text>

          <div class="slider">
            <MotionCarousel :autoplay-ms="2000">
              <div class="slider__item">
                <MediaImg src="/growth-logo0.png" alt="Growth Logo 0" />
              </div>
              <div class="slider__item">
                <MediaImg src="/growth-logo1.png" alt="Growth Logo 1" />
              </div>
              <div class="slider__item">
                <MediaImg src="/growth-logo2.png" alt="Growth Logo 2" />
              </div>
              <div class="slider__item">
                <MediaImg src="/growth-logo3.png" alt="Growth Logo 3" />
              </div>
            </MotionCarousel>
          </div>
        </div>

        <div class="separator right">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.63668" cy="9.63668" r="9.63668" transform="matrix(1 0 0 -1 0.688477 20.1392)" fill="#9392F2" />
          </svg>
        </div>

        <div class="circle right">
          <div class="bg-border">
            <IconCircleright />
          </div>

          <Text class="title" tag="h3" variant="body26">Technology Engine</Text>
          <Text class="desc" variant="body16">Infrastructure & Innovation</Text>

          <div class="point">
            <ul>
              <li>
                <span> <b>White label validator</b> services </span>
              </li>
              <li>
                <span> <b>StakeWiz</b> Platform </span>
              </li>
              <li>
                <span><b>Orangefin</b> App</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const el = useTemplateRef('el');
const elList = useTemplateRef('elList');

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elList.value,
      },
    });

    tl.from('.list .circle > *', {
      opacity: 0,
      y: 20,
      willChange: 'transform',
      stagger: 0.1,
      ease: 'power4.out',
      duration: 1.2,
    });

    tl.from(
      '.separator',
      {
        scale: 0,
        stagger: 0.15,
      },
      '<=30%',
    );
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<style scoped lang="scss">
.growth {
  position: relative;
  margin: 0 fn.toVw(35);

  @include mx.mobile {
    margin: 0 fn.toVw(22);
  }
}

.content {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding-top: fn.toVw(111);
  padding-bottom: fn.toVw(202);
  border-radius: fn.toVw(30);

  text-align: center;

  background-color: $color-neutral;

  @include mx.mobile {
    padding: fn.toVw(50) fn.toVw(15) fn.toVw(156) fn.toVw(15);
    border-radius: fn.toVw(15);
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: fn.toVw(30);

    width: 100%;
    max-width: fn.toVw(650);
    margin: 0 auto;

    @include mx.mobile {
      gap: fn.toVw(12);
    }

    .description {
      width: 100%;
      max-width: fn.toVw(514);
      margin: 0 auto;
    }
  }

  .list {
    position: relative;

    display: flex;
    align-items: center;

    width: 100%;
    max-width: calc(fn.toVw(1383) - fn.toVw(8));
    margin: 0 auto;
    margin-top: fn.toVw(142);

    @include mx.mobile {
      flex-direction: column;
      align-items: center;
      margin-top: fn.toVw(38);
    }

    .circle {
      position: relative;

      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;

      border-radius: 50%;

      &.left,
      &.right {
        width: fn.toVw(418);
        height: fn.toVw(418);
        padding-top: fn.toVw(83);

        .desc {
          max-width: fn.toVw(191);
        }

        @include mx.mobile {
          width: fn.toVw(340);
          height: fn.toVw(340);
          padding-top: fn.toVw(53);
        }
      }

      &.center {
        width: fn.toVw(547);
        height: fn.toVw(547);
        margin-left: fn.toVw(-4);
        padding-top: fn.toVw(134);

        @include mx.mobile {
          width: fn.toVw(340);
          height: fn.toVw(340);
          margin-top: fn.toVw(-2);
          margin-left: 0;
          padding-top: fn.toVw(68);
        }

        .title {
          @include mx.mobile {
            max-width: fn.toVw(184);
            font-size: fn.toVw(32);
            font-weight: 400;
          }
        }

        .desc {
          max-width: fn.toVw(297);

          @include mx.mobile {
            max-width: fn.toVw(237);
          }
        }
      }

      &.right {
        margin-left: fn.toVw(-4);

        @include mx.mobile {
          margin-top: fn.toVw(-2);
          margin-left: 0;
        }

        li {
          background-color: #ebeeff !important;

          &:nth-child(2) {
            background-color: #bbbefe !important;
          }

          &:nth-child(3) {
            background-color: #cc9bc3 !important;
          }
        }
      }

      .bg-border {
        pointer-events: none;

        position: absolute;
        z-index: 1;
        inset: 0;

        width: 100%;
        height: 100%;

        svg,
        &:deep(svg) {
          pointer-events: none;
          width: 100%;
          height: 100%;
        }
      }

      .title {
        margin-bottom: fn.toVw(18);
      }

      .desc {
        @include mx.mobile {
          font-weight: 300;
        }
      }

      .point {
        margin-top: fn.toVw(18);
        font-size: fn.toVw(14);
        font-weight: 300;

        b,
        &:deep(b) {
          font-weight: 700;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: fn.toVw(16);
          align-items: center;
          justify-content: center;

          @include mx.mobile {
            gap: fn.toVw(10);
          }

          li {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            max-width: fn.toVw(232);
            min-height: fn.toVw(42);
            margin: auto;
            padding: 0 fn.toVw(20);
            border-radius: 10em;

            text-align: center;

            background-color: #fed9d4;

            @include mx.mobile {
              max-width: fn.toVw(200);
              padding: 0 fn.toVw(6);
            }

            &:nth-child(2) {
              background-color: #ffe3d0;
            }

            &:nth-child(3) {
              background-color: #fdf1bd;
            }
          }
        }
      }

      .slider {
        overflow: hidden;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        width: fn.toVw(150);
        height: fn.toVw(150);
        margin-top: fn.toVw(40);

        @include mx.mobile {
          width: fn.toVw(90);
          height: fn.toVw(90);
          margin-top: fn.toVw(15);
        }

        .slider__track {
          will-change: transform;
          display: flex;
          flex-wrap: nowrap;
        }

        .slider__item {
          flex-shrink: 0;
          width: fn.toVw(150);
          max-height: fn.toVw(150);

          @include mx.mobile {
            width: fn.toVw(90);
            max-height: fn.toVw(90);
          }

          &:deep(img) {
            object-fit: contain;
          }
        }
      }
    }

    .separator {
      position: absolute;
      z-index: 2;
      top: 50%;
      transform: translateY(-50%);

      &.left {
        left: calc(fn.toVw(418) - fn.toVw(10) - fn.toVw(2));

        @include mx.mobile {
          top: fn.toVw(340);
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }

      &.right {
        right: calc(fn.toVw(418) - fn.toVw(10) - fn.toVw(2));

        @include mx.mobile {
          top: calc(fn.toVw(340) * 2);
          right: inherit;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }

      svg,
      &:deep(svg) {
        width: fn.toVw(20);
      }
    }
  }
}
</style>
