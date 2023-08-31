import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_gap = resolveComponent("u-gap");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基本案列"),
        createElementVNode("view", { class: "wu-page__gap-item" }, [
          createVNode(_component_u_gap, { bgColor: "#f3f4f6" })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义颜色"),
        createElementVNode("view", { class: "wu-page__gap-item" }, [
          createVNode(_component_u_gap, { bgColor: "#2979ff" })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义高度"),
        createElementVNode("view", { class: "wu-page__gap-item" }, [
          createVNode(_component_u_gap, {
            bgColor: "#f3f4f6",
            height: "40"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义上下边距"),
        createElementVNode("view", { class: "wu-page__gap-item" }, [
          createVNode(_component_u_gap, {
            bgColor: "#f3f4f6",
            marginTop: "20",
            marginBottom: "20"
          })
        ])
      ])
    ])
  ]);
}
const gap = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/gap/gap.nvue"]]);
export {
  gap as default
};
