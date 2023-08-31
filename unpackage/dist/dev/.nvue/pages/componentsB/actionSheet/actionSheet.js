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
      show0: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      actions0: [
        {
          name: "选项1"
        },
        {
          name: "选项2"
        },
        {
          name: "选项3",
          subname: "描述文本"
        }
      ],
      actions1: [
        {
          name: "选项1"
        },
        {
          loading: true
        },
        {
          name: "选项被禁用",
          disabled: true
        }
      ],
      actions2: [
        {
          name: "选项1"
        },
        {
          name: "选项2"
        },
        {
          name: "选项3"
        }
      ],
      actions3: [
        {
          name: "选项1"
        },
        {
          name: "选项2"
        },
        {
          name: "选项3"
        }
      ],
      actions5: [{
        name: "获取用户信息",
        openType: "getUserInfo",
        color: uni.$u.color["success"]
      }],
      list: [
        {
          title: "普通使用",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/custom.png"
        },
        {
          title: "设置状态",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/status.png"
        },
        {
          title: "显示取消按钮",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/cancel.png"
        },
        {
          title: "描述内容",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/desc.png"
        },
        {
          title: "显示标题(显示圆角)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/title.png"
        },
        {
          title: "微信开放能力",
          iconUrl: "https://cdn.uviewui.com/uview/demo/actionSheet/open.png"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    // 点击cell，判断显示哪个功能
    openSheet(index) {
      if (index === 5)
        return uni.$u.toast("请在微信内预览");
      this[`show${index}`] = true;
    },
    getuserinfo(res) {
      uni.$u.toast(`用户名：${res.userInfo.nickName}`);
    },
    navigateBack() {
      uni.navigateBack();
    },
    close() {
      formatAppLog("log", "at pages/componentsB/actionSheet/actionSheet.nvue:174", "close");
      this["show0"] = false;
    },
    select(e) {
      formatAppLog("log", "at pages/componentsB/actionSheet/actionSheet.nvue:178", "select", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0);
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_u_action_sheet = resolveComponent("u-action-sheet");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_wu_navbar, {
        title: "上拉菜单",
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
                onClick: ($event) => $options.openSheet(index),
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
      createVNode(_component_u_action_sheet, {
        show: $data.show0,
        onClose: $options.close,
        onSelect: $options.select,
        actions: $data.actions0,
        closeOnClickOverlay: false
      }, null, 8, ["show", "onClose", "onSelect", "actions"]),
      createVNode(_component_u_action_sheet, {
        show: $data.show1,
        onClose: _cache[0] || (_cache[0] = ($event) => $data.show1 = false),
        actions: $data.actions1
      }, null, 8, ["show", "actions"]),
      createVNode(_component_u_action_sheet, {
        show: $data.show2,
        onClose: _cache[1] || (_cache[1] = ($event) => $data.show2 = false),
        actions: $data.actions2,
        cancelText: "取消"
      }, null, 8, ["show", "actions"]),
      createVNode(_component_u_action_sheet, {
        show: $data.show3,
        onClose: _cache[2] || (_cache[2] = ($event) => $data.show3 = false),
        actions: $data.actions3,
        description: "这是一段描述文本,字号偏小,颜色偏淡"
      }, null, 8, ["show", "actions"]),
      createVNode(_component_u_action_sheet, {
        show: $data.show4,
        onClose: _cache[3] || (_cache[3] = ($event) => $data.show4 = false),
        title: "标题位置",
        round: 10
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { style: { "margin": "10px 20px 30px 20px", "color": "#303133", "font-size": "15px" } }, "这是一段通过slot传入的内容,您可以在此自定义操作面板")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show"]),
      createVNode(_component_u_action_sheet, {
        show: $data.show5,
        onClose: _cache[4] || (_cache[4] = ($event) => $data.show5 = false),
        title: "微信开放能力",
        actions: $data.actions5,
        onGetuserinfo: $options.getuserinfo
      }, null, 8, ["show", "actions", "onGetuserinfo"])
    ])
  ]);
}
const actionSheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/actionSheet/actionSheet.nvue"]]);
export {
  actionSheet as default
};
