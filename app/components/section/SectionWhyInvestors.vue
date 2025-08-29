<template>
  <section ref="el" class="why">
    <div ref="elText" class="text">
      <Text class="title" variant="heading1medium60" data-split data-linereveal> Why <b>Solana Matters</b> </Text>
      <Text class="desc color-gray" data-split data-linereveal reveal-delay="0.15"> The infrastructure layer of tomorrow's finance </Text>
    </div>

    <div ref="elList" class="list">
      <CardWhy class="content" background="/why-1.png" title="24/7 decentralized trading" number="1">
        <template #desc>
          <p data-split>Creating new financial markets that operate continuously with instant settlement and global accessibility.</p>
        </template>
      </CardWhy>
      <CardWhy class="content" background="/why-2.png" title="Instant global payments" number="2">
        <template #desc>
          <p data-split>Enabling programmable financial products that didn't exist before, from tokenized equities to real-time settlement.</p>
        </template>
      </CardWhy>
      <CardWhy class="content" background="/why-3.png" title="Exponential Growth" number="3">
        <template #desc>
          <ul>
            <li data-split>$160B Solana DEX volume (May 2025)</li>
            <li data-split>Digital asset market growth: $3.3T → $11.7T by 2030</li>
            <li data-split>Key tokenization catalysts emerge.</li>
          </ul>
        </template>
      </CardWhy>
    </div>
  </section>
</template>

<script setup>
let ctx;

const el = useTemplateRef('el');
const elText = useTemplateRef('elText');

const isSplitTextDone = useSplitTextDone();

onMounted(() => {
  ctx = gsap.context(() => {
    const slides = el.value.querySelectorAll('.content');

    const getHeightText = elText.value.offsetHeight;

    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.out',
      },
      scrollTrigger: {
        trigger: el.value,
        start: IS_MOBILE.value ? `center+=${getHeightText / 2}px center` : 'top top+=3%',
        end: `+=${(slides.length - 1) * 100}%`,
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });

    slides.forEach((slide, index) => {
      if (index === 0) {
        watchTriggerable(isSplitTextDone, (value) => {
          if (value) {
            const lines = slides[0].querySelectorAll('.line');
            gsap.to(lines, {
              y: 0,
              duration: 1.4,
              stagger: 0.15,
              scrollTrigger: {
                trigger: slides[0],
              },
            });
          }
        });
      } else {
        tl.to(slide, {
          y: `${index * 10}%`,
          onStart: () => {
            const lines = slide.querySelectorAll('.line');
            gsap.delayedCall(0.3, () => {
              gsap.to(lines, {
                y: 0,
                duration: 1.4,
                stagger: 0.15,
                onStart: () => {
                  if (slide.classList.contains('active')) return;
                  slide.classList.add('active');
                },
              });
            });
          },
        });
      }
    });
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<style scoped lang="scss">
.why {
  position: relative;
  min-height: 100vh;

  @include mx.mobile {
    padding: 0 fn.toVw($layout-container-mobile);
  }
}

.text {
  display: flex;
  flex-direction: column;
  gap: fn.toVw(30);

  margin-bottom: fn.toVw(93);

  text-align: center;

  @include mx.mobile {
    gap: fn.toVw(27);
    margin-bottom: fn.toVw(74);
  }

  .title {
    font-weight: 300;
    line-height: normal;

    b {
      font-weight: 500;
    }
  }

  .desc {
    width: 100%;
    max-width: fn.toVw(242);
    margin: 0 auto;
  }
}

.list {
  position: relative;

  overflow: hidden;

  width: 100%;
  max-width: fn.toVw(1135);
  height: 100%;
  margin: 0 auto;

  @include mx.mobile {
    max-width: 100%;
  }

  .content-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 250vw;
  }

  .content {
    position: absolute;
    inset: 0;
    transform-origin: 50% 10%;
    transform-style: preserve-3d;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:not(:nth-child(1)) {
      transform: translate(0, 100vh);
    }

    &:nth-child(1) {
      position: relative;
    }

    &:nth-child(2) {
      background-color: #8966a9;
    }

    &:nth-child(3) {
      background-color: #85998e;
    }

    &:deep(.line) {
      transform: translateY(105%);
    }
  }
}
</style>
