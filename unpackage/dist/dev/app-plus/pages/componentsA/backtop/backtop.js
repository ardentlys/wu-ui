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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/backtop/backtop.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/backtop/backtop.js
  var _style_0 = { "wu-page": { "": { "height": 1200 } }, "wu-page__backTop-item": { "": { "marginTop": 10 } } };
  var _sfc_main = {
    data() {
      return {
        value: ["\u81EA\u5B9A\u4E49\u56FE\u6807"],
        backTopData: {
          mode: "circle",
          icon: "arrow-upward",
          bottom: 100,
          customStyle: {},
          iconStyle: {},
          right: 20,
          duration: 300
        },
        scrollTop: 0,
        // 被自定义的样式
        checkboxList: [
          {
            name: "\u663E\u793A\u65B9\u5F62"
          },
          {
            name: "\u81EA\u5B9A\u4E49\u56FE\u6807"
          },
          {
            name: "\u81EA\u5B9A\u4E49\u8DDD\u79BB"
          },
          {
            name: "\u81EA\u5B9A\u4E49\u6837\u5F0F"
          },
          {
            name: "\u81EA\u5B9A\u4E49\u8FD4\u56DE\u9876\u90E8\u6EDA\u52A8\u65F6\u95F4"
          }
        ]
      };
    },
    onLoad() {
      this.backTopData.icon = "arrow-up";
    },
    onPageScroll(e) {
      this.scrollTop = e.scrollTop;
    },
    methods: {
      checkboxChange(n) {
        if (n.includes("\u663E\u793A\u65B9\u5F62")) {
          this.backTopData.mode = "square";
        } else {
          this.backTopData.mode = "circle";
        }
        if (n.includes("\u81EA\u5B9A\u4E49\u56FE\u6807")) {
          this.backTopData.icon = "arrow-up";
        } else {
          this.backTopData.icon = "arrow-upward";
        }
        if (n.includes("\u81EA\u5B9A\u4E49\u8DDD\u79BB")) {
          this.backTopData.bottom = 300;
          this.backTopData.right = 20;
        } else {
          this.backTopData.bottom = 100;
        }
        if (n.includes("\u81EA\u5B9A\u4E49\u6837\u5F0F")) {
          this.backTopData.customStyle = {
            backgroundColor: "#2979ff"
          };
          this.backTopData.iconStyle = {
            color: "#ffffff"
          };
        } else {
          this.backTopData.customStyle = {};
          this.backTopData.iconStyle = {};
        }
        if (n.includes("\u81EA\u5B9A\u4E49\u8FD4\u56DE\u9876\u90E8\u6EDA\u52A8\u65F6\u95F4")) {
          this.backTopData.duration = 1500;
        } else {
          this.backTopData.duration = 300;
        }
      },
      click() {
        formatAppLog("log", "at pages/componentsA/backtop/backtop.nvue:119", "click");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_checkbox = (0, import_vue2.resolveComponent)("u-checkbox");
    const _component_u_checkbox_group = (0, import_vue2.resolveComponent)("u-checkbox-group");
    const _component_u_back_top = (0, import_vue2.resolveComponent)("u-back-top");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)(
        "view",
        {
          class: "wu-page",
          ref: "u-back-top"
        },
        [
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
            (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49backTop(\u6EDA\u52A8\u9875\u9762\u5373\u53EF\u5728\u53F3\u4E0B\u89D2\u770B\u5230\u56FE\u6807)"),
            (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
              (0, import_vue2.createElementVNode)("view", { class: "wu-page__backTop-item" }, [
                (0, import_vue2.createVNode)(_component_u_checkbox_group, {
                  placement: "column",
                  shape: "square",
                  onChange: $options.checkboxChange,
                  modelValue: $data.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event)
                }, {
                  default: (0, import_vue2.withCtx)(() => [
                    ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                      import_vue2.Fragment,
                      null,
                      (0, import_vue2.renderList)($data.checkboxList, (item, index) => {
                        return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_checkbox, {
                          customStyle: { marginBottom: "8px" },
                          key: index,
                          label: item.name,
                          name: item.name
                        }, null, 8, ["label", "name"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onChange", "modelValue"])
              ])
            ])
          ]),
          (0, import_vue2.createVNode)(_component_u_back_top, {
            right: $data.backTopData.right,
            customStyle: $data.backTopData.customStyle,
            bottom: $data.backTopData.bottom,
            icon: $data.backTopData.icon,
            mode: $data.backTopData.mode,
            iconStyle: $data.backTopData.iconStyle,
            duration: $data.backTopData.duration,
            scrollTop: $data.scrollTop,
            onClick: $options.click
          }, null, 8, ["right", "customStyle", "bottom", "icon", "mode", "iconStyle", "duration", "scrollTop", "onClick"])
        ],
        512
        /* NEED_PATCH */
      )
    ]);
  }
  var backtop = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/backtop/backtop.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsA/backtop/backtop";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    backtop.mpType = "page";
    const app = Vue.createPageApp(backtop, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...backtop.styles || []]));
    app.mount("#root");
  }
})();
