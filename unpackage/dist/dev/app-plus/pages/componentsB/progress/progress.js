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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/progress/progress.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/progress/progress.js
  var _style_0 = { "u-percentage-slot": { "": { "paddingTop": 1, "paddingRight": 5, "paddingBottom": 1, "paddingLeft": 5, "backgroundColor": "#f9ae3d", "color": "#ffffff", "borderRadius": 100, "fontSize": 10, "marginRight": -5 } }, "wu-demo-block__content": { "": { "!flexDirection": "column", "flexWrap": "nowrap", "alignItems": "stretch" } }, "button-group": { "": { "flexDirection": "row", "justifyContent": "center" } }, "button-group__circle": { "": { "width": 50, "height": 50, "backgroundColor": "#dbfbdb", "borderRadius": 100, "justifyContent": "center", "alignItems": "center", "marginTop": 30, "marginRight": 30, "marginBottom": 30, "marginLeft": 30 } }, "button-group__circle__text": { "": { "color": "#19be6b", "fontSize": 13 } } };
  var _sfc_main = {
    data() {
      return {
        androidNvue: false,
        percentage1: 30,
        percentage2: 40,
        percentage3: 50,
        percentage4: 60,
        percentage5: 70,
        percentage6: 50
      };
    },
    onLoad() {
      this.androidNvue = uni.$u.os() === "android";
      uni.$u.sleep(2500).then(() => {
        this.percentage1 = 120;
      });
    },
    methods: {
      computedWidth(type) {
        if (type === "plus") {
          this.percentage6 = uni.$u.range(0, 100, this.percentage6 + 10);
        } else {
          this.percentage6 = uni.$u.range(0, 100, this.percentage6 - 10);
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line_progress = (0, import_vue.resolveComponent)("u-line-progress");
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
            (0, import_vue.createVNode)(_component_u_line_progress, { percentage: $data.percentage1 }, null, 8, ["percentage"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u4E0D\u663E\u793A\u767E\u5206\u6BD4"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_line_progress, {
              showText: false,
              percentage: $data.percentage2
            }, null, 8, ["percentage"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u9AD8\u5EA6"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_line_progress, {
              height: "8",
              showText: false,
              percentage: $data.percentage3
            }, null, 8, ["percentage"])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_line_progress, {
              height: "8",
              showText: false,
              percentage: $data.percentage4,
              activeColor: "#3c9cff",
              inactiveColor: "#f3f4f6"
            }, null, 8, ["percentage"])
          ])
        ]),
        !$data.androidNvue ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
          key: 0,
          class: "wu-demo-block"
        }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u6837\u5F0F(\u4E0D\u652F\u6301\u5B89\u5353\u73AF\u5883\u7684nvue)"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_line_progress, {
              height: "8",
              showText: false,
              percentage: $data.percentage5,
              activeColor: "#3c9cff",
              inactiveColor: "#f3f4f6"
            }, {
              default: (0, import_vue.withCtx)(() => [
                (0, import_vue.createElementVNode)(
                  "u-text",
                  { class: "u-percentage-slot" },
                  (0, import_vue.toDisplayString)($data.percentage4) + "%",
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["percentage"])
          ])
        ])) : (0, import_vue.createCommentVNode)("v-if", true),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u624B\u52A8\u52A0\u51CF"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createVNode)(_component_u_line_progress, {
              height: "8",
              showText: false,
              percentage: $data.percentage6,
              activeColor: "#3c9cff",
              inactiveColor: "#f3f4f6"
            }, null, 8, ["percentage"]),
            (0, import_vue.createElementVNode)("view", { class: "button-group" }, [
              (0, import_vue.createElementVNode)("view", {
                class: "button-group__circle",
                hoverClass: "u-hover-class",
                onClick: _cache[0] || (_cache[0] = ($event) => $options.computedWidth("minus"))
              }, [
                (0, import_vue.createElementVNode)("u-text", { class: "button-group__circle__text" }, "\u51CF\u5C11")
              ]),
              (0, import_vue.createElementVNode)("view", {
                class: "button-group__circle",
                hoverClass: "u-hover-class",
                onClick: _cache[1] || (_cache[1] = ($event) => $options.computedWidth("plus"))
              }, [
                (0, import_vue.createElementVNode)("u-text", { class: "button-group__circle__text" }, "\u589E\u52A0")
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  var progress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/progress/progress.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/progress/progress";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    progress.mpType = "page";
    const app = Vue.createPageApp(progress, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...progress.styles || []]));
    app.mount("#root");
  }
})();
