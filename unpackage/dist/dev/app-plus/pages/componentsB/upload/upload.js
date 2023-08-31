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
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/upload/upload.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/upload/upload.js
  var _style_0 = { "wu-page__upload-item": { "": { "marginTop": 5 } } };
  var _sfc_main = {
    data() {
      return {
        fileList1: [],
        fileList2: [],
        fileList3: [{
          url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
        }],
        fileList4: [
          {
            url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
          },
          {
            url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
          }
        ],
        fileList5: [],
        fileList6: [],
        fileList7: []
      };
    },
    onLoad() {
    },
    methods: {
      // 删除图片
      deletePic(event) {
        this[`fileList${event.name}`].splice(event.index, 1);
      },
      // 新增图片
      afterRead(event) {
        return __async(this, null, function* () {
          let lists = [].concat(event.file);
          let fileListLen = this[`fileList${event.name}`].length;
          lists.map((item) => {
            this[`fileList${event.name}`].push(__spreadProps(__spreadValues({}, item), {
              status: "uploading",
              message: "\u4E0A\u4F20\u4E2D"
            }));
          });
          for (let i = 0; i < lists.length; i++) {
            const result = yield this.uploadFilePromise(lists[i].url);
            let item = this[`fileList${event.name}`][fileListLen];
            this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: "",
              url: result
            }));
            fileListLen++;
          }
        });
      },
      uploadFilePromise(url) {
        return new Promise((resolve, reject) => {
          uni.uploadFile({
            url: "http://www.example.com/upload",
            // 仅为示例，非真实的接口地址
            filePath: url,
            name: "file",
            formData: {
              user: "test"
            },
            success: (res) => {
              setTimeout(() => {
                resolve(res.data.data);
              }, 1e3);
            }
          });
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_upload = (0, import_vue.resolveComponent)("u-upload");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "wu-page" }, [
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u57FA\u7840\u7528\u6CD5"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__upload-item" }, [
              (0, import_vue.createVNode)(_component_u_upload, {
                fileList: $data.fileList1,
                onAfterRead: $options.afterRead,
                onDelete: $options.deletePic,
                name: "1",
                multiple: "",
                maxCount: 10
              }, null, 8, ["fileList", "onAfterRead", "onDelete"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u4E0A\u4F20\u89C6\u9891"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__upload-item" }, [
              (0, import_vue.createVNode)(_component_u_upload, {
                fileList: $data.fileList2,
                onAfterRead: $options.afterRead,
                onDelete: $options.deletePic,
                name: "2",
                multiple: "",
                maxCount: 10,
                accept: "video"
              }, null, 8, ["fileList", "onAfterRead", "onDelete"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u6587\u4EF6\u9884\u89C8"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__upload-item" }, [
              (0, import_vue.createVNode)(_component_u_upload, {
                fileList: $data.fileList3,
                onAfterRead: $options.afterRead,
                onDelete: $options.deletePic,
                name: "3",
                multiple: "",
                maxCount: 10,
                previewFullImage: true
              }, null, 8, ["fileList", "onAfterRead", "onDelete"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u9690\u85CF\u4E0A\u4F20\u6309\u94AE"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__upload-item" }, [
              (0, import_vue.createVNode)(_component_u_upload, {
                fileList: $data.fileList4,
                onAfterRead: $options.afterRead,
                onDelete: $options.deletePic,
                name: "4",
                multiple: "",
                maxCount: 2
              }, null, 8, ["fileList", "onAfterRead", "onDelete"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u9650\u5236\u4E0A\u4F20\u6570\u91CF"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__upload-item" }, [
              (0, import_vue.createVNode)(_component_u_upload, {
                fileList: $data.fileList5,
                onAfterRead: $options.afterRead,
                onDelete: $options.deletePic,
                name: "5",
                multiple: "",
                maxCount: 3
              }, null, 8, ["fileList", "onAfterRead", "onDelete"])
            ])
          ])
        ]),
        (0, import_vue.createElementVNode)("view", { class: "wu-demo-block" }, [
          (0, import_vue.createElementVNode)("u-text", { class: "wu-demo-block__title" }, "\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F"),
          (0, import_vue.createElementVNode)("view", { class: "wu-demo-block__content" }, [
            (0, import_vue.createElementVNode)("view", { class: "wu-page__upload-item" }, [
              (0, import_vue.createVNode)(_component_u_upload, {
                fileList: $data.fileList6,
                onAfterRead: $options.afterRead,
                onDelete: $options.deletePic,
                name: "6",
                multiple: "",
                maxCount: 1,
                width: "250",
                height: "150"
              }, {
                default: (0, import_vue.withCtx)(() => [
                  (0, import_vue.createElementVNode)("u-image", {
                    src: "https://cdn.uviewui.com/uview/demo/upload/positive.png",
                    mode: "widthFix",
                    style: { "width": "250px", "height": "150px" }
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["fileList", "onAfterRead", "onDelete"])
            ])
          ])
        ])
      ])
    ]);
  }
  var upload = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/upload/upload.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/upload/upload";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    upload.mpType = "page";
    const app = Vue.createPageApp(upload, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...upload.styles || []]));
    app.mount("#root");
  }
})();
