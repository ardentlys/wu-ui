var _a, _b, _c, _d;
import { m as mpMixin, a as mixin } from "./mixin.js";
import { openBlock, createElementBlock, normalizeStyle, renderSlot, resolveDynamicComponent, createCommentVNode, createElementVNode, normalizeClass, createBlock, toDisplayString } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
import { r as resolveEasycom } from "./uni-app.es.js";
import { _ as __easycom_0$2 } from "./wu-icon.js";
const props$1 = {
  props: {
    bgColor: {
      type: String,
      default: "transparent"
    },
    customStyle: {
      type: [Object, String],
      default: () => {
        return "";
      }
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.statusBar
  }
};
const _style_0$1 = {};
const _sfc_main$1 = {
  name: "wu-status-bar",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {};
  },
  computed: {
    style() {
      const style = {};
      style.height = this.$w.addUnit(this.$w.sys().statusBarHeight, "px");
      style.background = this.bgColor;
      return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      style: normalizeStyle([$options.style]),
      class: "wu-status-bar",
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-status-bar/components/wu-status-bar/wu-status-bar.vue"]]);
const props = {
  props: {
    // 是否开启顶部安全区适配
    safeAreaInsetTop: {
      type: Boolean,
      default: true
    },
    // 固定在顶部时，是否生成一个等高元素，以防止塌陷
    placeholder: {
      type: Boolean,
      default: false
    },
    // 是否固定在顶部
    fixed: {
      type: Boolean,
      default: true
    },
    // 是否显示下边框
    border: {
      type: Boolean,
      default: false
    },
    // 是否显示左边
    showLeft: {
      type: Boolean,
      default: true
    },
    // 左边的图标
    leftIcon: {
      type: String,
      default: "arrow-left"
    },
    // 左边的提示文字
    leftText: {
      type: String,
      default: ""
    },
    // 小程序端导航栏右侧是否预留胶囊位置
    mpRightReserveCapsule: {
      type: Boolean,
      default: true
    },
    // 左边的提示文字
    rightText: {
      type: String,
      default: ""
    },
    // 右边的图标
    rightIcon: {
      type: String,
      default: ""
    },
    // 标题
    title: {
      type: [String, Number],
      default: ""
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    // 标题的宽度
    titleWidth: {
      type: [String, Number],
      default: "400rpx"
    },
    // 导航栏高度
    height: {
      type: [String, Number],
      default: "44px"
    },
    // 左侧返回图标的大小
    leftIconSize: {
      type: [String, Number],
      default: "20px"
    },
    // 左侧返回图标的颜色
    leftIconColor: {
      type: String,
      default: "#303133"
    },
    // 点击左侧区域(返回图标)，是否自动返回上一页
    autoBack: {
      type: Boolean,
      default: false
    },
    // 标题的样式，对象或字符串
    titleStyle: {
      type: [String, Object],
      default: ""
    },
    ...(_d = (_c = uni.$w) == null ? void 0 : _c.props) == null ? void 0 : _d.navbar
  }
};
const _style_0 = { "wu-navbar--fixed": { "": { "position": "fixed", "left": 0, "right": 0, "top": 0, "zIndex": 11 } }, "wu-navbar__content": { "": { "flexDirection": "row", "alignItems": "center", "height": 44, "backgroundColor": "#9acafc", "position": "relative", "justifyContent": "center" } }, "wu-navbar__content__left": { "": { "paddingTop": 0, "paddingRight": 13, "paddingBottom": 0, "paddingLeft": 13, "position": "absolute", "top": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "left": 0 } }, "wu-navbar__content__right": { "": { "paddingTop": 0, "paddingRight": 13, "paddingBottom": 0, "paddingLeft": 13, "position": "absolute", "top": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "right": 0 } }, "wu-navbar__content__left--hover": { "": { "opacity": 0.7 } }, "wu-navbar__content__left__text": { "": { "fontSize": 15, "marginLeft": 3 } }, "wu-navbar__content__title": { "": { "textAlign": "center", "fontSize": 16, "color": "#303133" } }, "wu-navbar__content__right__text": { "": { "fontSize": 15, "marginLeft": 3 } } };
const _sfc_main = {
  name: "wu-navbar",
  mixins: [mpMixin, mixin, props],
  data() {
    return {};
  },
  methods: {
    // 点击左侧区域
    leftClick() {
      this.$emit("leftClick");
      if (this.autoBack) {
        uni.navigateBack();
      }
    },
    // 点击右侧区域
    rightClick() {
      this.$emit("rightClick");
    }
  },
  computed: {
    // 小程序胶囊右侧所在位置 仅在小程序端且 mpRightReserveCapsule 为 true 是预留胶囊位置
    mpCapsuleRightPosition() {
      return 0;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_status_bar = resolveEasycom(resolveDynamicComponent("wu-status-bar"), __easycom_0$1);
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0$2);
  return openBlock(), createElementBlock("view", {
    class: "wu-navbar",
    renderWhole: true
  }, [
    _ctx.fixed && _ctx.placeholder ? (openBlock(), createElementBlock(
      "view",
      {
        key: 0,
        class: "wu-navbar__placeholder",
        style: normalizeStyle({
          height: _ctx.$w.addUnit(_ctx.$w.getPx(_ctx.height) + _ctx.$w.sys().statusBarHeight, "px")
        })
      },
      null,
      4
      /* STYLE */
    )) : createCommentVNode("v-if", true),
    createElementVNode(
      "view",
      {
        class: normalizeClass([_ctx.fixed && "wu-navbar--fixed"])
      },
      [
        _ctx.safeAreaInsetTop ? (openBlock(), createBlock(_component_wu_status_bar, {
          key: 0,
          bgColor: _ctx.bgColor
        }, null, 8, ["bgColor"])) : createCommentVNode("v-if", true),
        createElementVNode(
          "view",
          {
            class: normalizeClass(["wu-navbar__content", [_ctx.border && "wu-border-bottom"]]),
            style: normalizeStyle({
              height: _ctx.$w.addUnit(_ctx.height),
              background: _ctx.bgColor
            })
          },
          [
            _ctx.showLeft ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "wu-navbar__content__left",
              hoverClass: "wu-navbar__content__left--hover",
              hoverStartTime: "150",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
            }, [
              renderSlot(_ctx.$slots, "left", {}, () => [
                _ctx.leftIcon ? (openBlock(), createBlock(_component_wu_icon, {
                  key: 0,
                  name: _ctx.leftIcon,
                  size: _ctx.leftIconSize,
                  color: _ctx.leftIconColor
                }, null, 8, ["name", "size", "color"])) : createCommentVNode("v-if", true),
                _ctx.leftText ? (openBlock(), createElementBlock(
                  "u-text",
                  {
                    key: 1,
                    style: normalizeStyle({
                      color: _ctx.leftIconColor
                    }),
                    class: "wu-navbar__content__left__text"
                  },
                  toDisplayString(_ctx.leftText),
                  5
                  /* TEXT, STYLE */
                )) : createCommentVNode("v-if", true)
              ])
            ])) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "center", {}, () => [
              createElementVNode(
                "u-text",
                {
                  class: "wu-line-1 wu-navbar__content__title",
                  style: normalizeStyle([{
                    width: _ctx.$w.addUnit(_ctx.titleWidth)
                  }, _ctx.$w.addStyle(_ctx.titleStyle)])
                },
                toDisplayString(_ctx.title),
                5
                /* TEXT, STYLE */
              )
            ]),
            createElementVNode(
              "view",
              {
                class: "wu-navbar__content__right",
                style: normalizeStyle({ right: $options.mpCapsuleRightPosition }),
                onClick: _cache[1] || (_cache[1] = (...args) => $options.rightClick && $options.rightClick(...args))
              },
              [
                renderSlot(_ctx.$slots, "right", {}, () => [
                  _ctx.rightIcon ? (openBlock(), createBlock(_component_wu_icon, {
                    key: 0,
                    name: _ctx.rightIcon,
                    size: "20"
                  }, null, 8, ["name"])) : createCommentVNode("v-if", true),
                  _ctx.rightText ? (openBlock(), createElementBlock(
                    "u-text",
                    {
                      key: 1,
                      class: "wu-navbar__content__right__text"
                    },
                    toDisplayString(_ctx.rightText),
                    1
                    /* TEXT */
                  )) : createCommentVNode("v-if", true)
                ])
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    )
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-navbar/components/wu-navbar/wu-navbar.vue"]]);
export {
  __easycom_0 as _
};
