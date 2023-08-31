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
      input: "",
      keyData: {
        mode: "",
        dotDisabled: false,
        random: false
      },
      list: [
        {
          title: "车牌号键盘",
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/car.png"
        },
        {
          title: "数字键盘",
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/number.png"
        },
        {
          title: "身份证键盘",
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/IdCard.png"
        },
        {
          title: '隐藏键盘"."符号',
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/dot.png"
        },
        {
          title: "打乱键盘按键的顺序",
          iconUrl: "https://cdn.uviewui.com/uview/demo/keyboard/order.png"
        }
      ],
      show: false
    };
  },
  methods: {
    navigateBack() {
      uni.navigateBack();
    },
    // 点击展示不同的键盘
    openKeyboard(indexNum) {
      this.keyData = {
        mode: "",
        dotDisabled: false,
        random: false
      };
      if (indexNum == 0) {
        this.keyData.mode = "";
      } else if (indexNum == 1) {
        this.keyData.mode = "number";
      } else if (indexNum == 2) {
        this.keyData.mode = "card";
      } else if (indexNum == 3) {
        this.keyData.mode = "number";
        this.keyData.dotDisabled = true;
      } else if (indexNum == 4) {
        this.keyData.mode = "number";
        this.keyData.random = true;
      }
      this.input = "";
      this.show = true;
    },
    change(e) {
      this.input += e;
    },
    close() {
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    confirm() {
      this.show = false;
    },
    backspace() {
      this.input = this.input.slice(0, -1);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_navbar = resolveEasycom(resolveDynamicComponent("wu-navbar"), __easycom_0);
  const _component_u_gap = resolveComponent("u-gap");
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_u_keyboard = resolveComponent("u-keyboard");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_wu_navbar, {
        title: "键盘",
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
                onClick: ($event) => $options.openKeyboard(index),
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
      createVNode(_component_u_keyboard, {
        mode: $data.keyData.mode,
        dotDisabled: $data.keyData.dotDisabled,
        random: $data.keyData.random,
        show: $data.show,
        onClose: $options.close,
        onCancel: $options.cancel,
        onConfirm: $options.confirm,
        onChange: $options.change,
        onBackspace: $options.backspace
      }, null, 8, ["mode", "dotDisabled", "random", "show", "onClose", "onCancel", "onConfirm", "onChange", "onBackspace"])
    ])
  ]);
}
const keyboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/keyboard/keyboard.nvue"]]);
export {
  keyboard as default
};
