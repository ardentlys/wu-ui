var _a, _b, _c, _d;
import { _ as __easycom_0 } from "./wu-icon.js";
import { openBlock, createElementBlock, withModifiers, normalizeStyle, toDisplayString, resolveDynamicComponent, resolveComponent, normalizeClass, createCommentVNode, createVNode, createBlock, withCtx, createTextVNode } from "vue";
import { r as resolveEasycom } from "./uni-app.es.js";
import { m as mpMixin, a as mixin } from "./mixin.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const props$1 = {
  props: {
    // 文字颜色
    color: {
      type: String,
      default: "#3c9cff"
    },
    // 字体大小，单位px
    fontSize: {
      type: [String, Number],
      default: 15
    },
    // 是否显示下划线
    underLine: {
      type: Boolean,
      default: false
    },
    // 要跳转的链接
    href: {
      type: String,
      default: ""
    },
    // 小程序中复制到粘贴板的提示语
    mpTips: {
      type: String,
      default: "链接已复制，请在浏览器打开"
    },
    // 下划线颜色
    lineColor: {
      type: String,
      default: ""
    },
    // 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
    text: {
      type: String,
      default: ""
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.link
  }
};
const _style_0$1 = { "wu-link": { "": { "flexDirection": "row", "flexWrap": "wrap", "flex": 1 } } };
const _sfc_main$1 = {
  name: "wu-link",
  mixins: [mpMixin, mixin, props$1],
  computed: {
    linkStyle() {
      const style = {
        color: this.color,
        fontSize: this.$w.addUnit(this.fontSize),
        // line-height设置为比字体大小多2px
        lineHeight: this.$w.addUnit(this.$w.getPx(this.fontSize) + 2),
        textDecoration: this.underLine ? "underline" : ""
      };
      if (this.underLine) {
        style.textDecorationColor = this.lineColor || this.color;
      }
      return style;
    }
  },
  methods: {
    openLink() {
      plus.runtime.openURL(this.href);
      this.$emit("click");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("u-text", {
    class: "wu-link",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.openLink && $options.openLink(...args), ["stop"])),
    style: normalizeStyle([$options.linkStyle, _ctx.$w.addStyle(_ctx.customStyle)]),
    nodes: _ctx.text
  }, toDisplayString(_ctx.text), 13, ["nodes"]);
}
const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-link/components/wu-link/wu-link.vue"]]);
const props = {
  props: {
    // 主题颜色
    type: {
      type: String,
      default: ""
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 显示的值
    text: {
      type: [String, Number],
      default: ""
    },
    // 前置图标
    prefixIcon: {
      type: String,
      default: ""
    },
    // 后置图标
    suffixIcon: {
      type: String,
      default: ""
    },
    // 文本处理的匹配模式
    // text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
    mode: {
      type: String,
      default: ""
    },
    // mode=link下，配置的链接
    href: {
      type: String,
      default: ""
    },
    // 格式化规则
    format: {
      type: [String, Function],
      default: ""
    },
    // mode=phone时，点击文本是否拨打电话
    call: {
      type: Boolean,
      default: false
    },
    // 小程序的打开方式
    openType: {
      type: String,
      default: ""
    },
    // 是否粗体，默认normal
    bold: {
      type: Boolean,
      default: false
    },
    // 是否块状
    block: {
      type: Boolean,
      default: false
    },
    // 文本显示的行数，如果设置，超出此行数，将会显示省略号
    lines: {
      type: [String, Number],
      default: ""
    },
    // 文本颜色
    color: {
      type: String,
      default: "#303133"
    },
    // 字体大小
    size: {
      type: [String, Number],
      default: 15
    },
    // 图标的样式
    iconStyle: {
      type: [Object, String],
      default: "15px"
    },
    // 文字装饰，下划线，中划线等，可选值 none|underline|line-through
    decoration: {
      type: String,
      default: "none"
    },
    // 外边距，对象、字符串，数值形式均可
    margin: {
      type: [Object, String, Number],
      default: ""
    },
    // 文本行高
    lineHeight: {
      type: [String, Number],
      default: ""
    },
    // 文本对齐方式，可选值left|center|right
    align: {
      type: String,
      default: "left"
    },
    // 文字换行，可选值break-word|normal|anywhere
    wordWrap: {
      type: String,
      default: "normal"
    },
    ...(_d = (_c = uni.$w) == null ? void 0 : _c.props) == null ? void 0 : _d.text
  }
};
const value = {
  computed: {
    // 经处理后需要显示的值
    value() {
      const {
        text,
        mode,
        format,
        href
      } = this;
      if (mode === "price") {
        if (!/^\d+(\.\d+)?$/.test(text)) {
          this.$w.error("金额模式下，text参数需要为金额格式");
        }
        if (this.$w.test.func(format)) {
          return format(text);
        }
        return this.$w.priceFormat(text, 2);
      }
      if (mode === "date") {
        !this.$w.test.date(text) && this.$w.error("日期模式下，text参数需要为日期或时间戳格式");
        if (this.$w.test.func(format)) {
          return format(text);
        }
        if (format) {
          return this.$w.timeFormat(text, format);
        }
        return this.$w.timeFormat(text, "yyyy-mm-dd");
      }
      if (mode === "phone") {
        if (this.$w.test.func(format)) {
          return format(text);
        }
        if (format === "encrypt") {
          return `${text.substr(0, 3)}****${text.substr(7)}`;
        }
        return text;
      }
      if (mode === "name") {
        !(typeof text === "string") && this.$w.error("姓名模式下，text参数需要为字符串格式");
        if (this.$w.test.func(format)) {
          return format(text);
        }
        if (format === "encrypt") {
          return this.formatName(text);
        }
        return text;
      }
      if (mode === "link") {
        !this.$w.test.url(href) && this.$w.error("超链接模式下，href参数需要为URL格式");
        return text;
      }
      return text;
    }
  },
  methods: {
    // 默认的姓名脱敏规则
    formatName(name) {
      let value2 = "";
      if (name.length === 2) {
        value2 = name.substr(0, 1) + "*";
      } else if (name.length > 2) {
        let char = "";
        for (let i = 0, len = name.length - 2; i < len; i++) {
          char += "*";
        }
        value2 = name.substr(0, 1) + char + name.substr(-1, 1);
      } else {
        value2 = name;
      }
      return value2;
    }
  }
};
const _style_0 = { "wu-text": { "": { "flexDirection": "row", "alignItems": "center", "flexWrap": "nowrap", "flex": 1 } }, "wu-text__price": { "": { "fontSize": 14, "color": "#606266" } }, "wu-text__value": { "": { "flexDirection": "row", "fontSize": 14, "color": "#606266", "flexWrap": "wrap", "textOverflow": "ellipsis", "alignItems": "center" } }, "wu-text__value--primary": { "": { "color": "#3c9cff" } }, "wu-text__value--warning": { "": { "color": "#f9ae3d" } }, "wu-text__value--success": { "": { "color": "#5ac725" } }, "wu-text__value--info": { "": { "color": "#909399" } }, "wu-text__value--error": { "": { "color": "#f56c6c" } }, "wu-text__value--main": { "": { "color": "#303133" } }, "wu-text__value--content": { "": { "color": "#606266" } }, "wu-text__value--tips": { "": { "color": "#909193" } }, "wu-text__value--light": { "": { "color": "#c0c4cc" } } };
const _sfc_main = {
  name: "wu-text",
  mixins: [mpMixin, mixin, value, props],
  computed: {
    valueStyle() {
      const style = {
        textDecoration: this.decoration,
        fontWeight: this.bold ? "bold" : "normal",
        wordWrap: this.wordWrap,
        fontSize: this.$w.addUnit(this.size)
      };
      !this.type && (style.color = this.color);
      this.isNvue && this.lines && (style.lines = this.lines);
      this.lineHeight && (style.lineHeight = uni.$u.addUnit(this.lineHeight));
      !this.isNvue && this.block && (style.display = "block");
      return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
    },
    isNvue() {
      let nvue = false;
      nvue = true;
      return nvue;
    },
    isMp() {
      let mp = false;
      return mp;
    }
  },
  data() {
    return {};
  },
  methods: {
    clickHandler() {
      if (this.call && this.mode === "phone") {
        uni.makePhoneCall({
          phoneNumber: this.text
        });
      }
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0);
  const _component_wu_link = resolveEasycom(resolveDynamicComponent("wu-link"), __easycom_1$1);
  const _component_button = resolveComponent("button");
  return _ctx.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["wu-text", []]),
      style: normalizeStyle({
        margin: _ctx.margin,
        justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
      }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      renderWhole: true
    },
    [
      _ctx.mode === "price" ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 0,
          class: normalizeClass(["wu-text__price", _ctx.type && `wu-text__value--${_ctx.type}`]),
          style: normalizeStyle([$options.valueStyle])
        },
        "￥",
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      _ctx.prefixIcon ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "wu-text__prefix-icon"
      }, [
        createVNode(_component_wu_icon, {
          name: _ctx.prefixIcon,
          customStyle: _ctx.$w.addStyle(_ctx.iconStyle)
        }, null, 8, ["name", "customStyle"])
      ])) : createCommentVNode("v-if", true),
      _ctx.mode === "link" ? (openBlock(), createBlock(_component_wu_link, {
        key: 2,
        text: _ctx.value,
        href: _ctx.href,
        underLine: ""
      }, null, 8, ["text", "href"])) : _ctx.openType && $options.isMp ? (openBlock(), createBlock(_component_button, {
        key: 3,
        class: "wu-reset-button wu-text__value",
        style: normalizeStyle([$options.valueStyle]),
        "data-index": _ctx.index,
        openType: _ctx.openType,
        onGetuserinfo: _ctx.onGetUserInfo,
        onContact: _ctx.onContact,
        onGetphonenumber: _ctx.onGetPhoneNumber,
        onError: _ctx.onError,
        onLaunchapp: _ctx.onLaunchApp,
        onOpensetting: _ctx.onOpenSetting,
        lang: _ctx.lang,
        "session-from": _ctx.sessionFrom,
        "send-message-title": _ctx.sendMessageTitle,
        "send-message-path": _ctx.sendMessagePath,
        "send-message-img": _ctx.sendMessageImg,
        "show-message-card": _ctx.showMessageCard,
        "app-parameter": _ctx.appParameter
      }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString(_ctx.value),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["style", "data-index", "openType", "onGetuserinfo", "onContact", "onGetphonenumber", "onError", "onLaunchapp", "onOpensetting", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (openBlock(), createElementBlock(
        "u-text",
        {
          key: 4,
          class: normalizeClass(["wu-text__value", [
            _ctx.type && `wu-text__value--${_ctx.type}`,
            _ctx.lines && `wu-line-${_ctx.lines}`
          ]]),
          style: normalizeStyle([$options.valueStyle])
        },
        toDisplayString(_ctx.value),
        7
        /* TEXT, CLASS, STYLE */
      )),
      _ctx.suffixIcon ? (openBlock(), createElementBlock("view", {
        key: 5,
        class: "wu-text__suffix-icon"
      }, [
        createVNode(_component_wu_icon, {
          name: _ctx.suffixIcon,
          customStyle: _ctx.$w.addStyle(_ctx.iconStyle)
        }, null, 8, ["name", "customStyle"])
      ])) : createCommentVNode("v-if", true)
    ],
    4
    /* STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-text/components/wu-text/wu-text.vue"]]);
export {
  __easycom_1 as _
};
