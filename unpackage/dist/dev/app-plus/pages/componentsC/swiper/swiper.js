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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/swiper/swiper.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/swiper/swiper.js
  var _style_0 = { "indicator": { "": { "flexDirection": "row", "justifyContent": "center" } }, "indicator__dot": { "": { "height": 6, "width": 6, "borderRadius": 100, "backgroundColor": "rgba(255,255,255,0.35)", "marginTop": 0, "marginRight": 5, "marginBottom": 0, "marginLeft": 5, "transitionProperty": "backgroundColor", "transitionDuration": 300 } }, "indicator__dot--active": { "": { "backgroundColor": "#ffffff" } }, "indicator-num": { "": { "paddingTop": 2, "paddingRight": 0, "paddingBottom": 2, "paddingLeft": 0, "backgroundColor": "rgba(0,0,0,0.35)", "borderRadius": 100, "width": 35, "flexDirection": "row", "justifyContent": "center" } }, "indicator-num__text": { "": { "color": "#FFFFFF", "fontSize": 12 } }, "@TRANSITION": { "indicator__dot": { "property": "backgroundColor", "duration": 300 } } };
  var _sfc_main = {
    data() {
      return {
        current: 0,
        currentNum: 0,
        list: [
          {
            // image: 'https://cdn.uviewui.com/uview/resources/video.mp4',
            image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
            title: "\u6628\u591C\u661F\u8FB0\u6628\u591C\u98CE\uFF0C\u753B\u697C\u897F\u7554\u6842\u5802\u4E1C",
            poster: "https://cdn.uviewui.com/uview/swiper/swiper1.png"
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
            title: "\u8EAB\u65E0\u5F69\u51E4\u53CC\u98DE\u7FFC\uFF0C\u5FC3\u6709\u7075\u7280\u4E00\u70B9\u901A"
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
            title: "\u8C01\u5FF5\u897F\u98CE\u72EC\u81EA\u51C9\uFF0C\u8427\u8427\u9EC4\u53F6\u95ED\u758F\u7A97\uFF0C\u6C89\u601D\u5F80\u4E8B\u7ACB\u6B8B\u9633"
          }
        ],
        list1: [
          "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          "https://cdn.uviewui.com/uview/swiper/swiper3.png"
        ],
        list2: [
          {
            image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
            title: "\u6628\u591C\u661F\u8FB0\u6628\u591C\u98CE\uFF0C\u753B\u697C\u897F\u7554\u6842\u5802\u4E1C",
            type: "image"
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
            title: "\u8EAB\u65E0\u5F69\u51E4\u53CC\u98DE\u7FFC\uFF0C\u5FC3\u6709\u7075\u7280\u4E00\u70B9\u901A"
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
            title: "\u8C01\u5FF5\u897F\u98CE\u72EC\u81EA\u51C9\uFF0C\u8427\u8427\u9EC4\u53F6\u95ED\u758F\u7A97\uFF0C\u6C89\u601D\u5F80\u4E8B\u7ACB\u6B8B\u9633"
          }
        ],
        list3: [
          "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          "https://cdn.uviewui.com/uview/swiper/swiper1.png"
        ],
        list4: [
          {
            url: "https://cdn.uviewui.com/uview/resources/video.mp4",
            title: "\u6628\u591C\u661F\u8FB0\u6628\u591C\u98CE\uFF0C\u753B\u697C\u897F\u7554\u6842\u5802\u4E1C",
            poster: "https://cdn.uviewui.com/uview/swiper/swiper1.png"
          },
          {
            url: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
            title: "\u8EAB\u65E0\u5F69\u51E4\u53CC\u98DE\u7FFC\uFF0C\u5FC3\u6709\u7075\u7280\u4E00\u70B9\u901A"
          },
          {
            url: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
            title: "\u8C01\u5FF5\u897F\u98CE\u72EC\u81EA\u51C9\uFF0C\u8427\u8427\u9EC4\u53F6\u95ED\u758F\u7A97\uFF0C\u6C89\u601D\u5F80\u4E8B\u7ACB\u6B8B\u9633"
          }
        ],
        list5: [
          "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          "https://cdn.uviewui.com/uview/swiper/swiper1.png"
        ],
        list6: [
          "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          "https://cdn.uviewui.com/uview/swiper/swiper1.png"
        ]
      };
    },
    methods: {
      change(e) {
      },
      click(e) {
        formatAppLog("log", "at pages/componentsC/swiper/swiper.nvue:176", "click", e);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_swiper = (0, import_vue2.resolveComponent)("u-swiper");
    const _component_u_gap = (0, import_vue2.resolveComponent)("u-gap");
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
          (0, import_vue2.createVNode)(_component_u_swiper, {
            list: $data.list1,
            onChange: $options.change,
            onClick: $options.click
          }, null, 8, ["list", "onChange", "onClick"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5E26\u6807\u9898"),
          (0, import_vue2.createVNode)(_component_u_swiper, {
            list: $data.list2,
            keyName: "image",
            showTitle: "",
            autoplay: false,
            circular: ""
          }, null, 8, ["list"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5E26\u6307\u793A\u5668"),
          (0, import_vue2.createVNode)(_component_u_swiper, {
            list: $data.list3,
            indicator: "",
            indicatorMode: "line",
            circular: ""
          }, null, 8, ["list"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u52A0\u8F7D\u4E2D"),
          (0, import_vue2.createVNode)(_component_u_swiper, {
            list: $data.list3,
            loading: ""
          }, null, 8, ["list"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5D4C\u5165\u89C6\u9891"),
          (0, import_vue2.createVNode)(_component_u_swiper, {
            list: $data.list4,
            keyName: "url",
            autoplay: false
          }, null, 8, ["list"])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u6307\u793A\u5668"),
          (0, import_vue2.createVNode)(_component_u_swiper, {
            list: $data.list5,
            onChange: _cache[0] || (_cache[0] = (e) => $data.current = e.current),
            autoplay: false
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createElementVNode)("view", {
                slot: "indicator",
                class: "indicator"
              }, [
                ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
                  import_vue2.Fragment,
                  null,
                  (0, import_vue2.renderList)($data.list5, (item, index) => {
                    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
                      "view",
                      {
                        class: (0, import_vue2.normalizeClass)(["indicator__dot", [index === $data.current && "indicator__dot--active"]]),
                        key: index
                      },
                      null,
                      2
                      /* CLASS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["list"]),
          (0, import_vue2.createVNode)(_component_u_gap, {
            bgColor: "transparent",
            height: "15"
          }),
          (0, import_vue2.createVNode)(_component_u_swiper, {
            list: $data.list6,
            onChange: _cache[1] || (_cache[1] = (e) => $data.currentNum = e.current),
            autoplay: false,
            indicatorStyle: "right: 20px"
          }, {
            default: (0, import_vue2.withCtx)(() => [
              (0, import_vue2.createElementVNode)("view", {
                slot: "indicator",
                class: "indicator-num"
              }, [
                (0, import_vue2.createElementVNode)(
                  "u-text",
                  { class: "indicator-num__text" },
                  (0, import_vue2.toDisplayString)($data.currentNum + 1) + "/" + (0, import_vue2.toDisplayString)($data.list6.length),
                  1
                  /* TEXT */
                )
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["list"])
        ])
      ])
    ]);
  }
  var swiper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/swiper/swiper.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/swiper/swiper";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    swiper.mpType = "page";
    const app = Vue.createPageApp(swiper, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...swiper.styles || []]));
    app.mount("#root");
  }
})();
