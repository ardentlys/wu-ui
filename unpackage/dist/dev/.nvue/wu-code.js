var _a, _b;
import { m as mpMixin, a as mixin } from "./mixin.js";
import { openBlock, createElementBlock, createCommentVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const props = {
  props: {
    // 倒计时总秒数
    seconds: {
      type: [String, Number],
      default: 60
    },
    // 尚未开始时提示
    startText: {
      type: String,
      default: "获取验证码"
    },
    // 正在倒计时中的提示
    changeText: {
      type: String,
      default: "X秒重新获取"
    },
    // 倒计时结束时的提示
    endText: {
      type: String,
      default: "重新获取	"
    },
    // 是否在H5刷新或各端返回再进入时继续倒计时
    keepRunning: {
      type: Boolean,
      default: false
    },
    // 为了区分多个页面，或者一个页面多个倒计时组件本地存储的继续倒计时变了
    uniqueKey: {
      type: String,
      default: ""
    },
    ...(_b = (_a = uni.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.code
  }
};
const _style_0 = {};
const _sfc_main = {
  name: "wu-code",
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      secNum: this.seconds,
      timer: null,
      canGetCode: true
      // 是否可以执行验证码操作
    };
  },
  mounted() {
    this.checkKeepRunning();
  },
  watch: {
    seconds: {
      immediate: true,
      handler(n) {
        this.secNum = n;
      }
    }
  },
  methods: {
    checkKeepRunning() {
      let lastTimestamp = Number(uni.getStorageSync(this.uniqueKey + "_$wCountDownTimestamp"));
      if (!lastTimestamp)
        return this.changeEvent(this.startText);
      let nowTimestamp = Math.floor(+/* @__PURE__ */ new Date() / 1e3);
      if (this.keepRunning && lastTimestamp && lastTimestamp > nowTimestamp) {
        this.secNum = lastTimestamp - nowTimestamp;
        uni.removeStorageSync(this.uniqueKey + "_$wCountDownTimestamp");
        this.start();
      } else {
        this.changeEvent(this.startText);
      }
    },
    // 开始倒计时
    start() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.$emit("start");
      this.canGetCode = false;
      this.changeEvent(this.changeText.replace(/x|X/, this.secNum));
      this.timer = setInterval(() => {
        if (--this.secNum) {
          this.changeEvent(this.changeText.replace(/x|X/, this.secNum));
        } else {
          clearInterval(this.timer);
          this.timer = null;
          this.changeEvent(this.endText);
          this.secNum = this.seconds;
          this.$emit("end");
          this.canGetCode = true;
        }
      }, 1e3);
      this.setTimeToStorage();
    },
    // 重置，可以让用户再次获取验证码
    reset() {
      this.canGetCode = true;
      clearInterval(this.timer);
      this.secNum = this.seconds;
      this.changeEvent(this.endText);
    },
    changeEvent(text) {
      this.$emit("change", text);
    },
    // 保存时间戳，为了防止倒计时尚未结束，H5刷新或者各端的右上角返回上一页再进来
    setTimeToStorage() {
      if (!this.keepRunning || !this.timer)
        return;
      if (this.secNum > 0 && this.secNum <= this.seconds) {
        let nowTimestamp = Math.floor(+/* @__PURE__ */ new Date() / 1e3);
        uni.setStorage({
          key: this.uniqueKey + "_$wCountDownTimestamp",
          data: nowTimestamp + Number(this.secNum)
        });
      }
    }
  },
  // 组件销毁的时候，清除定时器，否则定时器会继续存在，系统不会自动清除
  beforeDestroy() {
    this.setTimeToStorage();
    clearTimeout(this.timer);
    this.timer = null;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "wu-code",
    renderWhole: true
  }, [
    createCommentVNode(" 此组件功能由js完成，无需写html逻辑 ")
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/uni_modules/wu-code/components/wu-code/wu-code.vue"]]);
export {
  __easycom_2 as _
};
