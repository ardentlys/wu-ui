import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page__link-item": { "": { "marginTop": 5 } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    click() {
      formatAppLog("log", "at pages/componentsA/link/link.nvue:63", "click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_link = resolveComponent("u-link");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基本案例"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__link-item" }, [
            createVNode(_component_u_link, {
              href: "https://wu.geeks.ink/zh-CN/",
              text: "打开wu-ui文档",
              onClick: $options.click
            }, null, 8, ["onClick"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "显示下划线"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__link-item" }, [
            createVNode(_component_u_link, {
              href: "https://wu.geeks.ink/zh-CN/",
              underLine: true,
              text: "Go to wu-ui doc"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义颜色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__link-item" }, [
            createVNode(_component_u_link, {
              href: "https://wu.geeks.ink/zh-CN/",
              lineColor: "#19be6b",
              color: "#19be6b",
              text: "打开wu-ui文档"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义链接内容"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__link-item" }, [
            createVNode(_component_u_link, {
              href: "https://uniapp.dcloud.io/",
              text: "打开uni-app文档"
            })
          ])
        ])
      ])
    ])
  ]);
}
const link = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/link/link.nvue"]]);
export {
  link as default
};
