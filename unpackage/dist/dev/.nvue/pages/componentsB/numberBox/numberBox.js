var _a, _b;
import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0$1 } from "../../../wu-icon.js";
import { resolveDynamicComponent, openBlock, createElementBlock, withModifiers, renderSlot, createElementVNode, normalizeClass, normalizeStyle, createVNode, createCommentVNode, withCtx, toDisplayString } from "vue";
import { m as mpMixin, a as mixin } from "../../../mixin.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
const props = {
  props: {
    // 步进器标识符，在change回调返回
    name: {
      type: [String, Number],
      default: ""
    },
    // 用于双向绑定的值，初始化时设置设为默认min值(最小值)
    modelValue: {
      type: [String, Number],
      default: 1
    },
    // 最小值
    min: {
      type: [String, Number],
      default: 1
    },
    // 最大值
    max: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    // 加减的步长，可为小数
    step: {
      type: [String, Number],
      default: 1
    },
    // 是否只允许输入整数
    integer: {
      type: Boolean,
      default: false
    },
    // 是否禁用，包括输入框，加减按钮
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否禁用输入框
    disabledInput: {
      type: Boolean,
      default: false
    },
    // 是否开启异步变更，开启后需要手动控制输入值
    asyncChange: {
      type: Boolean,
      default: false
    },
    // 输入框宽度，单位为px
    inputWidth: {
      type: [String, Number],
      default: 35
    },
    // 是否显示减少按钮
    showMinus: {
      type: Boolean,
      default: true
    },
    // 是否显示增加按钮
    showPlus: {
      type: Boolean,
      default: true
    },
    // 显示的小数位数
    decimalLength: {
      type: [String, Number, null],
      default: ""
    },
    // 是否开启长按加减手势
    longPress: {
      type: Boolean,
      default: true
    },
    // 输入框文字和加减按钮图标的颜色
    color: {
      type: String,
      default: "#323233"
    },
    // 按钮大小，宽高等于此值，单位px，输入框高度和此值保持一致
    buttonSize: {
      type: [String, Number],
      default: 30
    },
    // 输入框和按钮的背景颜色
    bgColor: {
      type: String,
      default: "#EBECEE"
    },
    // 指定光标于键盘的距离，避免键盘遮挡输入框，单位px
    cursorSpacing: {
      type: [String, Number],
      default: 100
    },
    // 是否禁用增加按钮
    disablePlus: {
      type: Boolean,
      default: false
    },
    // 是否禁用减少按钮
    disableMinus: {
      type: Boolean,
      default: false
    },
    // 加减按钮图标的样式
    iconStyle: {
      type: [Object, String],
      default: ""
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.numberBox
  }
};
const _style_0$1 = { "wu-line-1": { "": { "lines": 1, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "wu-line-2": { "": { "lines": 2, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "wu-line-3": { "": { "lines": 3, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "wu-line-4": { "": { "lines": 4, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "wu-line-5": { "": { "lines": 5, "textOverflow": "ellipsis", "overflow": "hidden", "flex": 1 } }, "wu-border": { "": { "!borderWidth": 0.5, "!borderColor": "#dadbde", "borderStyle": "solid" } }, "wu-border-top": { "": { "!borderTopWidth": 0.5, "!borderColor": "#dadbde", "borderTopStyle": "solid" } }, "wu-border-left": { "": { "!borderLeftWidth": 0.5, "!borderColor": "#dadbde", "borderLeftStyle": "solid" } }, "wu-border-right": { "": { "!borderRightWidth": 0.5, "!borderColor": "#dadbde", "borderRightStyle": "solid" } }, "wu-border-bottom": { "": { "!borderBottomWidth": 0.5, "!borderColor": "#dadbde", "borderBottomStyle": "solid" } }, "wu-border-top-bottom": { "": { "!borderTopWidth": 0.5, "!borderBottomWidth": 0.5, "!borderColor": "#dadbde", "borderTopStyle": "solid", "borderBottomStyle": "solid" } }, "wu-reset-button": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 0 } }, "wu-hover-class": { "": { "opacity": 0.7 } }, "wu-number-box": { "": { "flexDirection": "row", "alignItems": "center" } }, "wu-number-box__plus": { "": { "width": 35, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderTopRightRadius": 4, "borderBottomRightRadius": 4 } }, "wu-number-box__minus": { "": { "width": 35, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderTopLeftRadius": 4, "borderBottomLeftRadius": 4 } }, "wu-number-box__plus--hover": { "": { "!backgroundColor": "#E6E6E6" } }, "wu-number-box__minus--hover": { "": { "!backgroundColor": "#E6E6E6" } }, "wu-number-box__plus--disabled": { "": { "color": "#c8c9cc", "backgroundColor": "#f7f8fa" } }, "wu-number-box__minus--disabled": { "": { "color": "#c8c9cc", "backgroundColor": "#f7f8fa" } }, "wu-number-box__input": { "": { "position": "relative", "textAlign": "center", "fontSize": 15, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2, "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "wu-number-box__input--disabled": { "": { "color": "#c8c9cc", "backgroundColor": "#f2f3f5" } } };
const _sfc_main$1 = {
  name: "wu-number-box",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // 输入框实际操作的值
      currentValue: "",
      // 定时器
      longPressTimer: null
    };
  },
  watch: {
    // 多个值之间，只要一个值发生变化，都要重新检查check()函数
    watchChange(n) {
      this.check();
    },
    // 监听v-mode的变化，重新初始化内部的值
    modelValue(n) {
      formatAppLog("log", "at uni_modules/wu-number-box/components/wu-number-box/wu-number-box.vue:99", n);
      if (n !== this.currentValue) {
        this.currentValue = this.format(this.modelValue);
      }
    }
  },
  computed: {
    getCursorSpacing() {
      return this.$w.getPx(this.cursorSpacing);
    },
    // 按钮的样式
    buttonStyle() {
      return (type) => {
        const style = {
          backgroundColor: this.bgColor,
          height: this.$w.addUnit(this.buttonSize),
          color: this.color
        };
        if (this.isDisabled(type)) {
          style.backgroundColor = "#f3f3f4";
        }
        return style;
      };
    },
    // 输入框的样式
    inputStyle() {
      this.disabled || this.disabledInput;
      const style = {
        color: this.color,
        backgroundColor: this.bgColor,
        height: this.$w.addUnit(this.buttonSize),
        width: this.$w.addUnit(this.inputWidth)
      };
      return style;
    },
    // 用于监听多个值发生变化
    watchChange() {
      return [this.integer, this.decimalLength, this.min, this.max];
    },
    isDisabled() {
      return (type) => {
        if (type === "plus") {
          return this.disabled || this.disablePlus || this.currentValue >= this.max;
        }
        return this.disabled || this.disableMinus || this.currentValue <= this.min;
      };
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.currentValue = this.format(this.modelValue);
    },
    // 格式化整理数据，限制范围
    format(value) {
      value = this.filter(value);
      value = value === "" ? 0 : +value;
      value = Math.max(Math.min(this.max, value), this.min);
      if (this.decimalLength !== null) {
        value = value.toFixed(this.decimalLength);
      }
      return value;
    },
    // 过滤非法的字符
    filter(value) {
      value = String(value).replace(/[^0-9.-]/g, "");
      if (this.integer && value.indexOf(".") !== -1) {
        value = value.split(".")[0];
      }
      return value;
    },
    check() {
      const val = this.format(this.currentValue);
      if (val !== this.currentValue) {
        this.currentValue = val;
      }
    },
    // 判断是否出于禁止操作状态
    // isDisabled(type) {
    // 	if (type === 'plus') {
    // 		// 在点击增加按钮情况下，判断整体的disabled，是否单独禁用增加按钮，以及当前值是否大于最大的允许值
    // 		return (
    // 			this.disabled ||
    // 			this.disablePlus ||
    // 			this.currentValue >= this.max
    // 		)
    // 	}
    // 	// 点击减少按钮同理
    // 	return (
    // 		this.disabled ||
    // 		this.disableMinus ||
    // 		this.currentValue <= this.min
    // 	)
    // },
    // 输入框活动焦点
    onFocus(event) {
      this.$emit("focus", {
        ...event.detail,
        name: this.name
      });
    },
    // 输入框失去焦点
    onBlur(event) {
      this.format(event.detail.value);
      this.$emit(
        "blur",
        {
          ...event.detail,
          name: this.name
        }
      );
    },
    // 输入框值发生变化
    onInput(e) {
      const {
        value = ""
      } = e.detail || {};
      if (value === "")
        return;
      let formatted = this.filter(value);
      if (this.decimalLength !== null && formatted.indexOf(".") !== -1) {
        const pair = formatted.split(".");
        formatted = `${pair[0]}.${pair[1].slice(0, this.decimalLength)}`;
      }
      formatted = this.format(formatted);
      this.emitChange(formatted);
    },
    // 发出change事件
    emitChange(value) {
      if (!this.asyncChange) {
        this.$nextTick(() => {
          this.$emit("update:modelValue", value);
          this.currentValue = value;
          this.$forceUpdate();
        });
      }
      this.$emit("change", {
        value,
        name: this.name
      });
    },
    onChange() {
      const {
        type
      } = this;
      if (this.isDisabled(type)) {
        return this.$emit("overlimit", type);
      }
      const diff = type === "minus" ? -this.step : +this.step;
      const value = this.format(this.add(+this.currentValue, diff));
      this.emitChange(value);
      this.$emit(type);
    },
    // 对值扩大后进行四舍五入，再除以扩大因子，避免出现浮点数操作的精度问题
    add(num1, num2) {
      const cardinal = Math.pow(10, 10);
      return Math.round((num1 + num2) * cardinal) / cardinal;
    },
    // 点击加减按钮
    clickHandler(type) {
      this.type = type;
      this.onChange();
    },
    longPressStep() {
      this.clearTimeout();
      this.longPressTimer = setTimeout(() => {
        this.onChange();
        this.longPressStep();
      }, 250);
    },
    onTouchStart(type) {
      if (!this.longPress)
        return;
      this.clearTimeout();
      this.type = type;
      this.longPressTimer = setTimeout(() => {
        this.onChange();
        this.longPressStep();
      }, 600);
    },
    // 触摸结束，清除定时器，停止长按加减
    onTouchEnd() {
      if (!this.longPress)
        return;
      this.clearTimeout();
    },
    // 清除定时器
    clearTimeout() {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0$1);
  return openBlock(), createElementBlock("view", {
    class: "wu-number-box",
    renderWhole: true
  }, [
    _ctx.showMinus ? (openBlock(), createElementBlock(
      "view",
      {
        key: 0,
        class: "wu-number-box__slot",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.clickHandler("minus"), ["stop"])),
        onTouchstart: _cache[1] || (_cache[1] = ($event) => $options.onTouchStart("minus")),
        onTouchend: _cache[2] || (_cache[2] = withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"]))
      },
      [
        renderSlot(_ctx.$slots, "minus", {}, () => [
          createElementVNode(
            "view",
            {
              class: normalizeClass(["wu-number-box__minus", { "wu-number-box__minus--disabled": $options.isDisabled("minus") }]),
              hoverClass: "wu-number-box__minus--hover",
              hoverStayTime: "150",
              style: normalizeStyle([$options.buttonStyle("minus")])
            },
            [
              createVNode(_component_wu_icon, {
                name: "minus",
                color: $options.isDisabled("minus") ? "#c8c9cc" : "#323233",
                size: "15",
                bold: "",
                customStyle: _ctx.iconStyle
              }, null, 8, ["color", "customStyle"])
            ],
            6
            /* CLASS, STYLE */
          )
        ])
      ],
      32
      /* HYDRATE_EVENTS */
    )) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "input", {}, () => [
      createElementVNode("u-input", {
        disabled: _ctx.disabledInput || _ctx.disabled,
        cursorSpacing: $options.getCursorSpacing,
        class: normalizeClass([{ "wu-number-box__input--disabled": _ctx.disabled || _ctx.disabledInput }, "wu-number-box__input"]),
        modelValue: $data.currentValue,
        onInput: [
          _cache[3] || (_cache[3] = ($event) => $data.currentValue = $event.detail.value),
          _cache[6] || (_cache[6] = (...args) => $options.onInput && $options.onInput(...args))
        ],
        onBlur: _cache[4] || (_cache[4] = (...args) => $options.onBlur && $options.onBlur(...args)),
        onFocus: _cache[5] || (_cache[5] = (...args) => $options.onFocus && $options.onFocus(...args)),
        type: "number",
        style: normalizeStyle([$options.inputStyle])
      }, null, 46, ["disabled", "cursorSpacing", "modelValue"])
    ]),
    _ctx.showPlus ? (openBlock(), createElementBlock(
      "view",
      {
        key: 1,
        class: "wu-number-box__slot",
        onClick: _cache[7] || (_cache[7] = withModifiers(($event) => $options.clickHandler("plus"), ["stop"])),
        onTouchstart: _cache[8] || (_cache[8] = ($event) => $options.onTouchStart("plus")),
        onTouchend: _cache[9] || (_cache[9] = withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"]))
      },
      [
        renderSlot(_ctx.$slots, "plus", {}, () => [
          createElementVNode(
            "view",
            {
              class: normalizeClass(["wu-number-box__plus", { "wu-number-box__minus--disabled": $options.isDisabled("plus") }]),
              hoverClass: "wu-number-box__plus--hover",
              hoverStayTime: "150",
              style: normalizeStyle([$options.buttonStyle("plus")])
            },
            [
              createVNode(_component_wu_icon, {
                name: "plus",
                color: $options.isDisabled("plus") ? "#c8c9cc" : "#323233",
                size: "15",
                bold: "",
                customStyle: _ctx.iconStyle
              }, null, 8, ["color", "customStyle"])
            ],
            6
            /* CLASS, STYLE */
          )
        ])
      ],
      32
      /* HYDRATE_EVENTS */
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-number-box/components/wu-number-box/wu-number-box.vue"]]);
const _style_0 = { "minus": { "": { "width": 22, "height": 22, "borderWidth": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "borderStyle": "solid", "borderColor": "#E6E6E6", "borderRadius": 100 } }, "input": { "": { "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "plus": { "": { "width": 22, "height": 22, "backgroundColor": "#FF0000", "borderRadius": 50, "justifyContent": "center", "alignItems": "center" } } };
const _sfc_main = {
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 3,
      value5: 3,
      value6: 3,
      value7: 3,
      value8: 3.1,
      value9: 3,
      value10: 3,
      value11: 3,
      step1: 2,
      min1: 5,
      max1: 8,
      asyncChange: true,
      color: "#FFFFFF",
      buttonSize: 36,
      bgColor: "#2979ff"
    };
  },
  methods: {
    change(e) {
      formatAppLog("log", "at pages/componentsB/numberBox/numberBox.nvue:114", "change", e);
    },
    myAsyncChange(e) {
      this.asyncChange = false;
      uni.showLoading({
        title: "正在加载"
      });
      setTimeout(() => {
        uni.hideLoading();
        this.value9 = e;
        this.asyncChange = true;
      }, 3e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_number_box = resolveEasycom(resolveDynamicComponent("wu-number-box"), __easycom_0);
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0$1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "" }, [
      createVNode(_component_wu_cell_group, { border: true }, {
        default: withCtx(() => [
          createVNode(_component_wu_cell, {
            border: true,
            title: "基础用法"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value1,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
                step: "1",
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "步长设置"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value2,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
                step: $data.step1,
                onChange: $options.change
              }, null, 8, ["modelValue", "step", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "限制输入范围"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value3,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
                step: "1",
                min: $data.min1,
                max: $data.max1,
                onChange: $options.change
              }, null, 8, ["modelValue", "min", "max", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "限制输入整数"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value4,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
                step: "1",
                integer: "",
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "禁用状态"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value5,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event),
                step: "1",
                disabled: true,
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "禁用输入框"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value6,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.value6 = $event),
                step: "1",
                disabledInput: true,
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "禁用长按"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value7,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.value7 = $event),
                step: "1",
                longPress: false,
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "固定小数位数"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value8,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.value8 = $event),
                step: "0.2",
                decimalLength: "1",
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "异步变更"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value9,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.value9 = $event),
                step: "1",
                asyncChange: $data.asyncChange,
                onChange: $options.myAsyncChange
              }, null, 8, ["modelValue", "asyncChange", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "自定义大小颜色样式"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value10,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.value10 = $event),
                step: "1",
                color: $data.color,
                buttonSize: $data.buttonSize,
                bgColor: $data.bgColor,
                onChange: $options.change,
                iconStyle: "color: #fff"
              }, null, 8, ["modelValue", "color", "buttonSize", "bgColor", "onChange"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_cell, {
            border: true,
            title: "自定义(为0时减少按钮会消失)"
          }, {
            "right-icon": withCtx(() => [
              createVNode(_component_wu_number_box, {
                modelValue: $data.value11,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.value11 = $event),
                step: "1",
                min: 0,
                showMinus: $data.value11 > 0
              }, {
                minus: withCtx(() => [
                  createElementVNode("view", { class: "minus" }, [
                    createVNode(_component_wu_icon, {
                      name: "minus",
                      size: "12"
                    })
                  ])
                ]),
                input: withCtx(() => [
                  createElementVNode(
                    "u-text",
                    {
                      style: { "width": "60px", "text-align": "center" },
                      class: "input"
                    },
                    toDisplayString($data.value11),
                    1
                    /* TEXT */
                  )
                ]),
                plus: withCtx(() => [
                  createElementVNode("view", { class: "plus" }, [
                    createVNode(_component_wu_icon, {
                      name: "plus",
                      color: "#FFFFFF",
                      size: "12"
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "showMinus"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const numberBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/numberBox/numberBox.nvue"]]);
export {
  numberBox as default
};
