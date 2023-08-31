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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/rate/rate.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/rate/rate.js
  var _style_0 = {};
  var _sfc_main = {
    data() {
      return {
        //自定义星星的个数
        value: 3,
        value1: 2,
        // 自定义选择星星颜色个数
        activeColorValue: 3,
        // 是否允许半星的个数
        HalfValue: 3.5,
        // 自定义图标星星个数
        activeIconValue: 3
      };
    },
    watch: {
      value(newValue, oldValue) {
      }
    },
    methods: {
      change(e) {
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_rate = (0, import_vue.resolveComponent)("u-rate");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u672C\u6848\u4F8B"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, { size: "20" })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u9009\u4E2D\u661F\u661F\u6570\u91CF"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "20",
                modelValue: $data.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event),
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u661F\u661F\u5927\u5C0F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "30",
                count: "4"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u662F\u5426\u7981\u7528\u8BC4\u5206"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__rate-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "20",
                disabled: ""
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u662F\u5426\u53EA\u8BFB\u8BC4\u5206"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__rate-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "20",
                readonly: ""
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u9009\u4E2D\u661F\u661F\u989C\u8272"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__rate-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "20",
                modelValue: $data.activeColorValue,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.activeColorValue = $event),
                activeColor: "#2979ff"
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u672A\u9009\u4E2D\u661F\u661F\u989C\u8272"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__rate-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "20",
                modelValue: $data.value1,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value1 = $event),
                inactiveColor: "#2979ff"
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7981\u6B62\u89E6\u6478\u9009\u62E9"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__rate-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "20",
                touchable: false
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5141\u8BB8\u89E6\u6478\u9009\u62E9"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__rate-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "20",
                touchable: true
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u662F\u5426\u5141\u8BB8\u534A\u661F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__rate-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "20",
                modelValue: $data.HalfValue,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.HalfValue = $event),
                allowHalf: true,
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u9009\u4E2D\u7684\u56FE\u6807"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__rate-item" }, [
              (0, import_vue.createVNode)(_component_u_rate, {
                size: "20",
                modelValue: $data.activeIconValue,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.activeIconValue = $event),
                inactiveIcon: "heart",
                activeIcon: "heart-fill"
              }, null, 8, ["modelValue"])
            ])
          ])
        ])
      ])
    ]);
  }
  var rate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/rate/rate.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsA/rate/rate";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    rate.mpType = "page";
    const app = Vue.createPageApp(rate, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...rate.styles || []]));
    app.mount("#root");
  }
})();
