<template>
  <section ref="el" class="overview">
    <div class="bg">
      <MediaImg src="/overview-bg.png" alt="Overview Background" />
    </div>

    <div class="title">
      <Text tag="h2" variant="heading1" data-split data-linereveal> Lorem Ipsum </Text>
    </div>

    <div class="cards">
      <div class="circle">
        <div class="card">
          <Text class="card__title" variant="heading2light70"><b>3.43</b>M SOL</Text>
          <Text class="card__description">Delegated Stake</Text>
        </div>
      </div>

      <div class="circle">
        <div class="card">
          <div class="card__bg">
            <MediaImg src="/card2-bg.png" alt="Card 2 Background" />
          </div>

          <Text class="card__title" variant="heading2light70"> <b>395</b>K+ </Text>
          <Text class="card__description">SOL Treasury Stake</Text>
        </div>
      </div>

      <div class="circle">
        <div class="card">
          <div class="card__bg">
            <MediaImg src="/card3-bg.png" alt="Card 3 Background" />
          </div>

          <Text class="card__title" variant="heading2light70"> <b>4</b></Text>
          <Text class="card__description">Enterprise Validators</Text>

          <NuxtLink to="/" class="card__link link active"> Learn more </NuxtLink>
        </div>
      </div>
    </div>

    <div class="ticker">
      <Text class="color-gray">OTCQB: CYFRF</Text>

      <div v-if="!useDevice().isMobile" class="ticker__symbol">
        <ClientOnly>
          <SymbolInfo
            :options="{
              ...tradingViewOptions,
              width: 600,
              height: 230,
              symbol: symbolInfo,
            }" />
        </ClientOnly>
      </div>

      <div class="ticker__tape">
        <ClientOnly>
          <TickerTape
            :options="{
              ...tradingViewOptions,
              height: 46,
              showSymbolLogo: true,
              isTransparent: false,
              displayMode: 'regular',
              locale: 'en',
              symbols: symbolsTape,
            }" />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
let ctx;

const el = useTemplateRef('el');

const tradingViewOptions = {
  theme: 'light',
  autosize: false,
  timezone: 'Etc/UTC',
};

const symbolInfo = 'OTC:CYFRD';
const symbolsTape = [{ proName: symbolInfo }, { proName: 'CRYPTO:BTCUSD' }, { proName: 'CRYPTO:SOLUSD' }];

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el.value,
        start: IS_MOBILE.value ? 'top bottom+=50%' : 'top bottom+=70%',
        end: IS_MOBILE.value ? 'bottom top-=20%' : 'bottom top-=50%',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      '.circle',
      {
        rotation: 30,
      },
      {
        rotation: -30,
        ease: IS_MOBILE.value ? 'power2.inOut' : 'none',
        stagger: IS_MOBILE.value ? 0.15 : 0.125,
      },
    );
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
});
</script>

<style scoped lang="scss">
.overview {
  position: relative;
  padding: fn.toVw(122) 0;
  text-align: center;

  @include mx.mobile {
    padding: fn.toVw(118) 0;
  }
}

.bg {
  pointer-events: none;

  position: absolute;
  z-index: -1;
  bottom: fn.toVw(-500);
  left: 0;

  width: fn.toVw(816);

  @include mx.mobile {
    display: none;
  }
}

.title {
  margin-bottom: fn.toVw(-150);

  @include mx.mobile {
    margin-bottom: fn.toVw(-100);
  }
}

.cards {
  pointer-events: none;
  position: relative;
  overflow: hidden;
  min-height: fn.toVw(1000);

  @include mx.mobile {
    min-height: fn.toVw(600);
  }

  .circle {
    position: absolute;
    top: 50%;
    left: -100%;

    aspect-ratio: 1;
    width: 300%;
  }

  .card {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: fn.toVw(12);
    align-items: center;
    justify-content: center;

    width: fn.toVw(397);
    height: fn.toVw(430);
    border-radius: fn.toVw(14);

    background-color: $color-neutral;

    @include mx.mobile {
      width: fn.toVw(245);
      height: fn.toVw(266);
      border-radius: fn.toVw(8.7);
    }

    .card__bg {
      position: absolute;
      z-index: -1;
      inset: 0;

      width: 100%;
      height: 100%;
    }

    .card__title {
      b {
        font-weight: 500;
      }
    }

    .card__link {
      position: absolute;
      bottom: fn.toVw(27);
      left: 50%;
      transform: translateX(-50%);

      font-size: fn.toVw(14);
    }
  }
}

.ticker {
  display: flex;
  flex-direction: column;
  gap: fn.toVw(64);
  justify-content: center;

  margin-top: fn.toVw(-200);

  @include mx.mobile {
    gap: 0;
    margin-top: fn.toVw(-100);
  }

  .ticker__symbol {
    width: 100%;
    max-width: 600px;
    height: 230px;
    margin: 0 auto;

    @include mx.mobile {
      display: none;
    }
  }

  .ticker__tape {
    height: 46px;
    margin-top: calc(fn.toVw(98) - fn.toVw(64));

    @include mx.mobile {
      margin-top: fn.toVw(46);
    }
  }
}
</style>
