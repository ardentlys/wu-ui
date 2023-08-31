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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/list/list.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/list/list.js
  var _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } } };
  var _sfc_main = {
    data() {
      return {
        indexList: [],
        urls: [
          "https://cdn.uviewui.com/uview/album/1.jpg",
          "https://cdn.uviewui.com/uview/album/2.jpg",
          "https://cdn.uviewui.com/uview/album/3.jpg",
          "https://cdn.uviewui.com/uview/album/4.jpg",
          "https://cdn.uviewui.com/uview/album/5.jpg",
          "https://cdn.uviewui.com/uview/album/6.jpg",
          "https://cdn.uviewui.com/uview/album/7.jpg",
          "https://cdn.uviewui.com/uview/album/8.jpg",
          "https://cdn.uviewui.com/uview/album/9.jpg",
          "https://cdn.uviewui.com/uview/album/10.jpg"
        ]
      };
    },
    onLoad() {
      this.loadmore();
    },
    methods: {
      scrolltolower() {
        this.loadmore();
      },
      loadmore() {
        for (let i = 0; i < 30; i++) {
          this.indexList.push({
            url: this.urls[uni.$u.random(0, this.urls.length - 1)]
          });
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_avatar = (0, import_vue.resolveComponent)("u-avatar");
    const _component_u_cell = (0, import_vue.resolveComponent)("u-cell");
    const _component_u_list_item = (0, import_vue.resolveComponent)("u-list-item");
    const _component_u_list = (0, import_vue.resolveComponent)("u-list");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createVNode)(_component_u_list, { onScrolltolower: $options.scrolltolower }, {
          default: (0, import_vue.withCtx)(() => [
            ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
              import_vue.Fragment,
              null,
              (0, import_vue.renderList)($data.indexList, (item, index) => {
                return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(
                  _component_u_list_item,
                  { key: index },
                  {
                    default: (0, import_vue.withCtx)(() => [
                      (0, import_vue.createVNode)(_component_u_cell, {
                        title: `\u5217\u8868\u957F\u5EA6-${index + 1}`
                      }, {
                        default: (0, import_vue.withCtx)(() => [
                          (0, import_vue.createVNode)(_component_u_avatar, {
                            slot: "icon",
                            shape: "square",
                            size: "35",
                            src: item.url,
                            customStyle: "margin: -3px 5px -3px 0"
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["title"])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onScrolltolower"])
      ])
    ]);
  }
  var list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/list/list.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/list/list";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    list.mpType = "page";
    const app = Vue.createPageApp(list, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...list.styles || []]));
    app.mount("#root");
  }
})();
