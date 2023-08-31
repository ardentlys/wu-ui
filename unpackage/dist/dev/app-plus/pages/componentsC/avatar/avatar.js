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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/avatar/avatar.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/avatar/avatar.js
  var _style_0 = { "wu-demo-block__content": { "": { "flexDirection": "row", "alignItems": "center" } }, "u-avatar-item": { "": { "marginRight": 30 } } };
  var _sfc_main = {
    data() {
      return {
        src1: "https://cdn.uviewui.com/uview/album/1.jpg",
        src2: "https://cdn.uviewui.com/uview/album/2.jpg",
        src3: "https://cdn.uviewui.com/uview/album/3.jpg",
        src4: "https://cdn.uviewui.com/uview/album/4.jpg",
        src5: "https://cdn.uviewui.com/uview/album/5.jpg",
        src6: "https://cdn.uviewui.com/uview/album/6.jpg",
        src7: "https://cdn.uviewui.com/uview/album/noExist.jpg",
        urls: [
          "https://cdn.uviewui.com/uview/album/1.jpg",
          "https://cdn.uviewui.com/uview/album/2.jpg",
          "https://cdn.uviewui.com/uview/album/3.jpg",
          "https://cdn.uviewui.com/uview/album/4.jpg",
          "https://cdn.uviewui.com/uview/album/7.jpg",
          "https://cdn.uviewui.com/uview/album/6.jpg",
          "https://cdn.uviewui.com/uview/album/5.jpg"
        ]
      };
    },
    onLoad() {
    },
    methods: {
      click(name) {
        formatAppLog("log", "at pages/componentsC/avatar/avatar.nvue:167", "click", name);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_avatar = (0, import_vue2.resolveComponent)("u-avatar");
    const _component_u_avatar_group = (0, import_vue2.resolveComponent)("u-avatar-group");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u6F14\u793A"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_avatar, { src: $data.src1 }, null, 8, ["src"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5934\u50CF\u5F62\u72B6"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                src: $data.src2,
                shape: "circle",
                onClick: $options.click
              }, null, 8, ["src", "onClick"])
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                src: $data.src3,
                shape: "square"
              }, null, 8, ["src"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5934\u50CF\u5C3A\u5BF8"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                src: $data.src4,
                size: "30"
              }, null, 8, ["src"])
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                src: $data.src5,
                size: "40"
              }, null, 8, ["src"])
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                src: $data.src6,
                size: "50"
              }, null, 8, ["src"])
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u56FE\u6807\u5934\u50CF"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                icon: "red-packet-fill",
                fontSize: "22"
              })
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                icon: "star-fill",
                fontSize: "22"
              })
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6587\u5B57\u5934\u50CF(\u81EA\u52A8\u80CC\u666F\u8272)"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                text: "U",
                fontSize: "20",
                randomBgColor: "",
                colorIndex: 0
              })
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                text: "\u9093",
                fontSize: "18",
                randomBgColor: ""
              })
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                text: "\u5F20",
                fontSize: "18",
                randomBgColor: ""
              })
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "u-avatar-item" }, [
              (0, import_vue2.createVNode)(_component_u_avatar, {
                text: "\u738B",
                fontSize: "18",
                randomBgColor: ""
              })
            ])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u56FE\u7247\u52A0\u8F7D\u5931\u8D25(\u663E\u793A\u9ED8\u8BA4\u5934\u50CF)"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_avatar, { src: $data.src7 }, null, 8, ["src"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5934\u50CF\u7EC4"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_avatar_group, {
              urls: $data.urls,
              size: "35",
              gap: "0.4"
            }, null, 8, ["urls"])
          ]),
          (0, import_vue2.createElementVNode)("view", {
            class: "wu-demo-block__content",
            style: { "margin-top": "20px" }
          }, [
            (0, import_vue2.createVNode)(_component_u_avatar_group, {
              urls: $data.urls,
              size: "35",
              gap: "0.6"
            }, null, 8, ["urls"])
          ])
        ])
      ])
    ]);
  }
  var avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/avatar/avatar.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/avatar/avatar";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    avatar.mpType = "page";
    const app = Vue.createPageApp(avatar, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...avatar.styles || []]));
    app.mount("#root");
  }
})();
