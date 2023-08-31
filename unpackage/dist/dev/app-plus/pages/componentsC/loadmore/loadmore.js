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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/loadmore/loadmore.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/loadmore/loadmore.js
  var _sfc_main = {
    data() {
      return {};
    },
    methods: {
      loadmore() {
        formatAppLog("log", "at pages/componentsC/loadmore/loadmore.nvue:86", "loadmore");
        uni.$u.toast("\u52A0\u8F7D\u66F4\u591A");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loadmore = (0, import_vue2.resolveComponent)("u-loadmore");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_loadmore, {
              status: "loading",
              isDot: true,
              iconSize: 17
            })
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u65E0\u66F4\u591A\u6570\u636E"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_loadmore, {
              line: true,
              status: "nomore"
            })
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u52A0\u8F7D\u66F4\u591A(\u70B9\u51FB\u89E6\u53D1\u4E8B\u4EF6)"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_loadmore, {
              line: true,
              status: "loadmore",
              onLoadmore: $options.loadmore
            }, null, 8, ["onLoadmore"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u56FE\u6807"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_loadmore, {
              status: "loading",
              loadingIcon: "circle"
            })
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u663E\u793A\u70B9"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_loadmore, {
              status: "nomore",
              isDot: true,
              line: true,
              color: "#909399"
            })
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u63D0\u793A\u8BED"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_loadmore, {
              status: "loading",
              loadingText: "\u52AA\u529B\u52A0\u8F7D\u4E2D,\u5148\u559D\u676F\u8336",
              color: "#909399"
            })
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u7EBF\u6761\u989C\u8272"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_loadmore, {
              loadmoreText: "\u770B,\u6211\u548C\u522B\u4EBA\u4E0D\u4E00\u6837",
              color: "#1CD29B",
              lineColor: "#1CD29B",
              dashed: "",
              line: true
            })
          ])
        ])
      ])
    ]);
  }
  var loadmore = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/loadmore/loadmore.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/loadmore/loadmore";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    loadmore.mpType = "page";
    const app = Vue.createPageApp(loadmore, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...loadmore.styles || []]));
    app.mount("#root");
  }
})();
