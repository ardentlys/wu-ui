import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, Fragment, renderList } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page__tag-item": { "": { "marginRight": 20 } }, "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } } };
const _sfc_main = {
  data() {
    return {
      close1: true,
      close2: true,
      close3: true,
      radios: [
        {
          checked: true
        },
        {
          checked: false
        },
        {
          checked: false
        }
      ],
      checkboxs: [
        {
          checked: true
        },
        {
          checked: false
        },
        {
          checked: false
        }
      ]
    };
  },
  methods: {
    radioClick(name) {
      this.radios.map((item, index) => {
        item.checked = index === name ? true : false;
      });
    },
    checkboxClick(name) {
      this.checkboxs[name].checked = !this.checkboxs[name].checked;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_tag = resolveComponent("u-tag");
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
            createVNode(_component_u_tag, {
              text: "标签",
              plain: "",
              size: "mini",
              type: "warning"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义主题"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, { text: "标签" })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "warning"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "success"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "error"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "圆形标签"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              plain: "",
              shape: "circle"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "warning",
              shape: "circle"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "镂空标签"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              plain: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "warning",
              plain: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "success",
              plain: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "error",
              plain: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "镂空带背景色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              plain: "",
              plainFill: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "warning",
              plain: "",
              plainFill: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "success",
              plain: "",
              plainFill: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "error",
              plain: "",
              plainFill: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义尺寸"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              plain: "",
              size: "mini"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "warning"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "success",
              plain: "",
              size: "large"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "可关闭标签"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              size: "mini",
              closable: "",
              show: $data.close1,
              onClose: _cache[0] || (_cache[0] = ($event) => $data.close1 = false)
            }, null, 8, ["show"])
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "warning",
              closable: "",
              show: $data.close2,
              onClose: _cache[1] || (_cache[1] = ($event) => $data.close2 = false)
            }, null, 8, ["show"])
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "success",
              plain: "",
              size: "large",
              closable: "",
              show: $data.close3,
              onClose: _cache[2] || (_cache[2] = ($event) => $data.close3 = false)
            }, null, 8, ["show"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "带图片和图标"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              size: "mini",
              icon: "map",
              plain: ""
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "warning",
              icon: "tags-fill"
            })
          ]),
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_tag, {
              text: "标签",
              type: "success",
              plain: "",
              size: "large",
              icon: "https://cdn.uviewui.com/uview/example/tag.png"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "单选标签"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.radios, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: "wu-page__tag-item",
                key: index
              }, [
                createVNode(_component_u_tag, {
                  text: `选项${index + 1}`,
                  plain: !item.checked,
                  type: "warning",
                  name: index,
                  onClick: $options.radioClick
                }, null, 8, ["text", "plain", "name", "onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "多选标签"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.checkboxs, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: "wu-page__tag-item",
                key: index
              }, [
                createVNode(_component_u_tag, {
                  text: `选项${index + 1}`,
                  plain: !item.checked,
                  type: "warning",
                  name: index,
                  onClick: $options.checkboxClick
                }, null, 8, ["text", "plain", "name", "onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ])
  ]);
}
const tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/tag/tag.nvue"]]);
export {
  tag as default
};
