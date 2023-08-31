import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-demo-block__content": { "": { "flexDirection": "column" } } };
const _sfc_main = {
  data() {
    return {
      text1: "uview UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用",
      text2: "uview UI众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨",
      text3: "uview UI收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍",
      text4: [
        "寒雨连江夜入吴",
        "平明送客楚山孤",
        "洛阳亲友如相问",
        "一片冰心在玉壶"
      ],
      text5: "涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川"
    };
  },
  onLoad() {
  },
  methods: {
    click(e) {
      formatAppLog("log", "at pages/componentsB/noticeBar/noticeBar.nvue:94", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_notice_bar = resolveComponent("u-notice-bar");
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
          createVNode(_component_u_notice_bar, { text: $data.text1 }, null, 8, ["text"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "可关闭"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_notice_bar, {
            text: $data.text5,
            mode: "closable"
          }, null, 8, ["text"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义横向滚动速度"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_notice_bar, {
            text: $data.text2,
            speed: "250",
            mode: "closable"
          }, null, 8, ["text"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "可跳转(点击右箭头)"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_notice_bar, {
            text: $data.text3,
            mode: "link",
            url: "/pages/componentsB/tag/tag"
          }, null, 8, ["text"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "横向步进滚动"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_notice_bar, {
            text: $data.text4,
            step: true,
            onClick: $options.click
          }, null, 8, ["text", "onClick"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "纵向滚动"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_notice_bar, {
            text: $data.text4,
            direction: "column",
            onClick: $options.click
          }, null, 8, ["text", "onClick"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义样式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_notice_bar, {
            text: $data.text1,
            color: "#ffffff",
            bgColor: "#f56c6c"
          }, null, 8, ["text"])
        ])
      ])
    ])
  ]);
}
const noticeBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/noticeBar/noticeBar.nvue"]]);
export {
  noticeBar as default
};
