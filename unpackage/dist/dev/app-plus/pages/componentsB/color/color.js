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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/color/color.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/color/color.js
  var _style_0 = { "wu-page": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15 } }, "wu-page__item__title": { "": { "fontSize": 15, "color": "#606266", "marginTop": 16, "marginBottom": 4 } }, "wu-page__item__color-box": { "": { "flexDirection": "row", "justifyContent": "space-between" } }, "wu-page__item__color-box__item": { "": { "width": "160rpx", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "paddingTop": 5, "paddingRight": 0, "paddingBottom": 5, "paddingLeft": 0, "borderRadius": 3 } }, "wu-page__item__color-box__item__title": { "": { "fontSize": 13, "color": "#ffffff" } }, "wu-page__item__color-box__item__value": { "": { "fontSize": 14, "color": "#ffffff" } }, "wu-tips-color": { "": { "color": "#909193" } } };
  var _sfc_main = {};
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", {
            class: "wu-page__item__title",
            style: { "margin-top": "0" }
          }, "\u4E3B\u8272\u8C03"),
          (0, import_vue.createElementVNode)("view", { class: "wu-page__item__color-box" }, [
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#3c9cff" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Primary"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#3c9cff")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#398ade" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#398ade")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#9acafc" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#9acafc")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#ecf5ff" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#ecf5ff")
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "Error"),
          (0, import_vue.createElementVNode)("view", { class: "wu-page__item__color-box" }, [
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#f56c6c" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Error"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#f56c6c")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#e45656" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#e45656")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#f7b2b2" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#f7b2b2")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#fef0f0" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#fef0f0")
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "Warning"),
          (0, import_vue.createElementVNode)("view", { class: "wu-page__item__color-box" }, [
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#f9ae3d" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Warning"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#f9ae3d")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#f1a532" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#f1a532")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#f9d39b" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#f9d39b")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#fdf6ec" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#fdf6ec")
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "Info"),
          (0, import_vue.createElementVNode)("view", { class: "wu-page__item__color-box" }, [
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#909399" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Info"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#909399")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#767a82" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#767a82")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#c4c6c9" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#c4c6c9")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#f4f4f5" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#f4f4f5")
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "Success"),
          (0, import_vue.createElementVNode)("view", { class: "wu-page__item__color-box" }, [
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#5ac725" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Success"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#5ac725")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#53c21d" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Dark"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#53c21d")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#a9e08f" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "Disabled"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#a9e08f")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#f5fff0" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "Light"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#f5fff0")
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u6587\u5B57\u989C\u8272"),
          (0, import_vue.createElementVNode)("view", { class: "wu-page__item__color-box" }, [
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#303133" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "\u4E3B\u8981\u6587\u5B57"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#303133")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#606266" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "\u5E38\u89C4\u6587\u5B57"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#606266")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#909399" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "\u6B21\u8981\u6587\u5B57"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#909399")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#c0c4cc" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "\u5360\u4F4D\u6587\u5B57"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#c0c4cc")
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u8FB9\u6846\u989C\u8272"),
          (0, import_vue.createElementVNode)("view", { class: "wu-page__item__color-box" }, [
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#9a9998" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "\u4E00\u7EA7\u8FB9\u6846"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#9a9998")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#b4b3b1" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "\u4E8C\u7EA7\u8FB9\u6846"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#b4b3b1")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#ceccca" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title" }, "\u4E09\u7EA7\u8FB9\u6846"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value" }, "#ceccca")
            ]),
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#e7e6e4" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "\u56DB\u7EA7\u8FB9\u6846"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#e7e6e4")
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u80CC\u666F\u989C\u8272"),
          (0, import_vue.createElementVNode)("view", { class: "wu-page__item__color-box" }, [
            (0, import_vue.createElementVNode)("view", {
              class: "wu-page__item__color-box__item",
              style: { "background-color": "#f3f4f6" }
            }, [
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__title wu-tips-color" }, "\u80CC\u666F\u989C\u8272"),
              (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__color-box__item__value wu-tips-color" }, "#f3f4f6")
            ])
          ])
        ])
      ])
    ]);
  }
  var color = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/color/color.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/color/color";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    color.mpType = "page";
    const app = Vue.createPageApp(color, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...color.styles || []]));
    app.mount("#root");
  }
})();
