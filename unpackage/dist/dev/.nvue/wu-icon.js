var _a, _b;
import { m as mpMixin, a as mixin } from "./mixin.js";
import { openBlock, createElementBlock, normalizeClass, createCommentVNode, normalizeStyle, toDisplayString } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const iconUrl = "/assets/wuicons.04d281cc.ttf";
const icons = {
  "wuicon-level": "e68f",
  "wuicon-download": "e670",
  "wuicon-search": "e632",
  "wuicon-reload": "e627",
  "wuicon-scan": "e631",
  "wuicon-calendar": "e65c",
  "wuicon-bag": "e647",
  "wuicon-checkbox-mark": "e659",
  "wuicon-attach": "e640",
  "wuicon-wifi-off": "e6cc",
  "wuicon-woman": "e626",
  "wuicon-man": "e675",
  "wuicon-chat": "e656",
  "wuicon-chat-fill": "e63f",
  "wuicon-red-packet": "e6c3",
  "wuicon-folder": "e694",
  "wuicon-order": "e695",
  "wuicon-arrow-up-fill": "e636",
  "wuicon-arrow-down-fill": "e638",
  "wuicon-backspace": "e64d",
  "wuicon-photo": "e60d",
  "wuicon-photo-fill": "e6b4",
  "wuicon-lock": "e69d",
  "wuicon-lock-fill": "e6a6",
  "wuicon-lock-open": "e68d",
  "wuicon-lock-opened-fill": "e6a1",
  "wuicon-home": "e67b",
  "wuicon-home-fill": "e68e",
  "wuicon-star": "e618",
  "wuicon-star-fill": "e61e",
  "wuicon-share": "e629",
  "wuicon-share-fill": "e6bb",
  "wuicon-share-square": "e6c4",
  "wuicon-volume": "e605",
  "wuicon-volume-fill": "e624",
  "wuicon-volume-off": "e6bd",
  "wuicon-volume-off-fill": "e6c8",
  "wuicon-trash": "e623",
  "wuicon-trash-fill": "e6ce",
  "wuicon-shopping-cart": "e6cb",
  "wuicon-shopping-cart-fill": "e630",
  "wuicon-question-circle": "e622",
  "wuicon-question-circle-fill": "e6bc",
  "wuicon-plus": "e625",
  "wuicon-plus-circle": "e603",
  "wuicon-plus-circle-fill": "e611",
  "wuicon-tags": "e621",
  "wuicon-tags-fill": "e613",
  "wuicon-pause": "e61c",
  "wuicon-pause-circle": "e696",
  "wuicon-pause-circle-fill": "e60c",
  "wuicon-play-circle": "e6af",
  "wuicon-play-circle-fill": "e62a",
  "wuicon-map": "e665",
  "wuicon-map-fill": "e6a8",
  "wuicon-phone": "e6ba",
  "wuicon-phone-fill": "e6ac",
  "wuicon-list": "e690",
  "wuicon-list-dot": "e6a9",
  "wuicon-info-circle": "e69f",
  "wuicon-info-circle-fill": "e6a7",
  "wuicon-minus": "e614",
  "wuicon-minus-circle": "e6a5",
  "wuicon-mic": "e66d",
  "wuicon-mic-off": "e691",
  "wuicon-grid": "e68c",
  "wuicon-grid-fill": "e698",
  "wuicon-eye": "e664",
  "wuicon-eye-fill": "e697",
  "wuicon-eye-off": "e69c",
  "wuicon-eye-off-outline": "e688",
  "wuicon-file-text": "e687",
  "wuicon-file-text-fill": "e67f",
  "wuicon-edit-pen": "e65d",
  "wuicon-edit-pen-fill": "e679",
  "wuicon-email": "e673",
  "wuicon-email-fill": "e683",
  "wuicon-checkmark": "e64a",
  "wuicon-checkmark-circle": "e643",
  "wuicon-checkmark-circle-fill": "e668",
  "wuicon-clock": "e66c",
  "wuicon-clock-fill": "e64b",
  "wuicon-close": "e65a",
  "wuicon-close-circle": "e64e",
  "wuicon-close-circle-fill": "e666",
  "wuicon-car": "e64f",
  "wuicon-car-fill": "e648",
  "wuicon-bell": "e651",
  "wuicon-bell-fill": "e604",
  "wuicon-play-left": "e6bf",
  "wuicon-play-right": "e6b3",
  "wuicon-play-left-fill": "e6ae",
  "wuicon-play-right-fill": "e6ad",
  "wuicon-skip-back-left": "e6c5",
  "wuicon-skip-forward-right": "e61f",
  "wuicon-setting": "e602",
  "wuicon-setting-fill": "e6d0",
  "wuicon-more-dot-fill": "e66f",
  "wuicon-more-circle": "e69e",
  "wuicon-more-circle-fill": "e684",
  "wuicon-arrow-upward": "e641",
  "wuicon-arrow-downward": "e634",
  "wuicon-arrow-leftward": "e63b",
  "wuicon-arrow-rightward": "e644",
  "wuicon-arrow-up": "e633",
  "wuicon-arrow-down": "e63e",
  "wuicon-arrow-left": "e646",
  "wuicon-arrow-right": "e63c",
  "wuicon-thumb-up": "e612",
  "wuicon-thumb-up-fill": "e62c",
  "wuicon-thumb-down": "e60a",
  "wuicon-thumb-down-fill": "e628",
  "wuicon-coupon": "e65f",
  "wuicon-coupon-fill": "e64c",
  "wuicon-kefu-ermai": "e660",
  "wuicon-server-fill": "e610",
  "wuicon-server-man": "e601",
  "wuicon-warning": "e6c1",
  "wuicon-warning-fill": "e6c7",
  "wuicon-camera": "e642",
  "wuicon-camera-fill": "e650",
  "wuicon-pushpin": "e6d1",
  "wuicon-pushpin-fill": "e6b6",
  "wuicon-heart": "e6a2",
  "wuicon-heart-fill": "e68b",
  "wuicon-account": "e63a",
  "wuicon-account-fill": "e653",
  "wuicon-integral": "e693",
  "wuicon-integral-fill": "e6b1",
  "wuicon-gift": "e680",
  "wuicon-gift-fill": "e6b0",
  "wuicon-empty-data": "e671",
  "wuicon-empty-address": "e68a",
  "wuicon-empty-favor": "e662",
  "wuicon-empty-car": "e656",
  "wuicon-empty-order": "e66b",
  "wuicon-empty-list": "e671",
  "wuicon-empty-search": "e677",
  "wuicon-empty-permission": "e67c",
  "wuicon-empty-news": "e67d",
  "wuicon-empty-history": "e684",
  "wuicon-empty-coupon": "e69b",
  "wuicon-empty-page": "e60e",
  "wuicon-apple-fill": "e635",
  "wuicon-zhifubao-circle-fill": "e617",
  "wuicon-weixin-circle-fill": "e6cd",
  "wuicon-weixin-fill": "e620",
  "wuicon-qq-fill": "e608",
  "wuicon-qq-circle-fill": "e6b9",
  "wuicon-moments": "e6a0",
  "wuicon-moments-circel-fill": "e6c2",
  "wuicon-twitter": "e607",
  "wuicon-twitter-circle-fill": "e6cf"
};
const props = {
  props: {
    // 图标类名
    name: {
      type: String,
      default: ""
    },
    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: "#606266"
    },
    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: "16px"
    },
    // 是否显示粗体
    bold: {
      type: Boolean,
      default: false
    },
    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String, Number],
      default: null
    },
    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: ""
    },
    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: "wuicon"
    },
    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: ""
    },
    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: "right"
    },
    // label的大小
    labelSize: {
      type: [String, Number],
      default: "15px"
    },
    // label的颜色
    labelColor: {
      type: String,
      default: "#606266"
    },
    // label与图标的距离
    space: {
      type: [String, Number],
      default: "3px"
    },
    // 图片的mode
    imgMode: {
      type: String,
      default: ""
    },
    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: ""
    },
    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: ""
    },
    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: 0
    },
    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: false
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.icon
  }
};
const _style_0 = { "wu-icon": { "": { "alignItems": "center" } }, "wu-icon--left": { "": { "flexDirection": "row" } }, "wu-icon--right": { "": { "flexDirection": "row" } }, "wu-icon--top": { "": { "flexDirection": "column" } }, "wu-icon--bottom": { "": { "flexDirection": "column" } }, "wu-icon__icon": { "": { "fontFamily": "wuicon-iconfont", "position": "relative", "flexDirection": "row", "alignItems": "center" } }, "wu-icon__icon--primary": { "": { "color": "#3c9cff" } }, "wu-icon__icon--success": { "": { "color": "#5ac725" } }, "wu-icon__icon--error": { "": { "color": "#f56c6c" } }, "wu-icon__icon--warning": { "": { "color": "#f9ae3d" } }, "wu-icon__icon--info": { "": { "color": "#909399" } } };
const domModule = weex.requireModule("dom");
domModule.addRule("fontFace", {
  "fontFamily": "wuicon-iconfont",
  "src": "url('" + iconUrl + "')"
});
const _sfc_main = {
  name: "wu-icon",
  emits: ["click"],
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      colorType: [
        "primary",
        "success",
        "info",
        "error",
        "warning"
      ]
    };
  },
  computed: {
    uClasses() {
      let classes = [];
      classes.push(this.customPrefix);
      classes.push(this.customPrefix + "-" + this.name);
      if (this.color && this.colorType.includes(this.color))
        classes.push("wu-icon__icon--" + this.color);
      return classes;
    },
    iconStyle() {
      let style = {};
      style = {
        fontSize: this.$w.addUnit(this.size),
        lineHeight: this.$w.addUnit(this.size),
        fontWeight: this.bold ? "bold" : "normal",
        // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
        top: this.$w.addUnit(this.top)
      };
      if (this.color && !this.colorType.includes(this.color))
        style.color = this.color;
      return style;
    },
    // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
    isImg() {
      const isBase64 = this.name.indexOf("data:") > -1 && this.name.indexOf("base64") > -1;
      return this.name.indexOf("/") !== -1 || isBase64;
    },
    imgStyle() {
      let style = {};
      style.width = this.width ? this.$w.addUnit(this.width) : this.$w.addUnit(this.size);
      style.height = this.height ? this.$w.addUnit(this.height) : this.$w.addUnit(this.size);
      return style;
    },
    // 通过图标名，查找对应的图标
    icon() {
      const code = icons["wuicon-" + this.name];
      if (["wuicon"].indexOf(this.customPrefix) > -1) {
        return code ? unescape(`%u${code}`) : this.name;
      } else {
        return unescape(`%u${this.name}`);
      }
    },
    // label样式
    labelStyle() {
      let style = {
        color: this.labelColor,
        fontSize: this.$w.addUnit(this.labelSize),
        marginLeft: this.labelPos == "right" ? this.$w.addUnit(this.space) : 0,
        marginTop: this.labelPos == "bottom" ? this.$w.addUnit(this.space) : 0,
        marginRight: this.labelPos == "left" ? this.$w.addUnit(this.space) : 0,
        marginBottom: this.labelPos == "top" ? this.$w.addUnit(this.space) : 0
      };
      return style;
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit("click", this.index);
      this.stop && this.preventEvent(e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["wu-icon", ["wu-icon--" + _ctx.labelPos]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      renderWhole: true
    },
    [
      createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
      _ctx.label !== "" && (_ctx.labelPos == "left" || _ctx.labelPos == "top") ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 0,
          class: "wu-icon__label",
          style: normalizeStyle($options.labelStyle)
        },
        toDisplayString(_ctx.label),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true),
      $options.isImg ? (openBlock(), createElementBlock("u-image", {
        key: 1,
        class: "wu-icon__img",
        src: _ctx.name,
        mode: _ctx.imgMode,
        style: normalizeStyle([$options.imgStyle, _ctx.$w.addStyle(_ctx.customStyle)])
      }, null, 12, ["src", "mode"])) : (openBlock(), createElementBlock("u-text", {
        key: 2,
        class: normalizeClass(["wu-icon__icon", $options.uClasses]),
        style: normalizeStyle([$options.iconStyle, _ctx.$w.addStyle(_ctx.customStyle)]),
        hoverClass: _ctx.hoverClass
      }, toDisplayString($options.icon), 15, ["hoverClass"])),
      createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
      _ctx.label !== "" && (_ctx.labelPos == "right" || _ctx.labelPos == "bottom") ? (openBlock(), createElementBlock(
        "u-text",
        {
          key: 3,
          class: "wu-icon__label",
          style: normalizeStyle($options.labelStyle)
        },
        toDisplayString(_ctx.label),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-icon/components/wu-icon/wu-icon.vue"]]);
export {
  __easycom_0 as _
};
