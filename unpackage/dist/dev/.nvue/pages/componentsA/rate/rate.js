import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = {};
const _sfc_main = {
  data() {
    return {
      //自定义星星的个数
      value: 3,
      value1: 2,
      // 自定义选择星星颜色个数
      activeColorValue: 3,
      // 是否允许半星的个数
      HalfValue: 3.5,
      // 自定义图标星星个数
      activeIconValue: 3
    };
  },
  watch: {
    value(newValue, oldValue) {
    }
  },
  methods: {
    change(e) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_rate = resolveComponent("u-rate");
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
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_rate, { size: "20" })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义选中星星数量"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_rate, {
              size: "20",
              modelValue: $data.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event),
              onChange: $options.change
            }, null, 8, ["modelValue", "onChange"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义星星大小"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_rate, {
              size: "30",
              count: "4"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否禁用评分"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__rate-item" }, [
            createVNode(_component_u_rate, {
              size: "20",
              disabled: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否只读评分"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__rate-item" }, [
            createVNode(_component_u_rate, {
              size: "20",
              readonly: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义选中星星颜色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__rate-item" }, [
            createVNode(_component_u_rate, {
              size: "20",
              modelValue: $data.activeColorValue,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.activeColorValue = $event),
              activeColor: "#2979ff"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义未选中星星颜色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__rate-item" }, [
            createVNode(_component_u_rate, {
              size: "20",
              modelValue: $data.value1,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value1 = $event),
              inactiveColor: "#2979ff"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "禁止触摸选择"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__rate-item" }, [
            createVNode(_component_u_rate, {
              size: "20",
              touchable: false
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "允许触摸选择"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__rate-item" }, [
            createVNode(_component_u_rate, {
              size: "20",
              touchable: true
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否允许半星"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__rate-item" }, [
            createVNode(_component_u_rate, {
              size: "20",
              modelValue: $data.HalfValue,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.HalfValue = $event),
              allowHalf: true,
              onChange: $options.change
            }, null, 8, ["modelValue", "onChange"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义选中的图标"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__rate-item" }, [
            createVNode(_component_u_rate, {
              size: "20",
              modelValue: $data.activeIconValue,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.activeIconValue = $event),
              inactiveIcon: "heart",
              activeIcon: "heart-fill"
            }, null, 8, ["modelValue"])
          ])
        ])
      ])
    ])
  ]);
}
const rate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/rate/rate.nvue"]]);
export {
  rate as default
};
