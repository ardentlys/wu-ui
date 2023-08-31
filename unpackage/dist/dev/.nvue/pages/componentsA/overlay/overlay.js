import { _ as __easycom_0 } from "../../../wu-navbar.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, Fragment, renderList, createBlock, withCtx } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../mixin.js";
import "../../../wu-icon.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "overlay-wrap": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "flex": 1 } }, "overlay-wrap__box": { "": { "width": "200rpx", "height": "200rpx", "backgroundColor": "#70e1f5" } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      showSlot: false,
      showOpcatiy: false,
      list: [
        {
          title: "基本案列",
          iconUrl: "https://cdn.uviewui.com/uview/demo/overlay/baseCases.png"
        },
        {
          title: "嵌入内容",
          iconUrl: "https://cdn.uviewui.com/uview/demo/overlay/embeddedContent.png"
        },
        {
          title: "设置透明度",
          iconUrl: "https://cdn.uviewui.com/uview/demo/overlay/setTransparency.png"
        }
      ]
    };
  },
  methods: {
    openMask(indexNum) {
      if (indexNum == 0) {
        this.show = !this.show;
      } else if (indexNum == 1) {
        this.showSlot = !this.showSlot;
      } else if (indexNum == 2) {
        this.showOpcatiy = !this.showOpcatiy;
      }
    },
    navigateBack() {
      uni.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0);
  const _component_u_cell = resolveComponent("u-cell");
  const _component_u_overlay = resolveComponent("u-overlay");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_wu_navbar, {
        title: "遮罩层",
        onLeftClick: $options.navigateBack,
        safeAreaInsetTop: "",
        fixed: "",
        placeholder: ""
      }, null, 8, ["onLeftClick"]),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.list, (item, index) => {
          return openBlock(), createBlock(_component_u_cell, {
            titleStyle: { fontWeight: 500 },
            onClick: ($event) => $options.openMask(index),
            title: item.title,
            key: index,
            isLink: ""
          }, {
            icon: withCtx(() => [
              createElementVNode("u-image", {
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
      )),
      createVNode(_component_u_overlay, {
        show: $data.show,
        onClick: _cache[0] || (_cache[0] = ($event) => $data.show = !$data.show)
      }, null, 8, ["show"]),
      createVNode(_component_u_overlay, {
        show: $data.showSlot,
        onClick: _cache[1] || (_cache[1] = ($event) => $data.showSlot = !$data.showSlot)
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "overlay-wrap" }, [
            createElementVNode("view", { class: "overlay-wrap__box" })
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show"]),
      createVNode(_component_u_overlay, {
        opacity: ".85",
        show: $data.showOpcatiy,
        onClick: _cache[2] || (_cache[2] = ($event) => $data.showOpcatiy = !$data.showOpcatiy)
      }, null, 8, ["show"])
    ])
  ]);
}
const overlay = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/overlay/overlay.nvue"]]);
export {
  overlay as default
};
