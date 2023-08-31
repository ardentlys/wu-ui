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

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/parse/parse.js
  var import_vue = __toESM(require_vue());

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../Documents/HBuilderProjects/wu-ui/unpackage/dist/dev/.nvue/pages/componentsB/parse/parse.js
  var content$1 = content = `<title>\u5BCC\u6587\u672C\u793A\u4F8B</title>
<div>
  <section style="text-align: center; margin: 0px auto;">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">\u8868\u683C</span>
    </section>
  </section>
  <section style="margin-top: 1.5em;">
    <table width="100%" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>\u6807\u9898 1</th>
          <th>\u6807\u9898 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">\u5185\u5BB9 1</td>
          <td align="center">\u5185\u5BB9 2</td>
        </tr>
        <tr style="background-color: #f6f8fa;">
          <td align="center">\u5185\u5BB9 3</td>
          <td align="center"><a>\u94FE\u63A5</a></td>    
        </tr>
        <tr>
          <td align="center">\u5185\u5BB9 5</td>
          <td align="center">\u5185\u5BB9 6</td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">\u666E\u901A\u8868\u683C</div>
  </section>
  <section style="margin-top: 1.5em;">
    <table width="500px" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>\u6807\u9898 1</th>
          <th>\u6807\u9898 2</th>
          <th>\u6807\u9898 3</th>
          <th>\u6807\u9898 4</th>
          <th>\u6807\u9898 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">\u5185\u5BB9 1</td>
          <td align="center">\u5185\u5BB9 2</td>
          <td align="center">\u5185\u5BB9 3</td>
          <td align="center">\u5185\u5BB9 4</td>
          <td align="center">\u5185\u5BB9 5</td>
        </tr>
        <tr style="background-color: #f6f8fa;">
          <td align="center"><a>\u94FE\u63A5</a></td>
          <td align="center">\u5185\u5BB9 7</td>
          <td align="center">\u5185\u5BB9 8</td>
          <td align="center">\u5185\u5BB9 9</td>
          <td align="center">\u5185\u5BB9 10</td>
        </tr>
        <tr>
          <td align="center">\u5185\u5BB9 11</td>
          <td align="center">\u5185\u5BB9 12</td>
          <td align="center">\u5185\u5BB9 13</td>
          <td align="center">\u5185\u5BB9 14</td>
          <td align="center">\u5185\u5BB9 15</td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">\u957F\u8868\u683C\uFF0C\u53EF\u4EE5\u5355\u72EC\u6A2A\u5411\u6EDA\u52A8</div>
  </section>
  <section style="margin-top: 1.5em;">
    <table width="100%" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th align="center">\u6807\u9898 1</th>
          <th align="center">\u6807\u9898 2</th>
          <th align="center">\u6807\u9898 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center" colspan="2">\u5185\u5BB9 1</td>
          <td align="center" rowspan="2">\u5185\u5BB9 2</td>
        </tr>
        <tr>
          <td align="center" rowspan="2">\u5185\u5BB9 3</td>
          <td align="center">\u5185\u5BB9 4</td>
        </tr>
        <tr>
          <td align="center" colspan="2">\u5185\u5BB9 5</td>
        </tr>
        <tr>
          <td align="center">\u5185\u5BB9 6</td>
          <td align="center">\u5185\u5BB9 7</td>
          <td align="center"><a>\u94FE\u63A5</a></td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">\u542B\u6709\u5408\u5E76\u5355\u5143\u683C\u7684\u8868\u683C</div>
  </section>
  <section id="list" style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">\u5217\u8868</span>
    </section>
  </section>
  <section style="margin-top: 1.5em;">
    <ol style="margin-bottom: 1.5em;">
      <li>\u8FD9\u662F\u7B2C\u4E00\u6761\u5217\u8868\u9879</li>
      <li>\u8FD9\u662F\u7B2C\u4E8C\u6761\u5217\u8868\u9879</li>
      <li>\u8FD9\u662F\u7B2C\u4E09\u6761 <a>\u94FE\u63A5</a></li>
    </ol>
    <ol type="A" style="margin-bottom: 1.5em;">
      <li>\u8FD9\u662F\u7B2C\u4E00\u6761\u5217\u8868\u9879</li>
      <li>\u8FD9\u662F\u7B2C\u4E8C\u6761\u5217\u8868\u9879</li>
      <li>\u8FD9\u662F\u7B2C\u4E09\u6761 <a>\u94FE\u63A5</a></li>
    </ol>
    <ol type="I" style="margin-bottom: 1.5em;">
      <li>\u8FD9\u662F\u7B2C\u4E00\u6761\u5217\u8868\u9879</li>
      <li>\u8FD9\u662F\u7B2C\u4E8C\u6761\u5217\u8868\u9879</li>
      <li>\u8FD9\u662F\u7B2C\u4E09\u6761 <a>\u94FE\u63A5</a></li>
    </ol>
    <ul>
      <li>\u7B2C\u4E00\u7EA7\u65E0\u5E8F\u5217\u8868</li>
      <li>\u7B2C\u4E00\u7EA7\u65E0\u5E8F\u5217\u8868
        <ul>
          <li>\u7B2C\u4E8C\u7EA7\u65E0\u5E8F\u5217\u8868</li>
          <li>\u7B2C\u4E8C\u7EA7\u65E0\u5E8F\u5217\u8868
            <ul>
              <li>\u7B2C\u4E09\u7EA7\u65E0\u5E8F\u5217\u8868</li>
              <li>\u7B2C\u4E09\u7EA7 <a>\u94FE\u63A5</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>    
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">\u6587\u672C</span>
    </section>
  </section>
  <section style="margin-top: 1.5em;">
    <p style="margin-bottom: 1em;">
      <ruby>
        \u62FC<rp>(</rp><rt>pin</rt><rp>)</rp>
        \u97F3<rp>(</rp><rt>yin</rt><rp>)</rp>
      </ruby>
      &nbsp;&nbsp;<i>\u659C\u4F53</i>
      &nbsp;&nbsp;<b>\u7C97\u4F53</b>
      &nbsp;&nbsp;\u4E0A\u6807<sup>1</sup>
      &nbsp;&nbsp;\u4E0B\u6807<sub>2</sub>
    </p>
    <p style="margin-bottom: 1em;">
      <span style="text-decoration: overline;">\u4E0A\u5212\u7EBF</span>
      &nbsp;&nbsp;<s>\u4E2D\u5212\u7EBF</s>
      &nbsp;&nbsp;<u>\u4E0B\u5212\u7EBF</u>
    </p>
    <p>
      <big>\u5927\u4E00\u53F7</big>
      &nbsp;&nbsp;<span>\u6B63\u5E38</span>
      &nbsp;&nbsp;<small>\u5C0F\u4E00\u53F7</small>
    </p>
    <h2 style="margin-top: 0.5em;">\u5927\u6807\u9898</h2>
    <h3 style="margin-top: 0.5em;">\u4E2D\u6807\u9898</h3>
    <h4 style="margin-top: 0.5em;">\u5C0F\u6807\u9898</h4>
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">\u94FE\u63A5</span>
    </section>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="#">\u8DF3\u8F6C\u5230\u9876\u90E8</a>&nbsp;&nbsp;&nbsp;<a href="#list">\u8DF3\u8F6C\u5230\u5217\u8868</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">\u951A\u70B9\u94FE\u63A5\uFF0C\u5C06\u6EDA\u52A8\u5230\u5BF9\u5E94\u4F4D\u7F6E</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="https://github.com/jin-yufeng/mp-html">\u5916\u90E8\u94FE\u63A5</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">\u5916\u90E8\u94FE\u63A5\uFF0C\u5C06\u590D\u5236\u94FE\u63A5</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="/pages/componentsB/parse/jump">\u5185\u90E8\u94FE\u63A5</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">\u5185\u90E8\u94FE\u63A5\uFF0C\u5C06\u8DF3\u8F6C\u9875\u9762</div>
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">\u56FE\u7247</span>
    </section>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <img src="/demo-thumb.jpg?sign=91b3e495d16f96a0df3d263c9ff95821&t=1609059235" original-src="/demo.jpg?sign=af7082bed28711177bd952dbab67373e&t=1609059255">
    <div style="font-size: 12px; color: gray; margin-top: 5px;">\u70B9\u51FB\u9884\u89C8\u9AD8\u6E05\u56FE</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <svg width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;">
      <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
      </path>
    </svg>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">svg \u52A8\u753B</div>
  </section>
</div>`;
  var _style_0 = { "u-content": { "": { "paddingTop": "24rpx", "paddingRight": "24rpx", "paddingBottom": "24rpx", "paddingLeft": "24rpx", "fontSize": "32rpx", "color": "#606266", "lineHeight": 1.6 } } };
  var _sfc_main = {
    data() {
      return {
        content: "",
        tagStyle: {
          table: "box-sizing: border-box; border-top: 1px solid #dfe2e5; border-left: 1px solid #dfe2e5;",
          th: "border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;",
          td: "border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;",
          li: "margin: 5px 0;"
        }
      };
    },
    onLoad() {
      setTimeout(() => {
        this.content = content$1;
      }, 200);
    },
    methods: {
      load() {
      },
      ready() {
      },
      imgTap() {
      },
      linkTap() {
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_parse = (0, import_vue.resolveComponent)("u-parse");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "u-content" }, [
        (0, import_vue.createVNode)(_component_u_parse, {
          "container-style": "padding: 20px",
          content: $data.content,
          domain: "https://6874-html-foe72-1259071903.tcb.qcloud.la/demo",
          "lazy-load": "",
          "scroll-table": "",
          selectable: "",
          "use-anchor": "",
          "tag-style": $data.tagStyle,
          onLoad: $options.load,
          onReady: $options.ready,
          onImgTap: $options.imgTap,
          onLinkTap: $options.linkTap
        }, null, 8, ["content", "tag-style", "onLoad", "onReady", "onImgTap", "onLinkTap"])
      ])
    ]);
  }
  var parse = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/parse/parse.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/componentsB/parse/parse";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    parse.mpType = "page";
    const app = Vue.createPageApp(parse, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...parse.styles || []]));
    app.mount("#root");
  }
})();
