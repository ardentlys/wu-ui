import { resolveComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = {};
const _sfc_main = {
  data() {
    return {};
  },
  mixins: [uni.$u.mixin],
  methods: {
    navigateBack() {
      uni.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u__text = resolveComponent("u--text");
  const _component_u_button = resolveComponent("u-button");
  const _component_u_sticky = resolveComponent("u-sticky");
  const _component_u_gap = resolveComponent("u-gap");
  const _component_u_divider = resolveComponent("u-divider");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createCommentVNode(' <wu-navbar\r\n			title="吸顶"\r\n			@leftClick="navigateBack"\r\n			safeAreaInsetTop\r\n			fixed\r\n			placeholder\r\n		></wu-navbar> '),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础使用"),
        createVNode(_component_u__text, {
          type: "content",
          text: "滚动页面,即可看到下方的按钮会吸顶。"
        }),
        createVNode(_component_u__text, {
          type: "warning",
          text: "目前由于nvue的bug,设置sticky的top值无效。"
        })
      ]),
      createVNode(_component_u_sticky, null, {
        default: withCtx(() => [
          createVNode(_component_u_button, {
            text: "吸顶按钮",
            type: "success"
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_u_gap, {
        bgColor: "#fff",
        height: "1500px"
      }),
      createVNode(_component_u_divider, { text: "已到底部" })
    ])
  ]);
}
const sticky = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/sticky/sticky.nvue"]]);
export {
  sticky as default
};
