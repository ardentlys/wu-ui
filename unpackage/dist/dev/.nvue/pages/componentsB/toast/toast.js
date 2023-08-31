import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { resolveComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, createCommentVNode } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../wu-icon.js";
import "../../../mixin.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-cell-icon": { "": { "width": "36rpx", "height": "36rpx", "marginRight": "8rpx" } }, "wu-cell-group__title__text": { "": { "fontWeight": "bold" } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      list: [
        {
          type: "default",
          title: "默认主题",
          message: "锦瑟无端五十弦",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/default.png"
        },
        {
          type: "error",
          icon: false,
          title: "失败主题",
          message: "一弦一柱思华年",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/error.png"
        },
        {
          type: "success",
          title: "成功主题(带图标)",
          message: "庄生晓梦迷蝴蝶",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/success.png"
        },
        {
          type: "warning",
          position: "top",
          title: "位置偏移上方",
          message: "望帝春心托杜鹃",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/top.png"
        },
        {
          type: "loading",
          title: "正在加载",
          message: "正在加载",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/loading.png"
        },
        {
          type: "default",
          title: "结束后跳转标签页",
          message: "此情可待成追忆",
          url: "/pages/componentsB/tag/tag",
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/jump.png"
        }
      ]
    };
  },
  computed: {
    getIcon() {
      return (path) => {
        return "https://cdn.uviewui.com/uview/example/" + path + ".png";
      };
    }
  },
  methods: {
    showToast(params) {
      this.$refs.uToast.show({
        ...params,
        complete() {
          params.url && uni.navigateTo({
            url: params.url
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_gap = resolveComponent("u-gap");
  const _component_u_toast = resolveComponent("u-toast");
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_u_gap, {
        height: "30",
        bgColor: "#fff"
      }),
      createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      ),
      createVNode(_component_wu_cell_group, { "title-bg-color": "rgb(243, 244, 246)" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.list, (item, index) => {
              return openBlock(), createBlock(_component_wu_cell, {
                titleStyle: { fontWeight: 500 },
                title: item.title,
                key: index,
                isLink: "",
                icon: item.iconUrl,
                onClick: ($event) => $options.showToast(item)
              }, {
                default: withCtx(() => [
                  createCommentVNode(' <image\r\n				    slot="icon"\r\n				    class="wu-cell-icon"\r\n				    :src="getIcon(item.icon)"\r\n				    mode="widthFix"\r\n				></image> ')
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["title", "icon", "onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const toast = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/toast/toast.nvue"]]);
export {
  toast as default
};
