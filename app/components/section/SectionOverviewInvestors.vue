<template>
  <section ref="el" class="overview">
     <div class="bg">
      <MediaImg src="/inv-overview-bg.webp" alt="Overview Background" />
    </div>

    <div class="container">
       <div class="title">
          <Text tag="h2" variant="heading2" data-split data-linereveal>SOL Strategies Stock</Text>
        </div>

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
let ctx;

const el = useTemplateRef('el');

const tradingViewOptions = {
  theme: 'light',
  autosize: false,
  timezone: 'Etc/UTC',
};

const symbolInfo = 'OTC:CYFRD';
const symbolsTape = [{ proName: symbolInfo }, { proName: 'CRYPTO:BTCUSD' }, { proName: 'CRYPTO:SOLUSD' }];

</script>

<style scoped lang="scss">
  .overview {
    position: relative;
    padding: fn.toVw(122) 0;
    text-align: center;

    @include mx.mobile {
      padding: fn.toVw(118) 0;
    }


    .bg {
    top: 0;
    right: 0;
    pointer-events: none;
    position: absolute;
    width: 80%;
    z-index: -1;

      @include mx.mobile {
        display: none;
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
}
</style>