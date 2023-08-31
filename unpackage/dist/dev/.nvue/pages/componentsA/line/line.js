import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-demo__line-item": { "": { "marginTop": 5 } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_line = resolveComponent("u-line");
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
        createElementVNode("view", { class: "wu-page__line-item" }, [
          createVNode(_component_u_line)
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义颜色"),
        createElementVNode("view", { class: "wu-page__line-item" }, [
          createVNode(_component_u_line, { color: "#2979ff" })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义长度"),
        createElementVNode("view", { class: "wu-page__line-item" }, [
          createVNode(_component_u_line, { length: "200" })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义方向"),
        createElementVNode("view", { class: "wu-page__line-item" }, [
          createVNode(_component_u_line, {
            length: "30",
            color: "#2979ff",
            direction: "col"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否显示1px粗线条"),
        createElementVNode("view", { class: "wu-page__line-item" }, [
          createVNode(_component_u_line, { hairline: false })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "线条与上下左右元素的间距"),
        createElementVNode("view", { class: "wu-page__line-item" }, [
          createVNode(_component_u_line, { margin: "20" })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否虚线"),
        createElementVNode("view", { class: "wu-page__line-item" }, [
          createVNode(_component_u_line, {
            color: "#2979ff",
            dashed: true
          })
        ])
      ])
    ])
  ]);
}
const line = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/line/line.nvue"]]);
export {
  line as default
};
