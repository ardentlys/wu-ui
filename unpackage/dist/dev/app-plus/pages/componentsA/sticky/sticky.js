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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/sticky/sticky.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/sticky/sticky.js
  var _style_0 = {};
  var _sfc_main = {
    data() {
      return {};
    },
    mixins: [uni.$u.mixin],
    methods: {
      navigateBack() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__text = (0, import_vue.resolveComponent)("u--text");
    const _component_u_button = (0, import_vue.resolveComponent)("u-button");
    const _component_u_sticky = (0, import_vue.resolveComponent)("u-sticky");
    const _component_u_gap = (0, import_vue.resolveComponent)("u-gap");
    const _component_u_divider = (0, import_vue.resolveComponent)("u-divider");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createCommentVNode)(' <wu-navbar\r\n			title="\u5438\u9876"\r\n			@leftClick="navigateBack"\r\n			safeAreaInsetTop\r\n			fixed\r\n			placeholder\r\n		></wu-navbar> '),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue.createVNode)(_component_u__text, {
            type: "content",
            text: "\u6EDA\u52A8\u9875\u9762,\u5373\u53EF\u770B\u5230\u4E0B\u65B9\u7684\u6309\u94AE\u4F1A\u5438\u9876\u3002"
          }),
          (0, import_vue.createVNode)(_component_u__text, {
            type: "warning",
            text: "\u76EE\u524D\u7531\u4E8Envue\u7684bug,\u8BBE\u7F6Esticky\u7684top\u503C\u65E0\u6548\u3002"
          })
        ]),
        (0, import_vue.createVNode)(_component_u_sticky, null, {
          default: (0, import_vue.withCtx)(() => [
            (0, import_vue.createVNode)(_component_u_button, {
              text: "\u5438\u9876\u6309\u94AE",
              type: "success"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue.createVNode)(_component_u_gap, {
          bgColor: "#fff",
          height: "1500px"
        }),
        (0, import_vue.createVNode)(_component_u_divider, { text: "\u5DF2\u5230\u5E95\u90E8" })
      ])
    ]);
  }
  var sticky = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/sticky/sticky.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsA/sticky/sticky";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    sticky.mpType = "page";
    const app = Vue.createPageApp(sticky, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...sticky.styles || []]));
    app.mount("#root");
  }
})();
