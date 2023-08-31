import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createCommentVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "u-skeleton-slot": { "": { "flexDirection": "row", "alignItems": "flex-start" } }, "u-skeleton-slot__image": { "": { "width": 40, "height": 40, "borderRadius": 100 } }, "u-skeleton-slot__content": { "": { "marginLeft": 10, "flex": 1 } } };
const _sfc_main = {
  data() {
    return {
      switch1: true,
      switch2: false
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_skeleton = resolveComponent("u-skeleton");
  const _component_u_switch = resolveComponent("u-switch");
  const _component_u_gap = resolveComponent("u-gap");
  const _component_u__text = resolveComponent("u--text");
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
          createVNode(_component_u_skeleton, {
            rows: "3",
            title: "",
            loading: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义段落行数"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_skeleton, {
            rows: "2",
            title: "",
            loading: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "设置段落宽度"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_skeleton, {
            rows: "2",
            title: "",
            rowsWidth: ["100%", "35%"],
            loading: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "设置段落高度"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_skeleton, {
            rows: "3",
            title: "",
            rowsWidth: ["100%", "100%", "100%"],
            rowsHeight: ["18px", "18px", "80px"],
            loading: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否开启动画"),
        createVNode(_component_u_switch, {
          modelValue: $data.switch1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.switch1 = $event),
          space: "2",
          inactiveColor: "#e6e6e6"
        }, null, 8, ["modelValue"]),
        createVNode(_component_u_gap, {
          height: "15",
          bgColor: "#fff"
        }),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_skeleton, {
            animate: $data.switch1,
            rows: "3",
            title: "",
            loading: ""
          }, null, 8, ["animate"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "展示头像"),
        createVNode(_component_u_gap, {
          height: "15",
          bgColor: "#fff"
        }),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_skeleton, {
            animate: $data.switch1,
            rows: "3",
            title: "",
            loading: "",
            avatar: ""
          }, null, 8, ["animate"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "切换状态"),
        createVNode(_component_u_switch, {
          modelValue: $data.switch2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.switch2 = $event),
          space: "2",
          inactiveColor: "#e6e6e6"
        }, null, 8, ["modelValue"]),
        createVNode(_component_u_gap, {
          height: "15",
          bgColor: "#fff"
        }),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_skeleton, {
            rows: "2",
            title: "",
            loading: $data.switch2,
            avatar: "",
            rowsHeight: "14"
          }, {
            default: withCtx(() => [
              createCommentVNode(" 需要在外部多嵌套一层占位view，否则在nvue下会导致样式失效 "),
              createElementVNode("view", null, [
                createElementVNode("view", { class: "u-skeleton-slot" }, [
                  createElementVNode("u-image", {
                    src: "/static/uview/common/logo.png",
                    class: "u-skeleton-slot__image"
                  }),
                  createElementVNode("view", { class: "u-skeleton-slot__content" }, [
                    createVNode(_component_u__text, {
                      text: "利剑出鞘,一统江湖",
                      type: "main",
                      size: "16"
                    }),
                    createVNode(_component_u__text, {
                      type: "tips",
                      size: "14",
                      customStyle: "margin-top: 5px",
                      text: "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用"
                    })
                  ])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ]),
        createVNode(_component_u_gap, {
          height: "50",
          bgColor: "transparent"
        })
      ])
    ])
  ]);
}
const skeleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/skeleton/skeleton.nvue"]]);
export {
  skeleton as default
};
