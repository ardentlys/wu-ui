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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/tag/tag.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/tag/tag.js
  var _style_0 = { "wu-page__tag-item": { "": { "marginRight": 20 } }, "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } } };
  var _sfc_main = {
    data() {
      return {
        close1: true,
        close2: true,
        close3: true,
        radios: [
          {
            checked: true
          },
          {
            checked: false
          },
          {
            checked: false
          }
        ],
        checkboxs: [
          {
            checked: true
          },
          {
            checked: false
          },
          {
            checked: false
          }
        ]
      };
    },
    methods: {
      radioClick(name) {
        this.radios.map((item, index) => {
          item.checked = index === name ? true : false;
        });
      },
      checkboxClick(name) {
        this.checkboxs[name].checked = !this.checkboxs[name].checked;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_tag = (0, import_vue.resolveComponent)("u-tag");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u529F\u80FD"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                plain: "",
                size: "mini",
                type: "warning"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u4E3B\u9898"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, { text: "\u6807\u7B7E" })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "warning"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "success"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "error"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5706\u5F62\u6807\u7B7E"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                plain: "",
                shape: "circle"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "warning",
                shape: "circle"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u9542\u7A7A\u6807\u7B7E"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                plain: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "warning",
                plain: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "success",
                plain: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "error",
                plain: ""
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u9542\u7A7A\u5E26\u80CC\u666F\u8272"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                plain: "",
                plainFill: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "warning",
                plain: "",
                plainFill: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "success",
                plain: "",
                plainFill: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "error",
                plain: "",
                plainFill: ""
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                plain: "",
                size: "mini"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "warning"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "success",
                plain: "",
                size: "large"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u53EF\u5173\u95ED\u6807\u7B7E"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                size: "mini",
                closable: "",
                show: $data.close1,
                onClose: _cache[0] || (_cache[0] = ($event) => $data.close1 = false)
              }, null, 8, ["show"])
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "warning",
                closable: "",
                show: $data.close2,
                onClose: _cache[1] || (_cache[1] = ($event) => $data.close2 = false)
              }, null, 8, ["show"])
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "success",
                plain: "",
                size: "large",
                closable: "",
                show: $data.close3,
                onClose: _cache[2] || (_cache[2] = ($event) => $data.close3 = false)
              }, null, 8, ["show"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5E26\u56FE\u7247\u548C\u56FE\u6807"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                size: "mini",
                icon: "map",
                plain: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "warning",
                icon: "tags-fill"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "wu-page__tag-item" }, [
              (0, import_vue.createVNode)(_component_u_tag, {
                text: "\u6807\u7B7E",
                type: "success",
                plain: "",
                size: "large",
                icon: "https://cdn.uviewui.com/uview/example/tag.png"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5355\u9009\u6807\u7B7E"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
              import_vue.Fragment,
              null,
              (0, import_vue.renderList)($data.radios, (item, index) => {
                return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                  class: "wu-page__tag-item",
                  key: index
                }, [
                  (0, import_vue.createVNode)(_component_u_tag, {
                    text: `\u9009\u9879${index + 1}`,
                    plain: !item.checked,
                    type: "warning",
                    name: index,
                    onClick: $options.radioClick
                  }, null, 8, ["text", "plain", "name", "onClick"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u591A\u9009\u6807\u7B7E"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
              import_vue.Fragment,
              null,
              (0, import_vue.renderList)($data.checkboxs, (item, index) => {
                return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                  class: "wu-page__tag-item",
                  key: index
                }, [
                  (0, import_vue.createVNode)(_component_u_tag, {
                    text: `\u9009\u9879${index + 1}`,
                    plain: !item.checked,
                    type: "warning",
                    name: index,
                    onClick: $options.checkboxClick
                  }, null, 8, ["text", "plain", "name", "onClick"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ])
    ]);
  }
  var tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/tag/tag.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/tag/tag";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tag.mpType = "page";
    const app = Vue.createPageApp(tag, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tag.styles || []]));
    app.mount("#root");
  }
})();
