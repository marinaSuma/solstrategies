import { useTemplateRef, mergeProps, ref, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue/server-renderer/index.mjs';
import { a as _export_sfc, b as __nuxt_component_1$3, _ as __nuxt_component_0$1, f as __nuxt_component_2$2 } from './server.mjs';
import { g as gsapWithCSS } from './SectionCta-C2cdteWZ.mjs';
import __nuxt_component_3 from './googleplay-Duclp0YX.mjs';
import __nuxt_component_4$1 from './appstore-s0hQ1Viv.mjs';

const _sfc_main$2 = {
  __name: "ButtonIcon",
  __ssrInlineRender: true,
  setup(__props) {
    useTemplateRef("elIconWrapper");
    useTemplateRef("elIcon");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "btn-icon" }, _attrs))} data-v-a032a8ac><span class="icon-wrapper" data-v-a032a8ac><span class="icon-inner" data-v-a032a8ac>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span></span></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/ButtonIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a032a8ac"]]);
const _sfc_main$1 = {
  __name: "MotionSlider",
  __ssrInlineRender: true,
  props: {
    desktopEnable: {
      type: Boolean,
      default: true
    },
    mobileEnable: {
      type: Boolean,
      default: true
    },
    gapDesktop: {
      type: Number,
      default: 10
    },
    gapMobile: {
      type: Number,
      default: 10
    },
    lerpFactor: {
      type: Number,
      default: 0.25
    },
    dragSensitivity: {
      type: Number,
      default: 0.8,
      validator: (value) => value >= 0 && value <= 1
    },
    mobileDragSensitivity: {
      type: Number,
      default: 2.5,
      validator: (value) => value >= 0 && value <= 3
    },
    speedDecay: {
      type: Number,
      default: 0.85
    },
    snap: {
      type: Boolean,
      default: false
    },
    snapStrength: {
      type: Number,
      default: 0.1
    },
    bounceStrength: {
      type: Number,
      default: 0
    }
  },
  emits: ["progress", "next", "prev"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const elContainer = ref();
    ref();
    const elWrapper = ref();
    ref(false);
    ref(0);
    ref(0);
    ref(0);
    const target = ref(0);
    ref(0);
    ref(0);
    ref(0);
    ref(0);
    const maxScroll = ref(0);
    ref(0);
    ref(false);
    const getStepWidth = () => {
      var _a;
      if (!elWrapper.value) return 0;
      const firstChild = (_a = elWrapper.value.children) == null ? void 0 : _a[0];
      if (!(firstChild instanceof HTMLElement)) return 0;
      const styles = getComputedStyle(elWrapper.value);
      const gap = parseFloat(styles.columnGap || "0") || 0;
      return firstChild.offsetWidth + gap;
    };
    const next = () => {
      const step = getStepWidth();
      if (step === 0) return;
      const desired = target.value - step;
      target.value = gsapWithCSS.utils.clamp(maxScroll.value, 0, desired);
      emit("next");
    };
    const prev = () => {
      const step = getStepWidth();
      if (step === 0) return;
      const desired = target.value + step;
      target.value = gsapWithCSS.utils.clamp(maxScroll.value, 0, desired);
      emit("prev");
    };
    __expose({ next, prev });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        ":--68a7d528": _ctx.$props.gapDesktop,
        ":--67bfbd5c": _ctx.$props.gapMobile
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "elContainer",
        ref: elContainer,
        class: "section-slider"
      }, _attrs, _cssVars))} data-v-19513bd7><div class="slider" data-v-19513bd7><div class="slider-wrapper" data-v-19513bd7>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/motion/MotionSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-19513bd7"]]), { __name: "MotionSlider" });
const _sfc_main = {
  __name: "CardMilestone",
  __ssrInlineRender: true,
  props: {
    desc: {
      type: String
    },
    background: {
      type: String
    },
    isDownload: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$3;
      const _component_Text = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_2$2;
      const _component_IconGoogleplay = __nuxt_component_3;
      const _component_IconAppstore = __nuxt_component_4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-milestone" }, _attrs))} data-v-59b116cc>`);
      if (props.background) {
        _push(`<div class="bg" data-v-59b116cc>`);
        _push(ssrRenderComponent(_component_MediaImg, {
          src: props.background,
          alt: "Background of card"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        tag: "h3",
        variant: "heading1",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "title", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      if (!props.isDownload) {
        _push(ssrRenderComponent(_component_Text, {
          class: "desc",
          variant: "body28",
          "data-split": "",
          "data-linereveal": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.desc)}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.desc), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="desc-wrapper" data-v-59b116cc>`);
        _push(ssrRenderComponent(_component_Text, {
          class: "desc",
          variant: "body28",
          "data-split": "",
          "data-linereveal": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.desc)}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.desc), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="download" data-v-59b116cc>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "https://apps.apple.com/us/app/orangefin-solana-staking/id6743318259",
          external: true,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconGoogleplay, { class: "googleplay" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_IconGoogleplay, { class: "googleplay" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "https://play.google.com/store/apps/details?id=ventures.orangefin.staking",
          external: true,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_IconAppstore, { class: "appstore" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_IconAppstore, { class: "appstore" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/CardMilestone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59b116cc"]]);

export { __nuxt_component_2 as _, __nuxt_component_4 as a, __nuxt_component_5 as b };
//# sourceMappingURL=CardMilestone-DaO8hqZy.mjs.map
