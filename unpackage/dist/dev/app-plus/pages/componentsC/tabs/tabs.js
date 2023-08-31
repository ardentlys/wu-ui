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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/tabs/tabs.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/tabs/tabs.js
  var _style_0 = { "wu-page": { "": { "paddingBottom": 500 } } };
  var lineBg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";
  var _sfc_main = {
    mixins: [uni.$u.mixin],
    data() {
      return {
        lineBg,
        list1: [{
          name: "\u5173\u6CE8"
        }, {
          name: "\u63A8\u8350"
        }, {
          name: "\u7535\u5F71"
        }, {
          name: "\u79D1\u6280"
        }, {
          name: "\u97F3\u4E50"
        }, {
          name: "\u7F8E\u98DF"
        }, {
          name: "\u6587\u5316"
        }, {
          name: "\u8D22\u7ECF"
        }, {
          name: "\u624B\u5DE5"
        }],
        list2: [{
          name: "\u5173\u6CE8"
        }, {
          name: "\u63A8\u8350",
          badge: {
            isDot: true
          }
        }, {
          name: "\u7535\u5F71",
          badge: {
            value: 5
          }
        }, {
          name: "\u79D1\u6280"
        }, {
          name: "\u97F3\u4E50"
        }, {
          name: "\u7F8E\u98DF"
        }, {
          name: "\u6587\u5316"
        }, {
          name: "\u8D22\u7ECF"
        }, {
          name: "\u624B\u5DE5"
        }],
        list3: [{
          name: "\u5173\u6CE8"
        }, {
          name: "\u63A8\u8350"
        }, {
          name: "\u7535\u5F71",
          disabled: true
        }, {
          name: "\u79D1\u6280"
        }, {
          name: "\u97F3\u4E50"
        }, {
          name: "\u7F8E\u98DF"
        }, {
          name: "\u6587\u5316"
        }, {
          name: "\u8D22\u7ECF"
        }, {
          name: "\u624B\u5DE5"
        }],
        list4: [{
          name: "\u5173\u6CE8"
        }, {
          name: "\u63A8\u8350",
          badge: {
            isDot: true
          }
        }, {
          name: "\u7535\u5F71"
        }, {
          name: "\u79D1\u6280"
        }, {
          name: "\u97F3\u4E50"
        }, {
          name: "\u7F8E\u98DF"
        }, {
          name: "\u6587\u5316"
        }, {
          name: "\u8D22\u7ECF"
        }, {
          name: "\u624B\u5DE5"
        }],
        list6: [
          {
            name: "\u5173\u6CE8"
          },
          {
            name: "\u63A8\u8350"
          },
          {
            name: "\u7535\u5F71"
          },
          {
            name: "\u79D1\u6280"
          }
        ]
      };
    },
    onLoad() {
    },
    methods: {
      click(item) {
        formatAppLog("log", "at pages/componentsC/tabs/tabs.nvue:222", "item", item);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_tabs = (0, import_vue2.resolveComponent)("u-tabs");
    const _component_u_sticky = (0, import_vue2.resolveComponent)("u-sticky");
    const _component_u_gap = (0, import_vue2.resolveComponent)("u-gap");
    const _component_u_icon = (0, import_vue2.resolveComponent)("u-icon");
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
            (0, import_vue2.createVNode)(_component_u_tabs, {
              list: $data.list1,
              onClick: $options.click,
              current: 3
            }, null, 8, ["list", "onClick"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", {
          class: "wu-demo-block",
          style: { "margin-bottom": "0" }
        }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7C98\u6027\u5E03\u5C40")
        ]),
        (0, import_vue2.createVNode)(_component_u_sticky, { bgColor: "#fff" }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createVNode)(_component_u_tabs, { list: $data.list1 }, null, 8, ["list"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue2.createVNode)(_component_u_gap, {
          height: "23",
          bgColor: "#fff"
        }),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u663E\u793A\u5FBD\u6807"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_tabs, { list: $data.list2 }, null, 8, ["list"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7981\u6B62\u6EDA\u52A8"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_tabs, {
              list: $data.list6,
              scrollable: false
            }, null, 8, ["list"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u7981\u7528\u83DC\u5355"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_tabs, { list: $data.list3 }, null, 8, ["list"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u6837\u5F0F"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_tabs, {
              list: $data.list4,
              lineWidth: "30",
              lineColor: "#f56c6c",
              activeStyle: {
                color: "#303133",
                fontWeight: "bold",
                transform: "scale(1.05)"
              },
              inactiveStyle: {
                color: "#606266",
                transform: "scale(1)"
              },
              itemStyle: "padding-left: 15px; padding-right: 15px; height: 34px;"
            }, null, 8, ["list", "activeStyle", "inactiveStyle"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6ED1\u5757\u8BBE\u7F6E\u80CC\u666F\u56FE"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_tabs, {
              list: $data.list4,
              lineWidth: "20",
              lineHeight: "7",
              lineColor: `url(${$data.lineBg}) 100% 100%`,
              activeStyle: {
                color: "#303133",
                fontWeight: "bold",
                transform: "scale(1.05)"
              },
              inactiveStyle: {
                color: "#606266",
                transform: "scale(1)"
              },
              itemStyle: "padding-left: 15px; padding-right: 15px; height: 34px;"
            }, null, 8, ["list", "lineColor", "activeStyle", "inactiveStyle"])
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue2.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u53F3\u4FA7\u81EA\u5B9A\u4E49\u63D2\u69FD"),
          (0, import_vue2.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue2.createVNode)(_component_u_tabs, { list: $data.list1 }, {
              default: (0, import_vue2.withCtx)(() => [
                (0, import_vue2.createElementVNode)("view", {
                  slot: "right",
                  style: { "padding-left": "4px" },
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$u.toast("\u63D2\u69FD\u88AB\u70B9\u51FB"))
                }, [
                  (0, import_vue2.createVNode)(_component_u_icon, {
                    name: "list",
                    size: "21",
                    bold: ""
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["list"])
          ])
        ])
      ])
    ]);
  }
  var tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/tabs/tabs.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/tabs/tabs";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    tabs.mpType = "page";
    const app = Vue.createPageApp(tabs, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...tabs.styles || []]));
    app.mount("#root");
  }
})();
