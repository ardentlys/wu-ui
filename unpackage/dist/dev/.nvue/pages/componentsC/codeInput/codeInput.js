import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _sfc_main = {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "123",
      value10: "34"
    };
  },
  methods: {
    change(e) {
      formatAppLog("log", "at pages/componentsC/codeInput/codeInput.nvue:142", "change", e);
    },
    finish(e) {
      formatAppLog("log", "at pages/componentsC/codeInput/codeInput.nvue:145", "finish", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_code_input = resolveComponent("u-code-input");
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
          createVNode(_component_u_code_input, {
            modelValue: $data.value1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
            maxlength: 4,
            onChange: $options.change,
            onFinish: $options.finish
          }, null, 8, ["modelValue", "onChange", "onFinish"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "横线模式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_code_input, {
            modelValue: $data.value2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
            mode: "line",
            maxlength: 4,
            bold: true
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "设置长度"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_code_input, {
            modelValue: $data.value3,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
            maxlength: 6
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "设置间距"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_code_input, {
            modelValue: $data.value4,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
            mode: "box",
            space: 0,
            maxlength: 4
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "细边框"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_code_input, {
            modelValue: $data.value5,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event),
            mode: "box",
            space: 0,
            maxlength: 4,
            hairline: ""
          }, null, 8, ["modelValue"])
        ]),
        createElementVNode("view", {
          class: "wu-demo-block__content",
          style: { "margin-top": "10px" }
        }, [
          createVNode(_component_u_code_input, {
            modelValue: $data.value6,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.value6 = $event),
            mode: "line",
            space: 10,
            maxlength: 4,
            hairline: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "调整颜色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_code_input, {
            modelValue: $data.value7,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.value7 = $event),
            mode: "box",
            space: 0,
            maxlength: 4,
            hairline: "",
            color: "#f56c6c",
            borderColor: "#f56c6c"
          }, null, 8, ["modelValue"]),
          createElementVNode("view", {
            class: "wu-demo-block__content",
            style: { "margin-top": "10px" }
          }, [
            createVNode(_component_u_code_input, {
              modelValue: $data.value10,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.value10 = $event),
              mode: "line",
              size: "30",
              maxlength: 4,
              hairline: "",
              color: "#3c9cff",
              borderColor: "#3c9cff"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "点模式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_code_input, {
            modelValue: $data.value8,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.value8 = $event),
            mode: "box",
            dot: "",
            space: 0,
            maxlength: 4,
            hairline: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "预置内容"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_code_input, {
            modelValue: $data.value9,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.value9 = $event),
            mode: "box",
            space: 0,
            maxlength: 4,
            hairline: "",
            fontSize: "17"
          }, null, 8, ["modelValue"])
        ])
      ])
    ])
  ]);
}
const codeInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/codeInput/codeInput.nvue"]]);
export {
  codeInput as default
};
