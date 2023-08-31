import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = {};
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_divider = resolveComponent("u-divider");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基本案例"),
        createElementVNode("view", null, [
          createVNode(_component_u_divider, { text: "分割线" })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否虚线"),
        createElementVNode("view", null, [
          createVNode(_component_u_divider, {
            text: "分割线",
            dashed: true
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否细线"),
        createElementVNode("view", null, [
          createVNode(_component_u_divider, {
            text: "分割线",
            hairline: true
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否以点代替文字"),
        createElementVNode("view", null, [
          createVNode(_component_u_divider, {
            text: "分割线",
            dot: true
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "文本内容靠左"),
        createElementVNode("view", null, [
          createVNode(_component_u_divider, {
            text: "分割线",
            textPosition: "left"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "文本内容靠右"),
        createElementVNode("view", null, [
          createVNode(_component_u_divider, {
            text: "分割线",
            textPosition: "right"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义文本颜色"),
        createElementVNode("view", null, [
          createVNode(_component_u_divider, {
            text: "分割线",
            textColor: "#2979ff",
            lineColor: "#2979ff"
          })
        ])
      ])
    ])
  ]);
}
const divider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/divider/divider.nvue"]]);
export {
  divider as default
};
