import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "album": { "": { "flexDirection": "row", "alignItems": "flex-start" } }, "album__avatar": { "": { "backgroundColor": "#f3f4f6", "paddingTop": 5, "paddingRight": 5, "paddingBottom": 5, "paddingLeft": 5, "borderRadius": 3 } }, "album__content": { "": { "marginLeft": 10, "flex": 1 } } };
const _sfc_main = {
  data() {
    return {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 1,
      list: ["未付款", "待评价", "已付款"],
      // 或者如下，也可以配置keyName参数修改对象键值
      // list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],
      current: 1
    };
  },
  methods: {
    change1(index) {
      this.current1 = index;
    },
    change2(index) {
      this.current2 = index;
    },
    change3(index) {
      this.current3 = index;
    },
    change4(index) {
      this.current4 = index;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_subsection = resolveComponent("u-subsection");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础使用"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_subsection, {
            list: $data.list,
            mode: "subsection",
            current: $data.current1,
            onChange: $options.change1
          }, null, 8, ["list", "current", "onChange"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "按钮模式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_subsection, {
            list: $data.list,
            mode: "button",
            current: $data.current2,
            onChange: $options.change2
          }, null, 8, ["list", "current", "onChange"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "更换主题"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_subsection, {
            list: $data.list,
            mode: "subsection",
            current: $data.current3,
            activeColor: "#f56c6c",
            onChange: $options.change3
          }, null, 8, ["list", "current", "onChange"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "默认位置"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_subsection, {
            list: $data.list,
            mode: "button",
            current: $data.current4,
            activeColor: "#f9ae3d",
            onChange: $options.change4
          }, null, 8, ["list", "current", "onChange"])
        ])
      ])
    ])
  ]);
}
const subsection = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/subsection/subsection.nvue"]]);
export {
  subsection as default
};
