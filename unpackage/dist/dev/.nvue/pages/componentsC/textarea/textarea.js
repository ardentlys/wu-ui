var _a, _b;
import { m as mpMixin, a as mixin } from "../../../mixin.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { r as resolveEasycom } from "../../../uni-app.es.js";
const props = {
  props: {
    // 输入框的内容
    modelValue: {
      type: [String, Number],
      default: ""
    },
    // 输入框为空时占位符
    placeholder: {
      type: [String, Number],
      default: ""
    },
    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: "textarea-placeholder"
    },
    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: "color: #c0c4cc"
    },
    // 输入框高度
    height: {
      type: [String, Number],
      default: 70
    },
    // 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效
    confirmType: {
      type: String,
      default: "done"
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示统计字数
    count: {
      type: Boolean,
      default: false
    },
    // 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现
    focus: {
      type: Boolean,
      default: false
    },
    // 是否自动增加高度
    autoHeight: {
      type: Boolean,
      default: false
    },
    // 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true
    fixed: {
      type: Boolean,
      default: false
    },
    // 指定光标与键盘的距离
    cursorSpacing: {
      type: Number,
      default: 0
    },
    // 指定focus时的光标位置
    cursor: {
      type: [String, Number],
      default: ""
    },
    // 是否显示键盘上方带有”完成“按钮那一栏，
    showConfirmBar: {
      type: Boolean,
      default: true
    },
    // 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
    selectionStart: {
      type: Number,
      default: -1
    },
    // 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
    selectionEnd: {
      type: Number,
      default: -1
    },
    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: true
    },
    // 是否去掉 iOS 下的默认内边距，只微信小程序有效
    disableDefaultPadding: {
      type: Boolean,
      default: false
    },
    // focus时，点击页面的时候不收起键盘，只微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: 140
    },
    // 边框类型，surround-四周边框，bottom-底部边框
    border: {
      type: String,
      default: "surround"
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
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.textarea
  }
};
const _style_0 = { "wu-textarea": { "": { "borderRadius": 4, "backgroundColor": "#ffffff", "position": "relative", "flexDirection": "row", "flex": 1, "paddingTop": 9, "paddingRight": 9, "paddingBottom": 9, "paddingLeft": 9 }, ".wu-border": { "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#dadbde" }, ".wu-border-bottom": { "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#dadbde" } }, "wu-textarea--radius": { "": { "borderRadius": 4 } }, "wu-textarea--no-radius": { "": { "borderRadius": 0 } }, "wu-textarea--disabled": { "": { "backgroundColor": "#f5f7fa" } }, "wu-textarea__field": { "": { "flex": 1, "fontSize": 15, "color": "#606266", "width": 100 } }, "wu-textarea__count": { "": { "position": "absolute", "right": 5, "bottom": 2, "fontSize": 12, "color": "#909193", "backgroundColor": "#ffffff", "paddingTop": 1, "paddingRight": 4, "paddingBottom": 1, "paddingLeft": 4 } } };
const _sfc_main$1 = {
  name: "wu-textarea",
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
      innerFormatter: (value) => value
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
    // 组件的类名
    textareaClass() {
      let classes = [], {
        border,
        disabled
      } = this;
      border === "surround" && (classes = classes.concat(["wu-border", "wu-textarea--radius"]));
      border === "bottom" && (classes = classes.concat([
        "wu-border-bottom",
        "wu-textarea--no-radius"
      ]));
      disabled && classes.push("wu-textarea--disabled");
      return classes.join(" ");
    },
    // 组件的样式
    textareaStyle() {
      const style = {};
      if (this.$w.os() === "android") {
        style.paddingTop = "6px";
        style.paddingLeft = "9px";
        style.paddingBottom = "3px";
        style.paddingRight = "6px";
      }
      return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
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
    onFocus(e) {
      this.$emit("focus", e);
    },
    onBlur(e) {
      this.$emit("blur", e);
      this.$w.formValidate(this, "blur");
    },
    onLinechange(e) {
      this.$emit("linechange", e);
    },
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
    // 内容发生变化，进行处理
    valueChange() {
      const value = this.innerValue;
      this.$nextTick(() => {
        this.$emit("input", value);
        this.changeFromInner = true;
        this.$emit("change", value);
        this.$w.formValidate(this, "change");
      });
    },
    onConfirm(e) {
      this.$emit("confirm", e);
    },
    onKeyboardheightchange(e) {
      this.$emit("keyboardheightchange", e);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["wu-textarea", $options.textareaClass]),
      style: normalizeStyle([$options.textareaStyle]),
      renderWhole: true
    },
    [
      createElementVNode("u-textarea", {
        class: "wu-textarea__field",
        value: $data.innerValue,
        style: normalizeStyle({ height: _ctx.$w.addUnit(_ctx.height) }),
        placeholder: _ctx.placeholder,
        placeholderStyle: _ctx.$w.addStyle(_ctx.placeholderStyle, "string"),
        placeholderClass: _ctx.placeholderClass,
        disabled: _ctx.disabled,
        focus: _ctx.focus,
        autoHeight: _ctx.autoHeight,
        fixed: _ctx.fixed,
        cursorSpacing: _ctx.cursorSpacing,
        cursor: _ctx.cursor,
        showConfirmBar: _ctx.showConfirmBar,
        selectionStart: _ctx.selectionStart,
        selectionEnd: _ctx.selectionEnd,
        adjustPosition: _ctx.adjustPosition,
        disableDefaultPadding: _ctx.disableDefaultPadding,
        holdKeyboard: _ctx.holdKeyboard,
        maxlength: _ctx.maxlength,
        confirmType: _ctx.confirmType,
        ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
        onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
        onLinechange: _cache[2] || (_cache[2] = (...args) => $options.onLinechange && $options.onLinechange(...args)),
        onInput: _cache[3] || (_cache[3] = (...args) => $options.onInput && $options.onInput(...args)),
        onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
        onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
      }, null, 44, ["value", "placeholder", "placeholderStyle", "placeholderClass", "disabled", "focus", "autoHeight", "fixed", "cursorSpacing", "cursor", "showConfirmBar", "selectionStart", "selectionEnd", "adjustPosition", "disableDefaultPadding", "holdKeyboard", "maxlength", "confirmType", "ignoreCompositionEvent"]),
      _ctx.count ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 0,
          class: "wu-textarea__count",
          style: normalizeStyle({
            "background-color": _ctx.disabled ? "transparent" : "#fff"
          })
        },
        toDisplayString($data.innerValue.length) + "/" + toDisplayString(_ctx.maxlength),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-textarea/components/wu-textarea/wu-textarea.vue"]]);
const _sfc_main = {
  data() {
    return {
      value1: "",
      value2: "统计字数",
      value3: "",
      value4: "",
      value5: ""
    };
  },
  methods: {
    formatter(value) {
      return value.replace(/[^0-9]/ig, "");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_textarea = resolveEasycom(resolveDynamicComponent("wu-textarea"), __easycom_0);
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
          createVNode(_component_wu_textarea, {
            modelValue: $data.value1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
            placeholder: "请输入内容"
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "字数统计"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_textarea, {
            modelValue: $data.value2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
            placeholder: "请输入内容",
            count: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自动增高"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_textarea, {
            modelValue: $data.value3,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
            placeholder: "请输入内容",
            autoHeight: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "禁用状态"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_textarea, {
            modelValue: $data.value4,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
            placeholder: "文本域已被禁用",
            disabled: "",
            count: ""
          }, null, 8, ["modelValue"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "下划线模式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_textarea, {
            modelValue: $data.value5,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event),
            placeholder: "请输入内容",
            border: "bottom"
          }, null, 8, ["modelValue"])
        ])
      ])
    ])
  ]);
}
const textarea = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/textarea/textarea.nvue"]]);
export {
  textarea as default
};
