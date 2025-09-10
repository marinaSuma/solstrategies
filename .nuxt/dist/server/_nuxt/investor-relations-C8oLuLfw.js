import { e as usePreloadDone, b as __nuxt_component_1$2, _ as __nuxt_component_0, c as __nuxt_component_1$3, a as _export_sfc, i as useSplitTextDone, d as useDevice, g as __nuxt_component_2$1, u as useHead, s as seo } from "../server.mjs";
import { useTemplateRef, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as __nuxt_component_2$2, a as __nuxt_component_4$1, b as __nuxt_component_5$1 } from "./CardMilestone-DaO8hqZy.js";
import __nuxt_component_3$1 from "./arrowslide-D9TeW5f3.js";
import { _ as __nuxt_component_7 } from "./SectionCta-C2cdteWZ.js";
import "/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/ofetch/dist/node.mjs";
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
import "./googleplay-Duclp0YX.js";
import "./appstore-s0hQ1Viv.js";
const _sfc_main$8 = {
  __name: "SectionHeroInvestors",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    usePreloadDone();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$2;
      const _component_Text = __nuxt_component_0;
      const _component_ButtonCta = __nuxt_component_1$3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "hero"
      }, _attrs))}><div class="bg">`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/hInv2.webp",
        class: "bgA",
        alt: "Background"
      }, null, _parent));
      _push(`</div><div class="container"><div class="wrapper"><div class="title-wrapper"><div class="title__text">`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        tag: "h1",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Building <strong${_scopeId}>Solana’s</strong> <br${_scopeId}>Future `);
          } else {
            return [
              createTextVNode(" Building "),
              createVNode("strong", null, "Solana’s"),
              createTextVNode(),
              createVNode("br"),
              createTextVNode("Future ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="description"><div class="description__text">`);
      _push(ssrRenderComponent(_component_Text, {
        class: "color-gray",
        tag: "p",
        variant: "body22",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.15"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get insights into our fast-growing Solana infrastructure company `);
          } else {
            return [
              createTextVNode(" Get insights into our fast-growing Solana infrastructure company ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="buttons">`);
      _push(ssrRenderComponent(_component_ButtonCta, {
        class: "cta",
        variant: "black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Stay Informed <span class="arrow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediaImg, {
              src: "/arrow-white.svg",
              alt: "Arrow"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createTextVNode("Stay Informed "),
              createVNode("span", { class: "arrow" }, [
                createVNode(_component_MediaImg, {
                  src: "/arrow-white.svg",
                  alt: "Arrow"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="small">`);
      _push(ssrRenderComponent(_component_Text, {
        class: "color-gray",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.18"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Subscribe to receive the latest SOL Strategies news and developments.`);
          } else {
            return [
              createTextVNode("Subscribe to receive the latest SOL Strategies news and developments.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionHeroInvestors.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "CardWhyInvestors",
  __ssrInlineRender: true,
  props: {
    background: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-4b0a0e69>`);
      if (props.background) {
        _push(`<div class="bg" data-v-4b0a0e69>`);
        _push(ssrRenderComponent(_component_MediaImg, {
          src: props.background,
          alt: "Background of card"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/CardWhyInvestors.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4b0a0e69"]]);
const _sfc_main$6 = {
  __name: "SectionWhyInvestors",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    const elText = useTemplateRef("elText");
    useSplitTextDone();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      const _component_CardWhyInvestors = __nuxt_component_1$1;
      const _component_MediaImg = __nuxt_component_1$2;
      const _component_ButtonCta = __nuxt_component_1$3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "why"
      }, _attrs))} data-v-b2926c5e><div class="text" data-v-b2926c5e>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        variant: "heading1medium60",
        "data-split": "",
        "data-linereveal": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "desc color-gray",
        "data-split": "",
        "data-linereveal": "",
        "reveal-delay": "0.15"
      }, null, _parent));
      _push(`</div><div class="list" data-v-b2926c5e>`);
      _push(ssrRenderComponent(_component_CardWhyInvestors, {
        class: "content",
        background: "/invcard1.webp"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="top" data-v-b2926c5e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediaImg, {
              src: "SolLogo.svg",
              class: "logo",
              alt: "Logo"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="center" data-v-b2926c5e${_scopeId}><div class="text" data-v-b2926c5e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              class: "title",
              tag: "h1",
              "data-split": "",
              "data-linereveal": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Solana <br data-v-b2926c5e${_scopeId2}> meets Wall Street `);
                } else {
                  return [
                    createTextVNode(" Solana "),
                    createVNode("br"),
                    createTextVNode(" meets Wall Street ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Text, {
              class: "desc color-gray",
              "data-split": "",
              "data-linereveal": "",
              "reveal-delay": "0.15"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Innovation Built for Long-Term `);
                } else {
                  return [
                    createTextVNode(" Innovation Built for Long-Term ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="bottom" data-v-b2926c5e${_scopeId}><div class="buttons" data-v-b2926c5e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ButtonCta, {
              class: "cta",
              "data-split": "",
              "data-linereveal": "",
              "reveal-notrigger": "",
              "reveal-waitpreloader": "",
              "reveal-delay": "0.18"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`solstrategies.io`);
                } else {
                  return [
                    createTextVNode("solstrategies.io")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ButtonCta, {
              class: "cta",
              variant: "black",
              "data-split": "",
              "data-linereveal": "",
              "reveal-notrigger": "",
              "reveal-waitpreloader": "",
              "reveal-delay": "0.25"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`JUNE 2025`);
                } else {
                  return [
                    createTextVNode("JUNE 2025")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Text, {
              tag: "p",
              class: "small",
              "data-split": "",
              "data-linereveal": "",
              "reveal-notrigger": "",
              "reveal-waitpreloader": "",
              "reveal-delay": "0.18"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`solstrategies.io`);
                } else {
                  return [
                    createTextVNode("solstrategies.io")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "top" }, [
                createVNode(_component_MediaImg, {
                  src: "SolLogo.svg",
                  class: "logo",
                  alt: "Logo"
                })
              ]),
              createVNode("div", { class: "center" }, [
                createVNode("div", {
                  ref_key: "elText",
                  ref: elText,
                  class: "text"
                }, [
                  createVNode(_component_Text, {
                    class: "title",
                    tag: "h1",
                    "data-split": "",
                    "data-linereveal": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Solana "),
                      createVNode("br"),
                      createTextVNode(" meets Wall Street ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Text, {
                    class: "desc color-gray",
                    "data-split": "",
                    "data-linereveal": "",
                    "reveal-delay": "0.15"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Innovation Built for Long-Term ")
                    ]),
                    _: 1
                  })
                ], 512)
              ]),
              createVNode("div", { class: "bottom" }, [
                createVNode("div", { class: "buttons" }, [
                  createVNode(_component_ButtonCta, {
                    class: "cta",
                    "data-split": "",
                    "data-linereveal": "",
                    "reveal-notrigger": "",
                    "reveal-waitpreloader": "",
                    "reveal-delay": "0.18"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("solstrategies.io")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ButtonCta, {
                    class: "cta",
                    variant: "black",
                    "data-split": "",
                    "data-linereveal": "",
                    "reveal-notrigger": "",
                    "reveal-waitpreloader": "",
                    "reveal-delay": "0.25"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("JUNE 2025")
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_Text, {
                  tag: "p",
                  class: "small",
                  "data-split": "",
                  "data-linereveal": "",
                  "reveal-notrigger": "",
                  "reveal-waitpreloader": "",
                  "reveal-delay": "0.18"
                }, {
                  default: withCtx(() => [
                    createTextVNode("solstrategies.io")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardWhyInvestors, {
        class: "content",
        background: "/invcard2.webp"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="top" data-v-b2926c5e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediaImg, {
              src: "logo.png",
              class: "iso",
              alt: "Logo"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="center" data-v-b2926c5e${_scopeId}><div class="text" data-v-b2926c5e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              class: "title",
              tag: "h2",
              "data-split": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<strong data-v-b2926c5e${_scopeId2}>Thank you</strong><br data-v-b2926c5e${_scopeId2}> for subscribing! `);
                } else {
                  return [
                    createVNode("strong", null, "Thank you"),
                    createVNode("br"),
                    createTextVNode(" for subscribing! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Text, {
              class: "desc color-gray",
              "data-split": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Please check your email to confirm your subscription. `);
                } else {
                  return [
                    createTextVNode(" Please check your email to confirm your subscription. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "top" }, [
                createVNode(_component_MediaImg, {
                  src: "logo.png",
                  class: "iso",
                  alt: "Logo"
                })
              ]),
              createVNode("div", { class: "center" }, [
                createVNode("div", {
                  ref_key: "elText",
                  ref: elText,
                  class: "text"
                }, [
                  createVNode(_component_Text, {
                    class: "title",
                    tag: "h2",
                    "data-split": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("strong", null, "Thank you"),
                      createVNode("br"),
                      createTextVNode(" for subscribing! ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Text, {
                    class: "desc color-gray",
                    "data-split": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Please check your email to confirm your subscription. ")
                    ]),
                    _: 1
                  })
                ], 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardWhyInvestors, {
        class: "content",
        background: "/invcard3.webp"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="top" data-v-b2926c5e${_scopeId}><div class="text" data-v-b2926c5e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Text, {
              class: "title",
              tag: "h3",
              "data-split": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign up to receive <br data-v-b2926c5e${_scopeId2}><strong data-v-b2926c5e${_scopeId2}>Sol Strategies</strong> updates `);
                } else {
                  return [
                    createTextVNode("Sign up to receive "),
                    createVNode("br"),
                    createVNode("strong", null, "Sol Strategies"),
                    createTextVNode(" updates ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Text, {
              class: "desc color-gray",
              "data-split": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Form `);
                } else {
                  return [
                    createTextVNode(" Form ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "top" }, [
                createVNode("div", {
                  ref_key: "elText",
                  ref: elText,
                  class: "text"
                }, [
                  createVNode(_component_Text, {
                    class: "title",
                    tag: "h3",
                    "data-split": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Sign up to receive "),
                      createVNode("br"),
                      createVNode("strong", null, "Sol Strategies"),
                      createTextVNode(" updates ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Text, {
                    class: "desc color-gray",
                    "data-split": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Form ")
                    ]),
                    _: 1
                  })
                ], 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionWhyInvestors.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b2926c5e"]]);
const _sfc_main$5 = {
  __name: "SectionEvents",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      const _component_ButtonCta = __nuxt_component_1$3;
      const _component_MediaImg = __nuxt_component_1$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "events"
      }, _attrs))} data-v-a6614678><div class="container" data-v-a6614678><div class="title" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "h2",
        variant: "heading2",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Upcoming Events`);
          } else {
            return [
              createTextVNode(" Upcoming Events")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="financial-grid" data-v-a6614678><div class="financials" data-v-a6614678><div class="new-latest-financials__list" data-v-a6614678><div class="new-latest-financials__item first" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        tag: "h4",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.18"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Event Details`);
          } else {
            return [
              createTextVNode("Event Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        tag: "h2",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.22"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SOL Strategies First Quarter 2025 Financial Results Webcast and Conference Call`);
          } else {
            return [
              createTextVNode("SOL Strategies First Quarter 2025 Financial Results Webcast and Conference Call")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        tag: "p",
        class: "text",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.18"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SOL Strategies Inc. (CSE: HODL) (OTCQX: CYFRF) (formerly, Cypherpunk Holdings Inc, “SOL Strategies” or the “Company”), a publicly traded Canadian company dedicated to investing in and providing infrastructure for the Solana blockchain ecosystem, today announced it will release its financial results for the first quarter of 2025 on Monday, March 3, 2025, at 4:30 PM EST.`);
          } else {
            return [
              createTextVNode("SOL Strategies Inc. (CSE: HODL) (OTCQX: CYFRF) (formerly, Cypherpunk Holdings Inc, “SOL Strategies” or the “Company”), a publicly traded Canadian company dedicated to investing in and providing infrastructure for the Solana blockchain ecosystem, today announced it will release its financial results for the first quarter of 2025 on Monday, March 3, 2025, at 4:30 PM EST.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="new-latest-financials__item" data-v-a6614678><div class="title" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "p",
        class: "title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`WEBCAST DATE`);
          } else {
            return [
              createTextVNode("WEBCAST DATE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="date" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "p",
        class: "text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Monday, March 3, 2025, at 4:30 PM EST`);
          } else {
            return [
              createTextVNode("Monday, March 3, 2025, at 4:30 PM EST")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="new-latest-financials__item" data-v-a6614678><div class="title" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "p",
        class: "title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`LIVE CALL`);
          } else {
            return [
              createTextVNode("LIVE CALL")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="date" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "p",
        class: "text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`(800) 579-2543 Primary (US) or (785) 424-1789 (International)`);
          } else {
            return [
              createTextVNode("(800) 579-2543 Primary (US) or (785) 424-1789 (International)")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><a href="/financials" data-v-a6614678><div class="buttons" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_ButtonCta, {
        class: "cta",
        variant: "violet"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Webcast Link`);
          } else {
            return [
              createTextVNode("Webcast Link")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></a></div><div class="press" data-v-a6614678><div class="border" data-v-a6614678><div class="top" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "press-top.svg",
        alt: "border"
      }, null, _parent));
      _push(`</div><div class="bottom" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "press-bottom.svg",
        alt: "border"
      }, null, _parent));
      _push(`</div></div><div class="press-content" data-v-a6614678><div class="top" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "SolLogo.svg",
        class: "logo",
        alt: "Logo"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Text, {
        tag: "p",
        class: "small",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.18"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` solstrategies.io `);
          } else {
            return [
              createTextVNode(" solstrategies.io ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        tag: "h4",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.18"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`First Quarter 2025 <br data-v-a6614678${_scopeId}>Financial Results `);
          } else {
            return [
              createTextVNode("First Quarter 2025 "),
              createVNode("br"),
              createTextVNode("Financial Results ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="tags" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_ButtonCta, {
        class: "tag",
        variant: "brown"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Webcast`);
          } else {
            return [
              createTextVNode("Webcast")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonCta, {
        class: "tag",
        variant: "yell"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`conference call`);
          } else {
            return [
              createTextVNode("conference call")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "p",
        class: "text",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.18"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`CEO Leah Wald, CFO Doug Harris and CTO Max Kaplan will host a webcast and conference call to discuss the results following the release. Participants will have the opportunity to ask questions during the call.`);
          } else {
            return [
              createTextVNode("CEO Leah Wald, CFO Doug Harris and CTO Max Kaplan will host a webcast and conference call to discuss the results following the release. Participants will have the opportunity to ask questions during the call.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="meta" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "p",
        class: "date"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MediaImg, {
              src: "icon-calendar.svg",
              class: "icon",
              alt: "Icon"
            }, null, _parent2, _scopeId));
            _push2(` 03.03.2025 `);
          } else {
            return [
              createVNode(_component_MediaImg, {
                src: "icon-calendar.svg",
                class: "icon",
                alt: "Icon"
              }),
              createTextVNode(" 03.03.2025 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        tag: "p",
        class: "clock"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MediaImg, {
              src: "icon-clock.svg",
              class: "icon",
              alt: "Icon"
            }, null, _parent2, _scopeId));
            _push2(` 4:30 PM EST `);
          } else {
            return [
              createVNode(_component_MediaImg, {
                src: "icon-clock.svg",
                class: "icon",
                alt: "Icon"
              }),
              createTextVNode(" 4:30 PM EST ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="teams" data-v-a6614678><div class="team" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "teamLeah.png",
        alt: "Leah Wald"
      }, null, _parent));
      _push(`<div class="caption" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, { tag: "p" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Leah Wald <br data-v-a6614678${_scopeId}>CEO `);
          } else {
            return [
              createTextVNode(" Leah Wald "),
              createVNode("br"),
              createTextVNode("CEO ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="team" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "teamDoug.png",
        alt: "Doug Harris"
      }, null, _parent));
      _push(`<div class="caption" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, { tag: "p" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Doug Harris <br data-v-a6614678${_scopeId}>CFO `);
          } else {
            return [
              createTextVNode("Doug Harris "),
              createVNode("br"),
              createTextVNode("CFO ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="team" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "teamMax.png",
        alt: "Max Kaplan"
      }, null, _parent));
      _push(`<div class="caption" data-v-a6614678>`);
      _push(ssrRenderComponent(_component_Text, { tag: "p" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Max Kaplan <br data-v-a6614678${_scopeId}>CTO `);
          } else {
            return [
              createTextVNode(" Max Kaplan "),
              createVNode("br"),
              createTextVNode("CTO ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionEvents.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a6614678"]]);
const _imports_0 = publicAssetsURL("/SOLQ325-082625.mp3");
const _sfc_main$4 = {
  __name: "SectionAudio",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$2;
      const _component_Text = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "audio"
      }, _attrs))} data-v-05f02d57><div class="bg" data-v-05f02d57>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/audio-bg.webp",
        alt: "Audio Background"
      }, null, _parent));
      _push(`</div><div class="container" data-v-05f02d57><div class="title" data-v-05f02d57>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "h2",
        variant: "heading2",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Recent financial results`);
          } else {
            return [
              createTextVNode(" Recent financial results")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="audio-content" data-v-05f02d57>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "desc",
        "data-split": "",
        "data-linereveal": "",
        "reveal-delay": "0.15"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sol Strategies First Quarter 2025 Financial Results <br data-v-05f02d57${_scopeId}> Webcast and Conference Call`);
          } else {
            return [
              createTextVNode(" Sol Strategies First Quarter 2025 Financial Results "),
              createVNode("br"),
              createTextVNode(" Webcast and Conference Call")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="audio-in" data-v-05f02d57><audio controls data-v-05f02d57><source${ssrRenderAttr("src", _imports_0)} type="audio/mpeg" data-v-05f02d57> Your browser does not support the audio element. </audio></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionAudio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-05f02d57"]]);
const _sfc_main$3 = {
  __name: "SectionVideo",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "video"
      }, _attrs))} data-v-021a78d4><div class="video-content" data-v-021a78d4><div class="bg" data-v-021a78d4>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/video-bg.webp",
        alt: "Video Background"
      }, null, _parent));
      _push(`</div><div class="video-in" data-v-021a78d4></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionVideo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-021a78d4"]]);
const _sfc_main$2 = {
  __name: "SectionOverviewInvestors",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$2;
      const _component_Text = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "overview"
      }, _attrs))} data-v-6ed97c43><div class="bg" data-v-6ed97c43>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/inv-overview-bg.webp",
        alt: "Overview Background"
      }, null, _parent));
      _push(`</div><div class="container" data-v-6ed97c43><div class="title" data-v-6ed97c43>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "h2",
        variant: "heading2",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SOL Strategies Stock`);
          } else {
            return [
              createTextVNode("SOL Strategies Stock")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ticker" data-v-6ed97c43>`);
      if (!("useDevice" in _ctx ? _ctx.useDevice : unref(useDevice))().isMobile) {
        _push(`<div class="ticker__symbol" data-v-6ed97c43>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ticker__tape" data-v-6ed97c43>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionOverviewInvestors.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6ed97c43"]]);
const _sfc_main$1 = {
  __name: "SectionMilestonesInvestors",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    const elSlider = useTemplateRef("elSlider");
    const handleNext = () => {
      elSlider.value?.next?.();
    };
    const handlePrev = () => {
      elSlider.value?.prev?.();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0;
      const _component_MediaImg = __nuxt_component_1$2;
      const _component_ButtonIcon = __nuxt_component_2$2;
      const _component_IconArrowslide = __nuxt_component_3$1;
      const _component_MotionSlider = __nuxt_component_4$1;
      const _component_CardMilestone = __nuxt_component_5$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "milestone"
      }, _attrs))} data-v-c353b92c><div class="top" data-v-c353b92c><div class="text-wrapper" data-v-c353b92c>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "h2",
        variant: "heading2",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Recent Milestones `);
          } else {
            return [
              createTextVNode(" Recent Milestones ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="shape" data-v-c353b92c>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/shape-milestone.png",
        alt: "Shape"
      }, null, _parent));
      _push(`</div></div><div class="navigation navigation-desktop" data-v-c353b92c><div class="navigation__btn prev" data-v-c353b92c>`);
      _push(ssrRenderComponent(_component_ButtonIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconArrowslide, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconArrowslide)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navigation__btn next" data-v-c353b92c>`);
      _push(ssrRenderComponent(_component_ButtonIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconArrowslide, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconArrowslide)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="list" data-v-c353b92c>`);
      _push(ssrRenderComponent(_component_MotionSlider, {
        ref_key: "elSlider",
        ref: elSlider,
        "gap-desktop": 32
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardMilestone, {
              desc: "secured with ATW Partners",
              background: "/milestone-1.jpg"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<b data-v-c353b92c${_scopeId2}>$500</b>M Convertible Facility `);
                } else {
                  return [
                    createVNode("b", null, "$500"),
                    createTextVNode("M Convertible Facility ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardMilestone, {
              desc: "completed, expanding validator operations",
              background: "/milestone-2.jpg"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<b data-v-c353b92c${_scopeId2}>$35</b>M Laine Acquisition `);
                } else {
                  return [
                    createVNode("b", null, "$35"),
                    createTextVNode("M Laine Acquisition ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardMilestone, {
              desc: "with SEC for potential Nasdaq listing",
              background: "/milestone-3.jpg"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<b data-v-c353b92c${_scopeId2}>Form 40-F Filed</b>`);
                } else {
                  return [
                    createVNode("b", null, "Form 40-F Filed")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardMilestone, { desc: "certifications achieved" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<b data-v-c353b92c${_scopeId2}>SOC 1 &amp; 2 Type 1</b>`);
                } else {
                  return [
                    createVNode("b", null, "SOC 1 & 2 Type 1")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardMilestone, {
              "is-download": true,
              desc: "launched on",
              background: "/milestone-5.jpg"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<b data-v-c353b92c${_scopeId2}>Orangefin</b>`);
                } else {
                  return [
                    createVNode("b", null, "Orangefin")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardMilestone, {
                desc: "secured with ATW Partners",
                background: "/milestone-1.jpg"
              }, {
                title: withCtx(() => [
                  createVNode("b", null, "$500"),
                  createTextVNode("M Convertible Facility ")
                ]),
                _: 1
              }),
              createVNode(_component_CardMilestone, {
                desc: "completed, expanding validator operations",
                background: "/milestone-2.jpg"
              }, {
                title: withCtx(() => [
                  createVNode("b", null, "$35"),
                  createTextVNode("M Laine Acquisition ")
                ]),
                _: 1
              }),
              createVNode(_component_CardMilestone, {
                desc: "with SEC for potential Nasdaq listing",
                background: "/milestone-3.jpg"
              }, {
                title: withCtx(() => [
                  createVNode("b", null, "Form 40-F Filed")
                ]),
                _: 1
              }),
              createVNode(_component_CardMilestone, { desc: "certifications achieved" }, {
                title: withCtx(() => [
                  createVNode("b", null, "SOC 1 & 2 Type 1")
                ]),
                _: 1
              }),
              createVNode(_component_CardMilestone, {
                "is-download": true,
                desc: "launched on",
                background: "/milestone-5.jpg"
              }, {
                title: withCtx(() => [
                  createVNode("b", null, "Orangefin")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navigation navigation-mobile" data-v-c353b92c>`);
      _push(ssrRenderComponent(_component_ButtonIcon, {
        class: "prev",
        onClick: handlePrev
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconArrowslide, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconArrowslide)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonIcon, {
        class: "next",
        onClick: handleNext
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconArrowslide, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_IconArrowslide)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionMilestonesInvestors.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c353b92c"]]);
const _sfc_main = {
  __name: "investor-relations",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: null
    });
    const title = seo.title;
    useHead({
      title,
      meta: [
        { property: "og:title", content: title }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeroInvestors = _sfc_main$8;
      const _component_SectionWhyInvestors = __nuxt_component_1;
      const _component_SectionEvents = __nuxt_component_2;
      const _component_SectionAudio = __nuxt_component_3;
      const _component_SectionVideo = __nuxt_component_4;
      const _component_SectionOverviewInvestors = __nuxt_component_5;
      const _component_SectionMilestonesInvestors = __nuxt_component_6;
      const _component_SectionCta = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$route.name
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionHeroInvestors, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionWhyInvestors, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionEvents, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAudio, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionVideo, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionOverviewInvestors, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionMilestonesInvestors, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCta, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/investor-relations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=investor-relations-C8oLuLfw.js.map
