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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/alert/alert.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/alert/alert.js
  var _style_0 = { "u-alert-item": { "": { "flex": 1, "marginBottom": 10 } }, "wu-demo-block__content": { "": { "!flexDirection": "column", "alignItems": "stretch" } } };
  var _sfc_main = {
    data() {
      return {
        description: "",
        title: ""
      };
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_alert = (0, import_vue.resolveComponent)("u-alert");
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
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u5C71\u4E0D\u5728\u4E8E\u9AD8\uFF0C\u6709\u4E86\u795E\u4ED9\u5C31\u51FA\u540D",
                type: "warning"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u6C34\u4E0D\u5728\u6DF1\uFF0C\u6709\u9F99\u5219\u7075",
                type: "primary"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u65AF\u662F\u964B\u5BA4\uFF0C\u60DF\u543E\u5FB7\u99A8\u3002\u82D4\u75D5\u4E0A\u9636\u7EFF\uFF0C\u8349\u8272\u5165\u5E18\u9752",
                type: "error"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u8C08\u7B11\u6709\u9E3F\u5112\uFF0C\u5F80\u6765\u65E0\u767D\u4E01",
                type: "info"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u53EF\u4EE5\u8C03\u7D20\u7434\uFF0C\u9605\u91D1\u7ECF",
                type: "success"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6DF1\u6D45\u8272"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u65E0\u4E1D\u7AF9\u4E4B\u4E71\u8033\uFF0C\u65E0\u6848\u724D\u4E4B\u52B3\u5F62",
                type: "warning"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u5357\u9633\u8BF8\u845B\u5E90\uFF0C\u897F\u8700\u5B50\u4E91\u4EAD\u3002\u5B54\u5B50\u4E91\uFF1A\u4F55\u964B\u4E4B\u6709",
                type: "warning",
                effect: "dark"
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u663E\u793A\u56FE\u6807"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u516D\u738B\u6BD5\uFF0C\u56DB\u6D77\u4E00\uFF1B\u8700\u5C71\u5140\uFF0C\u963F\u623F\u51FA",
                type: "error",
                showIcon: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u8986\u538B\u4E09\u767E\u4F59\u91CC\uFF0C\u9694\u79BB\u5929\u65E5\u3002\u9A8A\u5C71\u5317\u6784\u800C\u897F\u6298\uFF0C\u76F4\u8D70\u54B8\u9633\uFF0C\u4E8C\u5DDD\u6EB6\u6EB6\uFF0C\u6D41\u5165\u5BAB\u5899",
                type: "error",
                effect: "dark",
                showIcon: ""
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u53EF\u5173\u95ED"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u4E94\u6B65\u4E00\u697C\uFF0C\u5341\u6B65\u4E00\u9601\uFF1B\u5ECA\u8170\u7F26\u56DE\uFF0C\u6A90\u7259\u9AD8\u5544\uFF1B\u5404\u62B1\u5730\u52BF\uFF0C\u94A9\u5FC3\u6597\u89D2",
                type: "success",
                showIcon: "",
                closable: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                description: "\u76D8\u76D8\u7109\uFF0C\u56F7\u56F7\u7109\uFF0C\u8702\u623F\u6C34\u6DA1\uFF0C\u77D7\u4E0D\u77E5\u5176\u51E0\u5343\u4E07\u843D",
                type: "success",
                effect: "dark",
                closable: "",
                showIcon: ""
              })
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5E26\u6807\u9898"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                title: "\u5983\u5AD4\u5AB5\u5AF1\uFF0C\u738B\u5B50\u7687\u5B59\uFF0C\u8F9E\u697C\u4E0B\u6BBF",
                description: "\u957F\u6865\u5367\u6CE2\uFF0C\u672A\u4E91\u4F55\u9F99\uFF1F\u590D\u9053\u884C\u7A7A\uFF0C\u4E0D\u9701\u4F55\u8679",
                type: "info",
                showIcon: "",
                closable: ""
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "u-alert-item" }, [
              (0, import_vue.createVNode)(_component_u_alert, {
                title: "\u8F87\u6765\u4E8E\u79E6\uFF0C\u671D\u6B4C\u591C\u5F26\uFF0C\u4E3A\u79E6\u5BAB\u4EBA\u3002\u660E\u661F\u8367\u8367\uFF0C\u5F00\u5986\u955C\u4E5F",
                description: "\u9AD8\u4F4E\u51A5\u8FF7\uFF0C\u4E0D\u77E5\u897F\u4E1C\u3002\u6B4C\u53F0\u6696\u54CD\uFF0C\u6625\u5149\u878D\u878D\uFF1B\u821E\u6BBF\u51B7\u8896\uFF0C\u98CE\u96E8\u51C4\u51C4\u3002\u4E00\u65E5\u4E4B\u5185\uFF0C\u4E00\u5BAB\u4E4B\u95F4\uFF0C\u800C\u6C14\u5019\u4E0D\u9F50",
                type: "info",
                effect: "dark",
                closable: "",
                showIcon: ""
              })
            ])
          ])
        ])
      ])
    ]);
  }
  var alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/alert/alert.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/alert/alert";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    alert.mpType = "page";
    const app = Vue.createPageApp(alert, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...alert.styles || []]));
    app.mount("#root");
  }
})();
