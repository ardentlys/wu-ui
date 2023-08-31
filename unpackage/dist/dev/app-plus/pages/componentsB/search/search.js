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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/search/search.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/search/search.js
  var _style_0 = { "wu-demo__tag-item": { "": { "flexDirection": "column", "flex": 1 } }, "m-t-10": { "": { "marginTop": 10 } } };
  var _sfc_main = {
    data() {
      return {
        value1: "",
        value2: "\u5929\u5C71\u96EA\u83B2",
        value3: "",
        value4: "",
        value5: "",
        value6: "",
        value7: "",
        value8: "",
        value9: "",
        value10: "",
        value11: "",
        value12: "",
        value13: "",
        value14: "",
        value15: ""
      };
    },
    watch: {
      value1(newValue, oldValue) {
      }
    },
    methods: {
      change(e) {
        formatAppLog("log", "at pages/componentsB/search/search.nvue:200", e);
      },
      clickIcon() {
        uni.$u.toast("\u70B9\u51FB\u4E86\u5DE6\u4FA7\u56FE\u6807");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_search = (0, import_vue2.resolveComponent)("u-search");
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
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value1,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
                "show-action": false,
                onChange: $options.change
              }, null, 8, ["modelValue", "onChange"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u8BBE\u7F6E\u521D\u59CB\u503C"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value2,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
                "show-action": false
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u641C\u7D22\u6846\u5F62\u72B6"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value3,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
                "show-action": false,
                shape: "round"
              }, null, 8, ["modelValue"])
            ])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content m-t-10" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value4,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
                "show-action": false,
                shape: "square"
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u53F3\u4FA7\u63A7\u4EF6"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value5,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event)
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7981\u7528\u8F93\u5165\u6846"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                placeholder: "\u8F93\u5165\u6846\u88AB\u7981\u7528,\u53EF\u4EE5\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6\u8FDB\u884C\u8DF3\u8F6C",
                disabled: "",
                "show-action": false
              })
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u70B9\u51FB\u5DE6\u4FA7\u56FE\u6807"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value6,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.value6 = $event),
                "show-action": false,
                onClickIcon: $options.clickIcon
              }, null, 8, ["modelValue", "onClickIcon"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u641C\u7D22\u6846\u5185\u5BB9\u6C34\u5E73\u5BF9\u9F50"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value7,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.value7 = $event),
                "show-action": false,
                "input-align": "left"
              }, null, 8, ["modelValue"])
            ])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content m-t-10" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value8,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.value8 = $event),
                "show-action": false,
                "input-align": "center"
              }, null, 8, ["modelValue"])
            ])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content m-t-10" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value9,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.value9 = $event),
                "show-action": false,
                "input-align": "right"
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value10,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.value10 = $event),
                "show-action": false,
                borderColor: "rgb(230, 230, 230)",
                bgColor: "#fff"
              }, null, 8, ["modelValue"])
            ])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content m-t-10" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value11,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.value11 = $event),
                "show-action": false,
                "search-icon-color": "#FF0000"
              }, null, 8, ["modelValue"])
            ])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content m-t-10" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value12,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.value12 = $event),
                "show-action": false,
                "placeholder-color": "#FF0000"
              }, null, 8, ["modelValue"])
            ])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content m-t-10" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value13,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.value13 = $event),
                "show-action": false,
                color: "#FF0000"
              }, null, 8, ["modelValue"])
            ])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content m-t-10" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value14,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.value14 = $event),
                label: "\u624B\u673A",
                "show-action": false
              }, null, 8, ["modelValue"])
            ])
          ]),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content m-t-10" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue2.createVNode)(_component_u_search, {
                modelValue: $data.value15,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $data.value15 = $event),
                "search-icon": "scan",
                "show-action": false
              }, null, 8, ["modelValue"])
            ])
          ])
        ])
      ])
    ]);
  }
  var search = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/search/search.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/search/search";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    search.mpType = "page";
    const app = Vue.createPageApp(search, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...search.styles || []]));
    app.mount("#root");
  }
})();
