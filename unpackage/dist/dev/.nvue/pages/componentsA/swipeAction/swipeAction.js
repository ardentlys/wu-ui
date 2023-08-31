import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createBlock, createCommentVNode, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-demo-block__title": { "": { "paddingTop": 10, "paddingRight": 0, "paddingBottom": 2, "paddingLeft": 15 } }, "swipe-action__content": { "": { "paddingTop": "25rpx", "paddingRight": 0, "paddingBottom": "25rpx", "paddingLeft": 0 } }, "swipe-action__content__text": { "": { "fontSize": 15, "color": "#303133", "paddingLeft": "30rpx" } } };
const _sfc_main = {
  data() {
    return {
      show1: true,
      moveX: 0,
      showText: "当前状态：关",
      showStatus: false,
      options1: [{
        text: "删除",
        style: {
          backgroundColor: "#f56c6c"
        }
      }],
      options2: [{
        text: "收藏",
        style: {
          backgroundColor: "#3c9cff"
        }
      }, {
        text: "删除",
        style: {
          backgroundColor: "#f56c6c"
        }
      }],
      options3: [{
        text: "收藏",
        icon: "star-fill",
        iconSize: "20",
        style: {
          backgroundColor: "#f9ae3d"
        }
      }],
      options4: [{
        text: "禁用状态",
        disabled: true,
        options: [
          {
            text: "置顶",
            style: {
              backgroundColor: "#3c9cff"
            }
          },
          {
            text: "取消",
            style: {
              backgroundColor: "#f9ae3d"
            }
          }
        ]
      }, {
        text: "正常状态",
        disabled: false,
        options: [
          {
            text: "置顶",
            style: {
              backgroundColor: "#3c9cff"
            }
          },
          {
            text: "取消",
            style: {
              backgroundColor: "#f9ae3d"
            }
          }
        ]
      }, {
        text: "自动关闭",
        disabled: false,
        options: [
          {
            text: "置顶",
            style: {
              backgroundColor: "#3c9cff"
            }
          },
          {
            text: "取消",
            style: {
              backgroundColor: "#f9ae3d"
            }
          }
        ]
      }],
      options5: [{
        icon: "trash-fill",
        style: {
          backgroundColor: "#f56c6c",
          width: "40px",
          height: "40px",
          borderRadius: "100px",
          margin: "0 6px"
        }
      }, {
        icon: "heart-fill",
        style: {
          backgroundColor: "#5ac725",
          width: "40px",
          height: "40px",
          borderRadius: "100px",
          margin: "0 6px"
        }
      }]
    };
  },
  methods: {
    click(index) {
      formatAppLog("log", "at pages/componentsA/swipeAction/swipeAction.nvue:193", "click", index);
      uni.showModal({
        title: "温馨提示",
        content: "确定要删除吗？",
        success: (res) => {
          if (res.confirm) {
            this.show1 = false;
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_swipe_action_item = resolveComponent("u-swipe-action-item");
  const _component_u_swipe_action = resolveComponent("u-swipe-action");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "演示案例"),
        createElementVNode("view", { class: "wu-page__swipe-action-item" }, [
          createVNode(_component_u_swipe_action, null, {
            default: withCtx(() => [
              $data.show1 ? (openBlock(), createBlock(_component_u_swipe_action_item, {
                key: 0,
                options: $data.options1,
                onClick: $options.click
              }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "swipe-action u-border-top u-border-bottom" }, [
                    createElementVNode("view", { class: "swipe-action__content" }, [
                      createElementVNode("u-text", { class: "swipe-action__content__text" }, "基础使用")
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["options", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "按钮组"),
        createElementVNode("view", { class: "wu-page__swipe-action-item" }, [
          createVNode(_component_u_swipe_action, null, {
            default: withCtx(() => [
              createVNode(_component_u_swipe_action_item, { options: $data.options2 }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "swipe-action u-border-top u-border-bottom" }, [
                    createElementVNode("view", { class: "swipe-action__content" }, [
                      createElementVNode("u-text", { class: "swipe-action__content__text" }, "两个按钮并列")
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["options"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "带图标"),
        createElementVNode("view", { class: "wu-page__swipe-action-item" }, [
          createVNode(_component_u_swipe_action, null, {
            default: withCtx(() => [
              createVNode(_component_u_swipe_action_item, { options: $data.options3 }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "swipe-action u-border-top u-border-bottom" }, [
                    createElementVNode("view", { class: "swipe-action__content" }, [
                      createElementVNode("u-text", { class: "swipe-action__content__text" }, "自定义图标")
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["options"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "组合使用"),
        createElementVNode("view", { class: "wu-page__swipe-action-item" }, [
          createVNode(_component_u_swipe_action, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.options4, (item, index) => {
                  return openBlock(), createBlock(_component_u_swipe_action_item, {
                    options: item.options,
                    disabled: item.disabled,
                    key: index
                  }, {
                    default: withCtx(() => [
                      createElementVNode(
                        "view",
                        {
                          class: normalizeClass(["swipe-action u-border-top", [index === $data.options4.length - 1 && "u-border-bottom"]])
                        },
                        [
                          createElementVNode("view", { class: "swipe-action__content" }, [
                            createElementVNode(
                              "u-text",
                              { class: "swipe-action__content__text" },
                              toDisplayString(item.text),
                              1
                              /* TEXT */
                            )
                          ])
                        ],
                        2
                        /* CLASS */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["options", "disabled"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义按钮形状"),
        createElementVNode("view", { class: "wu-page__swipe-action-item" }, [
          createVNode(_component_u_swipe_action, null, {
            default: withCtx(() => [
              createVNode(_component_u_swipe_action_item, { options: $data.options5 }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "swipe-action u-border-top u-border-bottom" }, [
                    createElementVNode("view", { class: "swipe-action__content" }, [
                      createElementVNode("u-text", { class: "swipe-action__content__text" }, "圆形按钮")
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["options"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ])
  ]);
}
const swipeAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/swipeAction/swipeAction.nvue"]]);
export {
  swipeAction as default
};
