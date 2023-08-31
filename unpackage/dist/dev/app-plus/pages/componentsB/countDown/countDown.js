"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/countDown/countDown.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/countDown/countDown.js
  var _style_0 = { "time": { "": { "flexDirection": "row", "alignItems": "center" } }, "time__custom": { "": { "marginTop": 4, "width": 22, "height": 22, "backgroundColor": "#3c9cff", "borderRadius": 4, "justifyContent": "center", "alignItems": "center" } }, "time__custom__item": { "": { "color": "#ffffff", "fontSize": 12, "textAlign": "center" } }, "time__doc": { "": { "color": "#3c9cff", "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4 } }, "time__item": { "": { "color": "#606266", "fontSize": 15, "marginRight": 4 } }, "u-view": { "": { "paddingTop": 40, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20 } }, "u-view__title": { "": { "fontSize": 14, "color": "#8f9ca2", "marginBottom": 10 } }, "count-down__grid-item": { "": { "width": 70, "height": 70, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "count-down__grid-item__circle": { "": { "width": 32, "height": 32, "borderRadius": 32, "backgroundColor": "#3c9cff", "justifyContent": "center", "alignItems": "center", "boxShadow": "1px 1px 4px rgba(155, 191, 255, 0.7)" } }, "count-down__grid-item__grid-text": { "": { "fontSize": 14, "color": "#909399", "marginLeft": 6 } } };
  var _sfc_main = {
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
    const _component_u_count_down = (0, import_vue2.resolveComponent)("u-count-down");
    const _component_u_icon = (0, import_vue2.resolveComponent)("u-icon");
    const _component_u_grid_item = (0, import_vue2.resolveComponent)("u-grid-item");
    const _component_u_grid = (0, import_vue2.resolveComponent)("u-grid");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u7528\u6CD5"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_count_down, {
              time: 30 * 60 * 60 * 1e3,
              format: "HH:mm:ss",
              autoStart: "",
              millisecond: "",
              onFinish: $options.finish
            }, null, 8, ["onFinish"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u683C\u5F0F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_count_down, {
              time: 30 * 60 * 60 * 1e3,
              format: "DD:HH:mm:ss",
              autoStart: "",
              millisecond: "",
              onChange: $options.onChange
            }, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createElementVNode)("view", { class: "time" }, [
                  (0, import_vue2.createElementVNode)(
                    "u-text",
                    { class: "time__item" },
                    (0, import_vue2.toDisplayString)($data.timeData.days) + "\xA0\u5929",
                    1
                    /* TEXT */
                  ),
                  (0, import_vue2.createElementVNode)(
                    "u-text",
                    { class: "time__item" },
                    (0, import_vue2.toDisplayString)($data.timeData.hours > 10 ? $data.timeData.hours : "0" + $data.timeData.hours) + "\xA0\u65F6",
                    1
                    /* TEXT */
                  ),
                  (0, import_vue2.createElementVNode)(
                    "u-text",
                    { class: "time__item" },
                    (0, import_vue2.toDisplayString)($data.timeData.minutes) + "\xA0\u5206",
                    1
                    /* TEXT */
                  ),
                  (0, import_vue2.createElementVNode)(
                    "u-text",
                    { class: "time__item" },
                    (0, import_vue2.toDisplayString)($data.timeData.seconds) + "\xA0\u79D2",
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
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6BEB\u79D2\u7EA7\u6E32\u67D3"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_count_down, {
              time: 30 * 60 * 60 * 1e3,
              format: "HH:mm:ss:SSS",
              autoStart: "",
              millisecond: ""
            })
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u6837\u5F0F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_count_down, {
              time: 30 * 60 * 60 * 1e3,
              format: "HH:mm:ss",
              autoStart: "",
              millisecond: "",
              onChange: $options.onChange
            }, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createElementVNode)("view", { class: "time" }, [
                  (0, import_vue2.createElementVNode)("view", { class: "time__custom" }, [
                    (0, import_vue2.createElementVNode)(
                      "u-text",
                      { class: "time__custom__item" },
                      (0, import_vue2.toDisplayString)($data.timeData.hours > 10 ? $data.timeData.hours : "0" + $data.timeData.hours),
                      1
                      /* TEXT */
                    )
                  ]),
                  (0, import_vue2.createElementVNode)("u-text", { class: "time__doc" }, ":"),
                  (0, import_vue2.createElementVNode)("view", { class: "time__custom" }, [
                    (0, import_vue2.createElementVNode)(
                      "u-text",
                      { class: "time__custom__item" },
                      (0, import_vue2.toDisplayString)($data.timeData.minutes),
                      1
                      /* TEXT */
                    )
                  ]),
                  (0, import_vue2.createElementVNode)("u-text", { class: "time__doc" }, ":"),
                  (0, import_vue2.createElementVNode)("view", { class: "time__custom" }, [
                    (0, import_vue2.createElementVNode)(
                      "u-text",
                      { class: "time__custom__item" },
                      (0, import_vue2.toDisplayString)($data.timeData.seconds),
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
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u624B\u52A8\u63A7\u5236"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(
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
          (0, import_vue2.createVNode)(_component_u_grid, {
            border: true,
            customStyle: { marginTop: "10px" }
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_u_grid_item, { onClick: $options.reset }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "count-down__grid-item" }, [
                    (0, import_vue2.createVNode)(_component_u_icon, {
                      name: "reload",
                      size: 22
                    }),
                    (0, import_vue2.createElementVNode)("u-text", { class: "count-down__grid-item__grid-text" }, "\u91CD\u7F6E")
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              (0, import_vue2.createVNode)(_component_u_grid_item, { onClick: $options.start }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "count-down__grid-item" }, [
                    (0, import_vue2.createElementVNode)("view", { class: "count-down__grid-item__circle" }, [
                      (0, import_vue2.createVNode)(_component_u_icon, {
                        color: "#fff",
                        name: "play-right-fill",
                        size: 22
                      })
                    ]),
                    (0, import_vue2.createElementVNode)("u-text", { class: "count-down__grid-item__grid-text" }, "\u5F00\u59CB")
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              (0, import_vue2.createVNode)(_component_u_grid_item, { onClick: $options.pause }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("view", { class: "count-down__grid-item" }, [
                    (0, import_vue2.createVNode)(_component_u_icon, {
                      name: "pause-circle",
                      size: 22
                    }),
                    (0, import_vue2.createElementVNode)("u-text", { class: "count-down__grid-item__grid-text" }, "\u6682\u505C")
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
  var countDown = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/countDown/countDown.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/countDown/countDown";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    countDown.mpType = "page";
    const app = Vue.createPageApp(countDown, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...countDown.styles || []]));
    app.mount("#root");
  }
})();
