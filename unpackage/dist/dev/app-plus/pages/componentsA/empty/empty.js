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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/empty/empty.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsA/empty/empty.js
  var _style_0 = { "wu-page": { "": { "paddingTop": "40rpx", "paddingRight": 0, "paddingBottom": "40rpx", "paddingLeft": 0 } }, "wu-page__top-box": { "": { "paddingLeft": "40rpx" } }, "empty-select": { "": { "marginTop": 10 } } };
  var _sfc_main = {
    data() {
      const baseUrl = "http://cdn.uviewui.com/uview/empty/";
      return {
        mode: "car",
        imgList: {
          car: baseUrl + "car.png",
          address: baseUrl + "address.png",
          comment: baseUrl + "comment.png",
          coupon: baseUrl + "coupon.png",
          data: baseUrl + "data.png",
          history: baseUrl + "history.png",
          list: baseUrl + "list.png",
          message: baseUrl + "message.png",
          news: baseUrl + "news.png",
          order: baseUrl + "order.png",
          page: baseUrl + "page.png",
          permission: baseUrl + "permission.png",
          search: baseUrl + "search.png",
          wifi: baseUrl + "wifi.png"
        },
        list: [
          {
            imgName: "car",
            title: "\u8D2D\u7269\u8F66\u4E3A\u7A7A(\u540C\u65F6\u4F20\u5165slot)",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/car.png"
          },
          {
            imgName: "data",
            title: "\u6570\u636E\u4E3A\u7A7A",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/data.png"
          },
          {
            imgName: "comment",
            title: "\u8BC4\u8BBA\u4E3A\u7A7A",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/comment.png"
          },
          {
            imgName: "coupon",
            title: "\u6CA1\u6709\u4F18\u60E0\u5238",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/coupon.png"
          },
          {
            imgName: "history",
            title: "\u65E0\u5386\u53F2\u8BB0\u5F55",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/history.png"
          },
          {
            imgName: "list",
            title: "\u5217\u8868\u4E3A\u7A7A",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/list.png"
          },
          {
            imgName: "message",
            title: "\u6D88\u606F\u5217\u8868\u4E3A\u7A7A",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/message.png"
          },
          {
            imgName: "news",
            title: "\u65E0\u65B0\u95FB\u5217\u8868",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/news.png"
          },
          {
            imgName: "order",
            title: "\u8BA2\u5355\u4E3A\u7A7A",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/order.png"
          },
          {
            imgName: "page",
            title: "\u9875\u9762\u4E0D\u5B58\u5728",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/page.png"
          },
          {
            imgName: "permission",
            title: "\u65E0\u6743\u9650",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/permission.png"
          },
          {
            imgName: "search",
            title: "\u6CA1\u6709\u641C\u7D22\u7ED3\u679C",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/search.png"
          },
          {
            imgName: "wifi",
            title: "\u6CA1\u6709WiFi",
            iconUrl: "https://cdn.uviewui.com/uview/demo/empty/wifi.png"
          }
        ]
      };
    },
    methods: {
      //点击改变图片
      openImg(imgName) {
        this.mode = imgName;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_button = (0, import_vue.resolveComponent)("u-button");
    const _component_u_empty = (0, import_vue.resolveComponent)("u-empty");
    const _component_u_cell = (0, import_vue.resolveComponent)("u-cell");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createElementVNode)("view", { class: "wu-page__top-box" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6F14\u793A\u6548\u679C")
        ]),
        (0, import_vue.createVNode)(_component_u_empty, {
          mode: $data.mode,
          icon: $data.imgList[$data.mode]
        }, {
          default: (0, import_vue.withCtx)(() => [
            $data.mode == "car" ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_button, {
              key: 0,
              size: "small",
              type: "primary",
              style: { marginTop: "10px" },
              text: "\u67E5\u770B\u66F4\u591A\u5546\u54C1"
            })) : (0, import_vue.createCommentVNode)("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["mode", "icon"]),
        (0, import_vue.createElementVNode)("div", { class: "empty-select" }, [
          ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            null,
            (0, import_vue.renderList)($data.list, (item, index) => {
              return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_u_cell, {
                titleStyle: { fontWeight: 500 },
                onClick: ($event) => $options.openImg(item.imgName),
                title: item.title,
                key: index,
                isLink: ""
              }, {
                icon: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-image", {
                    class: "wu-cell-icon",
                    src: item.iconUrl,
                    mode: "widthFix"
                  }, null, 8, ["src"])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["onClick", "title"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  var empty = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/empty/empty.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsA/empty/empty";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    empty.mpType = "page";
    const app = Vue.createPageApp(empty, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...empty.styles || []]));
    app.mount("#root");
  }
})();
