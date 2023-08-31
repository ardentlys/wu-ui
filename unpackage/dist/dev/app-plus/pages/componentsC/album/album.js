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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/album/album.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/album/album.js
  var _style_0 = { "album": { "": { "flexDirection": "row", "alignItems": "flex-start" } }, "album__avatar": { "": { "backgroundColor": "#f3f4f6", "paddingTop": 5, "paddingRight": 5, "paddingBottom": 5, "paddingLeft": 5, "borderRadius": 3 } }, "album__content": { "": { "marginLeft": 10, "flex": 1 } } };
  var _sfc_main = {
    data() {
      return {
        albumWidth: 0,
        urls1: [{
          src2: "https://cdn.uviewui.com/uview/album/1.jpg"
        }],
        urls2: [
          "https://cdn.uviewui.com/uview/album/1.jpg",
          "https://cdn.uviewui.com/uview/album/2.jpg",
          "https://cdn.uviewui.com/uview/album/3.jpg",
          "https://cdn.uviewui.com/uview/album/4.jpg",
          "https://cdn.uviewui.com/uview/album/5.jpg",
          "https://cdn.uviewui.com/uview/album/6.jpg",
          "https://cdn.uviewui.com/uview/album/7.jpg",
          "https://cdn.uviewui.com/uview/album/8.jpg",
          "https://cdn.uviewui.com/uview/album/9.jpg",
          "https://cdn.uviewui.com/uview/album/10.jpg"
        ],
        urls3: [
          "https://cdn.uviewui.com/uview/album/5.jpg",
          "https://cdn.uviewui.com/uview/album/6.jpg",
          "https://cdn.uviewui.com/uview/album/7.jpg",
          "https://cdn.uviewui.com/uview/album/8.jpg"
        ],
        urls4: [
          "https://cdn.uviewui.com/uview/album/7.jpg",
          "https://cdn.uviewui.com/uview/album/8.jpg",
          "https://cdn.uviewui.com/uview/album/9.jpg",
          "https://cdn.uviewui.com/uview/album/10.jpg"
        ]
      };
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__text = (0, import_vue.resolveComponent)("u--text");
    const _component_u_album = (0, import_vue.resolveComponent)("u-album");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u4F7F\u7528"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "album" }, [
              (0, import_vue.createElementVNode)("view", { class: "album__avatar" }, [
                (0, import_vue.createElementVNode)("u-image", {
                  src: "/static/uview/common/logo.png",
                  mode: "",
                  style: { "width": "32px", "height": "32px" }
                })
              ]),
              (0, import_vue.createElementVNode)("view", { class: "album__content" }, [
                (0, import_vue.createVNode)(_component_u__text, {
                  text: "uview UI",
                  type: "primary",
                  bold: "",
                  size: "17"
                }),
                (0, import_vue.createVNode)(_component_u__text, {
                  margin: "0 0 8px 0",
                  text: "\u5168\u9762\u7684\u7EC4\u4EF6\u548C\u4FBF\u6377\u7684\u5DE5\u5177\u4F1A\u8BA9\u60A8\u4FE1\u624B\u62C8\u6765\uFF0C\u5982\u9C7C\u5F97\u6C34"
                }),
                (0, import_vue.createVNode)(_component_u_album, {
                  urls: $data.urls1,
                  keyName: "src2"
                }, null, 8, ["urls"])
              ])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u591A\u56FE\u6A21\u5F0F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "album" }, [
              (0, import_vue.createElementVNode)("view", { class: "album__avatar" }, [
                (0, import_vue.createElementVNode)("u-image", {
                  src: "/static/uview/common/logo.png",
                  mode: "",
                  style: { "width": "32px", "height": "32px" }
                })
              ]),
              (0, import_vue.createElementVNode)("view", { class: "album__content" }, [
                (0, import_vue.createVNode)(_component_u__text, {
                  text: "uview UI",
                  type: "primary",
                  bold: "",
                  size: "17"
                }),
                (0, import_vue.createVNode)(_component_u__text, {
                  margin: "0 0 8px 0",
                  text: "\u5168\u9762\u7684\u7EC4\u4EF6\u548C\u4FBF\u6377\u7684\u5DE5\u5177\u4F1A\u8BA9\u60A8\u4FE1\u624B\u62C8\u6765\uFF0C\u5982\u9C7C\u5F97\u6C34"
                }),
                (0, import_vue.createVNode)(_component_u_album, { urls: $data.urls2 }, null, 8, ["urls"])
              ])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u56FE\u6587\u5BF9\u9F50"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "album" }, [
              (0, import_vue.createElementVNode)("view", { class: "album__avatar" }, [
                (0, import_vue.createElementVNode)("u-image", {
                  src: "/static/uview/common/logo.png",
                  mode: "",
                  style: { "width": "32px", "height": "32px" }
                })
              ]),
              (0, import_vue.createElementVNode)("view", { class: "album__content" }, [
                (0, import_vue.createVNode)(_component_u__text, {
                  text: "uview UI",
                  type: "primary",
                  bold: "",
                  size: "17"
                }),
                (0, import_vue.createElementVNode)(
                  "view",
                  {
                    style: (0, import_vue.normalizeStyle)({
                      marginBottom: "8px",
                      width: $data.albumWidth + "px"
                    })
                  },
                  [
                    (0, import_vue.createVNode)(_component_u__text, {
                      text: "\u5168\u9762\u7684\u7EC4\u4EF6\u548C\u4FBF\u6377\u7684\u5DE5\u5177\u4F1A\u8BA9\u60A8\u4FE1\u624B\u62C8\u6765\uFF0C\u5982\u9C7C\u5F97\u6C34",
                      customStyle: {
                        width: $data.albumWidth + "px"
                      }
                    }, null, 8, ["customStyle"])
                  ],
                  4
                  /* STYLE */
                ),
                (0, import_vue.createVNode)(_component_u_album, {
                  urls: $data.urls2,
                  onAlbumWidth: _cache[0] || (_cache[0] = (width) => $data.albumWidth = width),
                  multipleSize: "68"
                }, null, 8, ["urls"])
              ])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u66F4\u6539\u88C1\u526A\u6A21\u5F0F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "album" }, [
              (0, import_vue.createElementVNode)("view", { class: "album__avatar" }, [
                (0, import_vue.createElementVNode)("u-image", {
                  src: "/static/uview/common/logo.png",
                  mode: "",
                  style: { "width": "32px", "height": "32px" }
                })
              ]),
              (0, import_vue.createElementVNode)("view", { class: "album__content" }, [
                (0, import_vue.createVNode)(_component_u__text, {
                  text: "uview UI",
                  type: "primary",
                  bold: "",
                  size: "17"
                }),
                (0, import_vue.createVNode)(_component_u__text, {
                  margin: "0 0 8px 0",
                  text: "\u5168\u9762\u7684\u7EC4\u4EF6\u548C\u4FBF\u6377\u7684\u5DE5\u5177\u4F1A\u8BA9\u60A8\u4FE1\u624B\u62C8\u6765\uFF0C\u5982\u9C7C\u5F97\u6C34"
                }),
                (0, import_vue.createVNode)(_component_u_album, {
                  urls: $data.urls3,
                  rowCount: "2",
                  maxCount: "4",
                  multipleMode: "scaleToFill"
                }, null, 8, ["urls"])
              ])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u66F4\u6539\u56FE\u7247\u5927\u5C0F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "album" }, [
              (0, import_vue.createElementVNode)("view", { class: "album__avatar" }, [
                (0, import_vue.createElementVNode)("u-image", {
                  src: "/static/uview/common/logo.png",
                  mode: "",
                  style: { "width": "32px", "height": "32px" }
                })
              ]),
              (0, import_vue.createElementVNode)("view", { class: "album__content" }, [
                (0, import_vue.createVNode)(_component_u__text, {
                  text: "uview UI",
                  type: "primary",
                  bold: "",
                  size: "17"
                }),
                (0, import_vue.createVNode)(_component_u__text, {
                  margin: "0 0 8px 0",
                  text: "\u5168\u9762\u7684\u7EC4\u4EF6\u548C\u4FBF\u6377\u7684\u5DE5\u5177\u4F1A\u8BA9\u60A8\u4FE1\u624B\u62C8\u6765\uFF0C\u5982\u9C7C\u5F97\u6C34"
                }),
                (0, import_vue.createVNode)(_component_u_album, {
                  urls: $data.urls4,
                  rowCount: "2",
                  maxCount: "4",
                  multipleSize: "50"
                }, null, 8, ["urls"])
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  var album = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/album/album.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/album/album";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    album.mpType = "page";
    const app = Vue.createPageApp(album, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...album.styles || []]));
    app.mount("#root");
  }
})();
