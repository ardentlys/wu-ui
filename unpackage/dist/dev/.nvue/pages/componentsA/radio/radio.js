var _a, _b, _c, _d;
import { r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_0$1 } from "../../../wu-icon.js";
import { resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, withModifiers, normalizeStyle, createElementVNode, renderSlot, createVNode, toDisplayString, withCtx, Fragment, renderList, createBlock } from "vue";
import { m as mpMixin, a as mixin } from "../../../mixin.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const props$1 = {
  props: {
    // radio的名称
    name: {
      type: [String, Number, Boolean],
      default: ""
    },
    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: ""
    },
    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: ""
    },
    // 是否禁止点击提示语选中单选框
    labelDisabled: {
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
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: ""
    },
    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number],
      default: ""
    },
    // label的颜色
    labelColor: {
      type: String,
      default: ""
    },
    // 整体的大小
    size: {
      type: [String, Number],
      default: ""
    },
    // 自定义样式
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.radio
  }
};
const _style_0$2 = { "wu-radio": { "": { "overflow": "hidden", "flexDirection": "row", "alignItems": "center" } }, "wu-radio-label--left": { "": { "flexDirection": "row" } }, "wu-radio-label--right": { "": { "flexDirection": "row-reverse", "justifyContent": "space-between" } }, "wu-radio__icon-wrap": { "": { "color": "rgba(0,0,0,0)", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "marginRight": 6, "fontSize": 20, "borderWidth": 1, "borderColor": "#c8c9cc", "borderStyle": "solid" } }, "wu-radio__icon-wrap--circle": { "": { "borderRadius": 100 } }, "wu-radio__icon-wrap--square": { "": { "borderRadius": 3 } }, "wu-radio__icon-wrap--checked": { "": { "color": "#ffffff", "backgroundColor": "#FF0000", "borderColor": "#2979ff" } }, "wu-radio__icon-wrap--disabled": { "": { "!backgroundColor": "#ebedf0" } }, "wu-radio__icon-wrap--disabled--checked": { "": { "!color": "#c8c9cc" } }, "wu-radio__label": { "": { "marginLeft": 5, "marginRight": 12, "color": "#606266", "fontSize": 15 } }, "wu-radio__label--disabled": { "": { "color": "#c8c9cc" } } };
const _sfc_main$2 = {
  name: "wu-radio",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {
      checked: false,
      // 当你看到这段代码的时候，
      // 父组件的默认值，因为头条小程序不支持在computed中使用this.parent.shape的形式
      // 故只能使用如此方法
      parentData: {
        iconSize: 12,
        labelDisabled: null,
        disabled: null,
        shape: null,
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
        return this.checked ? this.elInactiveColor : "transparent";
      } else {
        return this.checked ? iconColor : "transparent";
      }
    },
    iconClasses() {
      let classes = [];
      classes.push("wu-radio__icon-wrap--" + this.elShape);
      if (this.elDisabled) {
        classes.push("wu-radio__icon-wrap--disabled");
      }
      if (this.checked && this.elDisabled) {
        classes.push("wu-radio__icon-wrap--disabled--checked");
      }
      return classes;
    },
    iconWrapStyle() {
      const style = {};
      style.backgroundColor = this.checked && !this.elDisabled ? this.elActiveColor : "#ffffff";
      style.borderColor = this.checked && !this.elDisabled ? this.elActiveColor : this.elInactiveColor;
      style.width = this.$w.addUnit(this.elSize);
      style.height = this.$w.addUnit(this.elSize);
      if (this.parentData.iconPlacement === "right") {
        style.marginRight = 0;
      }
      return style;
    },
    radioStyle() {
      const style = {};
      if (this.parentData.borderBottom && this.parentData.placement === "row") {
        this.$w.error("检测到您将borderBottom设置为true，需要同时将wu-radio-group的placement设置为column才有效");
      }
      if (this.parentData.borderBottom && this.parentData.placement === "column") {
        style.paddingBottom = this.$w.os() === "ios" ? "12px" : "8px";
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
        this.$w.error("wu-radio必须搭配wu-radio-group组件使用");
      }
      this.checked = this.name === this.parentData.modelValue;
    },
    updateParentData() {
      this.getParentData("wu-radio-group");
    },
    // 点击图标
    iconClickHandler(e) {
      this.preventEvent(e);
      if (!this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    // 横向两端排列时，点击组件即可触发选中事件
    wrapperClickHandler(e) {
      this.parentData.iconPlacement === "right" && this.iconClickHandler(e);
    },
    // 点击label
    labelClickHandler(e) {
      this.preventEvent(e);
      if (!this.elLabelDisabled && !this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    emitEvent() {
      if (!this.checked) {
        this.$emit("change", this.name);
        this.$nextTick(() => {
          this.$w.formValidate(this, "change");
        });
      }
    },
    // 改变组件选中状态
    // 这里的改变的依据是，更改本组件的checked值为true，同时通过父组件遍历所有wu-radio实例
    // 将本组件外的其他wu-radio的checked都设置为false(都被取消选中状态)，因而只剩下一个为选中状态
    setRadioCheckedStatus() {
      this.emitEvent();
      this.checked = true;
      typeof this.parent.unCheckedOther === "function" && this.parent.unCheckedOther(this);
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["wu-radio", [`wu-radio-label--${$data.parentData.iconPlacement}`, $data.parentData.borderBottom && $data.parentData.placement === "column" && "wu-border-bottom"]]),
      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args), ["stop"])),
      style: normalizeStyle([$options.radioStyle]),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["wu-radio__icon-wrap", $options.iconClasses]),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.iconClickHandler && $options.iconClickHandler(...args), ["stop"])),
          style: normalizeStyle([$options.iconWrapStyle])
        },
        [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            createVNode(_component_wu_icon, {
              class: "wu-radio__icon-wrap__icon",
              name: "checkbox-mark",
              size: $options.elIconSize,
              color: $options.elIconColor
            }, null, 8, ["size", "color"])
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode(
          "u-text",
          {
            class: "wu-radio__text",
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
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-radio/components/wu-radio/wu-radio.vue"]]);
const props = {
  props: {
    // 输入的值
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    // 是否禁用全部radio
    disabled: {
      type: Boolean,
      default: false
    },
    // 形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: "circle"
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
    // 标识符
    name: {
      type: String,
      default: ""
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
    // label的文本
    label: {
      type: [String],
      default: ""
    },
    // label的颜色 （默认 '#303133' ）
    labelColor: {
      type: [String],
      default: "#303133"
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: 14
    },
    // 是否禁止点击文本操作checkbox(默认 false )
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
    // 竖向配列时，是否显示下划线
    borderBottom: {
      type: Boolean,
      default: false
    },
    // 图标与文字的对齐方式
    iconPlacement: {
      type: String,
      default: "left"
    },
    // 自定义样式
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    ...(_d = (_c = uni.$w) == null ? void 0 : _c.props) == null ? void 0 : _d.radioGroup
  }
};
const _style_0$1 = { "wu-radio-group": { "": { "flex": 1 } }, "wu-radio-group--row": { "": { "flexDirection": "row" } }, "wu-radio-group--column": { "": { "flexDirection": "column" } } };
const _sfc_main$1 = {
  name: "wu-radio-group",
  mixins: [mpMixin, mixin, props],
  computed: {
    // 这里computed的变量，都是子组件wu-radio需要用到的，由于头条小程序的兼容性差异，子组件无法实时监听父组件参数的变化
    // 所以需要手动通知子组件，这里返回一个parentData变量，供watch监听，在其中去通知每一个子组件重新从父组件(wu-radio-group)
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
      return this.bem("radio-group", ["placement"]);
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
    // 将其他的radio设置为未选中的状态
    unCheckedOther(childInstance) {
      this.children.map((child) => {
        if (childInstance !== child) {
          child.checked = false;
        }
      });
      const {
        name
      } = childInstance;
      this.$emit("update:modelValue", name);
      this.$emit("change", name);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["wu-radio-group", $options.bemClass]),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-radio/components/wu-radio-group/wu-radio-group.vue"]]);
const _style_0 = { "wu-page__style": { "": { "fontSize": 16, "color": "#606266", "marginBottom": "20rpx", "fontWeight": "bold" } }, "wu-page__title": { "": { "fontSize": 16, "color": "#606266", "marginBottom": "20rpx" } } };
const _sfc_main = {
  data() {
    return {
      // 基本案列数据
      radiolist1: [
        {
          name: "JavaScript",
          disabled: false
        },
        {
          name: "Python",
          disabled: false
        },
        {
          name: "Java",
          disabled: false
        },
        {
          name: "C++",
          disabled: false
        }
      ],
      // wu-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue1: "JavaScript",
      // 自定义形状数据
      radiolist2: [
        {
          name: "Windows",
          disabled: false
        },
        {
          name: "macOS",
          disabled: false
        },
        {
          name: "Harmonyos",
          disabled: false
        },
        {
          name: "Android",
          disabled: false
        },
        {
          name: "IOS",
          disabled: false
        }
      ],
      // wu-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue2: "Windows",
      // 是否禁用数据
      radiolist3: [
        {
          name: "Google",
          disabled: false
        },
        {
          name: "Bing",
          disabled: false
        },
        {
          name: "百度",
          disabled: false
        },
        {
          name: "其他",
          disabled: false
        }
      ],
      // wu-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue3: "Google",
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
      // wu-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
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
      // wu-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue5: "绿色",
      //横向排列形式数据
      radiolist6: [
        {
          name: "阅读",
          disabled: false
        },
        {
          name: "运动",
          disabled: false
        },
        {
          name: "看电影",
          disabled: false
        },
        {
          name: "旅行",
          disabled: false
        }
      ],
      // wu-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue6: "妲己",
      //横向两端排列形式数据
      radiolist7: [
        {
          name: "华为",
          disabled: false
        },
        {
          name: "阿里巴巴",
          disabled: false
        },
        {
          name: "腾讯",
          disabled: false
        },
        {
          name: "小米",
          disabled: false
        },
        {
          name: "网易",
          disabled: false
        },
        {
          name: "字节跳动",
          disabled: false
        }
      ],
      // wu-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      radiovalue7: "华为"
    };
  },
  watch: {
    radiovalue1(newValue, oldValue) {
      formatAppLog("log", "at pages/componentsA/radio/radio.nvue:267", "v-model", newValue);
    }
  },
  methods: {
    groupChange(n) {
      formatAppLog("log", "at pages/componentsA/radio/radio.nvue:272", "groupChange", n);
    },
    radioChange(n) {
      formatAppLog("log", "at pages/componentsA/radio/radio.nvue:275", "radioChange", n);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_radio = resolveEasycom(resolveDynamicComponent("wu-radio"), __easycom_0);
  const _component_wu_radio_group = resolveEasycom(resolveDynamicComponent("wu-radio-group"), __easycom_1);
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
        createElementVNode("u-text", { class: "wu-block__title" }, "你最喜欢哪种编程语言？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_wu_radio_group, {
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
                    return openBlock(), createBlock(_component_wu_radio, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "你通常使用哪种操作系统？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_wu_radio_group, {
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
                    return openBlock(), createBlock(_component_wu_radio, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "你最常使用的互联网搜索引擎是？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_wu_radio_group, {
              modelValue: $data.radiovalue3,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.radiovalue3 = $event),
              placement: "column"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.radiolist3, (item, index) => {
                    return openBlock(), createBlock(_component_wu_radio, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "狙击枪用哪个倍镜最好？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_wu_radio_group, {
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
                    return openBlock(), createBlock(_component_wu_radio, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "你比较喜欢下面哪个颜色？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_wu_radio_group, {
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
                    return openBlock(), createBlock(_component_wu_radio, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "你最喜欢的休闲活动是？"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_wu_radio_group, {
              modelValue: $data.radiovalue6,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.radiovalue6 = $event),
              placement: "row"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.radiolist6, (item, index) => {
                    return openBlock(), createBlock(_component_wu_radio, {
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
        createElementVNode("u-text", { class: "wu-block__title" }, "你对哪个科技公司最感兴趣？"),
        createElementVNode("view", null, [
          createElementVNode("view", { class: "wu-page__radio-item" }, [
            createVNode(_component_wu_radio_group, {
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
                    return openBlock(), createBlock(_component_wu_radio, {
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
