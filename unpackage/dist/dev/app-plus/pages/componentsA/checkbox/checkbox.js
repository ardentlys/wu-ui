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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/checkbox/checkbox.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/checkbox/checkbox.js
  var _style_0 = {};
  var _sfc_main = {
    data() {
      return {
        // 基本案列数据
        checkboxList1: [
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
          }
        ],
        // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
        checkboxValue1: ["\u82F9\u679C", "\u6A59\u5B50"],
        // 自定义形状数据
        checkboxList2: [
          {
            name: "\u897F\u6E38\u8BB0",
            disabled: false
          },
          {
            name: "\u7EA2\u697C\u68A6",
            disabled: false
          },
          {
            name: "\u4E09\u56FD\u6F14\u4E49",
            disabled: false
          },
          {
            name: "\u6C34\u6D52\u4F20",
            disabled: false
          }
        ],
        // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
        checkboxValue2: ["\u897F\u6E38\u8BB0", "\u7EA2\u697C\u68A6", "\u4E09\u56FD\u6F14\u4E49", "\u6C34\u6D52\u4F20"],
        // 是否禁用数据
        checkboxList3: [
          {
            name: "\u51AC\u74DC",
            disabled: false
          },
          {
            name: "\u897F\u74DC",
            disabled: false
          },
          {
            name: "\u9EC4\u74DC",
            disabled: false
          },
          {
            name: "\u50BB\u74DC",
            disabled: false
          }
        ],
        // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
        checkboxValue3: ["\u50BB\u74DC"],
        // 是否禁止点击提示语选中复选框数据
        checkboxList4: [
          {
            name: "\u9EC4\u5EAD\u575A",
            disabled: false
          },
          {
            name: "\u6B27\u9633\u4FEE",
            disabled: false
          },
          {
            name: "\u82CF\u5C0F\u5B9D",
            disabled: false
          },
          {
            name: "\u738B\u5B89\u77F3",
            disabled: false
          }
        ],
        // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
        checkboxValue4: ["\u9EC4\u5EAD\u575A", "\u6B27\u9633\u4FEE", "\u738B\u5B89\u77F3"],
        //自定义颜色数据
        checkboxList5: [
          {
            name: "\u7EA2\u8272",
            disabled: false
          },
          {
            name: "\u9EC4\u8272",
            disabled: false
          },
          {
            name: "\u7EFF\u8272",
            disabled: false
          },
          {
            name: "\u84DD\u8272",
            disabled: false
          }
        ],
        // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
        checkboxValue5: ["\u7EFF\u8272"],
        //横向排列形式数据
        checkboxList6: [
          {
            name: "\u5C0F\u9E1F",
            disabled: false
          },
          {
            name: "\u6E38\u8247",
            disabled: false
          },
          {
            name: "\u8F6E\u8239",
            disabled: false
          },
          {
            name: "\u98DE\u673A",
            disabled: false
          }
        ],
        // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
        checkboxValue6: ["\u6E38\u8247", "\u8F6E\u8239"],
        //横向两端排列形式
        checkboxList7: [
          {
            name: "\u6C7D\u8F66",
            disabled: false
          },
          {
            name: "\u84B8\u6C7D\u673A",
            disabled: false
          },
          {
            name: "\u732A\u8089",
            disabled: false
          },
          {
            name: "\u6284\u624B",
            disabled: false
          }
        ],
        // u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
        checkboxValue7: ["\u6C7D\u8F66", "\u84B8\u6C7D\u673A"]
      };
    },
    watch: {
      checkboxValue1(newValue, oldValue) {
      }
    },
    methods: {
      checkboxChange(n) {
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_checkbox = (0, import_vue.resolveComponent)("u-checkbox");
    const _component_u_checkbox_group = (0, import_vue.resolveComponent)("u-checkbox-group");
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
          (0, import_vue.createElementVNode)("u-text", { class: "u-block__title" }, "\u82F9\u679C\u3001\u9999\u8549\u548C\u6A59\u5B50\u54EA\u4E2A\u6700\u751C\uFF1F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__checkbox-item" }, [
              (0, import_vue.createVNode)(_component_u_checkbox_group, {
                modelValue: $data.checkboxValue1,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.checkboxValue1 = $event),
                placement: "column",
                onChange: $options.checkboxChange
              }, {
                default: (0, import_vue.withCtx)(() => [
                  ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    null,
                    (0, import_vue.renderList)($data.checkboxList1, (item, index) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_checkbox, {
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
              }, 8, ["modelValue", "onChange"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u5F62\u72B6"),
          (0, import_vue.createElementVNode)("u-text", { class: "u-block__title" }, "\u4E2D\u56FD\u56DB\u5927\u540D\u8457\u662F\uFF1F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__checkbox-item" }, [
              (0, import_vue.createVNode)(_component_u_checkbox_group, {
                modelValue: $data.checkboxValue2,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.checkboxValue2 = $event),
                placement: "column",
                onChange: $options.checkboxChange,
                shape: "square"
              }, {
                default: (0, import_vue.withCtx)(() => [
                  ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    null,
                    (0, import_vue.renderList)($data.checkboxList2, (item, index) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_checkbox, {
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
              }, 8, ["modelValue", "onChange"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u662F\u5426\u7981\u7528"),
          (0, import_vue.createElementVNode)("u-text", { class: "u-block__title" }, "\u4E0B\u9762\u4EC0\u4E48\u4E1C\u897F\u4E0D\u80FD\u5403\uFF1F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__checkbox-item" }, [
              (0, import_vue.createVNode)(_component_u_checkbox_group, {
                modelValue: $data.checkboxValue3,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.checkboxValue3 = $event),
                placement: "column",
                onChange: $options.checkboxChange
              }, {
                default: (0, import_vue.withCtx)(() => [
                  ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    null,
                    (0, import_vue.renderList)($data.checkboxList3, (item, index) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_checkbox, {
                        customStyle: { marginBottom: "8px" },
                        key: index,
                        label: item.name,
                        name: item.name,
                        disabled: index === 0
                      }, null, 8, ["label", "name", "disabled"]);
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
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u662F\u5426\u7981\u6B62\u70B9\u51FB\u63D0\u793A\u8BED\u9009\u4E2D\u590D\u9009\u6846"),
          (0, import_vue.createElementVNode)("u-text", { class: "u-block__title" }, "\u5317\u5B8B\u56DB\u5927\u5BB6\u662F\u8C01\uFF1F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__checkbox-item" }, [
              (0, import_vue.createVNode)(_component_u_checkbox_group, {
                modelValue: $data.checkboxValue4,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.checkboxValue4 = $event),
                placement: "column",
                onChange: $options.checkboxChange,
                labelDisabled: true
              }, {
                default: (0, import_vue.withCtx)(() => [
                  ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    null,
                    (0, import_vue.renderList)($data.checkboxList4, (item, index) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_checkbox, {
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
              }, 8, ["modelValue", "onChange"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
          (0, import_vue.createElementVNode)("u-text", { class: "u-block__title" }, "\u54EA\u4E2A\u989C\u8272\u6700\u597D\u770B\uFF1F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__checkbox-item" }, [
              (0, import_vue.createVNode)(_component_u_checkbox_group, {
                modelValue: $data.checkboxValue5,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.checkboxValue5 = $event),
                placement: "column",
                onChange: $options.checkboxChange,
                activeColor: "#19be6b"
              }, {
                default: (0, import_vue.withCtx)(() => [
                  ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    null,
                    (0, import_vue.renderList)($data.checkboxList5, (item, index) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_checkbox, {
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
              }, 8, ["modelValue", "onChange"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6A2A\u5411\u6392\u5217\u5F62\u5F0F"),
          (0, import_vue.createElementVNode)("u-text", { class: "u-block__title" }, "\u4EC0\u4E48\u4E1C\u897F\u4E0D\u80FD\u98DE\uFF1F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__checkbox-item" }, [
              (0, import_vue.createVNode)(_component_u_checkbox_group, {
                modelValue: $data.checkboxValue6,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.checkboxValue6 = $event),
                onChange: $options.checkboxChange
              }, {
                default: (0, import_vue.withCtx)(() => [
                  ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    null,
                    (0, import_vue.renderList)($data.checkboxList6, (item, index) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_checkbox, {
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
              }, 8, ["modelValue", "onChange"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6A2A\u5411\u4E24\u7AEF\u6392\u5217\u5F62\u5F0F"),
          (0, import_vue.createElementVNode)("u-text", { class: "u-block__title" }, "\u4EC0\u4E48\u4E1C\u897F\u4E0D\u80FD\u5403\uFF1F"),
          (0, import_vue.createElementVNode)("view", null, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__checkbox-item" }, [
              (0, import_vue.createVNode)(_component_u_checkbox_group, {
                modelValue: $data.checkboxValue7,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.checkboxValue7 = $event),
                onChange: $options.checkboxChange,
                borderBottom: true,
                placement: "column",
                iconPlacement: "right"
              }, {
                default: (0, import_vue.withCtx)(() => [
                  ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                    import_vue.Fragment,
                    null,
                    (0, import_vue.renderList)($data.checkboxList7, (item, index) => {
                      return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_checkbox, {
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
              }, 8, ["modelValue", "onChange"])
            ])
          ])
        ])
      ])
    ]);
  }
  var checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/checkbox/checkbox.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsA/checkbox/checkbox";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    checkbox.mpType = "page";
    const app = Vue.createPageApp(checkbox, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...checkbox.styles || []]));
    app.mount("#root");
  }
})();
