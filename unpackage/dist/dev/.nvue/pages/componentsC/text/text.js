import { _ as __easycom_1 } from "../../../wu-text.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../wu-icon.js";
import "../../../mixin.js";
const _style_0 = { "wu-page__text-item": { "": { "marginRight": 10, "flex": 1 } }, "wu-demo-block__content": { "": { "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center" } } };
const _sfc_main = {
  onLoad() {
  },
  methods: {
    clickHandler() {
      uni.$u.toast("请在微信小程序内查看效果");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_text = resolveEasycom(resolveDynamicComponent("wu-text"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础功能"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, { text: "大鹏一日同风起，扶摇直上九万里" })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "设置主题"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              text: "主色",
              type: "primary"
            })
          ]),
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              type: "error",
              text: "错误"
            })
          ]),
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              type: "success",
              text: "成功"
            })
          ]),
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              type: "warning",
              text: "警告"
            })
          ]),
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              type: "info",
              text: "信息"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "拨打电话"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              mode: "phone",
              text: "15019479320"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "日期格式化"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              mode: "date",
              text: "1612959739"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "姓名脱敏"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              mode: "name",
              text: "李四四",
              format: "encrypt"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "超链接"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              mode: "link",
              type: "primary",
              text: "Go to wu-ui docs",
              href: "https://wu.geeks.ink/zh-CN/"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "显示金额"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              mode: "price",
              text: "728732.32"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "前后图标"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", {
            class: "wu-page__text-item",
            style: { "margin-right": "50px" }
          }, [
            createVNode(_component_wu_text, {
              prefixIcon: "baidu",
              iconStyle: "font-size: 19px",
              text: "百度一下"
            })
          ]),
          createElementVNode("view", { class: "wu-page__text-item" }, [
            createVNode(_component_wu_text, {
              suffixIcon: "arrow-rightward",
              iconStyle: "font-size: 18px",
              text: "查看更多"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "超出隐藏"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_text, {
            lines: 2,
            text: "关于wu-ui的取名来由，来自于一个玩笑，我曾经和几个很要好的朋友说，我们成立一个组织，叫卧龙凤雏吧，首字母 w 来自于卧的首字母，u则来自于 uniapp，故取名wu-ui，表达源于uni-app和uView，在此也对它们表示感谢。"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "小程序开放能力"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_wu_text, {
            text: "分享到微信",
            openType: "share",
            type: "success",
            onClick: $options.clickHandler
          }, null, 8, ["onClick"])
        ])
      ])
    ])
  ]);
}
const text = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/text/text.nvue"]]);
export {
  text as default
};
