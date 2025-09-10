import { ref } from 'vue';
import { j as useRuntimeConfig } from './server.mjs';

const symbolInfoOptions = {
  width: "100%",
  colorTheme: "dark",
  symbol: "NASDAQ:AAPL",
  locale: "en",
  isTransparent: false
};
const tickerTapeOptions = {
  colorTheme: "dark",
  showSymbolLogo: true,
  isTransparent: false,
  displayMode: "adaptive",
  locale: "en",
  symbols: [
    { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
    { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
    { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" }
  ]
};
const useInitWidget = (defaultOptions, userOptions, widgetKey, src) => {
  const runtimeConfig = useRuntimeConfig().public.tradingview;
  (runtimeConfig == null ? void 0 : runtimeConfig.overrideDefaults) === true ? userOptions || defaultOptions : { ...defaultOptions, ...userOptions };
  const container = ref(`tw-${widgetKey}-container`);
  ref(`tw-${widgetKey}-script`);
  const tradingview = ref();
  return { container, tradingview };
};

export { symbolInfoOptions as s, tickerTapeOptions as t, useInitWidget as u };
//# sourceMappingURL=useInitWidget-DtHaI5KL.mjs.map
