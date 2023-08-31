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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/grid/grid.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/grid/grid.js
  var _style_0 = { "swiper": { "": { "height": 220 } }, "grid-text": { "": { "fontSize": 14, "color": "#909399", "paddingTop": "10rpx", "paddingRight": 0, "paddingBottom": "20rpx", "paddingLeft": "0rpx" } } };
  var _sfc_main = {
    data() {
      return {
        baseList: [
          {
            name: "photo",
            title: "\u56FE\u7247"
          },
          {
            name: "lock",
            title: "\u9501\u5934"
          }
          // {
          // 	name: 'star',
          // 	title: '星星'
          // },
        ],
        list: [
          {
            name: "photo",
            title: "\u56FE\u7247"
          },
          {
            name: "lock",
            title: "\u9501\u5934"
          },
          {
            name: "star",
            title: "\u661F\u661F"
          },
          {
            name: "hourglass",
            title: "\u6C99\u6F0F"
          },
          {
            name: "home",
            title: "\u9996\u9875"
          },
          {
            name: "volume",
            title: "\u97F3\u91CF"
          }
        ],
        swiperList: ["integral", "kefu-ermai", "coupon", "gift", "scan", "pause-circle", "wifi", "email", "list"]
      };
    },
    methods: {
      click(name) {
        this.$refs.uToast.success(`\u70B9\u51FB\u4E86\u7B2C${name}\u4E2A`);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = (0, import_vue.resolveComponent)("u-icon");
    const _component_u_grid_item = (0, import_vue.resolveComponent)("u-grid-item");
    const _component_u_grid = (0, import_vue.resolveComponent)("u-grid");
    const _component_swiper_item = (0, import_vue.resolveComponent)("swiper-item");
    const _component_swiper = (0, import_vue.resolveComponent)("swiper");
    const _component_u_toast = (0, import_vue.resolveComponent)("u-toast");
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
          (0, import_vue.createElementVNode)("view", null, [
            (0, import_vue.createVNode)(_component_u_grid, {
              border: false,
              onClick: $options.click,
              align: "center"
            }, {
              default: (0, import_vue.withCtx)(() => [
                ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                  import_vue.Fragment,
                  null,
                  (0, import_vue.renderList)($data.baseList, (baseListItem, baseListIndex) => {
                    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(
                      _component_u_grid_item,
                      { key: baseListIndex },
                      {
                        default: (0, import_vue.withCtx)(() => [
                          (0, import_vue.createVNode)(_component_u_icon, {
                            customStyle: { paddingTop: "20rpx" },
                            name: baseListItem.name,
                            size: 22
                          }, null, 8, ["name"]),
                          (0, import_vue.createElementVNode)(
                            "u-text",
                            { class: "grid-text" },
                            (0, import_vue.toDisplayString)(baseListItem.title),
                            1
                            /* TEXT */
                          )
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
            }, 8, ["onClick"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u663E\u793A\u8FB9\u6846"),
          (0, import_vue.createElementVNode)("view", null, [
            (0, import_vue.createVNode)(_component_u_grid, { border: true }, {
              default: (0, import_vue.withCtx)(() => [
                ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                  import_vue.Fragment,
                  null,
                  (0, import_vue.renderList)($data.list, (listItem, listIndex) => {
                    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(
                      _component_u_grid_item,
                      {
                        key: listIndex,
                        customStyle: "padding-top: 10px; padding-bottom: 10px"
                      },
                      {
                        default: (0, import_vue.withCtx)(() => [
                          (0, import_vue.createVNode)(_component_u_icon, {
                            customStyle: { paddingTop: "20rpx" },
                            name: listItem.name,
                            size: 22
                          }, null, 8, ["name"]),
                          (0, import_vue.createElementVNode)(
                            "u-text",
                            { class: "grid-text" },
                            (0, import_vue.toDisplayString)(listItem.title),
                            1
                            /* TEXT */
                          )
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
            })
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6&\u81EA\u5B9A\u4E49\u5217\u6570"),
          (0, import_vue.createElementVNode)("view", null, [
            (0, import_vue.createVNode)(_component_u_grid, {
              border: false,
              col: "4"
            }, {
              default: (0, import_vue.withCtx)(() => [
                ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                  import_vue.Fragment,
                  null,
                  (0, import_vue.renderList)($data.list, (listItem, listIndex) => {
                    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(
                      _component_u_grid_item,
                      {
                        key: listIndex,
                        customStyle: "padding-top: 10px; padding-bottom: 10px"
                      },
                      {
                        default: (0, import_vue.withCtx)(() => [
                          (0, import_vue.createVNode)(_component_u_icon, {
                            customStyle: { paddingTop: "20rpx" },
                            name: listItem.name,
                            size: 22
                          }, null, 8, ["name"]),
                          (0, import_vue.createElementVNode)(
                            "u-text",
                            { class: "grid-text" },
                            (0, import_vue.toDisplayString)(listItem.title),
                            1
                            /* TEXT */
                          )
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
            })
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u53EF\u6ED1\u52A8"),
          (0, import_vue.createElementVNode)("view", null, [
            (0, import_vue.createVNode)(_component_swiper, {
              "indicator-dots": true,
              class: "swiper"
            }, {
              default: (0, import_vue.withCtx)(() => [
                (0, import_vue.createVNode)(_component_swiper_item, null, {
                  default: (0, import_vue.withCtx)(() => [
                    (0, import_vue.createVNode)(_component_u_grid, { border: true }, {
                      default: (0, import_vue.withCtx)(() => [
                        ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                          import_vue.Fragment,
                          null,
                          (0, import_vue.renderList)($data.swiperList, (item, index) => {
                            return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_grid_item, {
                              index,
                              key: index
                            }, {
                              default: (0, import_vue.withCtx)(() => [
                                (0, import_vue.createVNode)(_component_u_icon, {
                                  customStyle: { paddingTop: "20rpx" },
                                  name: item,
                                  size: 22
                                }, null, 8, ["name"]),
                                (0, import_vue.createElementVNode)(
                                  "u-text",
                                  { class: "grid-text" },
                                  (0, import_vue.toDisplayString)("\u5BAB\u683C" + (index + 1)),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["index"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue.createVNode)(_component_swiper_item, null, {
                  default: (0, import_vue.withCtx)(() => [
                    (0, import_vue.createVNode)(_component_u_grid, { border: true }, {
                      default: (0, import_vue.withCtx)(() => [
                        ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                          import_vue.Fragment,
                          null,
                          (0, import_vue.renderList)($data.swiperList, (item, index) => {
                            return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_grid_item, {
                              index: index + 9,
                              key: index
                            }, {
                              default: (0, import_vue.withCtx)(() => [
                                (0, import_vue.createVNode)(_component_u_icon, {
                                  customStyle: { paddingTop: "20rpx" },
                                  name: item,
                                  size: 22
                                }, null, 8, ["name"]),
                                (0, import_vue.createElementVNode)(
                                  "u-text",
                                  { class: "grid-text" },
                                  (0, import_vue.toDisplayString)("\u5BAB\u683C" + (index + 1)),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["index"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue.createVNode)(_component_swiper_item, null, {
                  default: (0, import_vue.withCtx)(() => [
                    (0, import_vue.createVNode)(_component_u_grid, { border: true }, {
                      default: (0, import_vue.withCtx)(() => [
                        ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                          import_vue.Fragment,
                          null,
                          (0, import_vue.renderList)($data.swiperList, (item, index) => {
                            return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_grid_item, {
                              index: index + 18,
                              key: index
                            }, {
                              default: (0, import_vue.withCtx)(() => [
                                (0, import_vue.createVNode)(_component_u_icon, {
                                  customStyle: { paddingTop: "20rpx" },
                                  name: item,
                                  size: 22
                                }, null, 8, ["name"]),
                                (0, import_vue.createElementVNode)(
                                  "u-text",
                                  { class: "grid-text" },
                                  (0, import_vue.toDisplayString)("\u5BAB\u683C" + (index + 1)),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["index"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        (0, import_vue.createVNode)(
          _component_u_toast,
          { ref: "uToast" },
          null,
          512
          /* NEED_PATCH */
        )
      ])
    ]);
  }
  var grid = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/grid/grid.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsA/grid/grid";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    grid.mpType = "page";
    const app = Vue.createPageApp(grid, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...grid.styles || []]));
    app.mount("#root");
  }
})();
