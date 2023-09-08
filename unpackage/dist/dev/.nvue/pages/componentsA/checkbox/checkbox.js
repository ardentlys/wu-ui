var _a, _b, _c, _d;
import { _ as __easycom_0$1 } from "../../../wu-icon.js";
import { resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, withModifiers, createElementVNode, renderSlot, createVNode, toDisplayString, withCtx, Fragment, renderList, createBlock } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { m as mpMixin, a as mixin } from "../../../mixin.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const props$1 = {
  props: {
    // checkbox的名称
    name: {
      type: [String, Number, Boolean],
      default: ""
    },
    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: "square"
    },
    // 整体的大小
    size: {
      type: [String, Number],
      default: ""
    },
    // 是否默认选中
    checked: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: ""
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: ""
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: ""
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: ""
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: ""
    },
    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number],
      default: ""
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: ""
    },
    // label的颜色
    labelColor: {
      type: String,
      default: ""
    },
    // 是否禁止点击提示语选中复选框
    labelDisabled: {
      type: [String, Boolean],
      default: ""
    },
    // 自定义样式
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.checkbox
  }
};
const _style_0$2 = { "wu-checkbox": { "": { "overflow": "hidden", "flexDirection": "row", "alignItems": "center" } }, "wu-checkbox-label--left": { "": { "flexDirection": "row" } }, "wu-checkbox-label--right": { "": { "flexDirection": "row-reverse", "justifyContent": "space-between" } }, "wu-checkbox__icon-wrap": { "": { "color": "rgba(0,0,0,0)", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "marginRight": 6, "fontSize": 6, "borderWidth": 1, "borderColor": "#c8c9cc", "borderStyle": "solid" } }, "wu-checkbox__icon-wrap--circle": { "": { "borderRadius": 100 } }, "wu-checkbox__icon-wrap--square": { "": { "borderRadius": 3 } }, "wu-checkbox__icon-wrap--checked": { "": { "color": "#ffffff", "backgroundColor": "#FF0000", "borderColor": "#2979ff" } }, "wu-checkbox__icon-wrap--disabled": { "": { "!backgroundColor": "#ebedf0" } }, "wu-checkbox__icon-wrap--disabled--checked": { "": { "!color": "#c8c9cc" } }, "wu-checkbox__label": { "": { "marginLeft": 5, "marginRight": 12, "color": "#606266", "fontSize": 15 } }, "wu-checkbox__label--disabled": { "": { "color": "#c8c9cc" } } };
const _sfc_main$2 = {
  name: "wu-checkbox",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {
      isChecked: false,
      // 父组件的默认值，因为头条小程序不支持在computed中使用this.parent.shape的形式
      // 故只能使用如此方法
      parentData: {
        iconSize: 12,
        labelDisabled: null,
        disabled: null,
        shape: "square",
        activeColor: null,
        inactiveColor: null,
        size: 18,
        modelValue: null,
        iconColor: null,
        placement: "row",
        borderBottom: false,
        iconPlacement: "left"
      }
    };
  },
  computed: {
    // 是否禁用，如果父组件u-raios-group禁用的话，将会忽略子组件的配置
    elDisabled() {
      return this.disabled !== "" ? this.disabled : this.parentData.disabled !== null ? this.parentData.disabled : false;
    },
    // 是否禁用label点击
    elLabelDisabled() {
      return this.labelDisabled !== "" ? this.labelDisabled : this.parentData.labelDisabled !== null ? this.parentData.labelDisabled : false;
    },
    // 组件尺寸，对应size的值，默认值为21px
    elSize() {
      return this.size ? this.size : this.parentData.size ? this.parentData.size : 21;
    },
    // 组件的勾选图标的尺寸，默认12px
    elIconSize() {
      return this.iconSize ? this.iconSize : this.parentData.iconSize ? this.parentData.iconSize : 12;
    },
    // 组件选中激活时的颜色
    elActiveColor() {
      return this.activeColor ? this.activeColor : this.parentData.activeColor ? this.parentData.activeColor : "#2979ff";
    },
    // 组件选未中激活时的颜色
    elInactiveColor() {
      return this.inactiveColor ? this.inactiveColor : this.parentData.inactiveColor ? this.parentData.inactiveColor : "#c8c9cc";
    },
    // label的颜色
    elLabelColor() {
      return this.labelColor ? this.labelColor : this.parentData.labelColor ? this.parentData.labelColor : "#606266";
    },
    // 组件的形状
    elShape() {
      return this.shape ? this.shape : this.parentData.shape ? this.parentData.shape : "circle";
    },
    // label大小
    elLabelSize() {
      return this.$w.addUnit(this.labelSize ? this.labelSize : this.parentData.labelSize ? this.parentData.labelSize : "15");
    },
    elIconColor() {
      const iconColor = this.iconColor ? this.iconColor : this.parentData.iconColor ? this.parentData.iconColor : "#ffffff";
      if (this.elDisabled) {
        return this.isChecked ? this.elInactiveColor : "transparent";
      } else {
        return this.isChecked ? iconColor : "transparent";
      }
    },
    iconClasses() {
      let classes = [];
      classes.push("wu-checkbox__icon-wrap--" + this.elShape);
      if (this.elDisabled) {
        classes.push("wu-checkbox__icon-wrap--disabled");
      }
      if (this.isChecked && this.elDisabled) {
        classes.push("wu-checkbox__icon-wrap--disabled--checked");
      }
      return classes;
    },
    iconWrapStyle() {
      const style = {};
      style.backgroundColor = this.isChecked && !this.elDisabled ? this.elActiveColor : "#ffffff";
      style.borderColor = this.isChecked && !this.elDisabled ? this.elActiveColor : this.elInactiveColor;
      style.width = this.$w.addUnit(this.elSize);
      style.height = this.$w.addUnit(this.elSize);
      if (this.parentData.iconPlacement === "right") {
        style.marginRight = 0;
      }
      return style;
    },
    checkboxStyle() {
      const style = {};
      if (this.parentData.borderBottom && this.parentData.placement === "row") {
        this.$w.error("检测到您将borderBottom设置为true，需要同时将wu-checkbox-group的placement设置为column才有效");
      }
      if (this.parentData.borderBottom && this.parentData.placement === "column") {
        style.paddingBottom = "8px";
        style.borderBottom = "2rpx solid #dadbde";
      }
      return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.updateParentData();
      if (!this.parent) {
        this.$w.error("wu-checkbox必须搭配wu-checkbox-group组件使用");
      }
      if (this.checked) {
        this.isChecked = true;
      } else if (this.$w.test.array(this.parentData.modelValue)) {
        this.isChecked = this.parentData.modelValue.some((item) => {
          return item === this.name;
        });
      }
    },
    updateParentData() {
      this.getParentData("wu-checkbox-group");
    },
    // 横向两端排列时，点击组件即可触发选中事件
    wrapperClickHandler(e) {
      this.parentData.iconPlacement === "right" && this.iconClickHandler(e);
    },
    // 点击图标
    iconClickHandler(e) {
      this.preventEvent(e);
      if (!this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    // 点击label
    labelClickHandler(e) {
      this.preventEvent(e);
      if (!this.elLabelDisabled && !this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    emitEvent() {
      this.$emit("change", this.isChecked);
      this.$nextTick(() => {
        this.$w.formValidate(this, "change");
      });
    },
    // 改变组件选中状态
    // 这里的改变的依据是，更改本组件的checked值为true，同时通过父组件遍历所有wu-checkbox实例
    // 将本组件外的其他wu-checkbox的checked都设置为false(都被取消选中状态)，因而只剩下一个为选中状态
    setRadioCheckedStatus() {
      this.isChecked = !this.isChecked;
      this.emitEvent();
      typeof this.parent.unCheckedOther === "function" && this.parent.unCheckedOther(this);
    }
  },
  watch: {
    checked() {
      this.isChecked = this.checked;
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["wu-checkbox", [`wu-checkbox-label--${$data.parentData.iconPlacement}`, $data.parentData.borderBottom && $data.parentData.placement === "column" && "wu-border-bottom"]]),
      style: normalizeStyle([$options.checkboxStyle]),
      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args), ["stop"])),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["wu-checkbox__icon-wrap", $options.iconClasses]),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.iconClickHandler && $options.iconClickHandler(...args), ["stop"])),
          style: normalizeStyle([$options.iconWrapStyle])
        },
        [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            createVNode(_component_wu_icon, {
              class: "wu-checkbox__icon-wrap__icon",
              name: "checkbox-mark",
              size: $options.elIconSize,
              color: $options.elIconColor
            }, null, 8, ["size", "color"])
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      createElementVNode(
        "u-text",
        {
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.labelClickHandler && $options.labelClickHandler(...args), ["stop"])),
          style: normalizeStyle({
            color: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
            fontSize: $options.elLabelSize,
            lineHeight: $options.elLabelSize
          })
        },
        toDisplayString(_ctx.label),
        5
        /* TEXT, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-checkbox/components/wu-checkbox/wu-checkbox.vue"]]);
const props = {
  props: {
    // 标识符
    name: {
      type: String,
      default: ""
    },
    // 绑定的值
    modelValue: {
      type: [Array],
      default: () => {
        return [];
      }
    },
    // 形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: "square"
    },
    // 是否禁用全部checkbox
    disabled: {
      type: Boolean,
      default: false
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: "#c8c9cc"
    },
    // 整个组件的尺寸，默认px
    size: {
      type: [String, Number],
      default: 18
    },
    // 布局方式，row-横向，column-纵向
    placement: {
      type: String,
      default: "row"
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: 14
    },
    // label的字体颜色
    labelColor: {
      type: [String],
      default: "#303133"
    },
    // 是否禁止点击文本操作
    labelDisabled: {
      type: Boolean,
      default: false
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: "#ffffff"
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: 12
    },
    // 勾选图标的对齐方式，left-左边，right-右边
    iconPlacement: {
      type: String,
      default: "left"
    },
    // 竖向配列时，是否显示下划线
    borderBottom: {
      type: Boolean,
      default: false
    },
    ...(_d = (_c = uni.$w) == null ? void 0 : _c.props) == null ? void 0 : _d.checkboxGroup
  }
};
const _style_0$1 = { "wu-checkbox-group--row": { "": { "flexDirection": "row" } }, "wu-checkbox-group--column": { "": { "flexDirection": "column" } } };
const _sfc_main$1 = {
  name: "wu-checkbox-group",
  mixins: [mpMixin, mixin, props],
  computed: {
    // 这里computed的变量，都是子组件wu-checkbox-group需要用到的，由于头条小程序的兼容性差异，子组件无法实时监听父组件参数的变化
    // 所以需要手动通知子组件，这里返回一个parentData变量，供watch监听，在其中去通知每一个子组件重新从父组件(wu-checkbox-group)
    // 拉取父组件新的变化后的参数
    parentData() {
      return [
        this.value,
        this.modelValue,
        this.disabled,
        this.inactiveColor,
        this.activeColor,
        this.size,
        this.labelDisabled,
        this.shape,
        this.iconSize,
        this.borderBottom,
        this.placement
      ];
    },
    bemClass() {
      return this.bem("checkbox-group", ["placement"]);
    }
  },
  watch: {
    // 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
    parentData() {
      if (this.children.length) {
        this.children.map((child) => {
          typeof child.init === "function" && child.init();
        });
      }
    }
  },
  data() {
    return {};
  },
  created() {
    this.children = [];
  },
  methods: {
    // 将其他的checkbox设置为未选中的状态
    unCheckedOther(childInstance) {
      const values = [];
      this.children.map((child) => {
        if (child.isChecked) {
          values.push(child.name);
        }
      });
      this.$emit("change", values);
      this.$emit("update:modelValue", values);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["wu-checkbox-group", $options.bemClass]),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-checkbox/components/wu-checkbox-group/wu-checkbox-group.vue"]]);
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
      // wu-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
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
      // wu-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
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
      // wu-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
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
      // wu-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
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
      // wu-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
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
      // wu-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
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
      // wu-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
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
  const _component_wu_checkbox = resolveEasycom(resolveDynamicComponent("wu-checkbox"), __easycom_0);
  const _component_wu_checkbox_group = resolveEasycom(resolveDynamicComponent("wu-checkbox-group"), __easycom_1);
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
        createElementVNode("u-text", { class: "wu-block__title" }, "苹果、香蕉和橙子哪个最甜？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_wu_checkbox_group, {
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
                    return openBlock(), createBlock(_component_wu_checkbox, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "中国四大名著是？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_wu_checkbox_group, {
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
                    return openBlock(), createBlock(_component_wu_checkbox, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "下面什么东西不能吃？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_wu_checkbox_group, {
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
                    return openBlock(), createBlock(_component_wu_checkbox, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "北宋四大家是谁？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_wu_checkbox_group, {
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
                    return openBlock(), createBlock(_component_wu_checkbox, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "哪个颜色最好看？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_wu_checkbox_group, {
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
                    return openBlock(), createBlock(_component_wu_checkbox, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "什么东西不能飞？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_wu_checkbox_group, {
              modelValue: $data.checkboxValue6,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.checkboxValue6 = $event),
              onChange: $options.checkboxChange
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.checkboxList6, (item, index) => {
                    return openBlock(), createBlock(_component_wu_checkbox, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "什么东西不能吃？"),
        createElementVNode("view", null, [
          createElementVNode("view", { class: "wu-page__checkbox-item" }, [
            createVNode(_component_wu_checkbox_group, {
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
                    return openBlock(), createBlock(_component_wu_checkbox, {
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
