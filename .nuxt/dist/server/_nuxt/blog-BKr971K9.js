import { ref, withCtx, createTextVNode, createVNode, useSSRContext, mergeProps } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { S as ScrollTrigger, _ as __nuxt_component_0, u as useHead, s as seo } from "../server.mjs";
import { g as gsapWithCSS, _ as __nuxt_component_7 } from "./SectionCta-C2cdteWZ.js";
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
      const _component_Text = __nuxt_component_0;
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
            _push2(` Stay in the loop with the latest in crypto, plus exclusive updates <br${_scopeId}> on what we’re building. `);
          } else {
            return [
              createTextVNode(" Stay in the loop with the latest in crypto, plus exclusive updates "),
              createVNode("br"),
              createTextVNode(" on what we’re building. ")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=blog-BKr971K9.js.map
