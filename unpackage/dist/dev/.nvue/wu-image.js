import { _ as __easycom_0$1 } from "./wu-icon.js";
import { resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createCommentVNode, renderSlot, createVNode } from "vue";
import { r as resolveEasycom } from "./uni-app.es.js";
import { m as mpMixin, a as mixin } from "./mixin.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
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
  return openBlock(), createElementBlock(
    "view",
    {
      class: "wu-image",
      onClick: _cache[2] || (_cache[2] = (...args) => $options.onClick && $options.onClick(...args)),
      style: normalizeStyle([$options.wrapStyle, $data.backgroundStyle]),
      renderWhole: true
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
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-image/components/wu-image/wu-image.vue"]]);
export {
  __easycom_0 as _
};
