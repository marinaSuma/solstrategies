import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './SectionAboutTeam-BZh0aYIu.mjs';
import { _ as __nuxt_component_7 } from './SectionCta-C2cdteWZ.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue/server-renderer/index.mjs';
import { u as useHead, s as seo } from './server.mjs';
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

const _sfc_main = {
  __name: "singleTeam",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ titleTemplate: null });
    const title = seo.title;
    useHead({
      title,
      meta: [
        { property: "og:title", content: title }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionAboutHero = __nuxt_component_0;
      const _component_SectionAboutProgramable = __nuxt_component_1;
      const _component_SectionAboutTeam = __nuxt_component_2;
      const _component_SectionCta = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$route.name
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionAboutHero, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAboutProgramable, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAboutTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCta, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/singleTeam.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=singleTeam-BeZs201C.mjs.map
