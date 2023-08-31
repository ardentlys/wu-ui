import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, toDisplayString, createCommentVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "u-percentage-slot": { "": { "paddingTop": 1, "paddingRight": 5, "paddingBottom": 1, "paddingLeft": 5, "backgroundColor": "#f9ae3d", "color": "#ffffff", "borderRadius": 100, "fontSize": 10, "marginRight": -5 } }, "wu-demo-block__content": { "": { "!flexDirection": "column", "flexWrap": "nowrap", "alignItems": "stretch" } }, "button-group": { "": { "flexDirection": "row", "justifyContent": "center" } }, "button-group__circle": { "": { "width": 50, "height": 50, "backgroundColor": "#dbfbdb", "borderRadius": 100, "justifyContent": "center", "alignItems": "center", "marginTop": 30, "marginRight": 30, "marginBottom": 30, "marginLeft": 30 } }, "button-group__circle__text": { "": { "color": "#19be6b", "fontSize": 13 } } };
const _sfc_main = {
  data() {
    return {
      androidNvue: false,
      percentage1: 30,
      percentage2: 40,
      percentage3: 50,
      percentage4: 60,
      percentage5: 70,
      percentage6: 50
    };
  },
  onLoad() {
    this.androidNvue = uni.$u.os() === "android";
    uni.$u.sleep(2500).then(() => {
      this.percentage1 = 120;
    });
  },
  methods: {
    computedWidth(type) {
      if (type === "plus") {
        this.percentage6 = uni.$u.range(0, 100, this.percentage6 + 10);
      } else {
        this.percentage6 = uni.$u.range(0, 100, this.percentage6 - 10);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_line_progress = resolveComponent("u-line-progress");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础功能"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_line_progress, { percentage: $data.percentage1 }, null, 8, ["percentage"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "不显示百分比"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_line_progress, {
            showText: false,
            percentage: $data.percentage2
          }, null, 8, ["percentage"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义高度"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_line_progress, {
            height: "8",
            showText: false,
            percentage: $data.percentage3
          }, null, 8, ["percentage"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义颜色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_line_progress, {
            height: "8",
            showText: false,
            percentage: $data.percentage4,
            activeColor: "#3c9cff",
            inactiveColor: "#f3f4f6"
          }, null, 8, ["percentage"])
        ])
      ]),
      !$data.androidNvue ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "wu-demo-block"
      }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义样式(不支持安卓环境的nvue)"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_line_progress, {
            height: "8",
            showText: false,
            percentage: $data.percentage5,
            activeColor: "#3c9cff",
            inactiveColor: "#f3f4f6"
          }, {
            default: withCtx(() => [
              createElementVNode(
                "u-text",
                { class: "u-percentage-slot" },
                toDisplayString($data.percentage4) + "%",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["percentage"])
        ])
      ])) : createCommentVNode("v-if", true),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "手动加减"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_line_progress, {
            height: "8",
            showText: false,
            percentage: $data.percentage6,
            activeColor: "#3c9cff",
            inactiveColor: "#f3f4f6"
          }, null, 8, ["percentage"]),
          createElementVNode("view", { class: "button-group" }, [
            createElementVNode("view", {
              class: "button-group__circle",
              hoverClass: "u-hover-class",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.computedWidth("minus"))
            }, [
              createElementVNode("u-text", { class: "button-group__circle__text" }, "减少")
            ]),
            createElementVNode("view", {
              class: "button-group__circle",
              hoverClass: "u-hover-class",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.computedWidth("plus"))
            }, [
              createElementVNode("u-text", { class: "button-group__circle__text" }, "增加")
            ])
          ])
        ])
      ])
    ])
  ]);
}
const progress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/progress/progress.nvue"]]);
export {
  progress as default
};
