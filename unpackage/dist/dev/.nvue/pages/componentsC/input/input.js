var _a, _b;
import { r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_0$1 } from "../../../wu-icon.js";
import { resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createBlock, createCommentVNode, createVNode, withCtx } from "vue";
import { m as mpMixin, a as mixin } from "../../../mixin.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_1 } from "../../../wu-text.js";
import { _ as __easycom_2 } from "../../../wu-code.js";
import { _ as __easycom_3 } from "../../../wu-button.js";
import { _ as __easycom_4 } from "../../../wu-gap.js";
import "../../../wu-loading-icon.js";
const props = {
  props: {
    // 输入的值
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 输入框类型
    // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
    // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
    // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
    // text-文本输入键盘
    type: {
      type: String,
      default: "text"
    },
    // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
    // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
    fixed: {
      type: Boolean,
      default: false
    },
    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: false
    },
    // 禁用状态时的背景色
    disabledColor: {
      type: String,
      default: "#f5f7fa"
    },
    // 是否显示清除控件
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否密码类型
    password: {
      type: Boolean,
      default: false
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: -1
    },
    // 	输入框为空时的占位符
    placeholder: {
      type: String,
      default: ""
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: "input-placeholder"
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: "color: #c0c4cc;"
    },
    // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
    showWordLimit: {
      type: Boolean,
      default: false
    },
    // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
    // https://uniapp.dcloud.io/component/input
    // https://uniapp.dcloud.io/component/textarea
    confirmType: {
      type: String,
      default: "done"
    },
    // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
    confirmHold: {
      type: Boolean,
      default: false
    },
    // focus时，点击页面的时候不收起键盘，微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    // 自动获取焦点
    // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
    focus: {
      type: Boolean,
      default: false
    },
    // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
    autoBlur: {
      type: Boolean,
      default: false
    },
    // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
    disableDefaultPadding: {
      type: Boolean,
      default: false
    },
    // 指定focus时光标的位置
    cursor: {
      type: [String, Number],
      default: -1
    },
    // 输入框聚焦时底部与键盘的距离
    cursorSpacing: {
      type: [String, Number],
      default: 30
    },
    // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
    selectionStart: {
      type: [String, Number],
      default: -1
    },
    // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
    selectionEnd: {
      type: [String, Number],
      default: -1
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: true
    },
    // 输入框内容对齐方式，可选值为：left|center|right
    inputAlign: {
      type: String,
      default: "left"
    },
    // 输入框字体的大小
    fontSize: {
      type: [String, Number],
      default: "15px"
    },
    // 输入框字体颜色
    color: {
      type: String,
      default: "#303133"
    },
    // 输入框前置图标
    prefixIcon: {
      type: String,
      default: ""
    },
    // 前置图标样式，对象或字符串
    prefixIconStyle: {
      type: [String, Object],
      default: ""
    },
    // 输入框后置图标
    suffixIcon: {
      type: String,
      default: ""
    },
    // 后置图标样式，对象或字符串
    suffixIconStyle: {
      type: [String, Object],
      default: ""
    },
    // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
    border: {
      type: String,
      default: "surround"
    },
    // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
    readonly: {
      type: Boolean,
      default: false
    },
    // 输入框形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: "square"
    },
    // 用于处理或者过滤输入框内容的方法
    formatter: {
      type: [Function, null],
      default: null
    },
    // 是否忽略组件内对文本合成系统事件的处理
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    },
    // 自定义样式
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.input
  }
};
const _style_0$1 = { "wu-input": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "flex": 1 } }, "wu-input--radius": { "": { "borderRadius": 4 } }, "wu-input--square": { "": { "borderRadius": 4 } }, "wu-input--no-radius": { "": { "borderRadius": 0 } }, "wu-input--circle": { "": { "borderRadius": 100 } }, "wu-input__content": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "wu-input__content__field-wrapper": { "": { "position": "relative", "flexDirection": "row", "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "flex": 1 } }, "wu-input__content__field-wrapper__field": { "": { "lineHeight": 26, "textAlign": "left", "color": "#303133", "backgroundColor": "#ffffff", "height": 24, "fontSize": 15, "flex": 1 } }, "wu-input__content__clear": { "": { "width": 20, "height": 20, "borderRadius": 100, "backgroundColor": "#c6c7cb", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "transform": "scale(0.82)", "marginLeft": 4 } }, "wu-input__content__subfix-icon": { "": { "marginLeft": 4 } }, "wu-input__content__prefix-icon": { "": { "marginRight": 4 } } };
const _sfc_main$1 = {
  name: "wu-input",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // 输入框的值
      innerValue: "",
      // 是否处于获得焦点状态
      focused: false,
      // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
      firstChange: true,
      // value绑定值的变化是由内部还是外部引起的
      changeFromInner: false,
      // 过滤处理方法
      innerFormatter: (value) => {
        return value;
      }
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal, oldVal) {
        this.propsValueChange(newVal);
      }
    }
  },
  computed: {
    // 是否显示清除控件
    isShowClear() {
      const {
        clearable,
        readonly,
        focused,
        innerValue
      } = this;
      return !!clearable && !readonly && !!focused && innerValue !== "";
    },
    // 组件的类名
    inputClass() {
      let classes = [], {
        border,
        disabled,
        shape
      } = this;
      border === "surround" && (classes = classes.concat(["wu-border", "wu-input--radius"]));
      classes.push(`wu-input--${shape}`);
      border === "bottom" && (classes = classes.concat([
        "wu-border-bottom",
        "wu-input--no-radius"
      ]));
      return classes.join(" ");
    },
    // 组件的样式
    wrapperStyle() {
      const style = {};
      if (this.disabled) {
        style.backgroundColor = this.disabledColor;
      }
      if (this.border === "none") {
        style.padding = "0";
      } else {
        style.paddingTop = "6px";
        style.paddingBottom = "6px";
        style.paddingLeft = "9px";
        style.paddingRight = "9px";
      }
      return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
    },
    // 输入框的样式
    inputStyle() {
      const style = {
        color: this.color,
        fontSize: this.$w.addUnit(this.fontSize),
        textAlign: this.inputAlign
      };
      if (this.disabled) {
        style.backgroundColor = this.disabledColor;
      }
      return style;
    }
  },
  methods: {
    // 组件参数变化时同步
    propsValueChange(newVal) {
      this.innerValue = newVal;
      this.firstChange = false;
      this.changeFromInner = false;
    },
    // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
    setFormatter(e) {
      this.innerFormatter = e;
    },
    // 当键盘输入时，触发input事件
    onInput(e) {
      let {
        value = ""
      } = e.detail || {};
      const formatter = this.formatter || this.innerFormatter;
      const formatValue = formatter(value);
      this.innerValue = value;
      this.$nextTick(() => {
        this.innerValue = formatValue;
        this.valueChange();
      });
    },
    // 输入框失去焦点时触发
    onBlur(event) {
      this.$emit("blur", event.detail.value);
      this.$w.sleep(50).then(() => {
        this.focused = false;
      });
      this.$w.formValidate(this, "blur");
    },
    // 输入框聚焦时触发
    onFocus(event) {
      this.focused = true;
      this.$emit("focus");
    },
    // 点击完成按钮时触发
    onConfirm(event) {
      this.$emit("confirm", this.innerValue);
    },
    // 键盘高度发生变化的时候触发此事件
    // 兼容性：微信小程序2.7.0+、App 3.1.0+
    onkeyboardheightchange() {
      this.$emit("keyboardheightchange");
    },
    // 内容发生变化，进行处理
    valueChange() {
      const value = this.innerValue;
      this.$nextTick(() => {
        this.$emit("update:modelValue", value);
        this.changeFromInner = true;
        this.$emit("change", value);
        this.$w.formValidate(this, "change");
      });
    },
    // 点击清除控件
    onClear() {
      this.innerValue = "";
      this.$nextTick(() => {
        this.valueChange();
        this.$emit("clear");
      });
    },
    /**
     * 在安卓nvue上，事件无法冒泡
     * 在某些时间，我们希望监听wu-from-item的点击事件，此时会导致点击wu-form-item内的wu-input后
     * 无法触发wu-form-item的点击事件，这里通过手动调用wu-form-item的方法进行触发
     */
    clickHandler() {
      if (this.$w.os() === "android") {
        const formItem = this.$w.$parent.call(this, "wu-form-item");
        if (formItem) {
          formItem.clickHandler();
        }
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["wu-input", $options.inputClass]),
      style: normalizeStyle([$options.wrapperStyle]),
      renderWhole: true
    },
    [
      createElementVNode("view", { class: "wu-input__content" }, [
        createElementVNode("view", { class: "wu-input__content__prefix-icon" }, [
          renderSlot(_ctx.$slots, "prefix", {}, () => [
            _ctx.prefixIcon ? (openBlock(), createBlock(_component_wu_icon, {
              key: 0,
              name: _ctx.prefixIcon,
              size: "18",
              customStyle: _ctx.prefixIconStyle
            }, null, 8, ["name", "customStyle"])) : createCommentVNode("v-if", true)
          ])
        ]),
        createElementVNode("view", {
          class: "wu-input__content__field-wrapper",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
        }, [
          createCommentVNode(" 根据uni-app的input组件文档，H5和APP中只要声明了password参数(无论true还是false)，type均失效，此时\r\n					为了防止type=number时，又存在password属性，type无效，此时需要设置password为undefined\r\n				 "),
          createElementVNode("u-input", {
            class: "wu-input__content__field-wrapper__field",
            style: normalizeStyle([$options.inputStyle]),
            type: _ctx.type,
            focus: _ctx.focus,
            cursor: _ctx.cursor,
            value: $data.innerValue,
            autoBlur: _ctx.autoBlur,
            disabled: _ctx.disabled || _ctx.readonly,
            maxlength: _ctx.maxlength,
            placeholder: _ctx.placeholder,
            placeholderStyle: _ctx.placeholderStyle,
            placeholderClass: _ctx.placeholderClass,
            confirmType: _ctx.confirmType,
            confirmHold: _ctx.confirmHold,
            holdKeyboard: _ctx.holdKeyboard,
            cursorSpacing: _ctx.cursorSpacing,
            adjustPosition: _ctx.adjustPosition,
            selectionEnd: _ctx.selectionEnd,
            selectionStart: _ctx.selectionStart,
            password: _ctx.password || _ctx.type === "password" || void 0,
            ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
            onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
            onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
            onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
            onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
            onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
          }, null, 44, ["type", "focus", "cursor", "value", "autoBlur", "disabled", "maxlength", "placeholder", "placeholderStyle", "placeholderClass", "confirmType", "confirmHold", "holdKeyboard", "cursorSpacing", "adjustPosition", "selectionEnd", "selectionStart", "password", "ignoreCompositionEvent"])
        ]),
        $options.isShowClear ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "wu-input__content__clear",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.onClear && $options.onClear(...args))
        }, [
          createVNode(_component_wu_icon, {
            name: "close",
            size: "11",
            color: "#ffffff",
            customStyle: "line-height: 12px"
          })
        ])) : createCommentVNode("v-if", true),
        createElementVNode("view", { class: "wu-input__content__subfix-icon" }, [
          renderSlot(_ctx.$slots, "suffix", {}, () => [
            _ctx.suffixIcon ? (openBlock(), createBlock(_component_wu_icon, {
              key: 0,
              name: _ctx.suffixIcon,
              size: "18",
              customStyle: _ctx.suffixIconStyle
            }, null, 8, ["name", "customStyle"])) : createCommentVNode("v-if", true)
          ])
        ])
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-input/components/wu-input/wu-input.vue"]]);
const _style_0 = { "wu-demo-block__title": { ".wu-demo-block ": { "fontSize": "32rpx", "color": "#999999" } }, "wu-input": { ".wu-demo-block .wu-demo-block__content ": { "marginTop": "15rpx", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#999999" } } };
const _sfc_main = {
  data() {
    return {
      tips: "",
      seconds: 10,
      text1: ""
    };
  },
  watch: {
    value(newValue, oldValue) {
    }
  },
  methods: {
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.wuCode.canGetCode) {
        uni.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          uni.hideLoading();
          uni.$w.toast("验证码已发送");
          this.$refs.wuCode.start();
        }, 2e3);
      } else {
        uni.$w.toast("倒计时结束后再发送");
      }
    },
    change(e) {
      formatAppLog("log", "at pages/componentsC/input/input.nvue:118", "change", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_input = resolveEasycom(resolveDynamicComponent("wu-input"), __easycom_0);
  const _component_wu_text = resolveEasycom(resolveDynamicComponent("wu-text"), __easycom_1);
  const _component_wu_code = resolveEasycom(resolveDynamicComponent("wu-code"), __easycom_2);
  const _component_wu_button = resolveEasycom(resolveDynamicComponent("wu-button"), __easycom_3);
  const _component_wu_gap = resolveEasycom(resolveDynamicComponent("wu-gap"), __easycom_4);
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
          createVNode(_component_wu_input, {
            modelValue: $data.text1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.text1 = $event),
            placeholder: "请输入内容",
            border: "surround",
            onChange: $options.change
          }, null, 8, ["modelValue", "onChange"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "可清空内容"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_input, {
            placeholder: "请输入内容",
            border: "surround",
            clearable: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "数字键盘"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_input, {
            placeholder: "请输入内容",
            border: "surround",
            type: "number",
            clearable: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "密码类型"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_input, {
            placeholder: "请输入内容",
            border: "surround",
            password: "",
            clearable: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "显示下划线"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_input, {
            shape: "circle",
            placeholder: "请输入内容",
            border: "surround",
            clearable: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "禁用状态"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_input, {
            placeholder: "禁用状态",
            border: "surround",
            disabled: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "圆形"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_input, {
            placeholder: "请输入内容",
            border: "surround",
            shape: "circle"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "前后图标"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_input, {
            placeholder: "前置图标",
            prefixIcon: "search",
            prefixIconStyle: "font-size: 22px;color: #909399"
          })
        ]),
        createElementVNode("view", {
          class: "wu-demo-block__content",
          style: { "margin-top": "15px" }
        }, [
          createVNode(_component_wu_input, {
            placeholder: "后置图标",
            suffixIcon: "map-fill",
            suffixIconStyle: "color: #909399"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "前后插槽"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createCommentVNode(" 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用wu-input，非nvue下需使用u-input "),
          createVNode(_component_wu_input, { placeholder: "前置插槽" }, {
            prefix: withCtx(() => [
              createVNode(_component_wu_text, {
                text: "http://",
                margin: "0 3px 0 0",
                type: "tips"
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createElementVNode("view", {
          class: "wu-demo-block__content",
          style: { "margin-top": "15px" }
        }, [
          createCommentVNode(" 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用wu-input，非nvue下需使用u-input "),
          createVNode(_component_wu_input, { placeholder: "后置插槽" }, {
            suffix: withCtx(() => [
              createVNode(_component_wu_code, {
                ref: "wuCode",
                onChange: $options.codeChange,
                seconds: "20",
                changeText: "X秒重新获取哈哈哈"
              }, null, 8, ["onChange"]),
              createVNode(_component_wu_button, {
                onClick: $options.getCode,
                text: $data.tips,
                type: "success",
                size: "mini"
              }, null, 8, ["onClick", "text"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createVNode(_component_wu_gap, {
        bgColor: "#fff",
        height: "50"
      })
    ])
  ]);
}
const input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/input/input.nvue"]]);
export {
  input as default
};
