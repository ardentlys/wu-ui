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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/countTo/countTo.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/countTo/countTo.js
  var _style_0 = { "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } }, "u-grid-slot": { "": { "borderRadius": 100, "borderColor": "#dbfbdb", "borderWidth": 2, "flexDirection": "row" } }, "u-grid-slot__circle": { "": { "width": 50, "height": 50, "backgroundColor": "#dbfbdb", "borderRadius": 100, "justifyContent": "center", "alignItems": "center", "marginTop": 2, "marginRight": 2, "marginBottom": 2, "marginLeft": 2 } }, "u-grid-slot__circle__text": { "": { "color": "#19be6b", "fontSize": 13 } } };
  var _sfc_main = {
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
    const _component_u_count_to = (0, import_vue2.resolveComponent)("u-count-to");
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
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u529F\u80FD"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_count_to, {
                endVal: $data.value,
                onEnd: $options.end
              }, null, 8, ["endVal", "onEnd"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5012\u8BA1\u6570"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_count_to, { startVal: $data.startVal1 }, null, 8, ["startVal"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u663E\u793A\u5C0F\u6570\u4F4D"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_count_to, {
                startVal: $data.startVal2,
                endVal: $data.endVal,
                decimals: $data.decimals
              }, null, 8, ["startVal", "endVal", "decimals"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5343\u5206\u4F4D\u5206\u9694\u7B26"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_count_to, {
                startVal: $data.startVal3,
                endVal: $data.endVal2,
                separator: ",",
                decimals: $data.decimals
              }, null, 8, ["startVal", "endVal", "decimals"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u63A7\u5236"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_count_to, {
                ref: "uCountTo",
                endVal: $data.endVal3,
                autoplay: $data.autoplay
              }, null, 8, ["endVal", "autoplay"])
            ])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "",
              style: { "flex": "1" }
            }, [
              (0, import_vue2.createVNode)(_component_u_grid, {
                border: "",
                align: "center",
                customStyle: "margin-top: 20px;margin-bottom: 20"
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createVNode)(_component_u_grid_item, { onClick: $options.start }, {
                    default: (0, import_vue2.withCtx)(() => [
                      (0, import_vue2.createElementVNode)("view", { class: "u-grid-slot" }, [
                        (0, import_vue2.createElementVNode)("view", { class: "u-grid-slot__circle" }, [
                          (0, import_vue2.createElementVNode)("u-text", { class: "u-grid-slot__circle__text" }, "\u5F00\u59CB")
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"]),
                  (0, import_vue2.createVNode)(_component_u_grid_item, { onClick: $options.paused }, {
                    default: (0, import_vue2.withCtx)(() => [
                      (0, import_vue2.createElementVNode)("view", { class: "u-grid-slot" }, [
                        (0, import_vue2.createElementVNode)("view", { class: "u-grid-slot__circle" }, [
                          (0, import_vue2.createElementVNode)("u-text", { class: "u-grid-slot__circle__text" }, "\u6682\u505C")
                        ])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"]),
                  (0, import_vue2.createVNode)(_component_u_grid_item, { onClick: $options.resume }, {
                    default: (0, import_vue2.withCtx)(() => [
                      (0, import_vue2.createElementVNode)("view", { class: "u-grid-slot" }, [
                        (0, import_vue2.createElementVNode)("view", { class: "u-grid-slot__circle" }, [
                          (0, import_vue2.createElementVNode)("u-text", { class: "u-grid-slot__circle__text" }, "\u7EE7\u7EED")
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
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_count_to, {
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
  var countTo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/countTo/countTo.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/countTo/countTo";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    countTo.mpType = "page";
    const app = Vue.createPageApp(countTo, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...countTo.styles || []]));
    app.mount("#root");
  }
})();
