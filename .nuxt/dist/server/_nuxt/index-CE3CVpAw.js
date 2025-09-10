import { useTemplateRef, ref, computed, unref, mergeProps, useSSRContext, defineComponent, withCtx, createTextVNode, createVNode, toDisplayString, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { a as _export_sfc, d as useDevice, b as __nuxt_component_1$2, e as usePreloadDone, _ as __nuxt_component_0$2, c as __nuxt_component_1$3, f as __nuxt_component_2$1, g as __nuxt_component_2$2, h as useIntervalFn, i as useSplitTextDone, u as useHead, s as seo } from "../server.mjs";
import __nuxt_component_1$4 from "./circleleft-DfZMv5RE.js";
import __nuxt_component_2$3 from "./circlecenter-DPhmquOh.js";
import { g as gsapWithCSS, _ as __nuxt_component_7 } from "./SectionCta-C2cdteWZ.js";
import __nuxt_component_5$1 from "./circleright-Dwbxe38P.js";
import __nuxt_component_1$5 from "./quote-BC1rzZCp.js";
import { _ as __nuxt_component_2$4, a as __nuxt_component_4$1, b as __nuxt_component_5$2 } from "./CardMilestone-DaO8hqZy.js";
import __nuxt_component_3$3 from "./arrowslide-D9TeW5f3.js";
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
import "./googleplay-Duclp0YX.js";
import "./appstore-s0hQ1Viv.js";
const _sfc_main$a = {
  __name: "MediaVideo",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "video/mp4"
    },
    src: {
      type: String,
      required: true
    },
    poster: {
      type: String
    },
    preload: {
      type: String,
      default: "metadata"
    },
    loop: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    playsinline: {
      type: Boolean,
      default: true
    },
    aspect: {
      type: String
    },
    aspectM: {
      type: String
    },
    scrollTrigger: {
      type: Boolean,
      default: true
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const elVideo = useTemplateRef("elVideo");
    const aspectCalc = ref();
    let aspectW, aspectH;
    if (props.aspect) {
      [aspectW, aspectH] = props.aspect.split("/").map(Number);
    }
    if (useDevice().isMobile && props.aspectM) {
      [aspectW, aspectH] = props.aspectM.split("/").map(Number);
    }
    if (aspectW && aspectH) {
      aspectCalc.value = (aspectH / aspectW * 100).toFixed(2);
    }
    const aspectPercent = computed(() => props.aspect ? `${aspectCalc.value}%` : null);
    __expose({
      play: () => elVideo.value.play(),
      pause: () => elVideo.value.pause()
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        ":--85ad7ae6": unref(aspectPercent)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["media-video", { "n-a": !props.aspect }]
      }, _attrs, _cssVars))} data-v-e5a9709b>`);
      if (props.aspect) {
        _push(`<div class="ar" data-v-e5a9709b></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<video${ssrIncludeBooleanAttr(props.controls) ? " controls" : ""}${ssrIncludeBooleanAttr(props.loop) ? " loop" : ""}${ssrIncludeBooleanAttr(props.muted) ? " muted" : ""}${ssrRenderAttr("playsinline", props.playsinline || void 0)}${ssrRenderAttr("preload", props.preload)}${ssrRenderAttr("poster", props.poster)}${ssrIncludeBooleanAttr(props.autoplay) ? " autoplay" : ""} data-v-e5a9709b><source${ssrRenderAttr("src", props.src)}${ssrRenderAttr("type", props.type)} data-v-e5a9709b><p data-v-e5a9709b>Your browser does not support the video element. Please consider updating to a modern browser.</p></video></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/media/MediaVideo.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-e5a9709b"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "MotionLogoMarquee",
  __ssrInlineRender: true,
  props: {
    logos: {
      type: [Array, Object],
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    scrollSpeed: {
      type: Number,
      default: 15
    }
  },
  setup(__props) {
    const props = __props;
    computed(() => {
      return props.logos.length * 3.5;
    });
    const el = useTemplateRef("el");
    const isReverse = ref(props.reverse);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "logomarquee"
      }, _attrs))} data-v-bf06e62c><div class="marquee__wrapper" data-v-bf06e62c><div class="${ssrRenderClass([{ reverse: unref(isReverse) }, "marquee__group"])}" data-v-bf06e62c><div class="images" data-v-bf06e62c><!--[-->`);
      ssrRenderList(props.logos, (item, index) => {
        _push(`<div class="logo__item" data-v-bf06e62c>`);
        _push(ssrRenderComponent(_component_MediaImg, {
          class: "image",
          src: item.src,
          alt: item.alt
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/motion/MotionLogoMarquee.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["__scopeId", "data-v-bf06e62c"]]), { __name: "MotionLogoMarquee" });
const _sfc_main$8 = {
  __name: "SectionHero",
  __ssrInlineRender: true,
  setup(__props) {
    const logos = [
      {
        src: "/cnbc_logo.png",
        alt: "CNBC"
      },
      {
        src: "/sherwood_Logo.png",
        alt: "Shewrood"
      },
      {
        src: "/bloomingbit_Logo.png",
        alt: "Bloomingbit"
      },
      {
        src: "/99bitcoins_Logo.png",
        alt: "99Bitcoins"
      },
      {
        src: "/tipranks_logo.png",
        alt: "Tipranks"
      },
      {
        src: "/tradebrains_logo.png",
        alt: "Tradebrains"
      },
      {
        src: "/tradingview_logo.png",
        alt: "Tradingview"
      },
      {
        src: "/themilkroad_logo.png",
        alt: "Themilkroad"
      }
    ];
    const el = useTemplateRef("el");
    usePreloadDone();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaVideo = __nuxt_component_0$1;
      const _component_Text = __nuxt_component_0$2;
      const _component_ButtonCta = __nuxt_component_1$3;
      const _component_MotionLogoMarquee = __nuxt_component_3$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "hero"
      }, _attrs))} data-v-8b6a61b7><div class="bg" data-v-8b6a61b7>`);
      _push(ssrRenderComponent(_component_MediaVideo, {
        class: "desktop",
        src: "/hero.mp4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_MediaVideo, {
        class: "mobile",
        src: "/hero-m.mp4"
      }, null, _parent));
      _push(`</div><div class="container" data-v-8b6a61b7><div class="wrapper" data-v-8b6a61b7><div class="title-wrapper" data-v-8b6a61b7><div class="title__text" data-v-8b6a61b7>`);
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
            _push2(` Solana meets <b data-v-8b6a61b7${_scopeId}>Wall Street</b>`);
          } else {
            return [
              createTextVNode(" Solana meets "),
              createVNode("b", null, "Wall Street")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="description" data-v-8b6a61b7><div class="description__text" data-v-8b6a61b7>`);
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
            _push2(` A publicly traded company providing infrastructure for the Solana blockchain ecosystem, the fastest growing project in crypto. `);
          } else {
            return [
              createTextVNode(" A publicly traded company providing infrastructure for the Solana blockchain ecosystem, the fastest growing project in crypto. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="buttons" data-v-8b6a61b7>`);
      _push(ssrRenderComponent(_component_ButtonCta, {
        class: "cta",
        variant: "black"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Stake with Us`);
          } else {
            return [
              createTextVNode("Stake with Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ButtonCta, { class: "cta" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Investor Relations`);
          } else {
            return [
              createTextVNode("Investor Relations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="logo" data-v-8b6a61b7>`);
      _push(ssrRenderComponent(_component_Text, { class: "logo__title color-gray" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`As seen on`);
          } else {
            return [
              createTextVNode("As seen on")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="logo__wrapper" data-v-8b6a61b7>`);
      _push(ssrRenderComponent(_component_MotionLogoMarquee, { logos }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionHero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-8b6a61b7"]]);
const _sfc_main$7 = {
  __name: "SectionOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$2;
      const _component_Text = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_2$1;
      const _component_ClientOnly = __nuxt_component_2$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "overview"
      }, _attrs))} data-v-903e486f><div class="bg" data-v-903e486f>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/overview-bg.png",
        alt: "Overview Background"
      }, null, _parent));
      _push(`</div><div class="title" data-v-903e486f>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "h2",
        variant: "heading1",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lorem Ipsum `);
          } else {
            return [
              createTextVNode(" Lorem Ipsum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="cards" data-v-903e486f><div class="circle" data-v-903e486f><div class="card" data-v-903e486f>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "card__title",
        variant: "heading2light70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b data-v-903e486f${_scopeId}>3.43</b>M SOL`);
          } else {
            return [
              createVNode("b", null, "3.43"),
              createTextVNode("M SOL")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { class: "card__description" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delegated Stake`);
          } else {
            return [
              createTextVNode("Delegated Stake")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="circle" data-v-903e486f><div class="card" data-v-903e486f><div class="card__bg" data-v-903e486f>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/card2-bg.png",
        alt: "Card 2 Background"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "card__title",
        variant: "heading2light70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b data-v-903e486f${_scopeId}>395</b>K+ `);
          } else {
            return [
              createVNode("b", null, "395"),
              createTextVNode("K+ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { class: "card__description" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SOL Treasury Stake`);
          } else {
            return [
              createTextVNode("SOL Treasury Stake")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="circle" data-v-903e486f><div class="card" data-v-903e486f><div class="card__bg" data-v-903e486f>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/card3-bg.png",
        alt: "Card 3 Background"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "card__title",
        variant: "heading2light70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b data-v-903e486f${_scopeId}>4</b>`);
          } else {
            return [
              createVNode("b", null, "4")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, { class: "card__description" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Enterprise Validators`);
          } else {
            return [
              createTextVNode("Enterprise Validators")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "card__link link active"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Learn more `);
          } else {
            return [
              createTextVNode(" Learn more ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ticker" data-v-903e486f>`);
      _push(ssrRenderComponent(_component_Text, { class: "color-gray" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`OTCQB: CYFRF`);
          } else {
            return [
              createTextVNode("OTCQB: CYFRF")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!("useDevice" in _ctx ? _ctx.useDevice : unref(useDevice))().isMobile) {
        _push(`<div class="ticker__symbol" data-v-903e486f>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ticker__tape" data-v-903e486f>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionOverview.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-903e486f"]]);
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ name: "MotionCarousel" }, {
  __name: "MotionCarousel",
  __ssrInlineRender: true,
  props: {
    autoplayMs: { type: Number, default: 3e3 },
    pauseOnHover: { type: Boolean, default: true },
    thresholdRatio: { type: Number, default: 0.2 },
    thresholdMinPx: { type: Number, default: 24 },
    loop: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const elSlider = useTemplateRef("elSlider");
    const elTrack = useTemplateRef("elTrack");
    const currentIndex = ref(0);
    const slideCount = ref(0);
    const slideWidth = ref(0);
    const isDragging = ref(false);
    ref(0);
    ref(0);
    ref(0);
    const clampIndex = (index) => Math.max(0, Math.min(index, (slideCount.value || 1) - 1));
    const goToIndex = (index) => {
      if (!elTrack.value) return;
      const next = props.loop ? (index % slideCount.value + slideCount.value) % slideCount.value : clampIndex(index);
      currentIndex.value = next;
      gsapWithCSS.to(elTrack.value, { x: -next * slideWidth.value, duration: 0.6, ease: "power3.out" });
    };
    const goToNext = () => {
      if (slideCount.value <= 1) return;
      goToIndex(currentIndex.value + 1);
    };
    useIntervalFn(
      () => {
        if ((void 0).hidden) return;
        if (isDragging.value) return;
        goToNext();
      },
      computed(() => props.autoplayMs),
      { immediate: false }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "elSlider",
        ref: elSlider,
        class: "carousel"
      }, _attrs))} data-v-1921e916><div class="slider__track" data-v-1921e916>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/motion/MotionCarousel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-1921e916"]]), { __name: "MotionCarousel" });
const _sfc_main$5 = {
  __name: "SectionGrowth",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    useTemplateRef("elList");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0$2;
      const _component_IconCircleleft = __nuxt_component_1$4;
      const _component_IconCirclecenter = __nuxt_component_2$3;
      const _component_MotionCarousel = __nuxt_component_3$1;
      const _component_MediaImg = __nuxt_component_1$2;
      const _component_IconCircleright = __nuxt_component_5$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "growth"
      }, _attrs))} data-v-94d97e01><div class="content" data-v-94d97e01><div class="text" data-v-94d97e01>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "h2",
        variant: "heading1",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Our Dual-Engine Growth Strategy `);
          } else {
            return [
              createTextVNode(" Our Dual-Engine Growth Strategy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "description color-gray",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` We operate through two synergistic business arms connected by our enterprise validator network—creating multiple revenue streams and compounding value. `);
          } else {
            return [
              createTextVNode(" We operate through two synergistic business arms connected by our enterprise validator network—creating multiple revenue streams and compounding value. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="list" data-v-94d97e01><div class="circle left" data-v-94d97e01><div class="bg-border" data-v-94d97e01>`);
      _push(ssrRenderComponent(_component_IconCircleleft, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        tag: "h3",
        variant: "body26"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Investment Engine`);
          } else {
            return [
              createTextVNode("Investment Engine")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "desc",
        variant: "body16"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Strategic SOL acquisition and staking`);
          } else {
            return [
              createTextVNode("Strategic SOL acquisition and staking")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="point" data-v-94d97e01><ul data-v-94d97e01><li data-v-94d97e01><span data-v-94d97e01><b data-v-94d97e01>$395k+ SOL treasury</b> (~$92M CAD)</span></li><li data-v-94d97e01><span data-v-94d97e01><b data-v-94d97e01>$500M</b> convertible facility for continued accumulation </span></li><li data-v-94d97e01><span data-v-94d97e01><b data-v-94d97e01>All holdings staked</b> through proprietary validators </span></li></ul></div></div><div class="separator left" data-v-94d97e01><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-94d97e01><circle cx="9.63668" cy="9.63668" r="9.63668" transform="matrix(1 0 0 -1 0.410156 20.1392)" fill="#FF9751" data-v-94d97e01></circle></svg></div><div class="circle center" data-v-94d97e01><div class="bg-border" data-v-94d97e01>`);
      _push(ssrRenderComponent(_component_IconCirclecenter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        tag: "h3",
        variant: "body26"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Validator Advantage`);
          } else {
            return [
              createTextVNode("Validator Advantage")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "desc",
        variant: "body16"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Enables strategic SOL acquisition while generating transaction fee revenue across market conditions. `);
          } else {
            return [
              createTextVNode(" Enables strategic SOL acquisition while generating transaction fee revenue across market conditions. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="slider" data-v-94d97e01>`);
      _push(ssrRenderComponent(_component_MotionCarousel, { "autoplay-ms": 2e3 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="slider__item" data-v-94d97e01${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediaImg, {
              src: "/growth-logo0.png",
              alt: "Growth Logo 0"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="slider__item" data-v-94d97e01${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediaImg, {
              src: "/growth-logo1.png",
              alt: "Growth Logo 1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="slider__item" data-v-94d97e01${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediaImg, {
              src: "/growth-logo2.png",
              alt: "Growth Logo 2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="slider__item" data-v-94d97e01${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MediaImg, {
              src: "/growth-logo3.png",
              alt: "Growth Logo 3"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "slider__item" }, [
                createVNode(_component_MediaImg, {
                  src: "/growth-logo0.png",
                  alt: "Growth Logo 0"
                })
              ]),
              createVNode("div", { class: "slider__item" }, [
                createVNode(_component_MediaImg, {
                  src: "/growth-logo1.png",
                  alt: "Growth Logo 1"
                })
              ]),
              createVNode("div", { class: "slider__item" }, [
                createVNode(_component_MediaImg, {
                  src: "/growth-logo2.png",
                  alt: "Growth Logo 2"
                })
              ]),
              createVNode("div", { class: "slider__item" }, [
                createVNode(_component_MediaImg, {
                  src: "/growth-logo3.png",
                  alt: "Growth Logo 3"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="separator right" data-v-94d97e01><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-94d97e01><circle cx="9.63668" cy="9.63668" r="9.63668" transform="matrix(1 0 0 -1 0.688477 20.1392)" fill="#9392F2" data-v-94d97e01></circle></svg></div><div class="circle right" data-v-94d97e01><div class="bg-border" data-v-94d97e01>`);
      _push(ssrRenderComponent(_component_IconCircleright, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        tag: "h3",
        variant: "body26"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Technology Engine`);
          } else {
            return [
              createTextVNode("Technology Engine")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "desc",
        variant: "body16"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Infrastructure &amp; Innovation`);
          } else {
            return [
              createTextVNode("Infrastructure & Innovation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="point" data-v-94d97e01><ul data-v-94d97e01><li data-v-94d97e01><span data-v-94d97e01><b data-v-94d97e01>White label validator</b> services </span></li><li data-v-94d97e01><span data-v-94d97e01><b data-v-94d97e01>StakeWiz</b> Platform </span></li><li data-v-94d97e01><span data-v-94d97e01><b data-v-94d97e01>Orangefin</b> App</span></li></ul></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionGrowth.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-94d97e01"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MediaImg = __nuxt_component_1$2;
  const _component_IconQuote = __nuxt_component_1$5;
  const _component_Text = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial" }, _attrs))} data-v-4bf91b76><div class="bg" data-v-4bf91b76>`);
  _push(ssrRenderComponent(_component_MediaImg, {
    class: "desktop",
    src: "/testimonial-bg.png",
    alt: "Overview Background"
  }, null, _parent));
  _push(ssrRenderComponent(_component_MediaImg, {
    class: "mobile",
    src: "/testimonial-bg-m.png",
    alt: "Overview Background Mobile"
  }, null, _parent));
  _push(`</div><div class="content" data-v-4bf91b76><div class="quote" data-v-4bf91b76>`);
  _push(ssrRenderComponent(_component_IconQuote, null, null, _parent));
  _push(`</div><div class="text" data-v-4bf91b76>`);
  _push(ssrRenderComponent(_component_Text, {
    class: "text__quote",
    variant: "uc",
    "data-split": "",
    "data-linereveal": "",
    "reveal-delay": "0.15"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` We believe Solana will be the future of programmable finance and one of the most disruptive technologies <b data-v-4bf91b76${_scopeId}>transforming global trading.</b>” `);
      } else {
        return [
          createTextVNode(" We believe Solana will be the future of programmable finance and one of the most disruptive technologies "),
          createVNode("b", null, "transforming global trading."),
          createTextVNode("” ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="profile" data-v-4bf91b76>`);
  _push(ssrRenderComponent(_component_MediaImg, {
    class: "profile__img",
    src: "/leah-wald.jpg",
    alt: "Leah Wald"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Text, {
    class: "profile__name",
    variant: "body26"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Leah Wald`);
      } else {
        return [
          createTextVNode("Leah Wald")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Text, {
    class: "profile__role",
    variant: "body16"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Chief Executive Officer`);
      } else {
        return [
          createTextVNode("Chief Executive Officer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionTestimonial.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4bf91b76"]]), { __name: "SectionTestimonial" });
const _sfc_main$3 = {
  __name: "CardWhy",
  __ssrInlineRender: true,
  props: {
    title: String,
    number: String,
    desc: String,
    background: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$2;
      const _component_Text = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-8af2e094>`);
      if (props.background) {
        _push(`<div class="bg" data-v-8af2e094>`);
        _push(ssrRenderComponent(_component_MediaImg, {
          src: props.background,
          alt: "Background of card"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="top" data-v-8af2e094>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        variant: "heading1medium60",
        "data-split": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "number",
        variant: "heading1medium60",
        "data-split": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`(0${ssrInterpolate(props.number)})`);
          } else {
            return [
              createTextVNode("(0" + toDisplayString(props.number) + ")", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bottom" data-v-8af2e094>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "desc",
        variant: "heading1medium60",
        tag: "span"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "desc", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "desc", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/CardWhy.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8af2e094"]]);
const _sfc_main$2 = {
  __name: "SectionWhy",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    useTemplateRef("elText");
    useSplitTextDone();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Text = __nuxt_component_0$2;
      const _component_CardWhy = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "why"
      }, _attrs))} data-v-de7d253c><div class="text" data-v-de7d253c>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        variant: "heading1medium60",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Why <b data-v-de7d253c${_scopeId}>Solana Matters</b>`);
          } else {
            return [
              createTextVNode(" Why "),
              createVNode("b", null, "Solana Matters")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "desc color-gray",
        "data-split": "",
        "data-linereveal": "",
        "reveal-delay": "0.15"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` The infrastructure layer of tomorrow&#39;s finance `);
          } else {
            return [
              createTextVNode(" The infrastructure layer of tomorrow's finance ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="list" data-v-de7d253c>`);
      _push(ssrRenderComponent(_component_CardWhy, {
        class: "content",
        background: "/why-1.png",
        title: "24/7 decentralized trading",
        number: "1"
      }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-split data-v-de7d253c${_scopeId}>Creating new financial markets that operate continuously with instant settlement and global accessibility.</p>`);
          } else {
            return [
              createVNode("p", { "data-split": "" }, "Creating new financial markets that operate continuously with instant settlement and global accessibility.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardWhy, {
        class: "content",
        background: "/why-2.png",
        title: "Instant global payments",
        number: "2"
      }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-split data-v-de7d253c${_scopeId}>Enabling programmable financial products that didn&#39;t exist before, from tokenized equities to real-time settlement.</p>`);
          } else {
            return [
              createVNode("p", { "data-split": "" }, "Enabling programmable financial products that didn't exist before, from tokenized equities to real-time settlement.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardWhy, {
        class: "content",
        background: "/why-3.png",
        title: "Exponential Growth",
        number: "3"
      }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul data-v-de7d253c${_scopeId}><li data-split data-v-de7d253c${_scopeId}>$160B Solana DEX volume (May 2025)</li><li data-split data-v-de7d253c${_scopeId}>Digital asset market growth: $3.3T → $11.7T by 2030</li><li data-split data-v-de7d253c${_scopeId}>Key tokenization catalysts emerge.</li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", { "data-split": "" }, "$160B Solana DEX volume (May 2025)"),
                createVNode("li", { "data-split": "" }, "Digital asset market growth: $3.3T → $11.7T by 2030"),
                createVNode("li", { "data-split": "" }, "Key tokenization catalysts emerge.")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionWhy.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-de7d253c"]]);
const _sfc_main$1 = {
  __name: "SectionMilestones",
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
      const _component_Text = __nuxt_component_0$2;
      const _component_MediaImg = __nuxt_component_1$2;
      const _component_ButtonIcon = __nuxt_component_2$4;
      const _component_IconArrowslide = __nuxt_component_3$3;
      const _component_MotionSlider = __nuxt_component_4$1;
      const _component_CardMilestone = __nuxt_component_5$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "milestone"
      }, _attrs))} data-v-b8780a75><div class="top" data-v-b8780a75><div class="text-wrapper" data-v-b8780a75>`);
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
      _push(`<div class="shape" data-v-b8780a75>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/shape-milestone.png",
        alt: "Shape"
      }, null, _parent));
      _push(`</div></div><div class="navigation navigation-desktop" data-v-b8780a75><div class="navigation__btn prev" data-v-b8780a75>`);
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
      _push(`</div><div class="navigation__btn next" data-v-b8780a75>`);
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
      _push(`</div></div></div><div class="list" data-v-b8780a75>`);
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
                  _push3(`<b data-v-b8780a75${_scopeId2}>$500</b>M Convertible Facility `);
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
                  _push3(`<b data-v-b8780a75${_scopeId2}>$35</b>M Laine Acquisition `);
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
                  _push3(`<b data-v-b8780a75${_scopeId2}>Form 40-F Filed</b>`);
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
                  _push3(`<b data-v-b8780a75${_scopeId2}>SOC 1 &amp; 2 Type 1</b>`);
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
                  _push3(`<b data-v-b8780a75${_scopeId2}>Orangefin</b>`);
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
      _push(`</div><div class="navigation navigation-mobile" data-v-b8780a75>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionMilestones.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b8780a75"]]);
const _sfc_main = {
  __name: "index",
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
      const _component_SectionHero = __nuxt_component_0;
      const _component_SectionOverview = __nuxt_component_1$1;
      const _component_SectionGrowth = __nuxt_component_2;
      const _component_SectionTestimonial = __nuxt_component_3;
      const _component_SectionWhy = __nuxt_component_4;
      const _component_SectionMilestones = __nuxt_component_5;
      const _component_SectionCta = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$route.name
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionHero, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionOverview, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionGrowth, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionTestimonial, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionWhy, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionMilestones, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionCta, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CE3CVpAw.js.map
