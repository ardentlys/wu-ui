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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/collapse/collapse.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/collapse/collapse.js
  var _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-page__item__title": { "": { "color": "#909193", "backgroundColor": "#f3f4f6", "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "fontSize": 15 } }, "wu-page__item__title__slot-title": { "": { "color": "#3c9cff", "fontSize": 14 } }, "u-collapse-content": { "": { "color": "#909193", "fontSize": 14 } } };
  var _sfc_main = {
    data() {
      return {};
    },
    methods: {
      open(e) {
      },
      close(e) {
      },
      change(e) {
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_collapse_item = (0, import_vue.resolveComponent)("u-collapse-item");
    const _component_u_collapse = (0, import_vue.resolveComponent)("u-collapse");
    const _component_u_icon = (0, import_vue.resolveComponent)("u-icon");
    const _component_u_gap = (0, import_vue.resolveComponent)("u-gap");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u57FA\u7840\u529F\u80FD"),
          (0, import_vue.createVNode)(_component_u_collapse, {
            onChange: $options.change,
            onClose: $options.close,
            onOpen: $options.open
          }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createVNode)(_component_u_collapse_item, {
                title: "\u6587\u6863\u6307\u5357",
                name: "Docs guide"
              }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u6DB5\u76D6uniapp\u5404\u4E2A\u65B9\u9762\uFF0C\u7ED9\u5F00\u53D1\u8005\u65B9\u5411\u6307\u5BFC\u548C\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u8BA9\u60A8\u8305\u585E\u987F\u5F00\uFF0C\u4E00\u9A6C\u5E73\u5DDD")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_u_collapse_item, {
                title: "\u7EC4\u4EF6\u5168\u9762",
                name: "Variety components"
              }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7EC4\u4EF6\u8986\u76D6\u5F00\u53D1\u8FC7\u7A0B\u7684\u5404\u4E2A\u9700\u6C42\uFF0C\u7EC4\u4EF6\u529F\u80FD\u4E30\u5BCC\uFF0C\u591A\u7AEF\u517C\u5BB9\u3002\u8BA9\u60A8\u5FEB\u901F\u96C6\u6210\uFF0C\u5F00\u7BB1\u5373\u7528")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_u_collapse_item, {
                title: "\u4F17\u591A\u5229\u5668",
                name: "Numerous tools"
              }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7684\u8D34\u5FC3\u5C0F\u5DE5\u5177\uFF0C\u662F\u60A8\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EC\u4E4B\u5373\u6765\u7684\u5229\u5668\uFF0C\u8BA9\u60A8\u98DE\u9556\u5728\u624B\uFF0C\u767E\u6B65\u7A7F\u6768")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onChange", "onClose", "onOpen"])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u5C55\u5F00\u548C\u7981\u7528"),
          (0, import_vue.createVNode)(_component_u_collapse, { value: ["2"] }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createVNode)(_component_u_collapse_item, { title: "\u6587\u6863\u6307\u5357" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u6DB5\u76D6uniapp\u5404\u4E2A\u65B9\u9762\uFF0C\u7ED9\u5F00\u53D1\u8005\u65B9\u5411\u6307\u5BFC\u548C\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u8BA9\u60A8\u8305\u585E\u987F\u5F00\uFF0C\u4E00\u9A6C\u5E73\u5DDD")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_u_collapse_item, {
                disabled: "",
                title: "\u7EC4\u4EF6\u5168\u9762"
              }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7EC4\u4EF6\u8986\u76D6\u5F00\u53D1\u8FC7\u7A0B\u7684\u5404\u4E2A\u9700\u6C42\uFF0C\u7EC4\u4EF6\u529F\u80FD\u4E30\u5BCC\uFF0C\u591A\u7AEF\u517C\u5BB9\u3002\u8BA9\u60A8\u5FEB\u901F\u96C6\u6210\uFF0C\u5F00\u7BB1\u5373\u7528")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_u_collapse_item, {
                name: "2",
                title: "\u4F17\u591A\u5229\u5668"
              }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7684\u8D34\u5FC3\u5C0F\u5DE5\u5177\uFF0C\u662F\u60A8\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EC\u4E4B\u5373\u6765\u7684\u5229\u5668\uFF0C\u8BA9\u60A8\u98DE\u9556\u5728\u624B\uFF0C\u767E\u6B65\u7A7F\u6768")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u624B\u98CE\u7434\u6A21\u5F0F"),
          (0, import_vue.createVNode)(_component_u_collapse, { accordion: "" }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createVNode)(_component_u_collapse_item, { title: "\u6587\u6863\u6307\u5357" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u6DB5\u76D6uniapp\u5404\u4E2A\u65B9\u9762\uFF0C\u7ED9\u5F00\u53D1\u8005\u65B9\u5411\u6307\u5BFC\u548C\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u8BA9\u60A8\u8305\u585E\u987F\u5F00\uFF0C\u4E00\u9A6C\u5E73\u5DDD")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_u_collapse_item, { title: "\u7EC4\u4EF6\u5168\u9762" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7EC4\u4EF6\u8986\u76D6\u5F00\u53D1\u8FC7\u7A0B\u7684\u5404\u4E2A\u9700\u6C42\uFF0C\u7EC4\u4EF6\u529F\u80FD\u4E30\u5BCC\uFF0C\u591A\u7AEF\u517C\u5BB9\u3002\u8BA9\u60A8\u5FEB\u901F\u96C6\u6210\uFF0C\u5F00\u7BB1\u5373\u7528")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_u_collapse_item, { title: "\u4F17\u591A\u5229\u5668" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7684\u8D34\u5FC3\u5C0F\u5DE5\u5177\uFF0C\u662F\u60A8\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EC\u4E4B\u5373\u6765\u7684\u5229\u5668\uFF0C\u8BA9\u60A8\u98DE\u9556\u5728\u624B\uFF0C\u767E\u6B65\u7A7F\u6768")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u79FB\u9664\u4E0B\u5212\u7EBF"),
          (0, import_vue.createVNode)(_component_u_collapse, {
            accordion: "",
            border: false
          }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createVNode)(_component_u_collapse_item, { title: "\u6587\u6863\u6307\u5357" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u6DB5\u76D6uniapp\u5404\u4E2A\u65B9\u9762\uFF0C\u7ED9\u5F00\u53D1\u8005\u65B9\u5411\u6307\u5BFC\u548C\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u8BA9\u60A8\u8305\u585E\u987F\u5F00\uFF0C\u4E00\u9A6C\u5E73\u5DDD")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_u_collapse_item, { title: "\u7EC4\u4EF6\u5168\u9762" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7EC4\u4EF6\u8986\u76D6\u5F00\u53D1\u8FC7\u7A0B\u7684\u5404\u4E2A\u9700\u6C42\uFF0C\u7EC4\u4EF6\u529F\u80FD\u4E30\u5BCC\uFF0C\u591A\u7AEF\u517C\u5BB9\u3002\u8BA9\u60A8\u5FEB\u901F\u96C6\u6210\uFF0C\u5F00\u7BB1\u5373\u7528")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_u_collapse_item, { title: "\u4F17\u591A\u5229\u5668" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7684\u8D34\u5FC3\u5C0F\u5DE5\u5177\uFF0C\u662F\u60A8\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EC\u4E4B\u5373\u6765\u7684\u5229\u5668\uFF0C\u8BA9\u60A8\u98DE\u9556\u5728\u624B\uFF0C\u767E\u6B65\u7A7F\u6768")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        (0, import_vue.createCommentVNode)(' \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301\uFF0C\u56E0\u4E3A\u5FAE\u4FE1\u4E2D\u4E0D\u652F\u6301 <slot name="title" slot="title" />\u7684\u5199\u6CD5 '),
        (0, import_vue.createElementVNode)("view", { class: "wu-page__item" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-page__item__title" }, "\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u5185\u5BB9"),
          (0, import_vue.createVNode)(_component_u_collapse, { accordion: "" }, {
            default: (0, import_vue.withCtx)(() => [
              (0, import_vue.createVNode)(_component_u_collapse_item, null, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", {
                    slot: "title",
                    class: "wu-page__item__title__slot-title"
                  }, "\u6587\u6863\u6307\u5357"),
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u6DB5\u76D6uniapp\u5404\u4E2A\u65B9\u9762\uFF0C\u7ED9\u5F00\u53D1\u8005\u65B9\u5411\u6307\u5BFC\u548C\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u8BA9\u60A8\u8305\u585E\u987F\u5F00\uFF0C\u4E00\u9A6C\u5E73\u5DDD")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createCommentVNode)(' <u-collapse-item\r\n					:isLink="false"\r\n				>\r\n					<text slot="title" class="wu-page__item__title__slot-title">\u6587\u6863\u6307\u5357</text>\r\n					<text class="u-collapse-content">\u6DB5\u76D6uniapp\u5404\u4E2A\u65B9\u9762\uFF0C\u7ED9\u5F00\u53D1\u8005\u65B9\u5411\u6307\u5BFC\u548C\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u8BA9\u60A8\u8305\u585E\u987F\u5F00\uFF0C\u4E00\u9A6C\u5E73\u5DDD</text>\r\n				</u-collapse-item> '),
              (0, import_vue.createVNode)(_component_u_collapse_item, { title: "\u7EC4\u4EF6\u5168\u9762" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createVNode)(_component_u_icon, {
                    name: "tags-fill",
                    size: "20",
                    slot: "icon"
                  }),
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7EC4\u4EF6\u8986\u76D6\u5F00\u53D1\u8FC7\u7A0B\u7684\u5404\u4E2A\u9700\u6C42\uFF0C\u7EC4\u4EF6\u529F\u80FD\u4E30\u5BCC\uFF0C\u591A\u7AEF\u517C\u5BB9\u3002\u8BA9\u60A8\u5FEB\u901F\u96C6\u6210\uFF0C\u5F00\u7BB1\u5373\u7528")
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue.createVNode)(_component_u_collapse_item, { title: "\u4F17\u591A\u5229\u5668" }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-text", {
                    slot: "value",
                    class: "wu-page__item__title__slot-title"
                  }, "\u81EA\u5B9A\u4E49\u5185\u5BB9"),
                  (0, import_vue.createElementVNode)("u-text", { class: "u-collapse-content" }, "\u4F17\u591A\u7684\u8D34\u5FC3\u5C0F\u5DE5\u5177\uFF0C\u662F\u60A8\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EC\u4E4B\u5373\u6765\u7684\u5229\u5668\uFF0C\u8BA9\u60A8\u98DE\u9556\u5728\u624B\uFF0C\u767E\u6B65\u7A7F\u6768")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        (0, import_vue.createVNode)(_component_u_gap, { height: "50" })
      ])
    ]);
  }
  var collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/collapse/collapse.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/collapse/collapse";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    collapse.mpType = "page";
    const app = Vue.createPageApp(collapse, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...collapse.styles || []]));
    app.mount("#root");
  }
})();
