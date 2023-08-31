import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "time": { "": { "flexDirection": "row", "alignItems": "center" } }, "time__custom": { "": { "marginTop": 4, "width": 22, "height": 22, "backgroundColor": "#3c9cff", "borderRadius": 4, "justifyContent": "center", "alignItems": "center" } }, "time__custom__item": { "": { "color": "#ffffff", "fontSize": 12, "textAlign": "center" } }, "time__doc": { "": { "color": "#3c9cff", "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4 } }, "time__item": { "": { "color": "#606266", "fontSize": 15, "marginRight": 4 } }, "u-view": { "": { "paddingTop": 40, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20 } }, "u-view__title": { "": { "fontSize": 14, "color": "#8f9ca2", "marginBottom": 10 } }, "count-down__grid-item": { "": { "width": 70, "height": 70, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "count-down__grid-item__circle": { "": { "width": 32, "height": 32, "borderRadius": 32, "backgroundColor": "#3c9cff", "justifyContent": "center", "alignItems": "center", "boxShadow": "1px 1px 4px rgba(155, 191, 255, 0.7)" } }, "count-down__grid-item__grid-text": { "": { "fontSize": 14, "color": "#909399", "marginLeft": 6 } } };
const _sfc_main = {
  data() {
    return {
      timeData: {}
    };
  },
  onLoad() {
  },
  methods: {
    //开始
    start() {
      this.$refs.countDown.start();
    },
    // 暂停
    pause() {
      this.$refs.countDown.pause();
    },
    // 重置
    reset() {
      this.$refs.countDown.reset();
    },
    onChange(e) {
      this.timeData = e;
    },
    finish() {
      formatAppLog("log", "at pages/componentsB/countDown/countDown.nvue:151", "finish");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_count_down = resolveComponent("u-count-down");
  const _component_u_icon = resolveComponent("u-icon");
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
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础用法"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_count_down, {
            time: 30 * 60 * 60 * 1e3,
            format: "HH:mm:ss",
            autoStart: "",
            millisecond: "",
            onFinish: $options.finish
          }, null, 8, ["onFinish"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义格式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_count_down, {
            time: 30 * 60 * 60 * 1e3,
            format: "DD:HH:mm:ss",
            autoStart: "",
            millisecond: "",
            onChange: $options.onChange
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "time" }, [
                createElementVNode(
                  "u-text",
                  { class: "time__item" },
                  toDisplayString($data.timeData.days) + " 天",
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "u-text",
                  { class: "time__item" },
                  toDisplayString($data.timeData.hours > 10 ? $data.timeData.hours : "0" + $data.timeData.hours) + " 时",
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "u-text",
                  { class: "time__item" },
                  toDisplayString($data.timeData.minutes) + " 分",
                  1
                  /* TEXT */
                ),
                createElementVNode(
                  "u-text",
                  { class: "time__item" },
                  toDisplayString($data.timeData.seconds) + " 秒",
                  1
                  /* TEXT */
                )
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "毫秒级渲染"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_count_down, {
            time: 30 * 60 * 60 * 1e3,
            format: "HH:mm:ss:SSS",
            autoStart: "",
            millisecond: ""
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义样式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_count_down, {
            time: 30 * 60 * 60 * 1e3,
            format: "HH:mm:ss",
            autoStart: "",
            millisecond: "",
            onChange: $options.onChange
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "time" }, [
                createElementVNode("view", { class: "time__custom" }, [
                  createElementVNode(
                    "u-text",
                    { class: "time__custom__item" },
                    toDisplayString($data.timeData.hours > 10 ? $data.timeData.hours : "0" + $data.timeData.hours),
                    1
                    /* TEXT */
                  )
                ]),
                createElementVNode("u-text", { class: "time__doc" }, ":"),
                createElementVNode("view", { class: "time__custom" }, [
                  createElementVNode(
                    "u-text",
                    { class: "time__custom__item" },
                    toDisplayString($data.timeData.minutes),
                    1
                    /* TEXT */
                  )
                ]),
                createElementVNode("u-text", { class: "time__doc" }, ":"),
                createElementVNode("view", { class: "time__custom" }, [
                  createElementVNode(
                    "u-text",
                    { class: "time__custom__item" },
                    toDisplayString($data.timeData.seconds),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "手动控制"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(
            _component_u_count_down,
            {
              ref: "countDown",
              time: 3 * 1e3,
              format: "ss:SSS",
              autoStart: false,
              millisecond: ""
            },
            null,
            512
            /* NEED_PATCH */
          )
        ]),
        createVNode(_component_u_grid, {
          border: true,
          customStyle: { marginTop: "10px" }
        }, {
          default: withCtx(() => [
            createVNode(_component_u_grid_item, { onClick: $options.reset }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "count-down__grid-item" }, [
                  createVNode(_component_u_icon, {
                    name: "reload",
                    size: 22
                  }),
                  createElementVNode("u-text", { class: "count-down__grid-item__grid-text" }, "重置")
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            createVNode(_component_u_grid_item, { onClick: $options.start }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "count-down__grid-item" }, [
                  createElementVNode("view", { class: "count-down__grid-item__circle" }, [
                    createVNode(_component_u_icon, {
                      color: "#fff",
                      name: "play-right-fill",
                      size: 22
                    })
                  ]),
                  createElementVNode("u-text", { class: "count-down__grid-item__grid-text" }, "开始")
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            createVNode(_component_u_grid_item, { onClick: $options.pause }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "count-down__grid-item" }, [
                  createVNode(_component_u_icon, {
                    name: "pause-circle",
                    size: 22
                  }),
                  createElementVNode("u-text", { class: "count-down__grid-item__grid-text" }, "暂停")
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
  ]);
}
const countDown = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/countDown/countDown.nvue"]]);
export {
  countDown as default
};
