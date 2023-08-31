import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page": { "": { "height": 1200 } }, "wu-page__backTop-item": { "": { "marginTop": 10 } } };
const _sfc_main = {
  data() {
    return {
      value: ["自定义图标"],
      backTopData: {
        mode: "circle",
        icon: "arrow-upward",
        bottom: 100,
        customStyle: {},
        iconStyle: {},
        right: 20,
        duration: 300
      },
      scrollTop: 0,
      // 被自定义的样式
      checkboxList: [
        {
          name: "显示方形"
        },
        {
          name: "自定义图标"
        },
        {
          name: "自定义距离"
        },
        {
          name: "自定义样式"
        },
        {
          name: "自定义返回顶部滚动时间"
        }
      ]
    };
  },
  onLoad() {
    this.backTopData.icon = "arrow-up";
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  methods: {
    checkboxChange(n) {
      if (n.includes("显示方形")) {
        this.backTopData.mode = "square";
      } else {
        this.backTopData.mode = "circle";
      }
      if (n.includes("自定义图标")) {
        this.backTopData.icon = "arrow-up";
      } else {
        this.backTopData.icon = "arrow-upward";
      }
      if (n.includes("自定义距离")) {
        this.backTopData.bottom = 300;
        this.backTopData.right = 20;
      } else {
        this.backTopData.bottom = 100;
      }
      if (n.includes("自定义样式")) {
        this.backTopData.customStyle = {
          backgroundColor: "#2979ff"
        };
        this.backTopData.iconStyle = {
          color: "#ffffff"
        };
      } else {
        this.backTopData.customStyle = {};
        this.backTopData.iconStyle = {};
      }
      if (n.includes("自定义返回顶部滚动时间")) {
        this.backTopData.duration = 1500;
      } else {
        this.backTopData.duration = 300;
      }
    },
    click() {
      formatAppLog("log", "at pages/componentsA/backtop/backtop.nvue:119", "click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_checkbox = resolveComponent("u-checkbox");
  const _component_u_checkbox_group = resolveComponent("u-checkbox-group");
  const _component_u_back_top = resolveComponent("u-back-top");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode(
      "view",
      {
        class: "wu-page",
        ref: "u-back-top"
      },
      [
        createElementVNode("view", { class: "wu-demo-block" }, [
          createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义backTop(滚动页面即可在右下角看到图标)"),
          createElementVNode("view", { class: "wu-demo-block__content" }, [
            createElementVNode("view", { class: "wu-page__backTop-item" }, [
              createVNode(_component_u_checkbox_group, {
                placement: "column",
                shape: "square",
                onChange: $options.checkboxChange,
                modelValue: $data.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.value = $event)
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($data.checkboxList, (item, index) => {
                      return openBlock(), createBlock(_component_u_checkbox, {
                        customStyle: { marginBottom: "8px" },
                        key: index,
                        label: item.name,
                        name: item.name
                      }, null, 8, ["label", "name"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onChange", "modelValue"])
            ])
          ])
        ]),
        createVNode(_component_u_back_top, {
          right: $data.backTopData.right,
          customStyle: $data.backTopData.customStyle,
          bottom: $data.backTopData.bottom,
          icon: $data.backTopData.icon,
          mode: $data.backTopData.mode,
          iconStyle: $data.backTopData.iconStyle,
          duration: $data.backTopData.duration,
          scrollTop: $data.scrollTop,
          onClick: $options.click
        }, null, 8, ["right", "customStyle", "bottom", "icon", "mode", "iconStyle", "duration", "scrollTop", "onClick"])
      ],
      512
      /* NEED_PATCH */
    )
  ]);
}
const backtop = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/backtop/backtop.nvue"]]);
export {
  backtop as default
};
