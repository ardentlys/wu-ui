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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/radio/radio.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/radio/radio.js
  var _style_0 = { "wu-page__style": { "": { "fontSize": 16, "color": "#606266", "marginBottom": "20rpx", "fontWeight": "bold" } }, "wu-page__title": { "": { "fontSize": 16, "color": "#606266", "marginBottom": "20rpx" } } };
  var _sfc_main = {
    data() {
      return {
        // 基本案列数据
        radiolist1: [
          {
            name: "\u82F9\u679C",
            disabled: false
          },
          {
            name: "\u9999\u8549",
            disabled: false
          },
          {
            name: "\u6A59\u5B50",
            disabled: false
          },
          {
            name: "\u69B4\u83B2",
            disabled: false
          }
        ],
        // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
        radiovalue1: "\u82F9\u679C",
        // 自定义形状数据
        radiolist2: [
          {
            name: "\u674E\u767D",
            disabled: false
          },
          {
            name: "\u97E9\u4FE1",
            disabled: false
          },
          {
            name: "\u9A6C\u53EF\u6CE2\u7F57",
            disabled: false
          },
          {
            name: "\u767E\u91CC\u5B88\u7EA6",
            disabled: false
          }
        ],
        // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
        radiovalue2: "\u674E\u767D",
        // 是否禁用数据
        radiolist3: [
          {
            name: "\u82F9\u679C",
            disabled: false
          },
          {
            name: "\u9999\u8549",
            disabled: false
          },
          {
            name: "\u83E0\u841D",
            disabled: false
          }
        ],
        // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
        radiovalue3: "\u82F9\u679C",
        // 是否禁止点击提示语选中单选框数据
        radiolist4: [
          {
            name: "3\u500D\u955C",
            disabled: false
          },
          {
            name: "4\u500D\u955C",
            disabled: false
          },
          {
            name: "6\u500D\u955C",
            disabled: false
          },
          {
            name: "8\u500D\u955C",
            disabled: false
          }
        ],
        // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
        radiovalue4: "6\u500D\u955C",
        //自定义颜色数据
        radiolist5: [
          {
            name: "\u7EA2\u8272",
            disabled: false
          },
          {
            name: "\u7EFF\u8272",
            disabled: false
          },
          {
            name: "\u84DD\u8272",
            disabled: false
          },
          {
            name: "\u9EC4\u8272",
            disabled: false
          }
        ],
        // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
        radiovalue5: "\u7EFF\u8272",
        //横向排列形式数据
        radiolist6: [
          {
            name: "\u59B2\u5DF1",
            disabled: false
          },
          {
            name: "\u865E\u59EC",
            disabled: false
          },
          {
            name: "\u4E0D\u77E5\u706B\u821E",
            disabled: false
          }
        ],
        // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
        radiovalue6: "\u59B2\u5DF1",
        //横向两端排列形式数据
        radiolist7: [
          {
            name: "\u53EF\u7231",
            disabled: false
          },
          {
            name: "\u4E00\u822C",
            disabled: false
          },
          {
            name: "\u4E0D\u53EF\u7231",
            disabled: false
          }
        ],
        // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
        radiovalue7: "\u53EF\u7231"
      };
    },
    watch: {
      radiovalue1(newValue, oldValue) {
        formatAppLog("log", "at pages/componentsA/radio/radio.nvue:301", "v-model", newValue);
      }
    },
    methods: {
      groupChange(n) {
        formatAppLog("log", "at pages/componentsA/radio/radio.nvue:306", "groupChange", n);
      },
      radioChange(n) {
        formatAppLog("log", "at pages/componentsA/radio/radio.nvue:309", "radioChange", n);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_radio = (0, import_vue2.resolveComponent)("u-radio");
    const _component_u_radio_group = (0, import_vue2.resolveComponent)("u-radio-group");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u672C\u6848\u4F8B"),
          (0, import_vue2.createElementVNode)("u-text", { class: "u-block__title" }, "\u82F9\u679C\u3001\u9999\u8549\u548C\u6A59\u5B50\u54EA\u4E2A\u6700\u751C\uFF1F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__radio-item" }, [
              (0, import_vue2.createVNode)(_component_u_radio_group, {
                modelValue: $data.radiovalue1,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.radiovalue1 = $event),
                placement: "column",
                onChange: $options.groupChange
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($data.radiolist1, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_radio, {
                        customStyle: { marginBottom: "8px" },
                        key: index,
                        label: item.name,
                        name: item.name,
                        onChange: $options.radioChange
                      }, null, 8, ["label", "name", "onChange"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "onChange"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u5F62\u72B6"),
          (0, import_vue2.createElementVNode)("u-text", { class: "u-block__title" }, "\u738B\u8005\u8363\u8000\u8C01\u6700\u5E05\uFF1F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__radio-item" }, [
              (0, import_vue2.createVNode)(_component_u_radio_group, {
                modelValue: $data.radiovalue2,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.radiovalue2 = $event),
                placement: "column",
                shape: "square"
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($data.radiolist2, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_radio, {
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
              }, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u662F\u5426\u7981\u7528"),
          (0, import_vue2.createElementVNode)("u-text", { class: "u-block__title" }, "\u82F9\u679C\u3001\u9999\u8549\u548C\u83E0\u841D\u54EA\u4E2A\u6700\u751C\uFF1F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__radio-item" }, [
              (0, import_vue2.createVNode)(_component_u_radio_group, {
                modelValue: $data.radiovalue3,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.radiovalue3 = $event),
                placement: "column"
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($data.radiolist3, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_radio, {
                        customStyle: { marginBottom: "8px" },
                        key: index,
                        label: item.name,
                        name: item.name,
                        disabled: !index
                      }, null, 8, ["label", "name", "disabled"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7EB5\u5411\u6392\u5217"),
          (0, import_vue2.createElementVNode)("u-text", { class: "u-block__title" }, "\u72D9\u51FB\u67AA\u7528\u54EA\u4E2A\u500D\u955C\u6700\u597D\uFF1F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__radio-item" }, [
              (0, import_vue2.createVNode)(_component_u_radio_group, {
                modelValue: $data.radiovalue4,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.radiovalue4 = $event),
                placement: "column",
                labelDisabled: true
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($data.radiolist4, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_radio, {
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
              }, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u989C\u8272\uFF1F"),
          (0, import_vue2.createElementVNode)("u-text", { class: "u-block__title" }, "\u4F60\u6BD4\u8F83\u559C\u6B22\u4E0B\u9762\u54EA\u4E2A\u989C\u8272\uFF1F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__radio-item" }, [
              (0, import_vue2.createVNode)(_component_u_radio_group, {
                modelValue: $data.radiovalue5,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.radiovalue5 = $event),
                placement: "column",
                activeColor: "#19be6b"
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($data.radiolist5, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_radio, {
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
              }, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6A2A\u5411\u6392\u5217\u5F62\u5F0F\uFF1F"),
          (0, import_vue2.createElementVNode)("u-text", { class: "u-block__title" }, "\u738B\u8005\u8363\u8000\u54EA\u4E2A\u82F1\u96C4\u6700\u7F8E\uFF1F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__radio-item" }, [
              (0, import_vue2.createVNode)(_component_u_radio_group, {
                modelValue: $data.radiovalue6,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.radiovalue6 = $event),
                placement: "row"
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($data.radiolist6, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_radio, {
                        customStyle: { marginRight: "16px" },
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
              }, 8, ["modelValue"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6A2A\u5411\u4E24\u7AEF\u6392\u5217\u5F62\u5F0F\uFF1F"),
          (0, import_vue2.createElementVNode)("u-text", { class: "u-block__title" }, "\u4F60\u89C9\u5F97\u963F\u6728\u6728\u53EF\u7231\u5417\uFF1F"),
          (0, import_vue2.createElementVNode)("view", null, [
            (0, import_vue2.createElementVNode)("view", { class: "wu-page__radio-item" }, [
              (0, import_vue2.createVNode)(_component_u_radio_group, {
                modelValue: $data.radiovalue7,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.radiovalue7 = $event),
                borderBottom: true,
                placement: "column",
                iconPlacement: "right"
              }, {
                default: (0, import_vue2.withCtx)(() => [
                  ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                    import_vue2.Fragment,
                    null,
                    (0, import_vue2.renderList)($data.radiolist7, (item, index) => {
                      return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(_component_u_radio, {
                        customStyle: { marginBottom: "16px" },
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
              }, 8, ["modelValue"])
            ])
          ])
        ])
      ])
    ]);
  }
  var radio = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/radio/radio.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsA/radio/radio";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    radio.mpType = "page";
    const app = Vue.createPageApp(radio, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...radio.styles || []]));
    app.mount("#root");
  }
})();
