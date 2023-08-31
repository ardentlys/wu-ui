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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/switch/switch.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/switch/switch.js
  var _style_0 = { "wu-page__tag-item": { "": { "marginRight": 30 } }, "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } } };
  var _sfc_main = {
    data() {
      return {
        value1: false,
        value2: true,
        value3: false,
        value4: true,
        value5: false,
        value6: true,
        value7: false,
        value8: true,
        value9: true,
        value10: true,
        value11: false,
        value12: true,
        value13: true
      };
    },
    watch: {
      value1(newValue, oldValue) {
        formatAppLog("log", "at pages/componentsB/switch/switch.nvue:144", "v-model", newValue);
      }
    },
    methods: {
      change(e) {
        formatAppLog("log", "at pages/componentsB/switch/switch.nvue:149", "change", e);
      },
      asyncChange(e) {
        uni.showModal({
          content: e ? "\u786E\u5B9A\u8981\u6253\u5F00\u5417" : "\u786E\u5B9A\u8981\u5173\u95ED\u5417",
          success: (res) => {
            if (res.confirm) {
              this.value13 = e;
            }
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_switch = (0, import_vue2.resolveComponent)("u-switch");
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
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value1,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value2,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event)
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u52A0\u8F7D\u4E2D"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value3,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
                loading: ""
              }, null, 8, ["modelValue"])
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value4,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
                loading: ""
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7981\u7528\u72B6\u6001"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value5,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event),
                disabled: ""
              }, null, 8, ["modelValue"])
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value6,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.value6 = $event),
                disabled: ""
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value7,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.value7 = $event),
                size: "28"
              }, null, 8, ["modelValue"])
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value8,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.value8 = $event),
                size: "20"
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value9,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.value9 = $event),
                activeColor: "#f56c6c",
                loading: ""
              }, null, 8, ["modelValue"])
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value10,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.value10 = $event),
                activeColor: "#5ac725",
                loading: ""
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u6837\u5F0F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                space: 2,
                modelValue: $data.value11,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.value11 = $event),
                activeColor: "#f56c6c",
                inactiveColor: "rgb(230, 230, 230)"
              }, null, 8, ["modelValue"])
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                space: "2",
                modelValue: $data.value12,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.value12 = $event),
                activeColor: "#f9ae3d",
                inactiveColor: "rgb(230, 230, 230)"
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5F02\u6B65\u63A7\u5236"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_switch, {
                modelValue: $data.value13,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.value13 = $event),
                asyncChange: "",
                onChange: $options.asyncChange
              }, null, 8, ["modelValue", "onChange"])
            ])
          ])
        ])
      ])
    ]);
  }
  var _switch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/switch/switch.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/switch/switch";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    _switch.mpType = "page";
    const app = Vue.createPageApp(_switch, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ..._switch.styles || []]));
    app.mount("#root");
  }
})();
