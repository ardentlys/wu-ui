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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/textarea/textarea.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/textarea/textarea.js
  var _sfc_main = {
    data() {
      return {
        value1: "",
        value2: "\u7EDF\u8BA1\u5B57\u6570",
        value3: "",
        value4: "",
        value5: ""
      };
    },
    methods: {
      formatter(value) {
        return value.replace(/[^0-9]/ig, "");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__textarea = (0, import_vue.resolveComponent)("u--textarea");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u__textarea, {
              modelValue: $data.value1,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
              placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
            }, null, 8, ["modelValue"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5B57\u6570\u7EDF\u8BA1"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u__textarea, {
              modelValue: $data.value2,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
              placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
              count: ""
            }, null, 8, ["modelValue"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u52A8\u589E\u9AD8"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u__textarea, {
              modelValue: $data.value3,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
              placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
              autoHeight: ""
            }, null, 8, ["modelValue"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7981\u7528\u72B6\u6001"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u__textarea, {
              modelValue: $data.value4,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
              placeholder: "\u6587\u672C\u57DF\u5DF2\u88AB\u7981\u7528",
              disabled: "",
              count: ""
            }, null, 8, ["modelValue"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u4E0B\u5212\u7EBF\u6A21\u5F0F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u__textarea, {
              modelValue: $data.value5,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event),
              placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
              border: "bottom"
            }, null, 8, ["modelValue"])
          ])
        ])
      ])
    ]);
  }
  var textarea = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/textarea/textarea.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/textarea/textarea";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    textarea.mpType = "page";
    const app = Vue.createPageApp(textarea, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...textarea.styles || []]));
    app.mount("#root");
  }
})();
