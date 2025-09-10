import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useInitWidget, t as tickerTapeOptions } from './useInitWidget-DtHaI5KL.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'vue-router';
import '@unhead/addons';
import 'unhead/plugins';
import '@unhead/schema-org/vue';
import 'unhead/scripts';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TickerTape",
  __ssrInlineRender: true,
  props: {
    options: { default: void 0 },
    class: { default: "ticker" }
  },
  setup(__props) {
    const props = __props;
    const { container, tradingview } = useInitWidget(
      tickerTapeOptions,
      props.options,
      props.class
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: unref(container),
        ref_key: "tradingview",
        ref: tradingview,
        style: {
          width: ((_a = _ctx.options) == null ? void 0 : _a.autosize) ? "100%" : "",
          height: ((_b = _ctx.options) == null ? void 0 : _b.autosize) ? "100%" : ""
        }
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt-tradingview/dist/runtime/components/TickerTape.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TickerTape = Object.assign(_sfc_main, { __name: "TickerTape" });

export { TickerTape as default };
//# sourceMappingURL=TickerTape-eco84yfi.mjs.map
