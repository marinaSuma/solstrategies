import { a as _export_sfc, b as __nuxt_component_1$3, _ as __nuxt_component_0$1, S as ScrollTrigger } from './server.mjs';
import { useTemplateRef, mergeProps, withCtx, createTextVNode, createVNode, ref, toDisplayString, useSSRContext } from 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'file:///Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/vue/server-renderer/index.mjs';
import { g as gsapWithCSS } from './SectionCta-C2cdteWZ.mjs';

const _sfc_main$2 = {
  __name: "SectionAboutHero",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$3;
      const _component_Text = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "hero"
      }, _attrs))} data-v-2973bdfe><div class="bg-right" data-v-2973bdfe>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/about-bgTop.png",
        alt: "About Background"
      }, null, _parent));
      _push(`</div><div class="container" data-v-2973bdfe><div class="wrapper" data-v-2973bdfe><div class="title-wrapper" data-v-2973bdfe><div class="title__text" data-v-2973bdfe>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "title",
        tag: "h2",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Building Solana&#39;s <br data-v-2973bdfe${_scopeId}><b data-v-2973bdfe${_scopeId}>Financial Future</b>`);
          } else {
            return [
              createTextVNode(" Building Solana's "),
              createVNode("br"),
              createVNode("b", null, "Financial Future")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="description" data-v-2973bdfe><div class="description__text" data-v-2973bdfe>`);
      _push(ssrRenderComponent(_component_Text, {
        class: "color-gray",
        variant: "body22",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.15"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b data-v-2973bdfe${_scopeId}>Our mission</b> is to be the institutional <br data-v-2973bdfe${_scopeId}> backbone of the Solana ecosystem; <br data-v-2973bdfe${_scopeId}> bridging traditional finance with <br data-v-2973bdfe${_scopeId}> decentralized infrastructure. `);
          } else {
            return [
              createVNode("b", null, "Our mission"),
              createTextVNode(" is to be the institutional "),
              createVNode("br"),
              createTextVNode(" backbone of the Solana ecosystem; "),
              createVNode("br"),
              createTextVNode(" bridging traditional finance with "),
              createVNode("br"),
              createTextVNode(" decentralized infrastructure. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Text, {
        class: "color-gray",
        variant: "body22",
        "data-split": "",
        "data-linereveal": "",
        "reveal-notrigger": "",
        "reveal-waitpreloader": "",
        "reveal-delay": "0.22"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b data-v-2973bdfe${_scopeId}>Our vision</b> is to build the infrastructure <br data-v-2973bdfe${_scopeId}> that powers the next generation of <br data-v-2973bdfe${_scopeId}> financial markets. `);
          } else {
            return [
              createVNode("b", null, "Our vision"),
              createTextVNode(" is to build the infrastructure "),
              createVNode("br"),
              createTextVNode(" that powers the next generation of "),
              createVNode("br"),
              createTextVNode(" financial markets. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionAboutHero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2973bdfe"]]);
const _sfc_main$1 = {
  __name: "SectionAboutProgramable",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$3;
      const _component_Text = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "banner"
      }, _attrs))} data-v-a8e02b30><div class="bg fadeinUp" data-v-a8e02b30>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/about-bg2.webp",
        alt: "Programable Background"
      }, null, _parent));
      _push(`</div><div class="container" data-v-a8e02b30><div class="title-container" data-v-a8e02b30><div class="shape top fadeinLeft" data-v-a8e02b30>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/aboutShapeTop.svg",
        alt: "Shape"
      }, null, _parent));
      _push(`</div><div class="title" data-v-a8e02b30>`);
      _push(ssrRenderComponent(_component_Text, {
        tag: "h2",
        variant: "heading2",
        "data-split": "",
        "data-linereveal": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`We believe Solana will <br data-v-a8e02b30${_scopeId}> be the <b data-v-a8e02b30${_scopeId}>future of programmable finance</b>`);
          } else {
            return [
              createTextVNode("We believe Solana will "),
              createVNode("br"),
              createTextVNode(" be the "),
              createVNode("b", null, "future of programmable finance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="shape bottom fadeinLeft" data-v-a8e02b30>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/aboutShapeBottom.svg",
        alt: "Shape"
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionAboutProgramable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a8e02b30"]]);
const _sfc_main = {
  __name: "SectionAboutTeam",
  __ssrInlineRender: true,
  setup(__props) {
    const el = useTemplateRef("el");
    gsapWithCSS.registerPlugin(ScrollTrigger);
    ref([]);
    const teamGroups = [
      {
        num: "01",
        title: "Leadership Team",
        color: "yellow",
        description: [
          "First publicly listed on the Canadian Securities Exchange (CSE) in 2018 under the ticker $HODL, Cypherpunk Holdings was a trailblazer in blockchain innovation and digital asset investment, originally focusing on privacy-focused cryptocurrencies and technology.",
          "Now, at SOL Strategies, we are dedicated to investing in the Solana ecosystem, managing staking validators, and driving value through strategic engagement in decentralized finance."
        ],
        members: [
          { title: "Leah Wald", description: "Chief Executive Officer <br> and Board Member", img: "/team1.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Max Kaplan", description: "Chief Technology Officer", img: "/team2.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Doug Harris", description: "Chief Financial Officer", img: "/team3.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Michael Hubbard", description: "Chief Strategy Officer and Board Member", img: "/team4.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Andrew McDonald", description: "Director of Operations", img: "/team5.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" }
        ]
      },
      {
        num: "02",
        title: "Board of Directors",
        color: "red",
        description: [],
        members: [
          { title: "Luis Berruga", description: "Chairman of the Board", img: "/team6.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Ungad Chadda", description: "Director", img: "/team7.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Rubsun Ho", description: "Director", img: "/team8.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Jose Calderon", description: "Director", img: "/team9.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Leah Wald", description: "Chief Executive Officer <br> and Board Member", img: "/team1.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Jon Matonis", description: "Chief Economist <br> and Board Member", img: "/team11.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" },
          { title: "Michael Hubbard", description: "Chief Strategy Officer and Board Member", img: "/team4.png", url: "#", linkedin: "https://linkedin.com/", twitter: "https://twitter.com/" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaImg = __nuxt_component_1$3;
      const _component_Text = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "team"
      }, _attrs))} data-v-2c01121a><div class="bg-bottom" data-v-2c01121a>`);
      _push(ssrRenderComponent(_component_MediaImg, {
        src: "/team-bg.png",
        alt: "Team Background"
      }, null, _parent));
      _push(`</div><div class="container" data-v-2c01121a><!--[-->`);
      ssrRenderList(teamGroups, (group, gIndex) => {
        _push(`<div class="about-grid" data-v-2c01121a><div class="title-container fadeinUp" data-v-2c01121a>`);
        _push(ssrRenderComponent(_component_Text, {
          class: "titleTeam",
          "data-split": "",
          "data-linereveal": "",
          "reveal-notrigger": "",
          "reveal-waitpreloader": "",
          "reveal-delay": 0.15
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="${ssrRenderClass([group.color, "num"])}" data-v-2c01121a${_scopeId}>${ssrInterpolate(group.num)}</span> ${ssrInterpolate(group.title)}`);
            } else {
              return [
                createVNode("span", {
                  class: ["num", group.color]
                }, toDisplayString(group.num), 3),
                createTextVNode(" " + toDisplayString(group.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="team-container" data-v-2c01121a>`);
        if (group.description && group.description.length) {
          _push(`<div class="description fadeinUp" data-v-2c01121a><!--[-->`);
          ssrRenderList(group.description, (desc, dIndex) => {
            _push(`<div class="description__text" data-v-2c01121a>`);
            _push(ssrRenderComponent(_component_Text, {
              class: "color-gray",
              variant: "body22",
              "data-split": "",
              "data-linereveal": "",
              "reveal-notrigger": "",
              "reveal-waitpreloader": "",
              "reveal-delay": 0.15 + dIndex * 0.07
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(desc)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(desc), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="team-grid" data-v-2c01121a><!--[-->`);
        ssrRenderList(group.members, (member, mIndex) => {
          var _a;
          _push(`<div class="team-item" data-v-2c01121a><div class="img" data-v-2c01121a><a${ssrRenderAttr("href", member.url)} data-v-2c01121a><img${ssrRenderAttr("src", member.img)}${ssrRenderAttr("alt", member.title)} data-v-2c01121a></a></div><div class="content" data-v-2c01121a><div class="name-container" data-v-2c01121a><h6 data-v-2c01121a><a${ssrRenderAttr("href", member.url)} data-v-2c01121a>${ssrInterpolate(member.title)}</a></h6><div class="social" data-v-2c01121a>`);
          if (member.linkedin) {
            _push(`<a${ssrRenderAttr("href", member.linkedin)} class="social-link" data-v-2c01121a>`);
            _push(ssrRenderComponent(_component_MediaImg, {
              src: "/linkedin.svg",
              alt: "Linkedin"
            }, null, _parent));
            _push(`</a>`);
          } else {
            _push(`<!---->`);
          }
          if (member.twitter) {
            _push(`<a${ssrRenderAttr("href", member.twitter)} class="social-link" data-v-2c01121a>`);
            _push(ssrRenderComponent(_component_MediaImg, {
              src: "/twitter.svg",
              alt: "Twitter"
            }, null, _parent));
            _push(`</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><a class="text"${ssrRenderAttr("href", member.url)} data-v-2c01121a>${(_a = member.description) != null ? _a : ""}</a><div class="linkTeam" data-v-2c01121a><a${ssrRenderAttr("href", member.url)} class="btn" data-v-2c01121a> Read bio `);
          _push(ssrRenderComponent(_component_MediaImg, {
            class: "bioArrow",
            src: "/bio.svg",
            alt: "Read bio"
          }, null, _parent));
          _push(`</a></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionAboutTeam.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-2c01121a"]]), { __name: "SectionAboutTeam" });

export { __nuxt_component_0 as _, __nuxt_component_1 as a, __nuxt_component_2 as b };
//# sourceMappingURL=SectionAboutTeam-BZh0aYIu.mjs.map
