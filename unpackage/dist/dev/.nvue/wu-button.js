var _a, _b;
import { _ as __easycom_0 } from "./wu-loading-icon.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, Fragment, createVNode, toDisplayString, createBlock, createCommentVNode } from "vue";
import { r as resolveEasycom } from "./uni-app.es.js";
import { _ as __easycom_0$1 } from "./wu-icon.js";
import { m as mpMixin, a as mixin } from "./mixin.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
let flag;
function throttle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      typeof func === "function" && func();
      setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    setTimeout(() => {
      flag = false;
      typeof func === "function" && func();
    }, wait);
  }
}
const props = {
  props: {
    // 是否细边框
    hairline: {
      type: Boolean,
      default: true
    },
    // 按钮的预置样式，info，primary，error，warning，success
    type: {
      type: String,
      default: "info"
    },
    // 按钮尺寸，large，normal，small，mini
    size: {
      type: String,
      default: "normal"
    },
    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
      type: String,
      default: "square"
    },
    // 按钮是否镂空
    plain: {
      type: Boolean,
      default: false
    },
    // 是否禁止状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否加载中
    loading: {
      type: Boolean,
      default: false
    },
    // 加载中提示文字
    loadingText: {
      type: [String, Number],
      default: ""
    },
    // 加载状态图标类型
    loadingMode: {
      type: String,
      default: "spinner"
    },
    // 加载图标大小
    loadingSize: {
      type: [String, Number],
      default: 14
    },
    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    // https://uniapp.dcloud.io/component/button
    openType: {
      type: String,
      default: ""
    },
    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    // 取值为submit（提交表单），reset（重置表单）
    formType: {
      type: String,
      default: ""
    },
    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    // 只微信小程序、QQ小程序有效
    appParameter: {
      type: String,
      default: ""
    },
    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
      type: Boolean,
      default: true
    },
    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
    lang: {
      type: String,
      default: "en"
    },
    // 会话来源，open-type="contact"时有效。只微信小程序有效
    sessionFrom: {
      type: String,
      default: ""
    },
    // 会话内消息卡片标题，open-type="contact"时有效
    // 默认当前标题，只微信小程序有效
    sendMessageTitle: {
      type: String,
      default: ""
    },
    // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
    // 默认当前分享路径，只微信小程序有效
    sendMessagePath: {
      type: String,
      default: ""
    },
    // 会话内消息卡片图片，open-type="contact"时有效
    // 默认当前页面截图，只微信小程序有效
    sendMessageImg: {
      type: String,
      default: ""
    },
    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
    // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
    showMessageCard: {
      type: Boolean,
      default: true
    },
    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
      type: String,
      default: ""
    },
    // 节流，一定时间内只能触发一次
    throttleTime: {
      type: [String, Number],
      default: 0
    },
    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
      type: [String, Number],
      default: 0
    },
    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
      type: [String, Number],
      default: 200
    },
    // 按钮文字，之所以通过props传入，是因为slot传入的话
    // nvue中无法控制文字的样式
    text: {
      type: [String, Number],
      default: ""
    },
    // 按钮图标
    icon: {
      type: String,
      default: ""
    },
    // 按钮图标颜色
    iconColor: {
      type: String,
      default: "#000000"
    },
    // 按钮颜色，支持传入linear-gradient渐变色
    color: {
      type: String,
      default: ""
    },
    // 自定义按钮文本样式
    customTextStyle: {
      type: [Object, String],
      default: () => {
      }
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.button
  }
};
const _style_0 = { "wu-reset-button": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 0 } }, "wu-button--active": { "": { "opacity": 0.75 } }, "wu-button--active--plain": { "": { "backgroundColor": "#d9d9d9" } }, "wu-button__loading-text": { "": { "marginLeft": 4, "color": "#FFFFFF", "fontSize": 15 } }, "wu-button__text": { "": { "color": "#FFFFFF", "fontSize": 15 } }, "wu-button__text--plain--error": { "": { "color": "#f56c6c" } }, "wu-button__text--plain--warning": { "": { "color": "#f9ae3d" } }, "wu-button__text--plain--success": { "": { "color": "#5ac725" } }, "wu-button__text--plain--info": { "": { "color": "#909399" } }, "wu-button__text--plain--primary": { "": { "color": "#3c9cff" } }, "wu-button": { "": { "height": 40, "position": "relative", "alignItems": "center", "justifyContent": "center", "flexDirection": "row" } }, "wu-button--large": { "": { "height": 50, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "wu-button--normal": { "": { "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12, "fontSize": 14 } }, "wu-button--small": { "": { "height": 30, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "fontSize": 12 } }, "wu-button--mini": { "": { "height": 22, "fontSize": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8 } }, "wu-button--disabled": { "": { "opacity": 0.5 } }, "wu-button--info": { "": { "color": "#323233", "backgroundColor": "#ffffff", "borderColor": "#ebedf0", "borderWidth": 1, "borderStyle": "solid" } }, "wu-button--success": { "": { "color": "#ffffff", "backgroundColor": "#5ac725", "borderColor": "#5ac725", "borderWidth": 1, "borderStyle": "solid" } }, "wu-button--primary": { "": { "color": "#ffffff", "backgroundColor": "#3c9cff", "borderColor": "#3c9cff", "borderWidth": 1, "borderStyle": "solid" } }, "wu-button--error": { "": { "color": "#ffffff", "backgroundColor": "#f56c6c", "borderColor": "#f56c6c", "borderWidth": 1, "borderStyle": "solid" } }, "wu-button--warning": { "": { "color": "#ffffff", "backgroundColor": "#f9ae3d", "borderColor": "#f9ae3d", "borderWidth": 1, "borderStyle": "solid" } }, "wu-button--block": { "": { "flexDirection": "row", "width": 100 } }, "wu-button--circle": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100 } }, "wu-button--square": { "": { "borderBottomLeftRadius": 3, "borderBottomRightRadius": 3, "borderTopLeftRadius": 3, "borderTopRightRadius": 3 } }, "wu-button--plain": { "": { "backgroundColor": "#ffffff" } }, "wu-button--hairline": { "": { "!borderWidth": 0.5 } } };
const _sfc_main = {
  name: "wu-button",
  mixins: [mpMixin, mixin, props],
  emits: ["click"],
  data() {
    return {};
  },
  computed: {
    // 生成bem风格的类名
    bemClass() {
      if (!this.color) {
        return this.bem(
          "button",
          ["type", "shape", "size"],
          ["disabled", "plain", "hairline"]
        );
      } else {
        return this.bem(
          "button",
          ["shape", "size"],
          ["disabled", "plain", "hairline"]
        );
      }
    },
    loadingColor() {
      if (this.plain) {
        return this.color ? this.color : "#3c9cff";
      }
      if (this.type === "info") {
        return "#c9c9c9";
      }
      return "rgb(200, 200, 200)";
    },
    iconColorCom() {
      if (this.iconColor)
        return this.iconColor;
      if (this.plain) {
        return this.color ? this.color : this.type;
      } else {
        return this.type === "info" ? "#000000" : "#ffffff";
      }
    },
    baseColor() {
      let style = {};
      if (this.color) {
        style.color = this.plain ? this.color : "white";
        if (!this.plain) {
          style["background-color"] = this.color;
        }
        if (this.color.indexOf("gradient") !== -1) {
          if (!this.plain) {
            style.borderTopWidth = "0";
            style.borderRightWidth = "0";
            style.borderBottomWidth = "0";
            style.borderLeftWidth = "0";
            style.backgroundImage = this.color;
          } else {
            style.border = "1px solid #000";
            style.color = "#000";
          }
        } else {
          style.borderColor = this.color;
          style.borderWidth = "1px";
          style.borderStyle = "solid";
        }
      }
      return style;
    },
    // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
    nvueTextStyle() {
      let style = {};
      if (this.type === "info") {
        style.color = "#323233";
      }
      if (this.color) {
        style.color = this.plain ? this.color : "white";
      }
      style.fontSize = this.textSize + "px";
      return style;
    },
    // 字体大小
    textSize() {
      let fontSize = 14, {
        size
      } = this;
      if (size === "large")
        fontSize = 16;
      if (size === "normal")
        fontSize = 14;
      if (size === "small")
        fontSize = 12;
      if (size === "mini")
        fontSize = 10;
      return fontSize;
    }
  },
  methods: {
    clickHandler() {
      if (!this.disabled && !this.loading) {
        throttle(() => {
          this.$emit("click");
        }, this.throttleTime);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_loading_icon = resolveEasycom(resolveDynamicComponent("wu-loading-icon"), __easycom_0);
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0$1);
  return openBlock(), createElementBlock("view", {
    class: "wu-button-wrapper",
    renderWhole: true
  }, [
    createElementVNode("view", {
      hoverStartTime: Number(_ctx.hoverStartTime),
      hoverStayTime: Number(_ctx.hoverStayTime),
      class: normalizeClass(["wu-button", $options.bemClass]),
      hoverClass: !_ctx.disabled && !_ctx.loading && !_ctx.color && (_ctx.plain || _ctx.type === "info") ? "wu-button--active--plain" : !_ctx.disabled && !_ctx.loading && !_ctx.plain ? "wu-button--active" : "",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      style: normalizeStyle([$options.baseColor, _ctx.$w.addStyle(_ctx.customStyle)])
    }, [
      _ctx.loading ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createVNode(_component_wu_loading_icon, {
            mode: _ctx.loadingMode,
            size: _ctx.loadingSize * 1.15,
            color: $options.loadingColor
          }, null, 8, ["mode", "size", "color"]),
          createElementVNode(
            "u-text",
            {
              class: normalizeClass(["wu-button__loading-text", [_ctx.plain && `wu-button__text--plain--${_ctx.type}`]]),
              style: normalizeStyle([$options.nvueTextStyle, _ctx.$w.addStyle(_ctx.customTextStyle)])
            },
            toDisplayString(_ctx.loadingText || _ctx.text),
            7
            /* TEXT, CLASS, STYLE */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          _ctx.icon ? (openBlock(), createBlock(_component_wu_icon, {
            key: 0,
            name: _ctx.icon,
            color: $options.iconColorCom,
            size: $options.textSize * 1.35
          }, null, 8, ["name", "color", "size"])) : createCommentVNode("v-if", true),
          createElementVNode(
            "u-text",
            {
              class: normalizeClass(["wu-button__text", [_ctx.plain && `wu-button__text--plain--${_ctx.type}`]]),
              style: normalizeStyle([
                {
                  marginLeft: _ctx.icon ? "2px" : 0
                },
                $options.nvueTextStyle,
                _ctx.$w.addStyle(_ctx.customTextStyle)
              ])
            },
            toDisplayString(_ctx.text),
            7
            /* TEXT, CLASS, STYLE */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ], 14, ["hoverStartTime", "hoverStayTime", "hoverClass"])
  ]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-button/components/wu-button/wu-button.vue"]]);
export {
  __easycom_3 as _
};
