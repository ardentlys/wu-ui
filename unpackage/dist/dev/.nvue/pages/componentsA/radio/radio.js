import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page__style": { "": { "fontSize": 16, "color": "#606266", "marginBottom": "20rpx", "fontWeight": "bold" } }, "wu-page__title": { "": { "fontSize": 16, "color": "#606266", "marginBottom": "20rpx" } } };
const _sfc_main = {
  data() {
    return {
      // 基本案列数据
      radiolist1: [
        {
          name: "苹果",
          disabled: false
        },
        {
          name: "香蕉",
          disabled: false
        },
        {
          name: "橙子",
          disabled: false
        },
        {
          name: "榴莲",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue1: "苹果",
      // 自定义形状数据
      radiolist2: [
        {
          name: "李白",
          disabled: false
        },
        {
          name: "韩信",
          disabled: false
        },
        {
          name: "马可波罗",
          disabled: false
        },
        {
          name: "百里守约",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue2: "李白",
      // 是否禁用数据
      radiolist3: [
        {
          name: "苹果",
          disabled: false
        },
        {
          name: "香蕉",
          disabled: false
        },
        {
          name: "菠萝",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue3: "苹果",
      // 是否禁止点击提示语选中单选框数据
      radiolist4: [
        {
          name: "3倍镜",
          disabled: false
        },
        {
          name: "4倍镜",
          disabled: false
        },
        {
          name: "6倍镜",
          disabled: false
        },
        {
          name: "8倍镜",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue4: "6倍镜",
      //自定义颜色数据
      radiolist5: [
        {
          name: "红色",
          disabled: false
        },
        {
          name: "绿色",
          disabled: false
        },
        {
          name: "蓝色",
          disabled: false
        },
        {
          name: "黄色",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue5: "绿色",
      //横向排列形式数据
      radiolist6: [
        {
          name: "妲己",
          disabled: false
        },
        {
          name: "虞姬",
          disabled: false
        },
        {
          name: "不知火舞",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue6: "妲己",
      //横向两端排列形式数据
      radiolist7: [
        {
          name: "可爱",
          disabled: false
        },
        {
          name: "一般",
          disabled: false
        },
        {
          name: "不可爱",
          disabled: false
        }
      ],
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue7: "可爱"
    };
  },
  watch: {
    radiovalue1(newValue, oldValue) {
      formatAppLog("log", "at pages/componentsA/radio/radio.nvue:301", "v-model", newValue);
    }
  },
  methods: {
    groupChange(n) {
      formatAppLog("log", "at pages/componentsA/radio/radio.nvue:306", "groupChange", n);
    },
    radioChange(n) {
      formatAppLog("log", "at pages/componentsA/radio/radio.nvue:309", "radioChange", n);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_radio = resolveComponent("u-radio");
  const _component_u_radio_group = resolveComponent("u-radio-group");
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
        createElementVNode("u-text", { class: "u-block__title" }, "苹果、香蕉和橙子哪个最甜？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_u_radio_group, {
              modelValue: $data.radiovalue1,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.radiovalue1 = $event),
              placement: "column",
              onChange: $options.groupChange
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.radiolist1, (item, index) => {
                    return openBlock(), createBlock(_component_u_radio, {
                      customStyle: { marginBottom: "8px" },
                      key: index,
                      label: item.name,
                      name: item.name,
                      onChange: $options.radioChange
                    }, null, 8, ["label", "name", "onChange"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onChange"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义形状"),
        createElementVNode("u-text", { class: "u-block__title" }, "王者荣耀谁最帅？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_u_radio_group, {
              modelValue: $data.radiovalue2,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.radiovalue2 = $event),
              placement: "column",
              shape: "square"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.radiolist2, (item, index) => {
                    return openBlock(), createBlock(_component_u_radio, {
                      customStyle: { marginBottom: "8px" },
                      key: index,
                      label: item.name,
                      name: item.name
                    }, null, 8, ["label", "name"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否禁用"),
        createElementVNode("u-text", { class: "u-block__title" }, "苹果、香蕉和菠萝哪个最甜？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_u_radio_group, {
              modelValue: $data.radiovalue3,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.radiovalue3 = $event),
              placement: "column"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.radiolist3, (item, index) => {
                    return openBlock(), createBlock(_component_u_radio, {
                      customStyle: { marginBottom: "8px" },
                      key: index,
                      label: item.name,
                      name: item.name,
                      disabled: !index
                    }, null, 8, ["label", "name", "disabled"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "纵向排列"),
        createElementVNode("u-text", { class: "u-block__title" }, "狙击枪用哪个倍镜最好？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_u_radio_group, {
              modelValue: $data.radiovalue4,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.radiovalue4 = $event),
              placement: "column",
              labelDisabled: true
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.radiolist4, (item, index) => {
                    return openBlock(), createBlock(_component_u_radio, {
                      customStyle: { marginBottom: "8px" },
                      key: index,
                      label: item.name,
                      name: item.name
                    }, null, 8, ["label", "name"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义颜色？"),
        createElementVNode("u-text", { class: "u-block__title" }, "你比较喜欢下面哪个颜色？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_u_radio_group, {
              modelValue: $data.radiovalue5,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.radiovalue5 = $event),
              placement: "column",
              activeColor: "#19be6b"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.radiolist5, (item, index) => {
                    return openBlock(), createBlock(_component_u_radio, {
                      customStyle: { marginBottom: "8px" },
                      key: index,
                      label: item.name,
                      name: item.name
                    }, null, 8, ["label", "name"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "横向排列形式？"),
        createElementVNode("u-text", { class: "u-block__title" }, "王者荣耀哪个英雄最美？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_u_radio_group, {
              modelValue: $data.radiovalue6,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.radiovalue6 = $event),
              placement: "row"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.radiolist6, (item, index) => {
                    return openBlock(), createBlock(_component_u_radio, {
                      customStyle: { marginRight: "16px" },
                      key: index,
                      label: item.name,
                      name: item.name
                    }, null, 8, ["label", "name"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "横向两端排列形式？"),
        createElementVNode("u-text", { class: "u-block__title" }, "你觉得阿木木可爱吗？"),
        createElementVNode("view", null, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_u_radio_group, {
              modelValue: $data.radiovalue7,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.radiovalue7 = $event),
              borderBottom: true,
              placement: "column",
              iconPlacement: "right"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.radiolist7, (item, index) => {
                    return openBlock(), createBlock(_component_u_radio, {
                      customStyle: { marginBottom: "16px" },
                      key: index,
                      label: item.name,
                      name: item.name
                    }, null, 8, ["label", "name"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ])
      ])
    ])
  ]);
}
const radio = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/radio/radio.nvue"]]);
export {
  radio as default
};
