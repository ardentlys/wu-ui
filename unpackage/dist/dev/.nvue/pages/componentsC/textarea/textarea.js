import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _sfc_main = {
  data() {
    return {
      value1: "",
      value2: "统计字数",
      value3: "",
      value4: "",
      value5: ""
    };
  },
  methods: {
    formatter(value) {
      return value.replace(/[^0-9]/ig, "");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u__textarea = resolveComponent("u--textarea");
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
          createVNode(_component_u__textarea, {
            modelValue: $data.value1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
            placeholder: "请输入内容"
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "字数统计"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u__textarea, {
            modelValue: $data.value2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
            placeholder: "请输入内容",
            count: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自动增高"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u__textarea, {
            modelValue: $data.value3,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
            placeholder: "请输入内容",
            autoHeight: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "禁用状态"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u__textarea, {
            modelValue: $data.value4,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
            placeholder: "文本域已被禁用",
            disabled: "",
            count: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "下划线模式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u__textarea, {
            modelValue: $data.value5,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event),
            placeholder: "请输入内容",
            border: "bottom"
          }, null, 8, ["modelValue"])
        ])
      ])
    ])
  ]);
}
const textarea = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/textarea/textarea.nvue"]]);
export {
  textarea as default
};
