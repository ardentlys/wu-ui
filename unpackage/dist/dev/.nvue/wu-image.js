var _a, _b;
import { _ as __easycom_0$1 } from "./wu-icon.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, resolveDynamicComponent, createBlock, withCtx, createElementVNode, createVNode } from "vue";
import { a as requireNativePlugin, r as resolveEasycom } from "./uni-app.es.js";
import { m as mpMixin, a as mixin } from "./mixin.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const props$1 = {
  props: {
    // 是否展示组件
    show: {
      type: Boolean,
      default: false
    },
    // 使用的动画模式
    mode: {
      type: String,
      default: "fade"
    },
    // 动画的执行时间，单位ms
    duration: {
      type: [String, Number],
      default: 300
    },
    // 使用的动画过渡函数
    timingFunction: {
      type: String,
      default: "ease-out"
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.transition
  }
};
const animationMap = {
  fade: {
    enter: { opacity: 0 },
    "enter-to": { opacity: 1 },
    leave: { opacity: 1 },
    "leave-to": { opacity: 0 }
  },
  "fade-up": {
    enter: { opacity: 0, transform: "translateY(100%)" },
    "enter-to": { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 1, transform: "translateY(0)" },
    "leave-to": { opacity: 0, transform: "translateY(100%)" }
  },
  "fade-down": {
    enter: { opacity: 0, transform: "translateY(-100%)" },
    "enter-to": { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 1, transform: "translateY(0)" },
    "leave-to": { opacity: 0, transform: "translateY(-100%)" }
  },
  "fade-left": {
    enter: { opacity: 0, transform: "translateX(-100%)" },
    "enter-to": { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 1, transform: "translateY(0)" },
    "leave-to": { opacity: 0, transform: "translateX(-100%)" }
  },
  "fade-right": {
    enter: { opacity: 0, transform: "translateX(100%)" },
    "enter-to": { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 1, transform: "translateY(0)" },
    "leave-to": { opacity: 0, transform: "translateX(100%)" }
  },
  "slide-up": {
    enter: { transform: "translateY(100%)" },
    "enter-to": { transform: "translateY(0)" },
    leave: { transform: "translateY(0)" },
    "leave-to": { transform: "translateY(100%)" }
  },
  "slide-down": {
    enter: { transform: "translateY(-100%)" },
    "enter-to": { transform: "translateY(0)" },
    leave: { transform: "translateY(0)" },
    "leave-to": { transform: "translateY(-100%)" }
  },
  "slide-left": {
    enter: { transform: "translateX(-100%)" },
    "enter-to": { transform: "translateY(0)" },
    leave: { transform: "translateY(0)" },
    "leave-to": { transform: "translateX(-100%)" }
  },
  "slide-right": {
    enter: { transform: "translateX(100%)" },
    "enter-to": { transform: "translateY(0)" },
    leave: { transform: "translateY(0)" },
    "leave-to": { transform: "translateX(100%)" }
  },
  zoom: {
    enter: { transform: "scale(0.95)" },
    "enter-to": { transform: "scale(1)" },
    leave: { transform: "scale(1)" },
    "leave-to": { transform: "scale(0.95)" }
  },
  "fade-zoom": {
    enter: { opacity: 0, transform: "scale(0.95)" },
    "enter-to": { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 1, transform: "scale(1)" },
    "leave-to": { opacity: 0, transform: "scale(0.95)" }
  }
};
const nextTick = () => new Promise((resolve) => setTimeout(resolve, 1e3 / 50));
const animation = requireNativePlugin("animation");
const getStyle = (name) => animationMap[name];
const transition = {
  methods: {
    // 组件被点击发出事件
    clickHandler() {
      this.$emit("click");
    },
    // nvue版本动画进场
    nvueEnter() {
      const currentStyle = getStyle(this.mode);
      this.status = "enter";
      this.$emit("beforeEnter");
      this.inited = true;
      this.display = true;
      this.viewStyle = {
        opacity: 0
      };
      this.$nextTick(() => {
        this.viewStyle = currentStyle.enter;
        Promise.resolve().then(nextTick).then(() => {
          this.$emit("enter");
          animation.transition(this.$refs["wu-transition"].ref, {
            styles: currentStyle["enter-to"],
            duration: this.duration,
            timingFunction: this.timingFunction,
            needLayout: false,
            delay: 0
          }, () => {
            this.$emit("afterEnter");
          });
        }).catch(() => {
        });
      });
    },
    nvueLeave() {
      if (!this.display) {
        return;
      }
      const currentStyle = getStyle(this.mode);
      this.status = "leave";
      this.$emit("beforeLeave");
      this.viewStyle = currentStyle.leave;
      Promise.resolve().then(nextTick).then(() => {
        this.transitionEnded = false;
        this.$emit("leave");
        animation.transition(this.$refs["wu-transition"].ref, {
          styles: currentStyle["leave-to"],
          duration: this.duration,
          timingFunction: this.timingFunction,
          needLayout: false,
          delay: 0
        }, () => {
          this.onTransitionEnd();
        });
      }).catch(() => {
      });
    },
    // 完成过渡后触发
    onTransitionEnd() {
      if (this.transitionEnded)
        return;
      this.transitionEnded = true;
      this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
      if (!this.show && this.display) {
        this.display = false;
        this.inited = false;
      }
    }
  }
};
const _style_0$1 = {};
const _sfc_main$1 = {
  name: "wu-transition",
  data() {
    return {
      inited: false,
      // 是否显示/隐藏组件
      viewStyle: {},
      // 组件内部的样式
      status: "",
      // 记录组件动画的状态
      transitionEnded: false,
      // 组件是否结束的标记
      display: false,
      // 组件是否展示
      classes: ""
      // 应用的类名
    };
  },
  computed: {
    mergeStyle() {
      const {
        viewStyle,
        customStyle
      } = this;
      return {
        // 避免自定义样式影响到动画属性，所以写在viewStyle前面
        ...this.$w.addStyle(customStyle),
        ...viewStyle
      };
    }
  },
  // 将mixin挂在到组件中，uni.$w.mixin实际上为一个vue格式对象
  mixins: [mpMixin, mixin, transition, props$1],
  watch: {
    show: {
      handler(newVal) {
        newVal ? this.nvueEnter() : this.nvueLeave();
      },
      // 表示同时监听初始化时的props的show的意思
      immediate: true
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.inited ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["wu-transition", $data.classes]),
      ref: "wu-transition",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
      style: normalizeStyle([$options.mergeStyle]),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args)),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    38
    /* CLASS, STYLE, HYDRATE_EVENTS */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-transition/components/wu-transition/wu-transition.vue"]]);
const props = {
  props: {
    // 图片地址
    src: {
      type: String,
      default: ""
    },
    // 裁剪模式
    mode: {
      type: String,
      default: "aspectFill"
    },
    // 宽度，单位任意
    width: {
      type: [String, Number],
      default: 300
    },
    // 高度，单位任意
    height: {
      type: [String, Number],
      default: 255
    },
    // 图片形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: "square"
    },
    // 圆角，单位任意
    radius: {
      type: [String, Number],
      default: 0
    },
    // 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序
    lazyLoad: {
      type: Boolean,
      default: true
    },
    // 懒加载根边距 设置负数则是进入视图指定距离后显示 正数则是离视图多远时显示
    lazyLoadRootMargin: {
      type: [String, Number],
      default: -5
    },
    // 加载中状态的最小显示时间
    minLoadginShowTime: {
      type: [String, Number],
      default: 30
    },
    // 开启长按图片显示识别微信小程序码菜单
    showMenuByLongpress: {
      type: Boolean,
      default: true
    },
    // 加载中的图标，或者小图片
    loadingIcon: {
      type: String,
      default: "photo"
    },
    // 加载失败的图标，或者小图片
    errorIcon: {
      type: String,
      default: "info-circle"
    },
    // 是否显示加载中的图标或者自定义的slot
    showLoading: {
      type: Boolean,
      default: true
    },
    // 是否显示加载错误的图标或者自定义的slot
    showError: {
      type: Boolean,
      default: true
    },
    // 是否需要淡入效果
    fade: {
      type: Boolean,
      default: true
    },
    // 只支持网络资源，只对微信小程序有效
    webp: {
      type: Boolean,
      default: false
    },
    // 过渡时间，单位ms
    duration: {
      type: [String, Number],
      default: 500
    },
    // 背景颜色，用于深色页面加载图片时，为了和背景色融合
    bgColor: {
      type: String,
      default: "#f3f4f6"
    }
  }
};
const _style_0 = { "wu-image": { "": { "position": "relative", "transitionProperty": "opacity", "transitionDuration": 500, "transitionTimingFunction": "ease-in-out" } }, "wu-image__image": { "": { "width": 100, "height": 100 } }, "wu-image__loading": { "": { "position": "absolute", "top": 0, "left": 0, "width": 100, "height": 100, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f3f4f6", "color": "#909193", "fontSize": "46rpx" } }, "wu-image__error": { "": { "position": "absolute", "top": 0, "left": 0, "width": 100, "height": 100, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f3f4f6", "color": "#909193", "fontSize": "46rpx" } }, "@TRANSITION": { "wu-image": { "property": "opacity", "duration": 500, "timingFunction": "ease-in-out" } } };
const _sfc_main = {
  name: "wu-image",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      // 图片是否加载错误，如果是，则显示错误占位图
      isError: false,
      // 初始化组件时，默认为加载中状态
      loading: true,
      // 不透明度，为了实现淡入淡出的效果
      opacity: 1,
      // 过渡时间，因为props的值无法修改，故需要一个中间值
      durationTime: this.duration,
      // 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
      backgroundStyle: {},
      // 用于fade模式的控制组件显示与否
      show: false,
      // 是否加载image 用于控制懒加载
      loadingImage: false
    };
  },
  watch: {
    src: {
      immediate: true,
      handler(n) {
        if (!n) {
          this.isError = true;
        } else {
          this.isError = false;
          this.loading = true;
        }
      }
    }
  },
  computed: {
    wrapStyle() {
      let style = {};
      style.width = this.$w.addUnit(this.width);
      style.height = this.$w.addUnit(this.height);
      style.borderRadius = this.shape == "circle" ? "10000px" : this.$w.addUnit(this.radius);
      style.overflow = style.borderRadius > 0 ? "hidden" : "visible";
      return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
    }
  },
  mounted() {
    this.show = true;
    if (this.lazyLoad) {
      this.loadingImage = true;
    } else {
      this.loadingImage = true;
    }
  },
  methods: {
    // 点击图片
    onClick() {
      this.$emit("click");
    },
    // 图片加载失败
    onErrorHandler(err) {
      this.loading = false;
      this.isError = true;
      this.$emit("error", err);
    },
    // 图片加载完成，标记loading结束
    onLoadHandler(event) {
      setTimeout(() => {
        this.loading = false;
      }, this.minLoadginShowTime);
      this.isError = false;
      this.$emit("load", event);
      this.removeBgColor();
    },
    // 移除图片的背景色
    removeBgColor() {
      this.backgroundStyle = {
        backgroundColor: "transparent"
      };
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0$1);
  const _component_wu_transition = resolveEasycom(resolveDynamicComponent("wu-transition"), __easycom_1);
  return openBlock(), createBlock(_component_wu_transition, {
    mode: "fade",
    show: $data.show,
    duration: _ctx.fade ? 1e3 : 0
  }, {
    default: withCtx(() => [
      createElementVNode(
        "view",
        {
          class: "wu-image",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onClick && $options.onClick(...args)),
          style: normalizeStyle([$options.wrapStyle, $data.backgroundStyle])
        },
        [
          !$data.isError && $data.loadingImage ? (openBlock(), createElementBlock("u-image", {
            key: 0,
            src: _ctx.src,
            mode: _ctx.mode,
            onError: _cache[0] || (_cache[0] = (...args) => $options.onErrorHandler && $options.onErrorHandler(...args)),
            onLoad: _cache[1] || (_cache[1] = (...args) => $options.onLoadHandler && $options.onLoadHandler(...args)),
            showMenuByLongpress: _ctx.showMenuByLongpress,
            class: "wu-image__image",
            style: normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "10000px" : _ctx.$w.addUnit(_ctx.radius),
              width: _ctx.$w.addUnit(_ctx.width),
              height: _ctx.$w.addUnit(_ctx.height)
            })
          }, null, 44, ["src", "mode", "showMenuByLongpress"])) : createCommentVNode("v-if", true),
          _ctx.showLoading && $data.loading ? (openBlock(), createElementBlock(
            "view",
            {
              key: 1,
              class: "wu-image__loading",
              style: normalizeStyle({
                borderRadius: _ctx.shape == "circle" ? "50%" : _ctx.$w.addUnit(_ctx.radius),
                backgroundColor: this.bgColor,
                width: _ctx.$w.addUnit(_ctx.width),
                height: _ctx.$w.addUnit(_ctx.height)
              })
            },
            [
              renderSlot(_ctx.$slots, "loading", {}, () => [
                createVNode(_component_wu_icon, {
                  name: _ctx.loadingIcon,
                  width: _ctx.width,
                  height: _ctx.height
                }, null, 8, ["name", "width", "height"])
              ])
            ],
            4
            /* STYLE */
          )) : createCommentVNode("v-if", true),
          _ctx.showError && $data.isError && !$data.loading ? (openBlock(), createElementBlock(
            "view",
            {
              key: 2,
              class: "wu-image__error",
              style: normalizeStyle({
                borderRadius: _ctx.shape == "circle" ? "50%" : _ctx.$w.addUnit(_ctx.radius),
                width: _ctx.$w.addUnit(_ctx.width),
                height: _ctx.$w.addUnit(_ctx.height)
              })
            },
            [
              renderSlot(_ctx.$slots, "error", {}, () => [
                createVNode(_component_wu_icon, {
                  name: _ctx.errorIcon,
                  width: _ctx.width,
                  height: _ctx.height
                }, null, 8, ["name", "width", "height"])
              ])
            ],
            4
            /* STYLE */
          )) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "duration"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-image/components/wu-image/wu-image.vue"]]);
export {
  __easycom_0 as _
};
