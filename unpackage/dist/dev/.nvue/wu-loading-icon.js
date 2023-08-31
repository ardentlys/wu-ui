var _a, _b;
import { m as mpMixin, a as mixin } from "./mixin.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, Fragment, createCommentVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const props = {
  props: {
    // 是否显示组件
    show: {
      type: Boolean,
      default: true
    },
    // 颜色
    color: {
      type: String,
      default: "#909193"
    },
    // 提示文字颜色
    textColor: {
      type: String,
      default: "#909193"
    },
    // 文字和图标是否垂直排列
    vertical: {
      type: Boolean,
      default: false
    },
    // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
    mode: {
      type: String,
      default: "spinner"
    },
    // 图标大小，单位默认px
    size: {
      type: [String, Number],
      default: 24
    },
    // 文字大小
    textSize: {
      type: [String, Number],
      default: 15
    },
    // 文字内容
    text: {
      type: [String, Number],
      default: ""
    },
    // 动画模式 https://www.runoob.com/cssref/css3-pr-animation-timing-function.html
    timingFunction: {
      type: String,
      default: "linear"
    },
    // 动画执行周期时间
    duration: {
      type: [String, Number],
      default: 1200
    },
    // mode=circle时的暗边颜色
    inactiveColor: {
      type: String,
      default: ""
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.loadingIcon
  }
};
const _style_0 = { "wu-loading-icon": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "color": "#c8c9cc" } }, "wu-loading-icon__text": { "": { "marginLeft": 4, "color": "#606266", "fontSize": 14, "lineHeight": 20 } }, "wu-loading-icon__spinner": { "": { "width": 30, "height": 30, "position": "relative" } }, "wu-loading-icon__spinner--semicircle": { "": { "borderWidth": 2, "borderColor": "rgba(0,0,0,0)", "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderStyle": "solid" } }, "wu-loading-icon__spinner--circle": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderWidth": 2, "borderTopColor": "#e5e5e5", "borderRightColor": "#e5e5e5", "borderBottomColor": "#e5e5e5", "borderLeftColor": "#e5e5e5", "borderStyle": "solid" } }, "wu-loading-icon--vertical": { "": { "flexDirection": "column" } } };
const animation = weex.requireModule("animation");
const _sfc_main = {
  name: "wu-loading-icon",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // Array.form可以通过一个伪数组对象创建指定长度的数组
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
      array12: Array.from({
        length: 12
      }),
      // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
      // 在iOS nvue上，则会一开始默认执行两个周期的动画
      aniAngel: 360,
      // 动画旋转角度
      webviewHide: false,
      // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
      loading: false
      // 是否运行中，针对nvue使用
    };
  },
  computed: {
    // 当为circle类型时，给其另外三边设置一个更轻一些的颜色
    // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
    // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
    otherBorderColor() {
      const lightColor = this.$w.Color.gradient(this.color, "#ffffff", 100)[80];
      if (this.mode === "circle") {
        return this.inactiveColor ? this.inactiveColor : lightColor;
      } else {
        return "transparent";
      }
    }
  },
  watch: {
    show(n) {
      if (n && !this.loading) {
        setTimeout(() => {
          this.startAnimate();
        }, 30);
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.show && this.nvueAnimate();
        this.show && this.addEventListenerToWebview();
      }, 20);
    },
    // 监听webview的显示与隐藏
    addEventListenerToWebview() {
      const pages = getCurrentPages();
      const page = pages[pages.length - 1];
      const currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    nvueAnimate() {
      this.mode !== "spinner" && this.startAnimate();
    },
    // 执行nvue的animate模块动画
    startAnimate() {
      this.loading = true;
      const ani = this.$refs.ani;
      if (!ani)
        return;
      animation.transition(ani, {
        // 进行角度旋转
        styles: {
          transform: `rotate(${this.aniAngel}deg)`,
          transformOrigin: "center center"
        },
        duration: this.duration,
        timingFunction: this.timingFunction
        // delay: 10
      }, () => {
        this.aniAngel += 360;
        this.show && !this.webviewHide ? this.startAnimate() : this.loading = false;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["wu-loading-icon", [_ctx.vertical && "wu-loading-icon--vertical"]]),
      style: normalizeStyle([_ctx.$w.addStyle(_ctx.customStyle)]),
      renderWhole: true
    },
    [
      !$data.webviewHide ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["wu-loading-icon__spinner", [`wu-loading-icon__spinner--${_ctx.mode}`]]),
          ref: "ani",
          style: normalizeStyle({
            color: _ctx.color,
            width: _ctx.$w.addUnit(_ctx.size),
            height: _ctx.$w.addUnit(_ctx.size),
            borderTopColor: _ctx.color,
            borderBottomColor: $options.otherBorderColor,
            borderLeftColor: $options.otherBorderColor,
            borderRightColor: $options.otherBorderColor,
            "animation-duration": `${_ctx.duration}ms`,
            "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
          })
        },
        [
          _ctx.mode === "spinner" ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createCommentVNode(" 此组件内部图标部分无法设置宽高，即使通过width和height配置了也无效 "),
              !$data.webviewHide ? (openBlock(), createElementBlock(
                "loading-indicator",
                {
                  key: 0,
                  class: "wu-loading-indicator",
                  animating: true,
                  style: normalizeStyle({
                    color: _ctx.color,
                    width: _ctx.$w.addUnit(_ctx.size),
                    height: _ctx.$w.addUnit(_ctx.size)
                  })
                },
                null,
                4
                /* STYLE */
              )) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      _ctx.text ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 1,
          class: "wu-loading-icon__text",
          style: normalizeStyle({
            fontSize: _ctx.$w.addUnit(_ctx.textSize),
            color: _ctx.textColor
          })
        },
        toDisplayString(_ctx.text),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-loading-icon/components/wu-loading-icon/wu-loading-icon.vue"]]);
export {
  __easycom_0 as _
};
