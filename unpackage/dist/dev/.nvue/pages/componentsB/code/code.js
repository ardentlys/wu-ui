import { _ as __easycom_2 } from "../../../wu-code.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_3 } from "../../../wu-button.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../mixin.js";
import "../../../wu-loading-icon.js";
import "../../../wu-icon.js";
const _style_0 = { "wu-page__code-text": { "": { "color": "#3c9cff", "fontSize": 15 } }, "wu-demo-block__content": { "": { "flexDirection": "row" } } };
const _sfc_main = {
  data() {
    return {
      tips: "",
      // 此为错误定义，见下方说明
      // refCode: null,
      tips1: "",
      tips2: "",
      disabled1: false,
      disabled2: false,
      disabled3: false
    };
  },
  onReady() {
  },
  methods: {
    codeChange(text) {
      this.tips = text;
    },
    codeChange1(text) {
      this.tips1 = text;
    },
    codeChange2(text) {
      this.tips2 = text;
    },
    getCode() {
      if (this.$refs.wuCode.canGetCode) {
        uni.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          uni.hideLoading();
          uni.$w.toast("验证码已发送");
          this.$refs.wuCode.start();
        }, 2e3);
      } else {
        uni.$w.toast("倒计时结束后再发送");
      }
    },
    getCode1() {
      if (this.$refs.wuCode1.canGetCode) {
        uni.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          uni.hideLoading();
          uni.$w.toast("验证码已发送");
          this.$refs.wuCode1.start();
        }, 2e3);
      } else {
        uni.$w.toast("倒计时结束后再发送");
      }
    },
    getCode2() {
      if (this.$refs.wuCode2.canGetCode) {
        uni.showLoading({
          title: "正在获取验证码"
        });
        setTimeout(() => {
          uni.hideLoading();
          uni.$w.toast("验证码已发送");
          this.$refs.wuCode2.start();
        }, 2e3);
      } else {
        uni.$w.toast("倒计时结束后再发送");
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_code = resolveEasycom(resolveDynamicComponent("wu-code"), __easycom_2);
  const _component_wu_button = resolveEasycom(resolveDynamicComponent("wu-button"), __easycom_3);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础功能"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_code, {
            ref: "wuCode",
            onChange: $options.codeChange,
            seconds: "20",
            "change-text": "XS获取",
            onStart: _cache[0] || (_cache[0] = ($event) => $data.disabled1 = true),
            onEnd: _cache[1] || (_cache[1] = ($event) => $data.disabled1 = false)
          }, null, 8, ["onChange"]),
          createVNode(_component_wu_button, {
            onClick: $options.getCode,
            text: $data.tips,
            type: "success",
            size: "small",
            disabled: $data.disabled1
          }, null, 8, ["onClick", "text", "disabled"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "保持倒计时(开始后，左上角返退出此页面再进入，会发现倒计时还在继续)"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_code, {
            ref: "wuCode1",
            onChange: $options.codeChange1,
            "keep-running": "",
            "change-text": "倒计时XS",
            onStart: _cache[2] || (_cache[2] = ($event) => $data.disabled2 = true),
            onEnd: _cache[3] || (_cache[3] = ($event) => $data.disabled2 = false)
          }, null, 8, ["onChange"]),
          createVNode(_component_wu_button, {
            type: "primary",
            onClick: $options.getCode1,
            text: $data.tips1,
            size: "small",
            disabled: $data.disabled2
          }, null, 8, ["onClick", "text", "disabled"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "文本样式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_code, {
            ref: "wuCode2",
            onChange: $options.codeChange2,
            "keep-running": "",
            "start-text": "点我获取验证码"
          }, null, 8, ["onChange"]),
          createElementVNode("u-text", {
            onClick: _cache[4] || (_cache[4] = (...args) => $options.getCode2 && $options.getCode2(...args)),
            text: $data.tips2,
            class: "wu-page__code-text"
          }, toDisplayString($data.tips2), 9, ["text"])
        ])
      ])
    ])
  ]);
}
const code = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/code/code.nvue"]]);
export {
  code as default
};
