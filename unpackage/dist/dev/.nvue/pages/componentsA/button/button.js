import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_3 } from "../../../wu-button.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../wu-loading-icon.js";
import "../../../mixin.js";
import "../../../wu-icon.js";
const _style_0 = { "wu-page__button-item": { "": { "marginTop": 0, "marginRight": 15, "marginBottom": 15, "marginLeft": 0 } }, "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } } };
const _sfc_main = {
  data() {
    return {
      // type: 'default',
      // disabled: false
    };
  },
  onLoad() {
    setTimeout(() => {
      this.type = "primary";
      this.disabled = true;
    }, 2e3);
  },
  methods: {
    click() {
      formatAppLog("log", "at pages/componentsA/button/button.nvue:312", "click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_button = resolveEasycom(resolveDynamicComponent("wu-button"), __easycom_3);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "按钮类型"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "默认按钮",
              size: "normal",
              type: "info",
              onClick: $options.click
            }, null, 8, ["onClick"])
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "成功按钮",
              size: "normal",
              type: "success"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "危险按钮",
              size: "normal",
              type: "error"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "主要按钮",
              size: "normal",
              type: "primary"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "警告按钮",
              size: "normal",
              type: "warning"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "镂空按钮"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "镂空按钮",
              size: "normal",
              type: "info",
              plain: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "镂空按钮",
              size: "normal",
              type: "success",
              plain: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "镂空按钮",
              size: "normal",
              type: "error",
              plain: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "镂空按钮",
              size: "normal",
              type: "primary",
              plain: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "镂空按钮",
              size: "normal",
              type: "warning",
              plain: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "细边按钮"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "细边按钮",
              size: "normal",
              type: "info",
              plain: "",
              hairline: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "细边按钮",
              size: "normal",
              type: "success",
              plain: "",
              hairline: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "细边按钮",
              size: "normal",
              type: "error",
              plain: "",
              hairline: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "细边按钮",
              size: "normal",
              type: "primary",
              plain: "",
              hairline: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "细边按钮",
              size: "normal",
              type: "warning",
              plain: "",
              hairline: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "禁用按钮"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              disabled: "",
              text: "禁用按钮",
              size: "normal",
              type: "info"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              disabled: "",
              text: "禁用按钮",
              size: "normal",
              type: "success"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              disabled: "",
              text: "禁用按钮",
              size: "normal",
              type: "error"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              disabled: "",
              text: "禁用按钮",
              size: "normal",
              type: "primary"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              disabled: "",
              text: "禁用按钮",
              size: "normal",
              type: "warning"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "加载中"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              loadingText: "加载中",
              size: "normal",
              loading: "",
              loadingMode: "circle",
              type: "success"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              class: "button-layout__item",
              loadingText: "加载中",
              size: "normal",
              loading: "",
              type: "error"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "按钮图标&按钮形状"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "按钮图标",
              size: "normal",
              icon: "map",
              plain: "",
              type: "warning"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "按钮图标",
              size: "normal",
              plain: "",
              shape: "circle",
              type: "success"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义颜色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "渐变色按钮",
              size: "normal",
              color: "linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "渐变色按钮",
              size: "normal",
              color: "linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "青绿色按钮",
              size: "normal",
              color: "rgb(10, 185, 156)"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义大小"),
        createElementVNode("view", {
          class: "wu-demo-block__content",
          style: { "padding-bottom": "15px", "flex-direction": "column", "align-items": "stretch", "flex-wrap": "nowrap" }
        }, [
          createVNode(_component_wu_button, {
            text: "超大尺寸",
            size: "large",
            type: "success"
          })
        ]),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "普通尺寸",
              size: "normal",
              type: "error"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              text: "小型尺寸",
              size: "small",
              type: "primary"
            })
          ]),
          createElementVNode("view", { class: "wu-page__button-item" }, [
            createVNode(_component_wu_button, {
              class: "button-layout__item",
              text: "超小尺寸",
              size: "mini",
              type: "warning"
            })
          ])
        ])
      ])
    ])
  ]);
}
const button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/button/button.nvue"]]);
export {
  button as default
};
