import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    loadmore() {
      formatAppLog("log", "at pages/componentsC/loadmore/loadmore.nvue:86", "loadmore");
      uni.$u.toast("加载更多");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_loadmore = resolveComponent("u-loadmore");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础使用"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_loadmore, {
            status: "loading",
            isDot: true,
            iconSize: 17
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "无更多数据"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_loadmore, {
            line: true,
            status: "nomore"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "加载更多(点击触发事件)"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_loadmore, {
            line: true,
            status: "loadmore",
            onLoadmore: $options.loadmore
          }, null, 8, ["onLoadmore"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义图标"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_loadmore, {
            status: "loading",
            loadingIcon: "circle"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "显示点"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_loadmore, {
            status: "nomore",
            isDot: true,
            line: true,
            color: "#909399"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义提示语"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_loadmore, {
            status: "loading",
            loadingText: "努力加载中,先喝杯茶",
            color: "#909399"
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义线条颜色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_loadmore, {
            loadmoreText: "看,我和别人不一样",
            color: "#1CD29B",
            lineColor: "#1CD29B",
            dashed: "",
            line: true
          })
        ])
      ])
    ])
  ]);
}
const loadmore = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/loadmore/loadmore.nvue"]]);
export {
  loadmore as default
};
