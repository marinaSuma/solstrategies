import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './SectionAboutTeam-BZh0aYIu.mjs';
import { _ as __nuxt_component_7 } from './SectionCta-C2cdteWZ.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead, s as seo } from './server.mjs';
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
