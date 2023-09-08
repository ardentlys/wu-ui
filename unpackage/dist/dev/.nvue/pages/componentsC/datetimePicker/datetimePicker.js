import { _ as __easycom_0 } from "../../../wu-navbar.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../mixin.js";
import "../../../wu-icon.js";
import "../../../wu-line.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } } };
const _sfc_main = {
  data() {
    const d = /* @__PURE__ */ new Date();
    d.getFullYear();
    uni.$u.padZero(d.getMonth() + 1);
    d.getDate();
    return {
      current: 0,
      value1: Number(/* @__PURE__ */ new Date()),
      value2: Number(/* @__PURE__ */ new Date()),
      value3: Number(/* @__PURE__ */ new Date()),
      value4: "05:28",
      value5: Number(/* @__PURE__ */ new Date()),
      value6: Number(/* @__PURE__ */ new Date()),
      value7: Number(/* @__PURE__ */ new Date()),
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      list: [
        {
          title: "完整日期时间",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/6.png"
        },
        {
          title: "年月日",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/4.png"
        },
        {
          title: "年月",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/3.png"
        },
        {
          title: "时间",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/5.png"
        },
        {
          title: "过滤器(保留偶数年)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/2.png"
        },
        {
          title: "格式化",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/1.png"
        },
        {
          title: "限制最大最小值",
          iconUrl: "https://cdn.uviewui.com/uview/demo/datetime-picker/7.png"
        }
      ]
    };
  },
  methods: {
    close() {
      this[`show${this.current}`] = false;
    },
    cancel() {
      this[`show${this.current}`] = false;
    },
    confirm(e) {
      this[`show${this.current}`] = false;
      this.result(e.value, e.mode);
    },
    change(e) {
    },
    navigateBack() {
      uni.navigateBack();
    },
    showDatetimePicker(index) {
      this.current = index + 1;
      this[`show${index + 1}`] = true;
    },
    result(time, mode) {
      const timeFormat = uni.$u.timeFormat, toast = uni.$u.toast;
      switch (mode) {
        case "datetime":
          return toast(timeFormat(time, "yyyy-mm-dd hh:MM"));
        case "date":
          return toast(timeFormat(time, "yyyy-mm-dd"));
        case "year-month":
          return toast(timeFormat(time, "yyyy-mm"));
        case "time":
          return toast(time);
        default:
          return "";
      }
    },
    filter(type, options) {
      if (type === "year") {
        return options.filter((option) => option % 2 === 0);
      }
      return options;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      if (type === "month") {
        return `${value}月`;
      }
      if (type === "day") {
        return `${value}日`;
      }
      return value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0);
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_u_datetime_picker = resolveComponent("u-datetime-picker");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_wu_navbar, {
        title: "datetimePicker 时间日期选择器",
        onLeftClick: $options.navigateBack,
        safeAreaInsetTop: "",
        fixed: "",
        placeholder: ""
      }, null, 8, ["onLeftClick"]),
      createVNode(_component_wu_cell_group, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.list, (item, index) => {
              return openBlock(), createBlock(_component_wu_cell, {
                onClick: ($event) => $options.showDatetimePicker(index),
                title: item.title,
                key: index,
                isLink: ""
              }, {
                default: withCtx(() => [
                  createElementVNode("u-image", {
                    slot: "icon",
                    class: "wu-cell-icon",
                    src: item.iconUrl,
                    mode: "widthFix"
                  }, null, 8, ["src"])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["onClick", "title"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_u_datetime_picker, {
        show: $data.show1,
        modelValue: $data.value1,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value1 = $event),
        mode: "datetime",
        closeOnClickOverlay: "",
        onConfirm: $options.confirm,
        onCancel: $options.cancel,
        onChange: $options.change,
        onClose: $options.close
      }, null, 8, ["show", "modelValue", "onConfirm", "onCancel", "onChange", "onClose"]),
      createVNode(_component_u_datetime_picker, {
        show: $data.show2,
        modelValue: $data.value2,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.value2 = $event),
        mode: "date",
        closeOnClickOverlay: "",
        onConfirm: $options.confirm,
        onCancel: $options.cancel,
        onChange: $options.change,
        onClose: $options.close
      }, null, 8, ["show", "modelValue", "onConfirm", "onCancel", "onChange", "onClose"]),
      createVNode(_component_u_datetime_picker, {
        show: $data.show3,
        modelValue: $data.value3,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.value3 = $event),
        mode: "year-month",
        closeOnClickOverlay: "",
        onConfirm: $options.confirm,
        onCancel: $options.cancel,
        onChange: $options.change,
        onClose: $options.close
      }, null, 8, ["show", "modelValue", "onConfirm", "onCancel", "onChange", "onClose"]),
      createVNode(_component_u_datetime_picker, {
        show: $data.show4,
        modelValue: $data.value4,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.value4 = $event),
        mode: "time",
        closeOnClickOverlay: "",
        onConfirm: $options.confirm,
        onCancel: $options.cancel,
        onChange: $options.change,
        onClose: $options.close
      }, null, 8, ["show", "modelValue", "onConfirm", "onCancel", "onChange", "onClose"]),
      createVNode(_component_u_datetime_picker, {
        show: $data.show5,
        modelValue: $data.value5,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.value5 = $event),
        filter: $options.filter,
        mode: "date",
        closeOnClickOverlay: "",
        onConfirm: $options.confirm,
        onCancel: $options.cancel,
        onChange: $options.change,
        onClose: $options.close
      }, null, 8, ["show", "modelValue", "filter", "onConfirm", "onCancel", "onChange", "onClose"]),
      createVNode(_component_u_datetime_picker, {
        show: $data.show6,
        modelValue: $data.value6,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.value6 = $event),
        mode: "date",
        formatter: $options.formatter,
        closeOnClickOverlay: "",
        onConfirm: $options.confirm,
        onCancel: $options.cancel,
        onChange: $options.change,
        onClose: $options.close
      }, null, 8, ["show", "modelValue", "formatter", "onConfirm", "onCancel", "onChange", "onClose"]),
      createVNode(_component_u_datetime_picker, {
        show: $data.show7,
        modelValue: $data.value7,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.value7 = $event),
        mode: "datetime",
        minDate: 15875248e5,
        maxDate: 1786778555e3,
        closeOnClickOverlay: "",
        onConfirm: $options.confirm,
        onCancel: $options.cancel,
        onChange: $options.change,
        onClose: $options.close
      }, null, 8, ["show", "modelValue", "onConfirm", "onCancel", "onChange", "onClose"])
    ])
  ]);
}
const datetimePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/datetimePicker/datetimePicker.nvue"]]);
export {
  datetimePicker as default
};
