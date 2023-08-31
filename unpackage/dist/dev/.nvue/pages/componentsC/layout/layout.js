var _a, _b, _c, _d;
import { m as mpMixin, a as mixin } from "../../../mixin.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, resolveDynamicComponent, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { a as requireNativePlugin, r as resolveEasycom } from "../../../uni-app.es.js";
const props$1 = {
  props: {
    // 占父容器宽度的多少等分，总分为12份
    span: {
      type: [String, Number],
      default: 0
    },
    // 指定栅格左侧的间隔数(总12栏)
    offset: {
      type: [String, Number],
      default: 0
    },
    // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
    justify: {
      type: String,
      default: "start"
    },
    // 垂直对齐方式，可选值为top、center、bottom、stretch
    align: {
      type: String,
      default: "stretch"
    },
    // 文字对齐方式
    textAlign: {
      type: String,
      default: "left"
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.col
  }
};
const _style_0$2 = { "wu-col": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } } };
const _sfc_main$2 = {
  name: "wu-col",
  mixins: [mpMixin, mixin, props$1],
  data() {
    return {
      width: 0,
      parentData: {
        gutter: 0
      },
      gridNum: 12
    };
  },
  computed: {
    uJustify() {
      if (this.justify == "end" || this.justify == "start")
        return "flex-" + this.justify;
      else if (this.justify == "around" || this.justify == "between")
        return "space-" + this.justify;
      else
        return this.justify;
    },
    uAlignItem() {
      if (this.align == "top")
        return "flex-start";
      if (this.align == "bottom")
        return "flex-end";
      else
        return this.align;
    },
    colStyle() {
      const style = {
        // 这里写成"padding: 0 10px"的形式是因为nvue的需要
        paddingLeft: this.$w.addUnit(this.$w.getPx(this.parentData.gutter) / 2),
        paddingRight: this.$w.addUnit(this.$w.getPx(this.parentData.gutter) / 2),
        alignItems: this.uAlignItem,
        justifyContent: this.uJustify,
        textAlign: this.textAlign,
        // 在nvue上，由于无法使用百分比单位，这里需要获取父组件的宽度，再计算得出该有对应的百分比尺寸
        width: this.$w.addUnit(Math.floor(this.width / this.gridNum * Number(this.span))),
        marginLeft: this.$w.addUnit(Math.floor(this.width / this.gridNum * Number(this.offset)))
      };
      return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.updateParentData();
      this.width = await this.parent.getComponentWidth();
    },
    updateParentData() {
      this.getParentData("wu-row");
    },
    clickHandler(e) {
      this.$emit("click");
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["wu-col", [
        "wu-col-" + _ctx.span
      ]]),
      ref: "wu-col",
      style: normalizeStyle([$options.colStyle]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-col/components/wu-col/wu-col.vue"]]);
const props = {
  props: {
    // 给col添加间距，左右边距各占一半
    gutter: {
      type: [String, Number],
      default: 0
    },
    // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
    justify: {
      type: String,
      default: "start"
    },
    // 垂直对齐方式，可选值为top、center、bottom
    align: {
      type: String,
      default: "center"
    },
    ...(_d = (_c = uni.$w) == null ? void 0 : _c.props) == null ? void 0 : _d.row
  }
};
const _style_0$1 = { "wu-row": { "": { "flexDirection": "row" } } };
const dom = requireNativePlugin("dom");
const _sfc_main$1 = {
  name: "wu-row",
  mixins: [mpMixin, mixin, props],
  data() {
    return {};
  },
  computed: {
    uJustify() {
      if (this.justify == "end" || this.justify == "start")
        return "flex-" + this.justify;
      else if (this.justify == "around" || this.justify == "between")
        return "space-" + this.justify;
      else
        return this.justify;
    },
    uAlignItem() {
      if (this.align == "top")
        return "flex-start";
      if (this.align == "bottom")
        return "flex-end";
      else
        return this.align;
    },
    rowStyle() {
      const style = {
        alignItems: this.uAlignItem,
        justifyContent: this.uJustify
      };
      if (this.gutter) {
        style.marginLeft = this.$w.addUnit(-Number(this.gutter) / 2);
        style.marginRight = this.$w.addUnit(-Number(this.gutter) / 2);
      }
      return this.$w.deepMerge(style, this.$w.addStyle(this.customStyle));
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit("click");
    },
    async getComponentWidth() {
      await this.$w.sleep();
      return new Promise((resolve) => {
        dom.getComponentRect(this.$refs["wu-row"], (res) => {
          resolve(res.size.width);
        });
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "wu-row",
      ref: "wu-row",
      style: normalizeStyle([$options.rowStyle]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-row/components/wu-row/wu-row.vue"]]);
const _style_0 = { "wrap": { "": { "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "demo-layout": { "": { "height": 25, "borderRadius": 4 } }, "bg-purple": { "": { "backgroundColor": "#ced7e1" } }, "bg-purple-light": { "": { "backgroundColor": "#e5e9f2" } }, "bg-purple-dark": { "": { "backgroundColor": "#99a9bf" } } };
const _sfc_main = {
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_col = resolveEasycom(resolveDynamicComponent("wu-col"), __easycom_0);
  const _component_wu_row = resolveEasycom(resolveDynamicComponent("wu-row"), __easycom_1);
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
          createVNode(_component_wu_row, { customStyle: "margin-bottom: 10px" }, {
            default: withCtx(() => [
              createVNode(_component_wu_col, { span: "6" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "6" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_row, { customStyle: "margin-bottom: 10px" }, {
            default: withCtx(() => [
              createVNode(_component_wu_col, { span: "4" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "4" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "4" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-dark" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_row, { justify: "space-between" }, {
            default: withCtx(() => [
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "分栏间隔"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_row, {
            justify: "space-between",
            gutter: "10"
          }, {
            default: withCtx(() => [
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "混合布局"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_row, {
            justify: "space-between",
            gutter: "10"
          }, {
            default: withCtx(() => [
              createVNode(_component_wu_col, { span: "2" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "4" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "6" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-dark" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "分栏偏移"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_row, {
            justify: "space-between",
            customStyle: "margin-bottom: 10px"
          }, {
            default: withCtx(() => [
              createVNode(_component_wu_col, {
                span: "3",
                offset: "3"
              }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, {
                span: "3",
                offset: "3"
              }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_row, null, {
            default: withCtx(() => [
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, {
                span: "3",
                offset: "3"
              }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "对齐方式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_row, {
            justify: "space-between",
            customStyle: "margin-bottom: 10px"
          }, {
            default: withCtx(() => [
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_wu_row, null, {
            default: withCtx(() => [
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple-light" })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_wu_col, { span: "3" }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "demo-layout bg-purple" })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ])
  ]);
}
const layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/layout/layout.nvue"]]);
export {
  layout as default
};
