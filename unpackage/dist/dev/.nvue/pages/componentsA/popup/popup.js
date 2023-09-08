import { _ as __easycom_0 } from "../../../wu-navbar.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, normalizeStyle } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../mixin.js";
import "../../../wu-icon.js";
import "../../../wu-line.js";
const _style_0 = { "u-popup-slot": { "": { "width": 200, "height": 150, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      popupData: {
        overlay: true,
        mode: "bottom",
        borderRadius: "",
        closeable: true,
        closeOnClickOverlay: true
      },
      list: [
        {
          popupData: {
            overlay: true,
            mode: "top",
            closeOnClickOverlay: true
          },
          title: "顶部弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeTop.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "right",
            closeOnClickOverlay: true
          },
          title: "右侧弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeRight.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "bottom",
            closeOnClickOverlay: true
          },
          title: "底部弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeBottom.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "left",
            closeOnClickOverlay: true
          },
          title: "左侧弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeLeft.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "center",
            round: 10,
            closeOnClickOverlay: true
          },
          title: "居中弹出",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/modeCenter.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "bottom",
            round: 10,
            closeOnClickOverlay: true
          },
          title: "显示圆角",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/showRadis.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "bottom",
            closeable: false,
            closeOnClickOverlay: false
          },
          title: "禁止点击遮罩关闭",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/noClose.png"
        },
        {
          popupData: {
            overlay: true,
            mode: "bottom",
            closeable: true,
            closeOnClickOverlay: true
          },
          title: "显示关闭按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/popup/showCloseBtn.png"
        }
      ]
    };
  },
  methods: {
    openPopup(popupData) {
      this.popupData = popupData;
      uni.$u.sleep().then(() => {
        this.show = !this.show;
      });
    },
    navigateBack() {
      uni.navigateBack();
    },
    open() {
    },
    close() {
      this.show = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0);
  const _component_u_gap = resolveComponent("u-gap");
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_u_button = resolveComponent("u-button");
  const _component_u_popup = resolveComponent("u-popup");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", null, [
      createVNode(_component_wu_navbar, {
        title: "弹窗",
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
                titleStyle: { fontWeight: 500 },
                onClick: ($event) => $options.openPopup(item.popupData),
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
      createVNode(_component_u_popup, {
        safeAreaInsetBottom: true,
        safeAreaInsetTop: true,
        mode: $data.popupData.mode,
        show: $data.show,
        round: $data.popupData.round,
        overlay: $data.popupData.overlay,
        borderRadius: $data.popupData.borderRadius,
        closeable: $data.popupData.closeable,
        closeOnClickOverlay: $data.popupData.closeOnClickOverlay,
        onClose: $options.close,
        onOpen: $options.open
      }, {
        default: withCtx(() => [
          createElementVNode(
            "view",
            {
              class: "u-popup-slot",
              style: normalizeStyle({
                width: ["bottom", "top"].includes($data.popupData.mode) ? "750rpx" : "200px",
                marginTop: ["left", "right"].includes($data.popupData.mode) ? "480rpx" : "0"
              })
            },
            [
              createVNode(_component_u_button, {
                type: "success",
                text: "点我关闭",
                customStyle: "width: 200rpx",
                onClick: _cache[0] || (_cache[0] = ($event) => $data.show = !$data.show)
              })
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["mode", "show", "round", "overlay", "borderRadius", "closeable", "closeOnClickOverlay", "onClose", "onOpen"])
    ])
  ]);
}
const popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/popup/popup.nvue"]]);
export {
  popup as default
};
