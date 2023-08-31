import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createCommentVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-page__item__title": { "": { "color": "#909193", "backgroundColor": "#f3f4f6", "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "fontSize": 15 } }, "wu-page__item__title__slot-title": { "": { "color": "#3c9cff", "fontSize": 14 } }, "u-collapse-content": { "": { "color": "#909193", "fontSize": 14 } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    open(e) {
    },
    close(e) {
    },
    change(e) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_collapse_item = resolveComponent("u-collapse-item");
  const _component_u_collapse = resolveComponent("u-collapse");
  const _component_u_icon = resolveComponent("u-icon");
  const _component_u_gap = resolveComponent("u-gap");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "基础功能"),
        createVNode(_component_u_collapse, {
          onChange: $options.change,
          onClose: $options.close,
          onOpen: $options.open
        }, {
          default: withCtx(() => [
            createVNode(_component_u_collapse_item, {
              title: "文档指南",
              name: "Docs guide"
            }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_collapse_item, {
              title: "组件全面",
              name: "Variety components"
            }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_collapse_item, {
              title: "众多利器",
              name: "Numerous tools"
            }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onChange", "onClose", "onOpen"])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "展开和禁用"),
        createVNode(_component_u_collapse, { value: ["2"] }, {
          default: withCtx(() => [
            createVNode(_component_u_collapse_item, { title: "文档指南" }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_collapse_item, {
              disabled: "",
              title: "组件全面"
            }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_collapse_item, {
              name: "2",
              title: "众多利器"
            }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "手风琴模式"),
        createVNode(_component_u_collapse, { accordion: "" }, {
          default: withCtx(() => [
            createVNode(_component_u_collapse_item, { title: "文档指南" }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_collapse_item, { title: "组件全面" }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_collapse_item, { title: "众多利器" }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "移除下划线"),
        createVNode(_component_u_collapse, {
          accordion: "",
          border: false
        }, {
          default: withCtx(() => [
            createVNode(_component_u_collapse_item, { title: "文档指南" }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_collapse_item, { title: "组件全面" }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_collapse_item, { title: "众多利器" }, {
              default: withCtx(() => [
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createCommentVNode(' 微信小程序不支持，因为微信中不支持 <slot name="title" slot="title" />的写法 '),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "自定义标题和内容"),
        createVNode(_component_u_collapse, { accordion: "" }, {
          default: withCtx(() => [
            createVNode(_component_u_collapse_item, null, {
              default: withCtx(() => [
                createElementVNode("u-text", {
                  slot: "title",
                  class: "wu-page__item__title__slot-title"
                }, "文档指南"),
                createElementVNode("u-text", { class: "u-collapse-content" }, "涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")
              ]),
              _: 1
              /* STABLE */
            }),
            createCommentVNode(' <u-collapse-item\r\n					:isLink="false"\r\n				>\r\n					<text slot="title" class="wu-page__item__title__slot-title">文档指南</text>\r\n					<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>\r\n				</u-collapse-item> '),
            createVNode(_component_u_collapse_item, { title: "组件全面" }, {
              default: withCtx(() => [
                createVNode(_component_u_icon, {
                  name: "tags-fill",
                  size: "20",
                  slot: "icon"
                }),
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_collapse_item, { title: "众多利器" }, {
              default: withCtx(() => [
                createElementVNode("u-text", {
                  slot: "value",
                  class: "wu-page__item__title__slot-title"
                }, "自定义内容"),
                createElementVNode("u-text", { class: "u-collapse-content" }, "众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createVNode(_component_u_gap, { height: "50" })
    ])
  ]);
}
const collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/collapse/collapse.nvue"]]);
export {
  collapse as default
};
