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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/swipeAction/swipeAction.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/swipeAction/swipeAction.js
  var _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-demo-block__title": { "": { "paddingTop": 10, "paddingRight": 0, "paddingBottom": 2, "paddingLeft": 15 } }, "swipe-action__content": { "": { "paddingTop": "25rpx", "paddingRight": 0, "paddingBottom": "25rpx", "paddingLeft": 0 } }, "swipe-action__content__text": { "": { "fontSize": 15, "color": "#303133", "paddingLeft": "30rpx" } } };
  var _sfc_main = {
    data() {
      return {
        show1: true,
        moveX: 0,
        showText: "\u5F53\u524D\u72B6\u6001\uFF1A\u5173",
        showStatus: false,
        options1: [{
          text: "\u5220\u9664",
          style: {
            backgroundColor: "#f56c6c"
          }
        }],
        options2: [{
          text: "\u6536\u85CF",
          style: {
            backgroundColor: "#3c9cff"
          }
        }, {
          text: "\u5220\u9664",
          style: {
            backgroundColor: "#f56c6c"
          }
        }],
        options3: [{
          text: "\u6536\u85CF",
          icon: "star-fill",
          iconSize: "20",
          style: {
            backgroundColor: "#f9ae3d"
          }
        }],
        options4: [{
          text: "\u7981\u7528\u72B6\u6001",
          disabled: true,
          options: [
            {
              text: "\u7F6E\u9876",
              style: {
                backgroundColor: "#3c9cff"
              }
            },
            {
              text: "\u53D6\u6D88",
              style: {
                backgroundColor: "#f9ae3d"
              }
            }
          ]
        }, {
          text: "\u6B63\u5E38\u72B6\u6001",
          disabled: false,
          options: [
            {
              text: "\u7F6E\u9876",
              style: {
                backgroundColor: "#3c9cff"
              }
            },
            {
              text: "\u53D6\u6D88",
              style: {
                backgroundColor: "#f9ae3d"
              }
            }
          ]
        }, {
          text: "\u81EA\u52A8\u5173\u95ED",
          disabled: false,
          options: [
            {
              text: "\u7F6E\u9876",
              style: {
                backgroundColor: "#3c9cff"
              }
            },
            {
              text: "\u53D6\u6D88",
              style: {
                backgroundColor: "#f9ae3d"
              }
            }
          ]
        }],
        options5: [{
          icon: "trash-fill",
          style: {
            backgroundColor: "#f56c6c",
            width: "40px",
            height: "40px",
            borderRadius: "100px",
            margin: "0 6px"
          }
        }, {
          icon: "heart-fill",
          style: {
            backgroundColor: "#5ac725",
            width: "40px",
            height: "40px",
            borderRadius: "100px",
            margin: "0 6px"
          }
        }]
      };
    },
    methods: {
      click(index) {
        formatAppLog("log", "at pages/componentsA/swipeAction/swipeAction.nvue:193", "click", index);
        uni.showModal({
          title: "\u6E29\u99A8\u63D0\u793A",
          content: "\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",
          success: (res) => {
            if (res.confirm) {
              this.show1 = false;
            }
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_swipe_action_item = (0, import_vue2.resolveComponent)("u-swipe-action-item");
    const _component_u_swipe_action = (0, import_vue2.resolveComponent)("u-swipe-action");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6F14\u793A\u6848\u4F8B"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-page__swipe-action-item" }, [
            (0, import_vue2.createVNode)(_component_u_swipe_action, null, {
              default: (0, import_vue2.withCtx)(() => [
                $data.show1 ? ((0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_swipe_action_item, {
                  key: 0,
                  options: $data.options1,
                  onClick: $options.click
                }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createElementVNode)("view", { class: "swipe-action u-border-top u-border-bottom" }, [
                      (0, import_vue2.createElementVNode)("view", { class: "swipe-action__content" }, [
                        (0, import_vue2.createElementVNode)("u-text", { class: "swipe-action__content__text" }, "\u57FA\u7840\u4F7F\u7528")
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["options", "onClick"])) : (0, import_vue2.createCommentVNode)("v-if", true)
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6309\u94AE\u7EC4"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-page__swipe-action-item" }, [
            (0, import_vue2.createVNode)(_component_u_swipe_action, null, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createVNode)(_component_u_swipe_action_item, { options: $data.options2 }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createElementVNode)("view", { class: "swipe-action u-border-top u-border-bottom" }, [
                      (0, import_vue2.createElementVNode)("view", { class: "swipe-action__content" }, [
                        (0, import_vue2.createElementVNode)("u-text", { class: "swipe-action__content__text" }, "\u4E24\u4E2A\u6309\u94AE\u5E76\u5217")
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["options"])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5E26\u56FE\u6807"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-page__swipe-action-item" }, [
            (0, import_vue2.createVNode)(_component_u_swipe_action, null, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createVNode)(_component_u_swipe_action_item, { options: $data.options3 }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createElementVNode)("view", { class: "swipe-action u-border-top u-border-bottom" }, [
                      (0, import_vue2.createElementVNode)("view", { class: "swipe-action__content" }, [
                        (0, import_vue2.createElementVNode)("u-text", { class: "swipe-action__content__text" }, "\u81EA\u5B9A\u4E49\u56FE\u6807")
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["options"])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7EC4\u5408\u4F7F\u7528"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-page__swipe-action-item" }, [
            (0, import_vue2.createVNode)(_component_u_swipe_action, null, {
              default: (0, import_vue2.withCtx)(() => [
                ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                  import_vue2.Fragment,
                  null,
                  (0, import_vue2.renderList)($data.options4, (item, index) => {
                    return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_swipe_action_item, {
                      options: item.options,
                      disabled: item.disabled,
                      key: index
                    }, {
                      default: (0, import_vue2.withCtx)(() => [
                        (0, import_vue2.createElementVNode)(
                          "view",
                          {
                            class: (0, import_vue2.normalizeClass)(["swipe-action u-border-top", [index === $data.options4.length - 1 && "u-border-bottom"]])
                          },
                          [
                            (0, import_vue2.createElementVNode)("view", { class: "swipe-action__content" }, [
                              (0, import_vue2.createElementVNode)(
                                "u-text",
                                { class: "swipe-action__content__text" },
                                (0, import_vue2.toDisplayString)(item.text),
                                1
                                /* TEXT */
                              )
                            ])
                          ],
                          2
                          /* CLASS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["options", "disabled"]);
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
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u6309\u94AE\u5F62\u72B6"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-page__swipe-action-item" }, [
            (0, import_vue2.createVNode)(_component_u_swipe_action, null, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createVNode)(_component_u_swipe_action_item, { options: $data.options5 }, {
                  default: (0, import_vue2.withCtx)(() => [
                    (0, import_vue2.createElementVNode)("view", { class: "swipe-action u-border-top u-border-bottom" }, [
                      (0, import_vue2.createElementVNode)("view", { class: "swipe-action__content" }, [
                        (0, import_vue2.createElementVNode)("u-text", { class: "swipe-action__content__text" }, "\u5706\u5F62\u6309\u94AE")
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["options"])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]);
  }
  var swipeAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/swipeAction/swipeAction.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsA/swipeAction/swipeAction";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    swipeAction.mpType = "page";
    const app = Vue.createPageApp(swipeAction, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...swipeAction.styles || []]));
    app.mount("#root");
  }
})();
