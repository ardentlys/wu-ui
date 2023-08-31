import { openBlock, createElementBlock, createElementVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15 } }, "wu-page__item__title": { "": { "fontSize": 15, "color": "#606266", "marginTop": 16, "marginBottom": 4 } }, "wu-page__item__color-box": { "": { "flexDirection": "row", "justifyContent": "space-between" } }, "wu-page__item__color-box__item": { "": { "width": "160rpx", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "paddingTop": 5, "paddingRight": 0, "paddingBottom": 5, "paddingLeft": 0, "borderRadius": 3 } }, "wu-page__item__color-box__item__title": { "": { "fontSize": 13, "color": "#ffffff" } }, "wu-page__item__color-box__item__value": { "": { "fontSize": 14, "color": "#ffffff" } }, "wu-tips-color": { "": { "color": "#909193" } } };
const _sfc_main = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", {
          class: "wu-page__item__title",
          style: { "margin-top": "0" }
        }, "主色调"),
        createElementVNode("view", { class: "wu-page__item__color-box" }, [
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#3c9cff" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Primary"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#3c9cff")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#398ade" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#398ade")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#9acafc" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#9acafc")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#ecf5ff" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#ecf5ff")
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "Error"),
        createElementVNode("view", { class: "wu-page__item__color-box" }, [
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#f56c6c" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Error"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#f56c6c")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#e45656" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#e45656")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#f7b2b2" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#f7b2b2")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#fef0f0" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#fef0f0")
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "Warning"),
        createElementVNode("view", { class: "wu-page__item__color-box" }, [
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#f9ae3d" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Warning"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#f9ae3d")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#f1a532" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#f1a532")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#f9d39b" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#f9d39b")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#fdf6ec" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#fdf6ec")
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "Info"),
        createElementVNode("view", { class: "wu-page__item__color-box" }, [
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#909399" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Info"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#909399")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#767a82" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#767a82")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#c4c6c9" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#c4c6c9")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#f4f4f5" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#f4f4f5")
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "Success"),
        createElementVNode("view", { class: "wu-page__item__color-box" }, [
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#5ac725" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Success"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#5ac725")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#53c21d" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#53c21d")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#a9e08f" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#a9e08f")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#f5fff0" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#f5fff0")
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "文字颜色"),
        createElementVNode("view", { class: "wu-page__item__color-box" }, [
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#303133" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "主要文字"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#303133")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#606266" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "常规文字"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#606266")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#909399" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "次要文字"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#909399")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#c0c4cc" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "占位文字"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#c0c4cc")
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "边框颜色"),
        createElementVNode("view", { class: "wu-page__item__color-box" }, [
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#9a9998" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "一级边框"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#9a9998")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#b4b3b1" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "二级边框"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#b4b3b1")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#ceccca" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title" }, "三级边框"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value" }, "#ceccca")
          ]),
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#e7e6e4" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "四级边框"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#e7e6e4")
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "背景颜色"),
        createElementVNode("view", { class: "wu-page__item__color-box" }, [
          createElementVNode("view", {
            class: "wu-page__item__color-box__item",
            style: { "background-color": "#f3f4f6" }
          }, [
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "背景颜色"),
            createElementVNode("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#f3f4f6")
          ])
        ])
      ])
    ])
  ]);
}
const color = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/color/color.nvue"]]);
export {
  color as default
};
