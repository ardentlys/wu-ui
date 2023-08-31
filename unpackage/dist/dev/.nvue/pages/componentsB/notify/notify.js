import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { resolveComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../wu-icon.js";
import "../../../mixin.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } } };
const _sfc_main = {
  data() {
    return {
      show: false,
      notifyData: {
        message: "notify顶部提示",
        type: "primary",
        color: "#ffffff",
        bgColor: "",
        fontSize: 15,
        duration: 3e3
      },
      list: [
        {
          notifyData: {
            message: "notify顶部提示",
            type: "primary",
            color: "#ffffff",
            bgColor: "",
            fontSize: 15,
            duration: 3e3
          },
          title: "主要通知",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/main.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            type: "success",
            color: "#ffffff",
            bgColor: "",
            fontSize: 15,
            duration: 3e3,
            safeAreaInsetTop: false
          },
          title: "成功通知",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/success.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            type: "error",
            color: "#ffffff",
            bgColor: "",
            fontSize: 14,
            duration: 3e3,
            safeAreaInsetTop: false
          },
          title: "危险通知",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/error.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            type: "warning",
            color: "#ffffff",
            bgColor: "",
            fontSize: 15,
            duration: 3e3,
            safeAreaInsetTop: false
          },
          title: "警告通知",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/warning.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            color: "#fff",
            bgColor: "#000",
            fontSize: 15,
            duration: 3e3,
            safeAreaInsetTop: false
          },
          title: "自定义样式",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/customStyle.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            type: "primary",
            color: "#ffffff",
            bgColor: "",
            fontSize: 15,
            duration: 6e3,
            safeAreaInsetTop: false
          },
          title: "自定义时间",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/customTime.png"
        },
        {
          notifyData: {
            message: "notify顶部提示",
            color: "#fff",
            bgColor: "",
            fontSize: 15,
            duration: 3e3,
            safeAreaInsetTop: true
          },
          title: "插入状态栏高度",
          iconUrl: "https://cdn.uviewui.com/uview/demo/notify/height.png"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    openNotify(params) {
      this.$refs.uNotify.show({
        ...params
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_gap = resolveComponent("u-gap");
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_u_notify = resolveComponent("u-notify");
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
      createVNode(_component_wu_cell_group, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.list, (item, index) => {
              return openBlock(), createBlock(_component_wu_cell, {
                titleStyle: { fontWeight: 500 },
                onClick: ($event) => $options.openNotify(item.notifyData),
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
      createVNode(
        _component_u_notify,
        { ref: "uNotify" },
        null,
        512
        /* NEED_PATCH */
      )
    ])
  ]);
}
const notify = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/notify/notify.nvue"]]);
export {
  notify as default
};
