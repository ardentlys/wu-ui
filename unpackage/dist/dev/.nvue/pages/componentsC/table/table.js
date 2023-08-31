import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _sfc_main = {
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_form_item = resolveComponent("u-form-item");
  const _component_u__form = resolveComponent("u--form");
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
          createVNode(_component_u__form, null, {
            default: withCtx(() => [
              createVNode(_component_u_form_item, { lable: "电话" })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ])
  ]);
}
const table = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/table/table.nvue"]]);
export {
  table as default
};
