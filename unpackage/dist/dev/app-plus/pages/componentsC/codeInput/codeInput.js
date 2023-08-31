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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/codeInput/codeInput.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/codeInput/codeInput.js
  var _sfc_main = {
    data() {
      return {
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        value5: "",
        value6: "",
        value7: "",
        value8: "",
        value9: "123",
        value10: "34"
      };
    },
    methods: {
      change(e) {
        formatAppLog("log", "at pages/componentsC/codeInput/codeInput.nvue:142", "change", e);
      },
      finish(e) {
        formatAppLog("log", "at pages/componentsC/codeInput/codeInput.nvue:145", "finish", e);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_code_input = (0, import_vue2.resolveComponent)("u-code-input");
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
            (0, import_vue2.createVNode)(_component_u_code_input, {
              modelValue: $data.value1,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
              maxlength: 4,
              onChange: $options.change,
              onFinish: $options.finish
            }, null, 8, ["modelValue", "onChange", "onFinish"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6A2A\u7EBF\u6A21\u5F0F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_code_input, {
              modelValue: $data.value2,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
              mode: "line",
              maxlength: 4,
              bold: true
            }, null, 8, ["modelValue"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u8BBE\u7F6E\u957F\u5EA6"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_code_input, {
              modelValue: $data.value3,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
              maxlength: 6
            }, null, 8, ["modelValue"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u8BBE\u7F6E\u95F4\u8DDD"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_code_input, {
              modelValue: $data.value4,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
              mode: "box",
              space: 0,
              maxlength: 4
            }, null, 8, ["modelValue"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7EC6\u8FB9\u6846"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_code_input, {
              modelValue: $data.value5,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event),
              mode: "box",
              space: 0,
              maxlength: 4,
              hairline: ""
            }, null, 8, ["modelValue"])
          ]),
          (0, import_vue2.createElementVNode)("view", {
            class: "wu-demo-block__content",
            style: { "margin-top": "10px" }
          }, [
            (0, import_vue2.createVNode)(_component_u_code_input, {
              modelValue: $data.value6,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.value6 = $event),
              mode: "line",
              space: 10,
              maxlength: 4,
              hairline: ""
            }, null, 8, ["modelValue"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u8C03\u6574\u989C\u8272"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_code_input, {
              modelValue: $data.value7,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.value7 = $event),
              mode: "box",
              space: 0,
              maxlength: 4,
              hairline: "",
              color: "#f56c6c",
              borderColor: "#f56c6c"
            }, null, 8, ["modelValue"]),
            (0, import_vue2.createElementVNode)("view", {
              class: "wu-demo-block__content",
              style: { "margin-top": "10px" }
            }, [
              (0, import_vue2.createVNode)(_component_u_code_input, {
                modelValue: $data.value10,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.value10 = $event),
                mode: "line",
                size: "30",
                maxlength: 4,
                hairline: "",
                color: "#3c9cff",
                borderColor: "#3c9cff"
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u70B9\u6A21\u5F0F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_code_input, {
              modelValue: $data.value8,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.value8 = $event),
              mode: "box",
              dot: "",
              space: 0,
              maxlength: 4,
              hairline: ""
            }, null, 8, ["modelValue"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u9884\u7F6E\u5185\u5BB9"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_code_input, {
              modelValue: $data.value9,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.value9 = $event),
              mode: "box",
              space: 0,
              maxlength: 4,
              hairline: "",
              fontSize: "17"
            }, null, 8, ["modelValue"])
          ])
        ])
      ])
    ]);
  }
  var codeInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/codeInput/codeInput.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/codeInput/codeInput";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    codeInput.mpType = "page";
    const app = Vue.createPageApp(codeInput, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...codeInput.styles || []]));
    app.mount("#root");
  }
})();
