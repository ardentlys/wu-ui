import { openBlock, createElementBlock, createElementVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = {};
const _sfc_main = {
  data() {
    return {
      value1: 30,
      value2: 30,
      value3: 30,
      value4: 30,
      value5: 30
    };
  },
  watch: {
    value1(n) {
    }
  },
  methods: {
    moving(value) {
    },
    click(value) {
    },
    end(value) {
    },
    start(value) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
        createElementVNode("view", { class: "wu-page__slide-item" }, [
          createElementVNode("u-slider", {
            modelValue: $data.value1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event)
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义范围(0—50)"),
        createElementVNode("view", { class: "wu-page__slide-item" }, [
          createElementVNode("u-slider", {
            modelValue: $data.value2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
            showValue: "",
            min: "0",
            max: "50"
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "指定步长(每次步进5)"),
        createElementVNode("view", { class: "wu-page__slide-item" }, [
          createElementVNode("u-slider", {
            modelValue: $data.value4,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value4 = $event),
            step: 5
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义样式"),
        createElementVNode("view", { class: "wu-page__slide-item" }, [
          createElementVNode("u-slider", {
            modelValue: $data.value5,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value5 = $event),
            activeColor: "#deab8a",
            blockColor: "#f47920"
          }, null, 8, ["modelValue"])
        ])
      ])
    ])
  ]);
}
const slider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/slider/slider.nvue"]]);
export {
  slider as default
};
