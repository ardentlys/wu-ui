import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "box": { "": { "justifyContent": "space-between" } }, "wu-page__tag-item": { "": { "marginRight": 40, "marginTop": 10 } }, "badge-box": { "": { "width": 45, "height": 45, "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomLeftRadius": 3, "borderBottomRightRadius": 3, "backgroundColor": "#E6E6E6" } }, "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } } };
const _sfc_main = {
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_badge = resolveComponent("u-badge");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "直角边形状"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 1500,
              shape: "horn"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "徽标数显示方式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 5132,
              numberType: "ellipsis"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 1011,
              numberType: "overflow"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 1500,
              numberType: "limit"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 45187,
              numberType: "limit"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "显示圆点"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 1011,
              numberType: "overflow",
              isDot: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义主题"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 9,
              type: "error"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 9,
              type: "warning"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 9,
              type: "success"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 9,
              type: "primary"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "反转色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 9,
              type: "error",
              inverted: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 1532,
              inverted: "",
              type: "warning"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 12,
              inverted: "",
              type: "success"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_badge, {
              value: 999,
              inverted: "",
              type: "primary"
            })
          ])
        ])
      ])
    ])
  ]);
}
const badge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/badge/badge.nvue"]]);
export {
  badge as default
};
