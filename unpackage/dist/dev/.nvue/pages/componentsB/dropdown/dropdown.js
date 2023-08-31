import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_dropdown_item = resolveComponent("u-dropdown-item");
  const _component_u_dropdown = resolveComponent("u-dropdown");
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
          createVNode(_component_u_dropdown, null, {
            default: withCtx(() => [
              createVNode(_component_u_dropdown_item, { title: "标题1" }, {
                default: withCtx(() => [
                  createElementVNode("view", {
                    class: "",
                    style: { "height": "300px" }
                  }, [
                    createElementVNode("u-text", null, " 123 ")
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_u_dropdown_item, { title: "标题2" }, {
                default: withCtx(() => [
                  createElementVNode("u-text", null, " 456 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_u_dropdown_item, { title: "标题3" }, {
                default: withCtx(() => [
                  createElementVNode("u-text", null, " 789 ")
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_u_dropdown_item, { title: "标题4" }, {
                default: withCtx(() => [
                  createElementVNode("u-text", null, " abc ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ])
  ]);
}
const dropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/dropdown/dropdown.nvue"]]);
export {
  dropdown as default
};
