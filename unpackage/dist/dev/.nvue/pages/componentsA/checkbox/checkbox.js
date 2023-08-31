import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = {};
const _sfc_main = {
  data() {
    return {
      // 基本案列数据
      checkboxList1: [
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
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue1: ["苹果", "橙子"],
      // 自定义形状数据
      checkboxList2: [
        {
          name: "西游记",
          disabled: false
        },
        {
          name: "红楼梦",
          disabled: false
        },
        {
          name: "三国演义",
          disabled: false
        },
        {
          name: "水浒传",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue2: ["西游记", "红楼梦", "三国演义", "水浒传"],
      // 是否禁用数据
      checkboxList3: [
        {
          name: "冬瓜",
          disabled: false
        },
        {
          name: "西瓜",
          disabled: false
        },
        {
          name: "黄瓜",
          disabled: false
        },
        {
          name: "傻瓜",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue3: ["傻瓜"],
      // 是否禁止点击提示语选中复选框数据
      checkboxList4: [
        {
          name: "黄庭坚",
          disabled: false
        },
        {
          name: "欧阳修",
          disabled: false
        },
        {
          name: "苏小宝",
          disabled: false
        },
        {
          name: "王安石",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue4: ["黄庭坚", "欧阳修", "王安石"],
      //自定义颜色数据
      checkboxList5: [
        {
          name: "红色",
          disabled: false
        },
        {
          name: "黄色",
          disabled: false
        },
        {
          name: "绿色",
          disabled: false
        },
        {
          name: "蓝色",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue5: ["绿色"],
      //横向排列形式数据
      checkboxList6: [
        {
          name: "小鸟",
          disabled: false
        },
        {
          name: "游艇",
          disabled: false
        },
        {
          name: "轮船",
          disabled: false
        },
        {
          name: "飞机",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue6: ["游艇", "轮船"],
      //横向两端排列形式
      checkboxList7: [
        {
          name: "汽车",
          disabled: false
        },
        {
          name: "蒸汽机",
          disabled: false
        },
        {
          name: "猪肉",
          disabled: false
        },
        {
          name: "抄手",
          disabled: false
        }
      ],
      // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
      checkboxValue7: ["汽车", "蒸汽机"]
    };
  },
  watch: {
    checkboxValue1(newValue, oldValue) {
    }
  },
  methods: {
    checkboxChange(n) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_checkbox = resolveComponent("u-checkbox");
  const _component_u_checkbox_group = resolveComponent("u-checkbox-group");
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
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_u_checkbox_group, {
              modelValue: $data.checkboxValue1,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.checkboxValue1 = $event),
              placement: "column",
              onChange: $options.checkboxChange
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.checkboxList1, (item, index) => {
                    return openBlock(), createBlock(_component_u_checkbox, {
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
            }, 8, ["modelValue", "onChange"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义形状"),
        createElementVNode("u-text", { class: "u-block__title" }, "中国四大名著是？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_u_checkbox_group, {
              modelValue: $data.checkboxValue2,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.checkboxValue2 = $event),
              placement: "column",
              onChange: $options.checkboxChange,
              shape: "square"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.checkboxList2, (item, index) => {
                    return openBlock(), createBlock(_component_u_checkbox, {
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
            }, 8, ["modelValue", "onChange"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否禁用"),
        createElementVNode("u-text", { class: "u-block__title" }, "下面什么东西不能吃？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_u_checkbox_group, {
              modelValue: $data.checkboxValue3,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.checkboxValue3 = $event),
              placement: "column",
              onChange: $options.checkboxChange
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.checkboxList3, (item, index) => {
                    return openBlock(), createBlock(_component_u_checkbox, {
                      customStyle: { marginBottom: "8px" },
                      key: index,
                      label: item.name,
                      name: item.name,
                      disabled: index === 0
                    }, null, 8, ["label", "name", "disabled"]);
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
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "是否禁止点击提示语选中复选框"),
        createElementVNode("u-text", { class: "u-block__title" }, "北宋四大家是谁？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_u_checkbox_group, {
              modelValue: $data.checkboxValue4,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.checkboxValue4 = $event),
              placement: "column",
              onChange: $options.checkboxChange,
              labelDisabled: true
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.checkboxList4, (item, index) => {
                    return openBlock(), createBlock(_component_u_checkbox, {
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
            }, 8, ["modelValue", "onChange"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义颜色"),
        createElementVNode("u-text", { class: "u-block__title" }, "哪个颜色最好看？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_u_checkbox_group, {
              modelValue: $data.checkboxValue5,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.checkboxValue5 = $event),
              placement: "column",
              onChange: $options.checkboxChange,
              activeColor: "#19be6b"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.checkboxList5, (item, index) => {
                    return openBlock(), createBlock(_component_u_checkbox, {
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
            }, 8, ["modelValue", "onChange"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "横向排列形式"),
        createElementVNode("u-text", { class: "u-block__title" }, "什么东西不能飞？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_u_checkbox_group, {
              modelValue: $data.checkboxValue6,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.checkboxValue6 = $event),
              onChange: $options.checkboxChange
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.checkboxList6, (item, index) => {
                    return openBlock(), createBlock(_component_u_checkbox, {
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
            }, 8, ["modelValue", "onChange"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "横向两端排列形式"),
        createElementVNode("u-text", { class: "u-block__title" }, "什么东西不能吃？"),
        createElementVNode("view", null, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_u_checkbox_group, {
              modelValue: $data.checkboxValue7,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.checkboxValue7 = $event),
              onChange: $options.checkboxChange,
              borderBottom: true,
              placement: "column",
              iconPlacement: "right"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.checkboxList7, (item, index) => {
                    return openBlock(), createBlock(_component_u_checkbox, {
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
            }, 8, ["modelValue", "onChange"])
          ])
        ])
      ])
    ])
  ]);
}
const checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/checkbox/checkbox.nvue"]]);
export {
  checkbox as default
};
