import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue/server-renderer/index.mjs';
import { u as useInitWidget, s as symbolInfoOptions } from './useInitWidget-DtHaI5KL.mjs';
import './server.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/h3/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/ufo/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/destr/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/hookable/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/ohash/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/klona/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/defu/dist/defu.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/scule/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unctx/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/radix3/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/consola/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/pathe/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/ipx/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/@unhead/addons/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unhead/dist/scripts.mjs';
import '../_/renderer.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unhead/dist/server.mjs';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/devalue/index.js';
import 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unhead/dist/utils.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SymbolInfo",
  __ssrInlineRender: true,
  props: {
    options: { default: void 0 },
    class: { default: "symbol-info" }
  },
  setup(__props) {
    const props = __props;
    const { container, tradingview } = useInitWidget(
      symbolInfoOptions,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt-tradingview/dist/runtime/components/SymbolInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SymbolInfo = Object.assign(_sfc_main, { __name: "SymbolInfo" });

export { SymbolInfo as default };
//# sourceMappingURL=SymbolInfo-B6ULAODM.mjs.map
