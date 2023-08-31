import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page__tag-item": { "": { "marginRight": 30 } }, "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } } };
const _sfc_main = {
  data() {
    return {
      value1: false,
      value2: true,
      value3: false,
      value4: true,
      value5: false,
      value6: true,
      value7: false,
      value8: true,
      value9: true,
      value10: true,
      value11: false,
      value12: true,
      value13: true
    };
  },
  watch: {
    value1(newValue, oldValue) {
      formatAppLog("log", "at pages/componentsB/switch/switch.nvue:144", "v-model", newValue);
    }
  },
  methods: {
    change(e) {
      formatAppLog("log", "at pages/componentsB/switch/switch.nvue:149", "change", e);
    },
    asyncChange(e) {
      uni.showModal({
        content: e ? "确定要打开吗" : "确定要关闭吗",
        success: (res) => {
          if (res.confirm) {
            this.value13 = e;
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_switch = resolveComponent("u-switch");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础功能"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value1,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
              onChange: $options.change
            }, null, 8, ["modelValue", "onChange"])
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value2,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event)
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "加载中"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value3,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
              loading: ""
            }, null, 8, ["modelValue"])
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value4,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
              loading: ""
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "禁用状态"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value5,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event),
              disabled: ""
            }, null, 8, ["modelValue"])
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value6,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.value6 = $event),
              disabled: ""
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义尺寸"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value7,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.value7 = $event),
              size: "28"
            }, null, 8, ["modelValue"])
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value8,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.value8 = $event),
              size: "20"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义颜色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value9,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.value9 = $event),
              activeColor: "#f56c6c",
              loading: ""
            }, null, 8, ["modelValue"])
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value10,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.value10 = $event),
              activeColor: "#5ac725",
              loading: ""
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义样式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              space: 2,
              modelValue: $data.value11,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.value11 = $event),
              activeColor: "#f56c6c",
              inactiveColor: "rgb(230, 230, 230)"
            }, null, 8, ["modelValue"])
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              space: "2",
              modelValue: $data.value12,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.value12 = $event),
              activeColor: "#f9ae3d",
              inactiveColor: "rgb(230, 230, 230)"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "异步控制"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_switch, {
              modelValue: $data.value13,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.value13 = $event),
              asyncChange: "",
              onChange: $options.asyncChange
            }, null, 8, ["modelValue", "onChange"])
          ])
        ])
      ])
    ])
  ]);
}
const _switch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/switch/switch.nvue"]]);
export {
  _switch as default
};
