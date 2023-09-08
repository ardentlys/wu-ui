var _a, _b, _c, _d;
import { _ as __easycom_0 } from "./wu-icon.js";
import { resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createBlock, createCommentVNode, toDisplayString } from "vue";
import { r as resolveEasycom } from "./uni-app.es.js";
import { _ as __easycom_2$1 } from "./wu-line.js";
import { m as mpMixin, a as mixin } from "./mixin.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const props$1 = {
  props: {
    // 标题
    title: {
      type: [String, Number],
      default: ""
    },
    // 标题下方的描述信息
    label: {
      type: [String, Number],
      default: ""
    },
    // 右侧的内容
    value: {
      type: [String, Number],
      default: ""
    },
    // 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
    icon: {
      type: String,
      default: ""
    },
    // 是否禁用cell
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示下边框
    border: {
      type: Boolean,
      default: true
    },
    // 内容是否垂直居中(主要是针对右侧的value部分)
    center: {
      type: Boolean,
      default: false
    },
    // 点击后跳转的URL地址
    url: {
      type: String,
      default: ""
    },
    // 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作
    linkType: {
      type: String,
      default: "navigateTo"
    },
    // 是否开启点击反馈(表现为点击时加上灰色背景)
    clickable: {
      type: Boolean,
      default: false
    },
    // 是否展示右侧箭头并开启点击反馈
    isLink: {
      type: Boolean,
      default: false
    },
    // 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
    required: {
      type: Boolean,
      default: false
    },
    // 右侧的图标箭头
    rightIcon: {
      type: String,
      default: "arrow-right"
    },
    // 右侧箭头的方向，可选值为：left，up，down
    arrowDirection: {
      type: String,
      default: "right"
    },
    // 左侧图标样式
    iconStyle: {
      type: [Object, String],
      default: () => {
        return "";
      }
    },
    // 右侧箭头图标的样式
    rightIconStyle: {
      type: [Object, String],
      default: () => {
        return "";
      }
    },
    // 标题的样式
    titleStyle: {
      type: [Object, String],
      default: () => {
        return "";
      }
    },
    // 单位元的大小，可选值为large
    size: {
      type: String,
      default: ""
    },
    // 点击cell是否阻止事件传播
    stop: {
      type: Boolean,
      default: true
    },
    // 标识符，cell被点击时返回
    name: {
      type: [Number, String],
      default: ""
    },
    // 自定义样式
    customStyle: {
      type: [Object, String],
      default: () => {
        return "";
      }
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.cell
  }
};
const _style_0$1 = { "wu-cell__body": { "": { "flexDirection": "row", "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 15, "fontSize": 15, "color": "#303133", "alignItems": "center" } }, "wu-cell__body__content": { "": { "flexDirection": "row", "alignItems": "center", "flex": 1 } }, "wu-cell__body--large": { "": { "paddingTop": 13, "paddingBottom": 13 } }, "wu-cell__left-icon-wrap": { "": { "flexDirection": "row", "alignItems": "center", "fontSize": 16, "marginRight": 4 } }, "wu-cell__right-icon-wrap": { "": { "flexDirection": "row", "alignItems": "center", "fontSize": 16, "marginLeft": 4, "transitionProperty": "transform", "transitionDuration": 300 } }, "wu-cell__right-icon-wrap--up": { "": { "transform": "rotate(-90deg)" } }, "wu-cell__right-icon-wrap--down": { "": { "transform": "rotate(90deg)" } }, "wu-cell__title": { "": { "flex": 1 } }, "wu-cell__title-text": { "": { "fontSize": 15, "lineHeight": 22, "color": "#303133" } }, "wu-cell__title-text--large": { "": { "fontSize": 16 } }, "wu-cell__label": { "": { "marginTop": 5, "fontSize": 12, "color": "#909193", "lineHeight": 18 } }, "wu-cell__label--large": { "": { "fontSize": 14 } }, "wu-cell__value": { "": { "textAlign": "right", "fontSize": 14, "lineHeight": 24, "color": "#606266" } }, "wu-cell__value--large": { "": { "fontSize": 15 } }, "wu-cell--clickable": { "": { "backgroundColor": "#f3f4f6" } }, "wu-cell--disabled": { "": { "color": "#c8c9cc" } }, "wu-cell--center": { "": { "alignItems": "center" } }, "@TRANSITION": { "wu-cell__right-icon-wrap": { "property": "transform", "duration": 300 } } };
const _sfc_main$1 = {
  name: "wu-cell",
  data() {
    return {};
  },
  mixins: [mpMixin, mixin, props$1],
  computed: {
    titleTextStyle() {
      return this.$w.addStyle(this.titleStyle);
    }
  },
  methods: {
    // 点击cell
    clickHandler(e) {
      if (this.disabled)
        return;
      this.$emit("click", {
        name: this.name
      });
      this.openPage();
      this.stop && this.preventEvent(e);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0);
  const _component_wu_line = resolveEasycom(resolveDynamicComponent("wu-line"), __easycom_2$1);
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["wu-cell", [_ctx.customClass]]),
    style: normalizeStyle([_ctx.$w.addStyle(_ctx.customStyle)]),
    hoverClass: !_ctx.disabled && (_ctx.clickable || _ctx.isLink) ? "wu-cell--clickable" : "",
    hoverStayTime: 250,
    onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
    renderWhole: true
  }, [
    createElementVNode(
      "view",
      {
        class: normalizeClass(["wu-cell__body", [_ctx.center && "wu-cell--center", _ctx.size === "large" && "wu-cell__body--large"]])
      },
      [
        createElementVNode("view", { class: "wu-cell__body__content" }, [
          createElementVNode("view", { class: "wu-cell__left-icon-wrap" }, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              _ctx.icon ? (openBlock(), createBlock(_component_wu_icon, {
                key: 0,
                name: _ctx.icon,
                "custom-style": _ctx.iconStyle,
                size: _ctx.size === "large" ? 22 : 18
              }, null, 8, ["name", "custom-style", "size"])) : createCommentVNode("v-if", true)
            ])
          ]),
          createElementVNode("view", { class: "wu-cell__title" }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              _ctx.title ? (openBlock(), createElementBlock(
                "u-text",
                {
                  key: 0,
                  class: normalizeClass(["wu-cell__title-text", [_ctx.disabled && "wu-cell--disabled", _ctx.size === "large" && "wu-cell__title-text--large"]]),
                  style: normalizeStyle([$options.titleTextStyle])
                },
                toDisplayString(_ctx.title),
                7
                /* TEXT, CLASS, STYLE */
              )) : createCommentVNode("v-if", true)
            ]),
            renderSlot(_ctx.$slots, "label", {}, () => [
              _ctx.label ? (openBlock(), createElementBlock(
                "u-text",
                {
                  key: 0,
                  class: normalizeClass(["wu-cell__label", [_ctx.disabled && "wu-cell--disabled", _ctx.size === "large" && "wu-cell__label--large"]])
                },
                toDisplayString(_ctx.label),
                3
                /* TEXT, CLASS */
              )) : createCommentVNode("v-if", true)
            ])
          ])
        ]),
        renderSlot(_ctx.$slots, "value", {}, () => [
          !_ctx.$w.test.empty(_ctx.value) ? (openBlock(), createElementBlock(
            "u-text",
            {
              key: 0,
              class: normalizeClass(["wu-cell__value", [_ctx.disabled && "wu-cell--disabled", _ctx.size === "large" && "wu-cell__value--large"]])
            },
            toDisplayString(_ctx.value),
            3
            /* TEXT, CLASS */
          )) : createCommentVNode("v-if", true)
        ]),
        createElementVNode("view", { class: "wu-cell__right-icon-wrap" }, [
          renderSlot(_ctx.$slots, "right-icon", {}, () => [
            _ctx.isLink ? (openBlock(), createBlock(_component_wu_icon, {
              key: 0,
              class: normalizeClass([`wu-cell__right-icon-wrap--${_ctx.arrowDirection}`]),
              name: _ctx.rightIcon,
              "custom-style": _ctx.rightIconStyle,
              color: _ctx.disabled ? "#c8c9cc" : "info",
              size: _ctx.size === "large" ? 18 : 16
            }, null, 8, ["class", "name", "custom-style", "color", "size"])) : createCommentVNode("v-if", true)
          ])
        ])
      ],
      2
      /* CLASS */
    ),
    _ctx.border ? (openBlock(), createBlock(_component_wu_line, { key: 0 })) : createCommentVNode("v-if", true)
  ], 14, ["hoverClass"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-cell/components/wu-cell/wu-cell.vue"]]);
const props = {
  props: {
    // 分组标题
    title: {
      type: String,
      default: ""
    },
    // 是否显示外边框
    border: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: [Object, String],
      default: () => {
        return "";
      }
    },
    ...(_d = (_c = uni.$w) == null ? void 0 : _c.props) == null ? void 0 : _d.cellGroup
  }
};
const _style_0 = { "wu-cell-group": { "": { "flex": 1 } }, "wu-cell-group__title": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 8, "paddingLeft": 16 } }, "wu-cell-group__title__text": { "": { "fontSize": 15, "lineHeight": 16, "color": "#303133" } }, "wu-cell-group__wrapper": { "": { "position": "relative" } } };
const _sfc_main = {
  name: "wu-cell-group",
  mixins: [mpMixin, mixin, props]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_line = resolveEasycom(resolveDynamicComponent("wu-line"), __easycom_2$1);
  return openBlock(), createElementBlock(
    "view",
    {
      style: normalizeStyle([_ctx.$w.addStyle(_ctx.customStyle)]),
      class: normalizeClass([[_ctx.customClass], "wu-cell-group"]),
      renderWhole: true
    },
    [
      _ctx.title ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "wu-cell-group__title"
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createElementVNode(
            "u-text",
            { class: "wu-cell-group__title__text" },
            toDisplayString(_ctx.title),
            1
            /* TEXT */
          )
        ])
      ])) : createCommentVNode("v-if", true),
      createElementVNode("view", { class: "wu-cell-group__wrapper" }, [
        _ctx.border ? (openBlock(), createBlock(_component_wu_line, { key: 0 })) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-cell/components/wu-cell-group/wu-cell-group.vue"]]);
export {
  __easycom_1 as _,
  __easycom_2 as a
};
