import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } }, "u-grid-slot": { "": { "borderRadius": 100, "borderColor": "#dbfbdb", "borderWidth": 2, "flexDirection": "row" } }, "u-grid-slot__circle": { "": { "width": 50, "height": 50, "backgroundColor": "#dbfbdb", "borderRadius": 100, "justifyContent": "center", "alignItems": "center", "marginTop": 2, "marginRight": 2, "marginBottom": 2, "marginLeft": 2 } }, "u-grid-slot__circle__text": { "": { "color": "#19be6b", "fontSize": 13 } } };
const _sfc_main = {
  data() {
    return {
      value: 3e3,
      startVal1: 300,
      startVal2: 100,
      endVal: 10.55,
      decimals: 2,
      startVal3: 2e3,
      endVal2: 1542,
      endVal3: 3e3,
      autoplay: false,
      color: "#FF0000",
      fontSize: 40
    };
  },
  onLoad() {
  },
  methods: {
    start() {
      this.$refs.uCountTo.start();
    },
    paused() {
      this.$refs.uCountTo.stop();
    },
    resume() {
      this.$refs.uCountTo.resume();
    },
    end() {
      formatAppLog("log", "at pages/componentsB/countTo/countTo.nvue:142", "end");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_count_to = resolveComponent("u-count-to");
  const _component_u_grid_item = resolveComponent("u-grid-item");
  const _component_u_grid = resolveComponent("u-grid");
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
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_count_to, {
              endVal: $data.value,
              onEnd: $options.end
            }, null, 8, ["endVal", "onEnd"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "倒计数"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_count_to, { startVal: $data.startVal1 }, null, 8, ["startVal"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "显示小数位"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_count_to, {
              startVal: $data.startVal2,
              endVal: $data.endVal,
              decimals: $data.decimals
            }, null, 8, ["startVal", "endVal", "decimals"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "千分位分隔符"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_count_to, {
              startVal: $data.startVal3,
              endVal: $data.endVal2,
              separator: ",",
              decimals: $data.decimals
            }, null, 8, ["startVal", "endVal", "decimals"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义控制"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_count_to, {
              ref: "uCountTo",
              endVal: $data.endVal3,
              autoplay: $data.autoplay
            }, null, 8, ["endVal", "autoplay"])
          ])
        ]),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", {
            class: "",
            style: { "flex": "1" }
          }, [
            createVNode(_component_u_grid, {
              border: "",
              align: "center",
              customStyle: "margin-top: 20px;margin-bottom: 20"
            }, {
              default: withCtx(() => [
                createVNode(_component_u_grid_item, { onClick: $options.start }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "u-grid-slot" }, [
                      createElementVNode("view", { class: "u-grid-slot__circle" }, [
                        createElementVNode("u-text", { class: "u-grid-slot__circle__text" }, "开始")
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"]),
                createVNode(_component_u_grid_item, { onClick: $options.paused }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "u-grid-slot" }, [
                      createElementVNode("view", { class: "u-grid-slot__circle" }, [
                        createElementVNode("u-text", { class: "u-grid-slot__circle__text" }, "暂停")
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"]),
                createVNode(_component_u_grid_item, { onClick: $options.resume }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "u-grid-slot" }, [
                      createElementVNode("view", { class: "u-grid-slot__circle" }, [
                        createElementVNode("u-text", { class: "u-grid-slot__circle__text" }, "继续")
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__tag-item" }, [
            createVNode(_component_u_count_to, {
              endVal: $data.value,
              color: "#909399",
              fontSize: $data.fontSize,
              bold: true
            }, null, 8, ["endVal", "fontSize"])
          ])
        ])
      ])
    ])
  ]);
}
const countTo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/countTo/countTo.nvue"]]);
export {
  countTo as default
};
