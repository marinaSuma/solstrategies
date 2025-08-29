<template>
  <section ref="el" class="overview">
    <div class="bg">
      <MediaImg src="/overview-bg.png" alt="Overview Background" />
    </div>

    <div class="title">
      <Text tag="h2" variant="heading1" data-split data-linereveal> Lorem Ipsum </Text>
    </div>

    

    <div class="ticker">

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

const tradingViewOptions = {
  theme: 'light',
  autosize: false,
  timezone: 'Etc/UTC',
};

const symbolInfo = 'OTC:CYFRD';
const symbolsTape = [
  { proName: symbolInfo },
  { proName: 'CRYPTO:BTCUSD' },
  { proName: 'CRYPTO:SOLUSD' },
];
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
