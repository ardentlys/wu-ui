import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../wu-navbar.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../mixin.js";
import "../../../wu-icon.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "flex": 1, "backgroundColor": "#f3f4f6" } }, "wu-page__item__title": { "": { "color": "#909193", "backgroundColor": "#f3f4f6", "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "fontSize": 15 } }, "wu-page__item__title__slot-title": { "": { "color": "#3c9cff", "fontSize": 14 } }, "u-nav-slot": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "borderWidth": 0.5, "borderRadius": 100, "borderColor": "#dadbde", "paddingTop": 3, "paddingRight": 7, "paddingBottom": 3, "paddingLeft": 7, "opacity": 0.8 } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    navigateBack() {
      uni.navigateBack({
        delta: 1
      });
    },
    rightClick() {
      formatAppLog("log", "at pages/componentsC/navbar/navbar.nvue:81", "rightClick");
    },
    leftClick() {
      formatAppLog("log", "at pages/componentsC/navbar/navbar.nvue:84", "leftClick");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0);
  const _component_u_icon = resolveComponent("u-icon");
  const _component_u_line = resolveComponent("u-line");
  const _component_u_gap = resolveComponent("u-gap");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createCommentVNode(" 2.0.19支持autoBack，默认为false "),
      createVNode(_component_wu_navbar, {
        title: "导航栏",
        safeAreaInsetTop: "",
        fixed: "",
        placeholder: "",
        autoBack: true
      }),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "基础功能"),
        createVNode(_component_wu_navbar, {
          title: "个人中心",
          safeAreaInsetTop: false,
          fixed: false,
          onRightClick: $options.rightClick,
          onLeftClick: $options.leftClick
        }, null, 8, ["onRightClick", "onLeftClick"])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "自定义文本"),
        createVNode(_component_wu_navbar, {
          safeAreaInsetTop: false,
          title: "个人中心",
          fixed: false,
          "left-text": "返回",
          rightIcon: "map"
        })
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "自定义插槽"),
        createVNode(_component_wu_navbar, {
          leftText: "返回",
          fixed: false,
          title: "个人中心",
          safeAreaInsetTop: false
        }, {
          default: withCtx(() => [
            createElementVNode("view", {
              class: "u-nav-slot",
              slot: "left"
            }, [
              createVNode(_component_u_icon, {
                name: "arrow-left",
                size: "19"
              }),
              createVNode(_component_u_line, {
                direction: "column",
                hairline: false,
                length: "16",
                margin: "0 8px"
              }),
              createVNode(_component_u_icon, {
                name: "home",
                size: "20"
              })
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createVNode(_component_u_gap, { height: "50" })
    ])
  ]);
}
const navbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/navbar/navbar.nvue"]]);
export {
  navbar as default
};
