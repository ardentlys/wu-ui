import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-demo__tag-item": { "": { "flexDirection": "column", "flex": 1 } }, "m-t-10": { "": { "marginTop": 10 } } };
const _sfc_main = {
  data() {
    return {
      value1: "",
      value2: "天山雪莲",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
      value11: "",
      value12: "",
      value13: "",
      value14: "",
      value15: ""
    };
  },
  watch: {
    value1(newValue, oldValue) {
    }
  },
  methods: {
    change(e) {
      formatAppLog("log", "at pages/componentsB/search/search.nvue:200", e);
    },
    clickIcon() {
      uni.$u.toast("点击了左侧图标");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_search = resolveComponent("u-search");
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
            createVNode(_component_u_search, {
              modelValue: $data.value1,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
              "show-action": false,
              onChange: $options.change
            }, null, 8, ["modelValue", "onChange"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "设置初始值"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value2,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
              "show-action": false
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "搜索框形状"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value3,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
              "show-action": false,
              shape: "round"
            }, null, 8, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "wu-demo-block__content m-t-10" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value4,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
              "show-action": false,
              shape: "square"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "右侧控件"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value5,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event)
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "禁用输入框"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              placeholder: "输入框被禁用,可以监听点击事件进行跳转",
              disabled: "",
              "show-action": false
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "点击左侧图标"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value6,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.value6 = $event),
              "show-action": false,
              onClickIcon: $options.clickIcon
            }, null, 8, ["modelValue", "onClickIcon"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "搜索框内容水平对齐"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value7,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.value7 = $event),
              "show-action": false,
              "input-align": "left"
            }, null, 8, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "wu-demo-block__content m-t-10" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value8,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.value8 = $event),
              "show-action": false,
              "input-align": "center"
            }, null, 8, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "wu-demo-block__content m-t-10" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value9,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.value9 = $event),
              "show-action": false,
              "input-align": "right"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value10,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.value10 = $event),
              "show-action": false,
              borderColor: "rgb(230, 230, 230)",
              bgColor: "#fff"
            }, null, 8, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "wu-demo-block__content m-t-10" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value11,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.value11 = $event),
              "show-action": false,
              "search-icon-color": "#FF0000"
            }, null, 8, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "wu-demo-block__content m-t-10" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value12,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.value12 = $event),
              "show-action": false,
              "placeholder-color": "#FF0000"
            }, null, 8, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "wu-demo-block__content m-t-10" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value13,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.value13 = $event),
              "show-action": false,
              color: "#FF0000"
            }, null, 8, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "wu-demo-block__content m-t-10" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value14,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.value14 = $event),
              label: "手机",
              "show-action": false
            }, null, 8, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "wu-demo-block__content m-t-10" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_search, {
              modelValue: $data.value15,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $data.value15 = $event),
              "search-icon": "scan",
              "show-action": false
            }, null, 8, ["modelValue"])
          ])
        ])
      ])
    ])
  ]);
}
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/search/search.nvue"]]);
export {
  search as default
};
