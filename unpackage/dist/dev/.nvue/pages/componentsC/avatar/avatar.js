import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-demo-block__content": { "": { "flexDirection": "row", "alignItems": "center" } }, "u-avatar-item": { "": { "marginRight": 30 } } };
const _sfc_main = {
  data() {
    return {
      src1: "https://cdn.uviewui.com/uview/album/1.jpg",
      src2: "https://cdn.uviewui.com/uview/album/2.jpg",
      src3: "https://cdn.uviewui.com/uview/album/3.jpg",
      src4: "https://cdn.uviewui.com/uview/album/4.jpg",
      src5: "https://cdn.uviewui.com/uview/album/5.jpg",
      src6: "https://cdn.uviewui.com/uview/album/6.jpg",
      src7: "https://cdn.uviewui.com/uview/album/noExist.jpg",
      urls: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg"
      ]
    };
  },
  onLoad() {
  },
  methods: {
    click(name) {
      formatAppLog("log", "at pages/componentsC/avatar/avatar.nvue:167", "click", name);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_avatar = resolveComponent("u-avatar");
  const _component_u_avatar_group = resolveComponent("u-avatar-group");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础演示"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_avatar, { src: $data.src1 }, null, 8, ["src"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "头像形状"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              src: $data.src2,
              shape: "circle",
              onClick: $options.click
            }, null, 8, ["src", "onClick"])
          ]),
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              src: $data.src3,
              shape: "square"
            }, null, 8, ["src"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "头像尺寸"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              src: $data.src4,
              size: "30"
            }, null, 8, ["src"])
          ]),
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              src: $data.src5,
              size: "40"
            }, null, 8, ["src"])
          ]),
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              src: $data.src6,
              size: "50"
            }, null, 8, ["src"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "图标头像"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              icon: "red-packet-fill",
              fontSize: "22"
            })
          ]),
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              icon: "star-fill",
              fontSize: "22"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "文字头像(自动背景色)"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              text: "U",
              fontSize: "20",
              randomBgColor: "",
              colorIndex: 0
            })
          ]),
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              text: "邓",
              fontSize: "18",
              randomBgColor: ""
            })
          ]),
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              text: "张",
              fontSize: "18",
              randomBgColor: ""
            })
          ]),
          createElementVNode("view", { class: "u-avatar-item" }, [
            createVNode(_component_u_avatar, {
              text: "王",
              fontSize: "18",
              randomBgColor: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "图片加载失败(显示默认头像)"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_avatar, { src: $data.src7 }, null, 8, ["src"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "头像组"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_avatar_group, {
            urls: $data.urls,
            size: "35",
            gap: "0.4"
          }, null, 8, ["urls"])
        ]),
        createElementVNode("view", {
          class: "wu-demo-block__content",
          style: { "margin-top": "20px" }
        }, [
          createVNode(_component_u_avatar_group, {
            urls: $data.urls,
            size: "35",
            gap: "0.6"
          }, null, 8, ["urls"])
        ])
      ])
    ])
  ]);
}
const avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/avatar/avatar.nvue"]]);
export {
  avatar as default
};
