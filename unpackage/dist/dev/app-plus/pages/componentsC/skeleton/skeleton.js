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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/skeleton/skeleton.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/skeleton/skeleton.js
  var _style_0 = { "u-skeleton-slot": { "": { "flexDirection": "row", "alignItems": "flex-start" } }, "u-skeleton-slot__image": { "": { "width": 40, "height": 40, "borderRadius": 100 } }, "u-skeleton-slot__content": { "": { "marginLeft": 10, "flex": 1 } } };
  var _sfc_main = {
    data() {
      return {
        switch1: true,
        switch2: false
      };
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_skeleton = (0, import_vue.resolveComponent)("u-skeleton");
    const _component_u_switch = (0, import_vue.resolveComponent)("u-switch");
    const _component_u_gap = (0, import_vue.resolveComponent)("u-gap");
    const _component_u__text = (0, import_vue.resolveComponent)("u--text");
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
            (0, import_vue.createVNode)(_component_u_skeleton, {
              rows: "3",
              title: "",
              loading: ""
            })
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u6BB5\u843D\u884C\u6570"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_skeleton, {
              rows: "2",
              title: "",
              loading: ""
            })
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u8BBE\u7F6E\u6BB5\u843D\u5BBD\u5EA6"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_skeleton, {
              rows: "2",
              title: "",
              rowsWidth: ["100%", "35%"],
              loading: ""
            })
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u8BBE\u7F6E\u6BB5\u843D\u9AD8\u5EA6"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_skeleton, {
              rows: "3",
              title: "",
              rowsWidth: ["100%", "100%", "100%"],
              rowsHeight: ["18px", "18px", "80px"],
              loading: ""
            })
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u662F\u5426\u5F00\u542F\u52A8\u753B"),
          (0, import_vue.createVNode)(_component_u_switch, {
            modelValue: $data.switch1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.switch1 = $event),
            space: "2",
            inactiveColor: "#e6e6e6"
          }, null, 8, ["modelValue"]),
          (0, import_vue.createVNode)(_component_u_gap, {
            height: "15",
            bgColor: "#fff"
          }),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_skeleton, {
              animate: $data.switch1,
              rows: "3",
              title: "",
              loading: ""
            }, null, 8, ["animate"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5C55\u793A\u5934\u50CF"),
          (0, import_vue.createVNode)(_component_u_gap, {
            height: "15",
            bgColor: "#fff"
          }),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_skeleton, {
              animate: $data.switch1,
              rows: "3",
              title: "",
              loading: "",
              avatar: ""
            }, null, 8, ["animate"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u5207\u6362\u72B6\u6001"),
          (0, import_vue.createVNode)(_component_u_switch, {
            modelValue: $data.switch2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.switch2 = $event),
            space: "2",
            inactiveColor: "#e6e6e6"
          }, null, 8, ["modelValue"]),
          (0, import_vue.createVNode)(_component_u_gap, {
            height: "15",
            bgColor: "#fff"
          }),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_skeleton, {
              rows: "2",
              title: "",
              loading: $data.switch2,
              avatar: "",
              rowsHeight: "14"
            }, {
              default: (0, import_vue.withCtx)(() => [
                (0, import_vue.createCommentVNode)(" \u9700\u8981\u5728\u5916\u90E8\u591A\u5D4C\u5957\u4E00\u5C42\u5360\u4F4Dview\uFF0C\u5426\u5219\u5728nvue\u4E0B\u4F1A\u5BFC\u81F4\u6837\u5F0F\u5931\u6548 "),
                (0, import_vue.createElementVNode)("view", null, [
                  (0, import_vue.createElementVNode)("view", { class: "u-skeleton-slot" }, [
                    (0, import_vue.createElementVNode)("u-image", {
                      src: "/static/uview/common/logo.png",
                      class: "u-skeleton-slot__image"
                    }),
                    (0, import_vue.createElementVNode)("view", { class: "u-skeleton-slot__content" }, [
                      (0, import_vue.createVNode)(_component_u__text, {
                        text: "\u5229\u5251\u51FA\u9798,\u4E00\u7EDF\u6C5F\u6E56",
                        type: "main",
                        size: "16"
                      }),
                      (0, import_vue.createVNode)(_component_u__text, {
                        type: "tips",
                        size: "14",
                        customStyle: "margin-top: 5px",
                        text: "\u4F17\u591A\u7EC4\u4EF6\u8986\u76D6\u5F00\u53D1\u8FC7\u7A0B\u7684\u5404\u4E2A\u9700\u6C42\uFF0C\u7EC4\u4EF6\u529F\u80FD\u4E30\u5BCC\uFF0C\u591A\u7AEF\u517C\u5BB9\u3002\u8BA9\u60A8\u5FEB\u901F\u96C6\u6210\uFF0C\u5F00\u7BB1\u5373\u7528"
                      })
                    ])
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ]),
          (0, import_vue.createVNode)(_component_u_gap, {
            height: "50",
            bgColor: "transparent"
          })
        ])
      ])
    ]);
  }
  var skeleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/skeleton/skeleton.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/skeleton/skeleton";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    skeleton.mpType = "page";
    const app = Vue.createPageApp(skeleton, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...skeleton.styles || []]));
    app.mount("#root");
  }
})();
