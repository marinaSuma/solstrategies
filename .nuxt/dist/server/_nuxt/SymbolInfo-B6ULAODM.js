import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { u as useInitWidget, s as symbolInfoOptions } from "./useInitWidget-DtHaI5KL.js";
import "../server.mjs";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/hookable/dist/index.mjs";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/unctx/dist/index.mjs";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/radix3/dist/index.mjs";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/defu/dist/defu.mjs";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/ufo/dist/index.mjs";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/klona/dist/index.mjs";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/scule/dist/index.mjs";
import "@unhead/schema-org/vue";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/destr/dist/index.mjs";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/ohash/dist/index.mjs";
import "unhead/scripts";
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: unref(container),
        ref_key: "tradingview",
        ref: tradingview,
        style: {
          width: _ctx.options?.autosize ? "100%" : "",
          height: _ctx.options?.autosize ? "100%" : ""
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
export {
  SymbolInfo as default
};
//# sourceMappingURL=SymbolInfo-B6ULAODM.js.map
