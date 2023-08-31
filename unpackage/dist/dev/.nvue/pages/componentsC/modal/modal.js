import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../wu-navbar.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../mixin.js";
import "../../../wu-icon.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } } };
const _sfc_main = {
  data() {
    return {
      content: "模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作",
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      list: [
        {
          title: "基础使用",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/4.png"
        },
        {
          title: "无标题",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/5.png"
        },
        {
          title: "带取消按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/2.png"
        },
        {
          title: "异步关闭",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/6.png"
        },
        {
          title: "对调取消和确认按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/3.png"
        },
        {
          title: "允许点击遮罩关闭",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/7.png"
        },
        {
          title: "传入slot",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/1.png"
        },
        {
          title: "自定义按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/8.png"
        },
        {
          title: "淡入淡出动画",
          iconUrl: "https://cdn.uviewui.com/uview/demo/modal/9.png"
        }
      ]
    };
  },
  methods: {
    showModal(index) {
      this[`show${index + 1}`] = true;
    },
    navigateBack() {
      uni.navigateBack();
    },
    confirm4() {
      setTimeout(() => {
        this.show4 = false;
      }, 2e3);
    },
    confirm() {
      this.show3 = false;
      formatAppLog("log", "at pages/componentsC/modal/modal.nvue:177", "confirm");
    },
    cancel() {
      this.show3 = false;
      formatAppLog("log", "at pages/componentsC/modal/modal.nvue:181", "cancel");
    },
    close() {
      this.show3 = false;
      formatAppLog("log", "at pages/componentsC/modal/modal.nvue:185", "close");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0);
  const _component_u_gap = resolveComponent("u-gap");
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_u_modal = resolveComponent("u-modal");
  const _component_u_button = resolveComponent("u-button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_wu_navbar, {
        title: "模态框",
        onLeftClick: $options.navigateBack,
        safeAreaInsetTop: "",
        fixed: "",
        placeholder: ""
      }, null, 8, ["onLeftClick"]),
      createVNode(_component_u_gap, {
        height: "20",
        bgColor: "#fff"
      }),
      createVNode(_component_wu_cell_group, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.list, (item, index) => {
              return openBlock(), createBlock(_component_wu_cell, {
                onClick: ($event) => $options.showModal(index),
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
      createVNode(_component_u_modal, {
        content: $data.content,
        title: "标题",
        show: $data.show1,
        onConfirm: _cache[0] || (_cache[0] = () => $data.show1 = false)
      }, null, 8, ["content", "show"]),
      createVNode(_component_u_modal, {
        content: $data.content,
        show: $data.show2,
        onConfirm: _cache[1] || (_cache[1] = () => $data.show2 = false)
      }, null, 8, ["content", "show"]),
      createVNode(_component_u_modal, {
        content: $data.content,
        show: $data.show3,
        showCancelButton: "",
        closeOnClickOverlay: "",
        onConfirm: $options.confirm,
        onCancel: $options.cancel,
        onClose: $options.close
      }, null, 8, ["content", "show", "onConfirm", "onCancel", "onClose"]),
      createVNode(_component_u_modal, {
        content: $data.content,
        show: $data.show4,
        showCancelButton: "",
        asyncClose: "",
        onConfirm: $options.confirm4,
        onCancel: _cache[2] || (_cache[2] = () => $data.show4 = false)
      }, null, 8, ["content", "show", "onConfirm"]),
      createVNode(_component_u_modal, {
        content: $data.content,
        show: $data.show5,
        showCancelButton: "",
        buttonReverse: "",
        onConfirm: _cache[3] || (_cache[3] = () => $data.show5 = false),
        onCancel: _cache[4] || (_cache[4] = () => $data.show5 = false)
      }, null, 8, ["content", "show"]),
      createVNode(_component_u_modal, {
        content: $data.content,
        title: "标题",
        show: $data.show6,
        closeOnClickOverlay: "",
        onConfirm: _cache[5] || (_cache[5] = () => $data.show6 = false),
        onClose: _cache[6] || (_cache[6] = () => $data.show6 = false)
      }, null, 8, ["content", "show"]),
      createVNode(_component_u_modal, {
        title: "利剑出鞘,一统江湖",
        show: $data.show7,
        closeOnClickOverlay: "",
        onConfirm: _cache[7] || (_cache[7] = () => $data.show7 = false)
      }, {
        default: withCtx(() => [
          createElementVNode("u-image", {
            style: { "width": "80px", "height": "80px" },
            src: "/static/uview/common/logo.png"
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show"]),
      createVNode(_component_u_modal, {
        title: "标题",
        show: $data.show8,
        content: $data.content,
        closeOnClickOverlay: "",
        showCancelButton: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_u_button, {
            slot: "confirmButton",
            text: "确定",
            type: "success",
            shape: "circle",
            onClick: _cache[8] || (_cache[8] = ($event) => $data.show8 = false)
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "content"]),
      createVNode(_component_u_modal, {
        content: $data.content,
        title: "标题",
        show: $data.show9,
        zoom: false,
        onConfirm: _cache[9] || (_cache[9] = () => $data.show9 = false)
      }, null, 8, ["content", "show"])
    ])
  ]);
}
const modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/modal/modal.nvue"]]);
export {
  modal as default
};
