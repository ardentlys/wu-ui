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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/indexList/indexList.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/indexList/indexList.js
  var _style_0 = { "list__item": { "": { "flexDirection": "row", "paddingTop": 6, "paddingRight": 12, "paddingBottom": 6, "paddingLeft": 12, "alignItems": "center" } }, "list__item__avatar": { "": { "height": 35, "width": 35, "borderRadius": 3 } }, "list__item__user-name": { "": { "fontSize": 16, "marginLeft": 10, "color": "#303133" } }, "list__footer": { "": { "color": "#909193", "fontSize": 14, "textAlign": "center", "marginTop": 15, "marginRight": 0, "marginBottom": 15, "marginLeft": 0 } } };
  var indexList = () => {
    const indexList2 = [];
    const charCodeOfA = "A".charCodeAt(0);
    indexList2.push("\u2191");
    indexList2.push("\u2606");
    for (let i = 0; i < 26; i++) {
      indexList2.push(String.fromCharCode(charCodeOfA + i));
    }
    indexList2.push("#");
    return indexList2;
  };
  var _sfc_main = {
    data() {
      return {
        indexList: indexList(),
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
        ],
        names: [
          "\u52C7\u5F80\u65E0\u654C",
          "\u75AF\u72C2\u7684\u8FEA\u98D9",
          "\u78CA\u7231\u53EF",
          "\u68A6\u5E7B\u68A6\u5E7B\u68A6",
          "\u67AB\u4E2D\u98D8\u74E2",
          "\u98DE\u7FD4\u5929\u4F7F",
          "\u66FE\u7ECF\u7B2C\u4E00",
          "\u8FFD\u98CE\u5E7B\u5F71\u65CF\u957F",
          "\u9EA6\u5C0F\u59D0",
          "\u80E1\u683C\u7F57\u96C5",
          "Red\u78CA\u78CA",
          "\u4E50\u4E50\u7ACB\u7ACB",
          "\u9752\u9F99\u7206\u98CE",
          "\u8DD1\u8DD1\u5361\u53EE\u8F66",
          "\u5C71\u91CC\u72FC",
          "supersonic\u8D85"
        ]
      };
    },
    computed: {
      itemArr() {
        return this.indexList.map((item) => {
          const arr = [];
          for (let i = 0; i < 10; i++) {
            arr.push({
              name: this.names[uni.$u.random(0, this.names.length - 1)],
              url: this.urls[uni.$u.random(0, this.urls.length - 1)]
            });
          }
          return arr;
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_avatar = (0, import_vue.resolveComponent)("u-avatar");
    const _component_u_line = (0, import_vue.resolveComponent)("u-line");
    const _component_u_index_anchor = (0, import_vue.resolveComponent)("u-index-anchor");
    const _component_u_index_item = (0, import_vue.resolveComponent)("u-index-item");
    const _component_u_index_list = (0, import_vue.resolveComponent)("u-index-list");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createVNode)(_component_u_index_list, { indexList: $data.indexList }, {
        default: (0, import_vue.withCtx)(() => [
          (0, import_vue.createElementVNode)("view", {
            slot: "header",
            class: "list"
          }, [
            (0, import_vue.createElementVNode)("view", { class: "list__item" }, [
              (0, import_vue.createVNode)(_component_u_avatar, {
                shape: "square",
                size: "35",
                icon: "man-add-fill",
                fontSize: "26",
                randomBgColor: ""
              }),
              (0, import_vue.createElementVNode)("u-text", { class: "list__item__user-name" }, "\u65B0\u7684\u670B\u53CB")
            ]),
            (0, import_vue.createVNode)(_component_u_line),
            (0, import_vue.createElementVNode)("view", { class: "list__item" }, [
              (0, import_vue.createVNode)(_component_u_avatar, {
                shape: "square",
                size: "35",
                icon: "tags-fill",
                fontSize: "26",
                randomBgColor: ""
              }),
              (0, import_vue.createElementVNode)("u-text", { class: "list__item__user-name" }, "\u6807\u7B7E")
            ]),
            (0, import_vue.createVNode)(_component_u_line),
            (0, import_vue.createElementVNode)("view", { class: "list__item" }, [
              (0, import_vue.createVNode)(_component_u_avatar, {
                shape: "square",
                size: "35",
                icon: "chrome-circle-fill",
                fontSize: "26",
                randomBgColor: ""
              }),
              (0, import_vue.createElementVNode)("u-text", { class: "list__item__user-name" }, "\u670B\u53CB\u5708")
            ]),
            (0, import_vue.createVNode)(_component_u_line),
            (0, import_vue.createElementVNode)("view", { class: "list__item" }, [
              (0, import_vue.createVNode)(_component_u_avatar, {
                shape: "square",
                size: "35",
                icon: "qq-fill",
                fontSize: "26",
                randomBgColor: ""
              }),
              (0, import_vue.createElementVNode)("u-text", { class: "list__item__user-name" }, "QQ")
            ]),
            (0, import_vue.createVNode)(_component_u_line)
          ]),
          ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            null,
            (0, import_vue.renderList)($options.itemArr, (item, index) => {
              return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                import_vue.Fragment,
                { key: index },
                [
                  (0, import_vue.createVNode)(_component_u_index_anchor, {
                    text: $data.indexList[index]
                  }, null, 8, ["text"]),
                  (0, import_vue.createVNode)(
                    _component_u_index_item,
                    null,
                    {
                      default: (0, import_vue.withCtx)(() => [
                        ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                          import_vue.Fragment,
                          null,
                          (0, import_vue.renderList)(item, (item1, index1) => {
                            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                              class: "list",
                              key: index1
                            }, [
                              (0, import_vue.createElementVNode)("view", { class: "list__item" }, [
                                (0, import_vue.createElementVNode)("u-image", {
                                  class: "list__item__avatar",
                                  src: item1.url
                                }, null, 8, ["src"]),
                                (0, import_vue.createElementVNode)(
                                  "u-text",
                                  { class: "list__item__user-name" },
                                  (0, import_vue.toDisplayString)(item1.name),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              (0, import_vue.createVNode)(_component_u_line)
                            ]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          (0, import_vue.createElementVNode)("view", {
            slot: "footer",
            class: "u-safe-area-inset--bottom"
          }, [
            (0, import_vue.createElementVNode)("u-text", { class: "list__footer" }, "\u5171305\u4F4D\u597D\u53CB")
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["indexList"])
    ]);
  }
  var indexList$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/indexList/indexList.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/indexList/indexList";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    indexList$1.mpType = "page";
    const app = Vue.createPageApp(indexList$1, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...indexList$1.styles || []]));
    app.mount("#root");
  }
})();
