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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/tabbar/tabbar.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/tabbar/tabbar.js
  var _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-page__item__title": { "": { "color": "#909193", "backgroundColor": "#f3f4f6", "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "fontSize": 15 } }, "wu-page__item__title__slot-title": { "": { "color": "#3c9cff", "fontSize": 14 } }, "wu-page__item__slot-icon": { "": { "width": 17, "height": 17 } } };
  var _sfc_main = {
    data() {
      return {
        value1: 0,
        value2: 1,
        value3: "play-right",
        value4: 0,
        value5: 0,
        value6: 0,
        value7: 3
      };
    },
    onLoad() {
    },
    methods: {
      change5(name) {
        if (name === 1)
          return uni.$u.toast("\u8BF7\u60A8\u5148\u767B\u5F55");
        else
          this.value5 = name;
      },
      change1(e) {
        this.value1 = e;
        formatAppLog("log", "at pages/componentsB/tabbar/tabbar.nvue:241", "change1", e);
      },
      click1(e) {
        formatAppLog("log", "at pages/componentsB/tabbar/tabbar.nvue:244", "click1", e);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_tabbar_item = (0, import_vue2.resolveComponent)("u-tabbar-item");
    const _component_u_tabbar = (0, import_vue2.resolveComponent)("u-tabbar");
    const _component_u_gap = (0, import_vue2.resolveComponent)("u-gap");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue2.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u57FA\u7840\u529F\u80FD"),
          (0, import_vue2.createVNode)(_component_u_tabbar, {
            value: $data.value1,
            onChange: $options.change1,
            fixed: false,
            placeholder: false,
            safeAreaInsetBottom: false
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u9996\u9875",
                icon: "home",
                onClick: $options.click1
              }, null, 8, ["onClick"]),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u653E\u6620\u5385",
                icon: "photo",
                onClick: $options.click1
              }, null, 8, ["onClick"]),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u76F4\u64AD",
                icon: "play-right",
                onClick: $options.click1
              }, null, 8, ["onClick"]),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u6211\u7684",
                icon: "account",
                onClick: $options.click1
              }, null, 8, ["onClick"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "onChange"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u663E\u793A\u5FBD\u6807"),
          (0, import_vue2.createVNode)(_component_u_tabbar, {
            value: $data.value2,
            placeholder: false,
            onChange: _cache[0] || (_cache[0] = (name) => $data.value2 = name),
            fixed: false,
            safeAreaInsetBottom: false
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u9996\u9875",
                icon: "home",
                dot: ""
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u653E\u6620\u5385",
                icon: "photo",
                badge: "3"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u76F4\u64AD",
                icon: "play-right"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u6211\u7684",
                icon: "account"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u5339\u914D\u6807\u7B7E\u7684\u540D\u79F0"),
          (0, import_vue2.createVNode)(_component_u_tabbar, {
            placeholder: false,
            value: $data.value3,
            onChange: _cache[1] || (_cache[1] = (name) => $data.value3 = name),
            fixed: false,
            safeAreaInsetBottom: false
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u9996\u9875",
                icon: "home",
                name: "home"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u653E\u6620\u5385",
                icon: "photo",
                name: "photo"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u76F4\u64AD",
                icon: "play-right",
                name: "play-right"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u6211\u7684",
                name: "account",
                icon: "account"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u81EA\u5B9A\u4E49\u56FE\u6807/\u989C\u8272"),
          (0, import_vue2.createVNode)(_component_u_tabbar, {
            value: $data.value4,
            onChange: _cache[2] || (_cache[2] = (name) => $data.value4 = name),
            fixed: false,
            placeholder: false,
            activeColor: "#d81e06",
            safeAreaInsetBottom: false
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_u_tabbar_item, { text: "\u9996\u9875" }, {
                default: (0, import_vue2.withCtx)(() => [
                  (0, import_vue2.createElementVNode)("u-image", {
                    class: "wu-page__item__slot-icon",
                    slot: "active-icon",
                    src: "https://cdn.uviewui.com/uview/common/bell-selected.png"
                  }),
                  (0, import_vue2.createElementVNode)("u-image", {
                    class: "wu-page__item__slot-icon",
                    slot: "inactive-icon",
                    src: "https://cdn.uviewui.com/uview/common/bell.png"
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u653E\u6620\u5385",
                icon: "photo"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u76F4\u64AD",
                icon: "play-right"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u6211\u7684",
                icon: "account"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u62E6\u622A\u5207\u6362\u4E8B\u4EF6(\u70B9\u51FB\u7B2C\u4E8C\u4E2A\u6807\u7B7E)"),
          (0, import_vue2.createVNode)(_component_u_tabbar, {
            value: $data.value5,
            fixed: false,
            onChange: $options.change5,
            safeAreaInsetBottom: false,
            placeholder: false
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u9996\u9875",
                icon: "home"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u653E\u6620\u5385",
                icon: "photo"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u76F4\u64AD",
                icon: "play-right"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u6211\u7684",
                icon: "account"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "onChange"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u53BB\u9664\u4E0A\u8FB9\u6846"),
          (0, import_vue2.createVNode)(_component_u_tabbar, {
            value: $data.value7,
            placeholder: false,
            border: false,
            onChange: _cache[3] || (_cache[3] = (name) => $data.value7 = name),
            fixed: false,
            safeAreaInsetBottom: false
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u9996\u9875",
                icon: "home"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u653E\u6620\u5385",
                icon: "photo"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u76F4\u64AD",
                icon: "play-right"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u6211\u7684",
                icon: "account"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u56FA\u5B9A\u5728\u5E95\u90E8(\u56FA\u5B9A\u5728\u5C4F\u5E55\u6700\u4E0B\u65B9)"),
          (0, import_vue2.createVNode)(_component_u_gap, { height: "150" }),
          (0, import_vue2.createVNode)(_component_u_tabbar, {
            value: $data.value6,
            onChange: _cache[4] || (_cache[4] = (name) => $data.value6 = name),
            fixed: true,
            placeholder: true,
            safeAreaInsetBottom: true
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u9996\u9875",
                icon: "home"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u653E\u6620\u5385",
                icon: "photo"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u76F4\u64AD",
                icon: "play-right"
              }),
              (0, import_vue2.createVNode)(_component_u_tabbar_item, {
                text: "\u6211\u7684",
                icon: "account"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value"])
        ])
      ])
    ]);
  }
  var tabbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/tabbar/tabbar.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/tabbar/tabbar";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tabbar.mpType = "page";
    const app = Vue.createPageApp(tabbar, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tabbar.styles || []]));
    app.mount("#root");
  }
})();
