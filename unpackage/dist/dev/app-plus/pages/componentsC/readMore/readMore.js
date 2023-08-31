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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/readMore/readMore.js
  var import_vue2 = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsC/readMore/readMore.js
  var _sfc_main = {
    data() {
      return {
        content: `<p>\u6D54\u9633\u6C5F\u5934\u591C\u9001\u5BA2\uFF0C\u67AB\u53F6\u837B\u82B1\u79CB\u745F\u745F\u3002\u4E3B\u4EBA\u4E0B\u9A6C\u5BA2\u5728\u8239\uFF0C\u4E3E\u9152\u6B32\u996E\u65E0\u7BA1\u5F26\u3002\u9189\u4E0D\u6210\u6B22\u60E8\u5C06\u522B\uFF0C\u522B\u65F6\u832B\u832B\u6C5F\u6D78\u6708\u3002
					\u5FFD\u95FB\u6C34\u4E0A\u7435\u7436\u58F0\uFF0C\u4E3B\u4EBA\u5FD8\u5F52\u5BA2\u4E0D\u53D1\u3002\u5BFB\u58F0\u6697\u95EE\u5F39\u8005\u8C01\uFF0C\u7435\u7436\u58F0\u505C\u6B32\u8BED\u8FDF\u3002\u79FB\u8239\u76F8\u8FD1\u9080\u76F8\u89C1\uFF0C\u6DFB\u9152\u56DE\u706F\u91CD\u5F00\u5BB4\u3002\u5343\u547C\u4E07\u5524\u59CB\u51FA\u6765\uFF0C\u72B9\u62B1\u7435\u7436\u534A\u906E\u9762\u3002\u8F6C\u8F74\u62E8\u5F26\u4E09\u4E24\u58F0\uFF0C\u672A\u6210\u66F2\u8C03\u5148\u6709\u60C5\u3002\u5F26\u5F26\u63A9\u6291\u58F0\u58F0\u601D\uFF0C\u4F3C\u8BC9\u5E73\u751F\u4E0D\u5F97\u5FD7\u3002\u4F4E\u7709\u4FE1\u624B\u7EED\u7EED\u5F39\uFF0C\u8BF4\u5C3D\u5FC3\u4E2D\u65E0\u9650\u4E8B\u3002\u8F7B\u62E2\u6162\u637B\u62B9\u590D\u6311\uFF0C\u521D\u4E3A\u300A\u9713\u88F3\u300B\u540E\u300A\u516D\u5E7A\u300B\u3002\u5927\u5F26\u5608\u5608\u5982\u6025\u96E8\uFF0C\u5C0F\u5F26\u5207\u5207\u5982\u79C1\u8BED\u3002\u5608\u5608\u5207\u5207\u9519\u6742\u5F39\uFF0C\u5927\u73E0\u5C0F\u73E0\u843D\u7389\u76D8\u3002\u95F4\u5173\u83BA\u8BED\u82B1\u5E95\u6ED1\uFF0C\u5E7D\u54BD\u6CC9\u6D41\u51B0\u4E0B\u96BE\u3002\u51B0\u6CC9\u51B7\u6DA9\u5F26\u51DD\u7EDD\uFF0C\u51DD\u7EDD\u4E0D\u901A\u58F0\u6682\u6B47\u3002\u522B\u6709\u5E7D\u6101\u6697\u6068\u751F\uFF0C\u6B64\u65F6\u65E0\u58F0\u80DC\u6709\u58F0\u3002\u94F6\u74F6\u4E4D\u7834\u6C34\u6D46\u8FF8\uFF0C\u94C1\u9A91\u7A81\u51FA\u5200\u67AA\u9E23\u3002\u66F2\u7EC8\u6536\u62E8\u5F53\u5FC3\u753B\uFF0C\u56DB\u5F26\u4E00\u58F0\u5982\u88C2\u5E1B\u3002\u4E1C\u8239\u897F\u822B\u6084\u65E0\u8A00\uFF0C\u552F\u89C1\u6C5F\u5FC3\u79CB\u6708\u767D\u3002
					\u6C89\u541F\u653E\u62E8\u63D2\u5F26\u4E2D\uFF0C\u6574\u987F\u8863\u88F3\u8D77\u655B\u5BB9\u3002\u81EA\u8A00\u672C\u662F\u4EAC\u57CE\u5973\uFF0C\u5BB6\u5728\u867E\u87C6\u9675\u4E0B\u4F4F\u3002\u5341\u4E09\u5B66\u5F97\u7435\u7436\u6210\uFF0C\u540D\u5C5E\u6559\u574A\u7B2C\u4E00\u90E8\u3002\u66F2\u7F62\u66FE\u6559\u5584\u624D\u670D\uFF0C\u5986\u6210\u6BCF\u88AB\u79CB\u5A18\u5992\u3002\u4E94\u9675\u5E74\u5C11\u4E89\u7F20\u5934\uFF0C\u4E00\u66F2\u7EA2\u7EE1\u4E0D\u77E5\u6570\u3002\u94BF\u5934\u94F6\u7BE6\u51FB\u8282\u788E\uFF0C\u8840\u8272\u7F57\u88D9\u7FFB\u9152\u6C61\u3002\u4ECA\u5E74\u6B22\u7B11\u590D\u660E\u5E74\uFF0C\u79CB\u6708\u6625\u98CE\u7B49\u95F2\u5EA6\u3002\u5F1F\u8D70\u4ECE\u519B\u963F\u59E8\u6B7B\uFF0C\u66AE\u53BB\u671D\u6765\u989C\u8272\u6545\u3002\u95E8\u524D\u51B7\u843D\u978D\u9A6C\u7A00\uFF0C\u8001\u5927\u5AC1\u4F5C\u5546\u4EBA\u5987\u3002\u5546\u4EBA\u91CD\u5229\u8F7B\u522B\u79BB\uFF0C\u524D\u6708\u6D6E\u6881\u4E70\u8336\u53BB\u3002\u53BB\u6765\u6C5F\u53E3\u5B88\u7A7A\u8239\uFF0C\u7ED5\u8239\u6708\u660E\u6C5F\u6C34\u5BD2\u3002\u591C\u6DF1\u5FFD\u68A6\u5C11\u5E74\u4E8B\uFF0C\u68A6\u557C\u5986\u6CEA\u7EA2\u9611\u5E72\u3002
					\u6211\u95FB\u7435\u7436\u5DF2\u53F9\u606F\uFF0C\u53C8\u95FB\u6B64\u8BED\u91CD\u5527\u5527\u3002\u540C\u662F\u5929\u6DAF\u6CA6\u843D\u4EBA\uFF0C\u76F8\u9022\u4F55\u5FC5\u66FE\u76F8\u8BC6\uFF01\u6211\u4ECE\u53BB\u5E74\u8F9E\u5E1D\u4EAC\uFF0C\u8C2A\u5C45\u5367\u75C5\u6D54\u9633\u57CE\u3002\u6D54\u9633\u5730\u50FB\u65E0\u97F3\u4E50\uFF0C\u7EC8\u5C81\u4E0D\u95FB\u4E1D\u7AF9\u58F0\u3002\u4F4F\u8FD1\u6E53\u6C5F\u5730\u4F4E\u6E7F\uFF0C\u9EC4\u82A6\u82E6\u7AF9\u7ED5\u5B85\u751F\u3002\u5176\u95F4\u65E6\u66AE\u95FB\u4F55\u7269\uFF1F\u675C\u9E43\u557C\u8840\u733F\u54C0\u9E23\u3002\u6625\u6C5F\u82B1\u671D\u79CB\u6708\u591C\uFF0C\u5F80\u5F80\u53D6\u9152\u8FD8\u72EC\u503E\u3002\u5C82\u65E0\u5C71\u6B4C\u4E0E\u6751\u7B1B\uFF1F\u5455\u54D1\u5632\u54F3\u96BE\u4E3A\u542C\u3002\u4ECA\u591C\u95FB\u541B\u7435\u7436\u8BED\uFF0C\u5982\u542C\u4ED9\u4E50\u8033\u6682\u660E\u3002\u83AB\u8F9E\u66F4\u5750\u5F39\u4E00\u66F2\uFF0C\u4E3A\u541B\u7FFB\u4F5C\u300A\u7435\u7436\u884C\u300B\u3002\u611F\u6211\u6B64\u8A00\u826F\u4E45\u7ACB\uFF0C\u5374\u5750\u4FC3\u5F26\u5F26\u8F6C\u6025\u3002\u51C4\u51C4\u4E0D\u4F3C\u5411\u524D\u58F0\uFF0C\u6EE1\u5EA7\u91CD\u95FB\u7686\u63A9\u6CE3\u3002\u5EA7\u4E2D\u6CE3\u4E0B\u8C01\u6700\u591A\uFF1F\u6C5F\u5DDE\u53F8\u9A6C\u9752\u886B\u6E7F\u3002</p>`,
        showHeight: 200,
        tagStyle: {
          p: "color: #606266; line-height: 24px;"
        }
      };
    },
    methods: {
      load() {
        this.$refs.uReadMore.init();
      },
      open(name) {
        formatAppLog("log", "at pages/componentsC/readMore/readMore.nvue:38", "open", name);
      },
      close(name) {
        formatAppLog("log", "at pages/componentsC/readMore/readMore.nvue:41", "close", name);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_parse = (0, import_vue2.resolveComponent)("u-parse");
    const _component_u_read_more = (0, import_vue2.resolveComponent)("u-read-more");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue2.createVNode)(_component_u_read_more, {
          ref: "uReadMore",
          showHeight: $data.showHeight,
          toggle: "",
          onOpen: $options.open,
          onClose: $options.close
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createVNode)(_component_u_parse, {
              content: $data.content,
              onLoad: $options.load,
              "tag-style": $data.tagStyle
            }, null, 8, ["content", "onLoad", "tag-style"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["showHeight", "onOpen", "onClose"])
      ])
    ]);
  }
  var readMore = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/readMore/readMore.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsC/readMore/readMore";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    readMore.mpType = "page";
    const app = Vue.createPageApp(readMore, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...readMore.styles || []]));
    app.mount("#root");
  }
})();
