import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../wu-image.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList } from "vue";
import { _ as __easycom_0$1 } from "../../../wu-loading-icon.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../wu-icon.js";
import "../../../mixin.js";
const _sfc_main = {
  data() {
    return {
      src: "https://wu.geeks.ink/1.jpeg",
      src1: ""
    };
  },
  onLoad() {
    setTimeout(() => {
      this.src1 = this.src;
    }, 3e3);
  },
  methods: {
    click() {
      formatAppLog("log", "at pages/componentsA/image/image.nvue:110", "click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_image = resolveEasycom(resolveDynamicComponent("wu-image"), __easycom_0);
  const _component_wu_loading_icon = resolveEasycom(resolveDynamicComponent("wu-loading-icon"), __easycom_0$1);
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
          createElementVNode("view", { class: "wu-page__image-item" }, [
            createVNode(_component_wu_image, {
              showLoading: true,
              src: $data.src,
              width: "80px",
              height: "80px",
              onClick: $options.click
            }, null, 8, ["src", "onClick"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义形状"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__image-item" }, [
            createVNode(_component_wu_image, {
              shape: "circle",
              src: $data.src,
              width: "80px",
              height: "80px"
            }, null, 8, ["src"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义圆角"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__image-item" }, [
            createVNode(_component_wu_image, {
              radius: "4",
              src: $data.src,
              width: "80px",
              height: "80px"
            }, null, 8, ["src"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "图片模式(widthFit)"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__image-item" }, [
            createVNode(_component_wu_image, {
              src: $data.src,
              width: "80px",
              height: "80px",
              mode: "widthFit"
            }, null, 8, ["src"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义图片加载插槽"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__image-item" }, [
            createVNode(_component_wu_image, {
              src: $data.src1,
              width: "80px",
              height: "80px",
              mode: "widthFit"
            }, {
              loading: withCtx(() => [
                createVNode(_component_wu_loading_icon, { color: "red" })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["src"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "懒加载图片列表"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__image-item" }, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(30, (num) => {
                return createVNode(_component_wu_image, {
                  "custom-style": {
                    marginBottom: "10rpx"
                  },
                  key: num,
                  src: $data.src,
                  width: "80px",
                  height: "80px",
                  mode: "widthFit"
                }, null, 8, ["src"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ])
      ])
    ])
  ]);
}
const image = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/image/image.nvue"]]);
export {
  image as default
};
