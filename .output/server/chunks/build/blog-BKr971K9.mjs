import { mergeProps, ref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { s as seo, u as useHead, S as ScrollTrigger, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_7, g as gsapWithCSS } from './SectionCta-C2cdteWZ.mjs';
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

const _sfc_main$1 = {
  __name: "SectionBlog",
  __ssrInlineRender: true,
  setup(__props) {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    const posts = [
      { date: "May 20th 2025", title: "How Crypto is Transforming Traditional Finance", img: "", url: "#" },
      { date: "May 20th 2025", title: "How Crypto is Transforming Traditional Finance", img: "", url: "#" },
      { date: "May 20th 2025", title: "How Crypto is Transforming Traditional Finance", img: "", url: "#" },
      { date: "May 20th 2025", title: "How Crypto is Transforming Traditional Finance", img: "", url: "#" },
      { date: "May 20th 2025", title: "How Crypto is Transforming Traditional Finance", img: "", url: "#" },
      { date: "May 20th 2025", title: "How Crypto is Transforming Traditional Finance", img: "", url: "#" },
      { date: "May 20th 2025", title: "How Crypto is Transforming Traditional Finance", img: "", url: "#" },
      { date: "May 20th 2025", title: "How Crypto is Transforming Traditional Finance", img: "", url: "#" },
      { date: "May 20th 2025", title: "How Crypto is Transforming Traditional Finance", img: "", url: "#" }
    ];
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0$1;
      _push(`<!--[--><div id="hero"><div class="container"><div class="w-l center text-center">`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "h1",
        variant: "heading1",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Blog`);
          } else {
            return [
              createTextVNode("Our Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "description color-gray",
        "data-split": "",
        "data-linereveal": "",
        "reveal-delay": "0.6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Stay in the loop with the latest in crypto, plus exclusive updates <br${_scopeId}> on what we\u2019re building. `);
          } else {
            return [
              createTextVNode(" Stay in the loop with the latest in crypto, plus exclusive updates "),
              createVNode("br"),
              createTextVNode(" on what we\u2019re building. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><section class="blog"><div class="container"><div class="w-l center"><div class="row"><!--[-->`);
      ssrRenderList(posts, (post, index) => {
        _push(`<div class="col-sm-4 post"><div class="grid-box"><div class="img"><img${ssrRenderAttr("src", post.img)}${ssrRenderAttr("alt", post.title)}></div><div class="content"><div class="meta">${ssrInterpolate(post.date)}</div><h6>${ssrInterpolate(post.title)}</h6><div class="border-gradient"><a${ssrRenderAttr("href", post.url)} class="btn">View Article</a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionBlog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const title = seo.title;
    useHead({
      title,
      meta: [
        { property: "og:title", content: title }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$route.name
      }, _attrs))}><div class="blog-bootstrap-wrapper page-blog">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(__nuxt_component_7, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-BKr971K9.mjs.map
