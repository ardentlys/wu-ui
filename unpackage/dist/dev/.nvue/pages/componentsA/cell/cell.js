import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as __easycom_4 } from "../../../wu-gap.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../wu-icon.js";
import "../../../mixin.js";
import "../../../wu-line.js";
const _style_0 = { "cell-page": { "": { "paddingBottom": 20 } }, "cell-box__title": { "": { "fontSize": 14, "color": "#8f9ca2", "marginTop": 20, "marginRight": 0, "marginBottom": 0, "marginLeft": 15 } }, "cell-box__block": { "": { "marginTop": 20 } }, "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-page__item__title": { "": { "color": "#909193", "backgroundColor": "#f3f4f6", "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "fontSize": 15 } }, "wu-page__item__title__slot-title": { "": { "color": "#3c9cff", "fontSize": 14 } }, "wu-slot-title": { "": { "flexDirection": "row", "alignItems": "center" } }, "wu-cell-text": { "": { "fontSize": 15, "lineHeight": 22, "color": "#303133", "marginRight": 5 } }, "wu-slot-value": { "": { "lineHeight": 17, "textAlign": "center", "fontSize": 10, "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "height": 17, "color": "#FFFFFF", "borderRadius": 100, "backgroundColor": "#f56c6c" } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    click() {
      formatAppLog("log", "at pages/componentsA/cell/cell.nvue:137", "Cell is clicked.");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_wu_tag = resolveComponent("wu-tag");
  const _component_wu_gap = resolveEasycom(resolveDynamicComponent("wu-gap"), __easycom_4);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "cell-page" }, [
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "基础功能"),
        createVNode(_component_wu_cell_group, null, {
          default: withCtx(() => [
            createVNode(_component_wu_cell, {
              title: "WU-UI",
              value: "内容",
              isLink: true
            }),
            createVNode(_component_wu_cell, {
              title: "如虎添翼",
              value: "内容",
              label: "增加buff, 变得更强"
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "自定义图标/图片"),
        createVNode(_component_wu_cell_group, null, {
          default: withCtx(() => [
            createVNode(_component_wu_cell, {
              title: "单元格",
              icon: "lock-fill"
            }),
            createVNode(_component_wu_cell, {
              title: "单元格",
              icon: "https://cdn.uviewui.com/uview/example/tag.png"
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "自定义大小"),
        createVNode(_component_wu_cell_group, null, {
          default: withCtx(() => [
            createVNode(_component_wu_cell, {
              size: "large",
              title: "单元格",
              value: "内容",
              isLink: ""
            }),
            createVNode(_component_wu_cell, {
              size: "large",
              title: "单元格",
              value: "内容",
              label: "描述信息"
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "显示右箭头"),
        createVNode(_component_wu_cell_group, null, {
          default: withCtx(() => [
            createVNode(_component_wu_cell, {
              title: "单元格",
              value: "组件",
              isLink: ""
            }),
            createVNode(_component_wu_cell, {
              title: "单元格",
              value: "工具",
              "arrow-direction": "up",
              isLink: ""
            }),
            createVNode(_component_wu_cell, {
              title: "单元格",
              value: "模板",
              "arrow-direction": "down",
              isLink: ""
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "跳转页面"),
        createVNode(_component_wu_cell_group, null, {
          default: withCtx(() => [
            createVNode(_component_wu_cell, {
              title: "打开标签页",
              isLink: "",
              url: "/pages/componentsB/tag/tag"
            }),
            createVNode(_component_wu_cell, {
              title: "打开徽标页",
              isLink: "",
              url: "/pages/componentsB/badge/badge"
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "右侧内容垂直居中"),
        createVNode(_component_wu_cell_group, null, {
          default: withCtx(() => [
            createVNode(_component_wu_cell, {
              title: "单元格",
              value: "内容",
              label: "描述信息",
              center: ""
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "自定义插槽"),
        createVNode(_component_wu_cell_group, null, {
          default: withCtx(() => [
            createVNode(_component_wu_cell, { value: "内容" }, {
              title: withCtx(() => [
                createElementVNode("view", { class: "wu-slot-title" }, [
                  createElementVNode("u-text", { class: "wu-cell-text" }, "单元格"),
                  createVNode(_component_wu_tag, {
                    text: "标签",
                    plain: "",
                    size: "mini",
                    type: "warning"
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_wu_cell, {
              title: "单元格",
              isLink: ""
            }, {
              value: withCtx(() => [
                createElementVNode("u-text", { class: "wu-slot-value" }, "99")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createVNode(_component_wu_gap, { height: "30" })
    ])
  ]);
}
const cell = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/cell/cell.nvue"]]);
export {
  cell as default
};
