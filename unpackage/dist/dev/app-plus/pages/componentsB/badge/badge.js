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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/badge/badge.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/badge/badge.js
  var _style_0 = { "box": { "": { "justifyContent": "space-between" } }, "wu-page__tag-item": { "": { "marginRight": 40, "marginTop": 10 } }, "badge-box": { "": { "width": 45, "height": 45, "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomLeftRadius": 3, "borderBottomRightRadius": 3, "backgroundColor": "#E6E6E6" } }, "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } } };
  var _sfc_main = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_badge = (0, import_vue.resolveComponent)("u-badge");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u76F4\u89D2\u8FB9\u5F62\u72B6"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 1500,
                shape: "horn"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5FBD\u6807\u6570\u663E\u793A\u65B9\u5F0F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 5132,
                numberType: "ellipsis"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 1011,
                numberType: "overflow"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 1500,
                numberType: "limit"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 45187,
                numberType: "limit"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u663E\u793A\u5706\u70B9"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 1011,
                numberType: "overflow",
                isDot: ""
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u4E3B\u9898"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 9,
                type: "error"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 9,
                type: "warning"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 9,
                type: "success"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 9,
                type: "primary"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u53CD\u8F6C\u8272"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 9,
                type: "error",
                inverted: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 1532,
                inverted: "",
                type: "warning"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 12,
                inverted: "",
                type: "success"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_badge, {
                value: 999,
                inverted: "",
                type: "primary"
              })
            ])
          ])
        ])
      ])
    ]);
  }
  var badge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/badge/badge.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/badge/badge";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    badge.mpType = "page";
    const app = Vue.createPageApp(badge, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...badge.styles || []]));
    app.mount("#root");
  }
})();
