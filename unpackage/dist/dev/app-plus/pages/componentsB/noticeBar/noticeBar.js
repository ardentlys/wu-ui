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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/noticeBar/noticeBar.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/noticeBar/noticeBar.js
  var _style_0 = { "wu-demo-block__content": { "": { "flexDirection": "column" } } };
  var _sfc_main = {
    data() {
      return {
        text1: "uview UI\u4F17\u591A\u7EC4\u4EF6\u8986\u76D6\u5F00\u53D1\u8FC7\u7A0B\u7684\u5404\u4E2A\u9700\u6C42\uFF0C\u7EC4\u4EF6\u529F\u80FD\u4E30\u5BCC\uFF0C\u591A\u7AEF\u517C\u5BB9\u3002\u8BA9\u60A8\u5FEB\u901F\u96C6\u6210\uFF0C\u5F00\u7BB1\u5373\u7528",
        text2: "uview UI\u4F17\u591A\u7684\u8D34\u5FC3\u5C0F\u5DE5\u5177\uFF0C\u662F\u60A8\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EC\u4E4B\u5373\u6765\u7684\u5229\u5668\uFF0C\u8BA9\u60A8\u98DE\u9556\u5728\u624B\uFF0C\u767E\u6B65\u7A7F\u6768",
        text3: "uview UI\u6536\u96C6\u4F17\u591A\u7684\u5E38\u7528\u9875\u9762\u548C\u5E03\u5C40\uFF0C\u51CF\u5C11\u5F00\u53D1\u8005\u7684\u91CD\u590D\u5DE5\u4F5C\uFF0C\u8BA9\u60A8\u4E13\u6CE8\u903B\u8F91\uFF0C\u4E8B\u534A\u529F\u500D",
        text4: [
          "\u5BD2\u96E8\u8FDE\u6C5F\u591C\u5165\u5434",
          "\u5E73\u660E\u9001\u5BA2\u695A\u5C71\u5B64",
          "\u6D1B\u9633\u4EB2\u53CB\u5982\u76F8\u95EE",
          "\u4E00\u7247\u51B0\u5FC3\u5728\u7389\u58F6"
        ],
        text5: "\u6DB5\u76D6uniapp\u5404\u4E2A\u65B9\u9762\uFF0C\u7ED9\u5F00\u53D1\u8005\u65B9\u5411\u6307\u5BFC\u548C\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u8BA9\u60A8\u8305\u585E\u987F\u5F00\uFF0C\u4E00\u9A6C\u5E73\u5DDD"
      };
    },
    onLoad() {
    },
    methods: {
      click(e) {
        formatAppLog("log", "at pages/componentsB/noticeBar/noticeBar.nvue:94", e);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_notice_bar = (0, import_vue2.resolveComponent)("u-notice-bar");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u529F\u80FD"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_notice_bar, { text: $data.text1 }, null, 8, ["text"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u53EF\u5173\u95ED"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_notice_bar, {
              text: $data.text5,
              mode: "closable"
            }, null, 8, ["text"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u6A2A\u5411\u6EDA\u52A8\u901F\u5EA6"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_notice_bar, {
              text: $data.text2,
              speed: "250",
              mode: "closable"
            }, null, 8, ["text"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u53EF\u8DF3\u8F6C(\u70B9\u51FB\u53F3\u7BAD\u5934)"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_notice_bar, {
              text: $data.text3,
              mode: "link",
              url: "/pages/componentsB/tag/tag"
            }, null, 8, ["text"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6A2A\u5411\u6B65\u8FDB\u6EDA\u52A8"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_notice_bar, {
              text: $data.text4,
              step: true,
              onClick: $options.click
            }, null, 8, ["text", "onClick"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7EB5\u5411\u6EDA\u52A8"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_notice_bar, {
              text: $data.text4,
              direction: "column",
              onClick: $options.click
            }, null, 8, ["text", "onClick"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u6837\u5F0F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_notice_bar, {
              text: $data.text1,
              color: "#ffffff",
              bgColor: "#f56c6c"
            }, null, 8, ["text"])
          ])
        ])
      ])
    ]);
  }
  var noticeBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/noticeBar/noticeBar.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/noticeBar/noticeBar";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    noticeBar.mpType = "page";
    const app = Vue.createPageApp(noticeBar, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...noticeBar.styles || []]));
    app.mount("#root");
  }
})();
