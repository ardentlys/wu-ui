import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { resolveComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../wu-icon.js";
import "../../../mixin.js";
import "../../../wu-line.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "transition": { "": { "backgroundColor": "#3c9cff" } } };
const _sfc_main = {
  data() {
    return {
      mode: "",
      show: false,
      style: {
        position: "fixed",
        top: `${uni.$u.sys().windowHeight / 2 - 50}px`,
        left: `${uni.$u.sys().windowWidth / 2 - 50}px`,
        width: "120px",
        height: "120px",
        backgroundColor: "#1989fa"
      },
      list: [
        {
          mode: "fade",
          title: "淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fade.png"
        },
        {
          mode: "fade-up",
          title: "上滑淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeUp.png"
        },
        {
          mode: "zoom",
          title: "缩放",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/zoom.png"
        },
        {
          mode: "fade-zoom",
          title: "缩放淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeZoom.png"
        },
        {
          mode: "fade-down",
          title: "下滑淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeDown.png"
        },
        {
          mode: "fade-left",
          title: "左滑淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeLeft.png"
        },
        {
          mode: "fade-right",
          title: "右滑淡入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/fadeRight.png"
        },
        {
          mode: "slide-up",
          title: "上滑进入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/slideUp.png"
        },
        {
          mode: "slide-down",
          title: "下滑进入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/slideDown.png"
        },
        {
          mode: "slide-left",
          title: "左滑进入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/slideLeft.png"
        },
        {
          mode: "slide-right",
          title: "右滑进入",
          iconUrl: "https://cdn.uviewui.com/uview/demo/transition/slideRight.png"
        }
      ]
    };
  },
  mixins: [uni.$u.mixin],
  methods: {
    openTransition(mode) {
      this.mode = mode;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 1500);
    },
    click() {
    },
    beforeEnter() {
    },
    enter() {
    },
    afterEnter() {
    },
    beforeLeave() {
    },
    leave() {
    },
    afterLeave() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_gap = resolveComponent("u-gap");
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_u_transition = resolveComponent("u-transition");
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_u_gap, {
        height: "20",
        bgColor: "#fff"
      }),
      createVNode(_component_wu_cell_group, { border: "" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.list, (item, index) => {
              return openBlock(), createBlock(_component_wu_cell, {
                titleStyle: { fontWeight: 500 },
                onClick: ($event) => $options.openTransition(item.mode),
                title: item.title,
                key: index,
                clickable: ""
              }, {
                default: withCtx(() => [
                  createElementVNode("u-image", {
                    slot: "icon",
                    class: "wu-cell-icon",
                    src: item.iconUrl,
                    mode: "widthFix"
                  }, null, 8, ["src"])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["onClick", "title"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          createVNode(_component_u_transition, {
            mode: $data.mode,
            show: $data.show,
            "custom-style": $data.style,
            onClick: $options.click,
            onBeforeEnter: $options.beforeEnter,
            onEnter: $options.enter,
            onAfterEnter: $options.afterEnter,
            onBeforeLeave: $options.beforeLeave,
            onLeave: $options.leave,
            onAfterLeave: $options.afterLeave
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "transition" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["mode", "show", "custom-style", "onClick", "onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const transition = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/transition/transition.nvue"]]);
export {
  transition as default
};
