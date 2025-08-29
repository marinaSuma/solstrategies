<template>
  <section ref="el" class="hero">
    <div class="bg">
      <!-- <MediaImg :provider="false" src="/thumbnail.jpg" alt="Logo" /> -->
    </div>

    <div class="container">
      <div class="wrapper">
        <div class="title-wrapper">
          <div class="title__text">
            <Text class="title" tag="h1" data-split data-linereveal reveal-notrigger reveal-waitpreloader> Building <strong>Solana’s</strong> Future </Text>
          </div>
        </div>

        <div class="description">
          <div class="description__text">
            <Text class="color-gray" tag="p" variant="body22" data-split data-linereveal reveal-notrigger reveal-waitpreloader reveal-delay="0.15">
              Get insights into our fast-growing Solana infrastructure company
            </Text>
          </div>

          <div class="buttons">
            <ButtonCta class="cta" variant="black">Stay Informed</ButtonCta>
          </div>
        </div>
      </div>
    </div>

    <div class="logo">
      <Text class="logo__title color-gray">Subscribe to receive the latest SOL Strategies news and developments.</Text>
    </div>
  </section>
</template>

<script setup>

const el = useTemplateRef('el');

let ctx;

const isPreloadDone = usePreloadDone();

onMounted(() => {
  ctx = gsap.context(() => {
    const tlIntro = gsap.timeline({
      paused: !isPreloadDone.value,
    });

    tlIntro.from('.buttons .cta, .logo', {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      willChange: 'transform',
    });

    tlIntro.from(
      '.bg',
      {
        opacity: 0,
        ease: 'sine.out',
        duration: 1.4,
      },
      0,
    );

    const { trigger } = watchTriggerable(isPreloadDone, (value) => {
      if (value) {
        tlIntro.play();
      }
    });

    trigger();
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
});
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

.bg {
  position: absolute;
  z-index: -1;
  inset: 0;

  width: 100%;
  height: 100%;
}

.wrapper {
    display: flex;
    gap: calc(46 / var(--base-vw) * var(--base-multiplier));
    flex-direction: column;
    align-items: center;

  @include mx.mobile {
    flex-direction: column;
    gap: fn.toVw(14);
    // align-items: flex-start;
  }

  .title-wrapper {
    flex-shrink: 0;
    width: 100%;
    max-width: fn.toVw(900);

    .title__text {
      width: 100%;
    }

    .title {
      font-size: fn.toVw(125);
      font-weight: 300;
      line-height: 1.008;
      text-align: center;

      @include mx.mobile {
        font-size: fn.toVw(60);
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
    justify-content: flex-end;
    align-items: center;

    @include mx.mobile {
      gap: fn.toVw(40);
    }

    .description__text {
      width: 100%;
      max-width: fn.toVw(530);
      text-align: center;
    }

    .buttons {
      display: flex;
      gap: fn.toVw(25);

      .cta {
        @include mx.desktop {
          width: fn.toVw(175);
        }
      }

      &:deep(.btn) {
        @include mx.desktop {
          padding: fn.toVw(16) 0;
        }
      }
    }
  }
}

.logo {
  display: flex;
  flex-direction: column;
  gap: fn.toVw(28);
  justify-content: center;

  width: 100%;
  margin-top: fn.toVw(83);

  @include mx.mobile {
    gap: fn.toVw(20);
  }

  @include mx.desktop {
    position: absolute;
    bottom: fn.toVw(30);
    left: 0;
    margin-top: 0;
  }

  .logo__title {
    text-align: center;
  }

  .logo__wrapper {
    display: flex;
  }
}
</style>
