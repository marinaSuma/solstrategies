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

