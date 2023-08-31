import { _ as __easycom_0 } from "../../../wu-navbar.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../mixin.js";
import "../../../wu-icon.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } } };
const _sfc_main = {
  data() {
    return {
      loading: false,
      loadingPageData: {
        // 自定义提示内容
        loadingText: "",
        // 自定义图片
        image: "",
        // 自定义加载动画模式
        loadingMode: "",
        // 自定义背景色
        bgColor: "#ffffff"
      },
      list: [
        {
          title: "自定义提示内容",
          iconUrl: "https://cdn.uviewui.com/uview/demo/loading-page/promptContent.png"
        },
        {
          title: "自定义图片",
          iconUrl: "https://cdn.uviewui.com/uview/demo/loading-page/customPicture.png"
        },
        {
          title: "自定义加载动画模式",
          iconUrl: "https://cdn.uviewui.com/uview/demo/loading-page/customMode.png"
        },
        {
          title: "自定义背景色",
          iconUrl: "https://cdn.uviewui.com/uview/demo/loading-page/customBgColor.png"
        }
      ]
    };
  },
  methods: {
    navigateBack() {
      uni.navigateBack();
    },
    openLoadingPage(indexNum) {
      this.loadingPageData = {
        loadingText: "",
        image: "",
        loadingMode: "",
        bgColor: "#ffffff",
        iconSize: 28
      };
      if (indexNum == 0) {
        this.loadingPageData.loadingMode = "semicircle";
        this.loadingPageData.loadingText = "Hello uview";
        this.loadingPageData.color = "#C8C8C8";
        this.loadingPageData.loadingColor = "#C8C8C8";
      } else if (indexNum == 1) {
        this.loadingPageData.image = "/static/uview/common/logo.png";
        this.loadingPageData.loadingText = "uview UI";
        this.loadingPageData.iconSize = 40;
        this.loadingPageData.color = "#C8C8C8";
        this.loadingPageData.loadingColor = "#C8C8C8";
      } else if (indexNum == 2) {
        this.loadingPageData.loadingMode = "circle";
        this.loadingPageData.loadingText = "uview UI";
        this.loadingPageData.color = "#C8C8C8";
        this.loadingPageData.loadingColor = "#C8C8C8";
      } else if (indexNum == 3) {
        this.loadingPageData.loadingMode = "spinner";
        this.loadingPageData.bgColor = "rgba(0, 0, 0, 0.3)";
        this.loadingPageData.loadingText = "uview UI";
        this.loadingPageData.color = "#eee";
        this.loadingPageData.loadingColor = "#ddd";
      }
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0);
  const _component_u_gap = resolveComponent("u-gap");
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_u_loading_page = resolveComponent("u-loading-page");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_wu_navbar, {
        title: "加载页",
        onLeftClick: $options.navigateBack,
        safeAreaInsetTop: "",
        fixed: "",
        placeholder: ""
      }, null, 8, ["onLeftClick"]),
      createVNode(_component_u_gap, {
        bgColor: "#fff",
        height: "20"
      }),
      createVNode(_component_wu_cell_group, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.list, (item, index) => {
              return openBlock(), createBlock(_component_wu_cell, {
                titleStyle: { fontWeight: 500 },
                onClick: ($event) => $options.openLoadingPage(index),
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
      createVNode(_component_u_loading_page, {
        loadingText: $data.loadingPageData.loadingText,
        image: $data.loadingPageData.image,
        iconSize: $data.loadingPageData.iconSize,
        loadingMode: $data.loadingPageData.loadingMode,
        bgColor: $data.loadingPageData.bgColor,
        loading: $data.loading,
        color: $data.loadingPageData.color,
        loadingColor: $data.loadingPageData.loadingColor
      }, null, 8, ["loadingText", "image", "iconSize", "loadingMode", "bgColor", "loading", "color", "loadingColor"])
    ])
  ]);
}
const loadingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/loading-page/loading-page.nvue"]]);
export {
  loadingPage as default
};
