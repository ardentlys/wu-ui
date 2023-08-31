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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/scrollList/scrollList.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/scrollList/scrollList.js
  var _style_0 = { "scroll-list": { "": { "flexDirection": "column" } }, "scroll-list__goods-item": { "": { "marginRight": 20 } }, "scroll-list__goods-item__image": { "": { "width": 60, "height": 60, "borderRadius": 4 } }, "scroll-list__goods-item__text": { "": { "color": "#f56c6c", "textAlign": "center", "fontSize": 12, "marginTop": 5 } }, "scroll-list__show-more": { "": { "backgroundColor": "#fff0f0", "borderRadius": 3, "paddingTop": 3, "paddingRight": 6, "paddingBottom": 3, "paddingLeft": 6, "flexDirection": "column", "alignItems": "center" } }, "scroll-list__show-more__text": { "": { "fontSize": 12, "width": 12, "color": "#f56c6c", "lineHeight": 16 } }, "scroll-list__line": { "": { "flexDirection": "row", "marginTop": 10 } }, "scroll-list__line__item": { "": { "marginRight": 15 } }, "scroll-list__line__item__image": { "": { "width": 61, "height": 48 } }, "scroll-list__line__item__text": { "": { "marginTop": 5, "color": "#606266", "fontSize": 12, "textAlign": "center" } }, "scroll-list__line__item--no-margin-right": { "": { "marginRight": 0 } } };
  var _sfc_main = {
    data() {
      return {
        goodsBaseUrl: "https://cdn.uviewui.com/uview/goods/",
        menuBaseUrl: "https://cdn.uviewui.com/uview/menu/",
        goodsArr: [
          {
            price: "230.5",
            thumbnail: "1.jpg"
          },
          {
            price: "74.1",
            thumbnail: "2.jpg"
          },
          {
            price: "8457",
            thumbnail: "6.jpg"
          },
          {
            price: "1442",
            thumbnail: "5.jpg"
          },
          {
            price: "541",
            thumbnail: "2.jpg"
          },
          {
            price: "234",
            thumbnail: "3.jpg"
          },
          {
            price: "562",
            thumbnail: "4.jpg"
          },
          {
            price: "251.5",
            thumbnail: "1.jpg"
          }
        ],
        menuArr: [
          [
            {
              name: "\u5929\u732B\u65B0\u54C1",
              icon: "11.png"
            },
            {
              name: "\u4ECA\u65E5\u7206\u6B3E",
              icon: "9.png"
            },
            {
              name: "\u5929\u732B\u56FD\u9645",
              icon: "17.png"
            },
            {
              name: "\u997F\u4E86\u4E48",
              icon: "6.png"
            },
            {
              name: "\u5929\u732B\u8D85\u5E02",
              icon: "11.png"
            },
            {
              name: "\u5206\u7C7B",
              icon: "2.png"
            },
            {
              name: "\u5929\u732B\u7F8E\u98DF",
              icon: "3.png"
            },
            {
              name: "\u963F\u91CC\u5065\u5EB7",
              icon: "12.png"
            },
            {
              name: "\u53E3\u7891\u751F\u6D3B",
              icon: "7.png"
            }
          ],
          [
            {
              name: "\u5145\u503C\u4E2D\u5FC3",
              icon: "8.png"
            },
            {
              name: "\u673A\u7968\u9152\u5E97",
              icon: "10.png"
            },
            {
              name: "\u91D1\u5E01\u5E84\u56ED",
              icon: "18.png"
            },
            {
              name: "\u963F\u91CC\u62CD\u5356",
              icon: "15.png"
            },
            {
              name: "\u6DD8\u5B9D\u5403\u8D27",
              icon: "16.png"
            },
            {
              name: "\u95F2\u9C7C",
              icon: "4.png"
            },
            {
              name: "\u4F1A\u5458\u4E2D\u5FC3",
              icon: "6.png"
            },
            {
              name: "\u9020\u70B9\u65B0\u8D27",
              icon: "13.png"
            },
            {
              name: "\u571F\u8D27\u9C9C\u98DF",
              icon: "14.png"
            }
          ]
        ]
      };
    },
    methods: {
      showMore() {
        uni.$u.toast("\u67E5\u770B\u66F4\u591A");
      },
      left() {
        formatAppLog("log", "at pages/componentsC/scrollList/scrollList.nvue:179", "left");
      },
      right() {
        formatAppLog("log", "at pages/componentsC/scrollList/scrollList.nvue:182", "right");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = (0, import_vue2.resolveComponent)("u-icon");
    const _component_u_scroll_list = (0, import_vue2.resolveComponent)("u-scroll-list");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", {
            class: "wu-demo-block__title",
            style: { "margin-bottom": "15px" }
          }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue2.createVNode)(_component_u_scroll_list, {
            indicatorColor: "#fff0f0",
            indicatorActiveColor: "#f56c6c",
            onRight: $options.right,
            onLeft: $options.left
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createElementVNode)("view", {
                class: "scroll-list",
                style: { "flex-direction": "row" }
              }, [
                ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                  import_vue2.Fragment,
                  null,
                  (0, import_vue2.renderList)($data.goodsArr, (item, index) => {
                    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                      "view",
                      {
                        class: (0, import_vue2.normalizeClass)(["scroll-list__goods-item", [index === 9 && "scroll-list__goods-item--no-margin-right"]]),
                        key: index
                      },
                      [
                        (0, import_vue2.createElementVNode)("u-image", {
                          class: "scroll-list__goods-item__image",
                          src: $data.goodsBaseUrl + item.thumbnail,
                          mode: ""
                        }, null, 8, ["src"]),
                        (0, import_vue2.createElementVNode)(
                          "u-text",
                          { class: "scroll-list__goods-item__text" },
                          "\uFFE5" + (0, import_vue2.toDisplayString)(item.price),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                (0, import_vue2.createElementVNode)("view", {
                  class: "scroll-list__show-more",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.showMore && $options.showMore(...args))
                }, [
                  (0, import_vue2.createElementVNode)("u-text", { class: "scroll-list__show-more__text" }, "\u67E5\u770B\u66F4\u591A"),
                  (0, import_vue2.createVNode)(_component_u_icon, {
                    name: "arrow-leftward",
                    color: "#f56c6c",
                    size: "12"
                  })
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onRight", "onLeft"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u591A\u83DC\u5355\u6269\u5C55"),
          (0, import_vue2.createVNode)(_component_u_scroll_list, null, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createElementVNode)("view", { class: "scroll-list" }, [
                ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                  import_vue2.Fragment,
                  null,
                  (0, import_vue2.renderList)($data.menuArr, (item, index) => {
                    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                      class: "scroll-list__line",
                      key: index
                    }, [
                      ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                        import_vue2.Fragment,
                        null,
                        (0, import_vue2.renderList)(item, (item1, index1) => {
                          return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                            "view",
                            {
                              class: (0, import_vue2.normalizeClass)(["scroll-list__line__item", [index1 === item.length - 1 && "scroll-list__line__item--no-margin-right"]]),
                              key: index1
                            },
                            [
                              (0, import_vue2.createElementVNode)("u-image", {
                                class: "scroll-list__line__item__image",
                                src: $data.menuBaseUrl + item1.icon,
                                mode: ""
                              }, null, 8, ["src"]),
                              (0, import_vue2.createElementVNode)(
                                "u-text",
                                { class: "scroll-list__line__item__text" },
                                (0, import_vue2.toDisplayString)(item1.name),
                                1
                                /* TEXT */
                              )
                            ],
                            2
                            /* CLASS */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  var scrollList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/scrollList/scrollList.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/scrollList/scrollList";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    scrollList.mpType = "page";
    const app = Vue.createPageApp(scrollList, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...scrollList.styles || []]));
    app.mount("#root");
  }
})();
