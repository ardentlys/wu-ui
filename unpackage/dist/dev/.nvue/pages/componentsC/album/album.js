import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, normalizeStyle } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "album": { "": { "flexDirection": "row", "alignItems": "flex-start" } }, "album__avatar": { "": { "backgroundColor": "#f3f4f6", "paddingTop": 5, "paddingRight": 5, "paddingBottom": 5, "paddingLeft": 5, "borderRadius": 3 } }, "album__content": { "": { "marginLeft": 10, "flex": 1 } } };
const _sfc_main = {
  data() {
    return {
      albumWidth: 0,
      urls1: [{
        src2: "https://cdn.uviewui.com/uview/album/1.jpg"
      }],
      urls2: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg"
      ],
      urls3: [
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg"
      ],
      urls4: [
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg"
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u__text = resolveComponent("u--text");
  const _component_u_album = resolveComponent("u-album");
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
          createElementVNode("view", { class: "album" }, [
            createElementVNode("view", { class: "album__avatar" }, [
              createElementVNode("u-image", {
                src: "/static/uview/common/logo.png",
                mode: "",
                style: { "width": "32px", "height": "32px" }
              })
            ]),
            createElementVNode("view", { class: "album__content" }, [
              createVNode(_component_u__text, {
                text: "uview UI",
                type: "primary",
                bold: "",
                size: "17"
              }),
              createVNode(_component_u__text, {
                margin: "0 0 8px 0",
                text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水"
              }),
              createVNode(_component_u_album, {
                urls: $data.urls1,
                keyName: "src2"
              }, null, 8, ["urls"])
            ])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "多图模式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "album" }, [
            createElementVNode("view", { class: "album__avatar" }, [
              createElementVNode("u-image", {
                src: "/static/uview/common/logo.png",
                mode: "",
                style: { "width": "32px", "height": "32px" }
              })
            ]),
            createElementVNode("view", { class: "album__content" }, [
              createVNode(_component_u__text, {
                text: "uview UI",
                type: "primary",
                bold: "",
                size: "17"
              }),
              createVNode(_component_u__text, {
                margin: "0 0 8px 0",
                text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水"
              }),
              createVNode(_component_u_album, { urls: $data.urls2 }, null, 8, ["urls"])
            ])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "图文对齐"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "album" }, [
            createElementVNode("view", { class: "album__avatar" }, [
              createElementVNode("u-image", {
                src: "/static/uview/common/logo.png",
                mode: "",
                style: { "width": "32px", "height": "32px" }
              })
            ]),
            createElementVNode("view", { class: "album__content" }, [
              createVNode(_component_u__text, {
                text: "uview UI",
                type: "primary",
                bold: "",
                size: "17"
              }),
              createElementVNode(
                "view",
                {
                  style: normalizeStyle({
                    marginBottom: "8px",
                    width: $data.albumWidth + "px"
                  })
                },
                [
                  createVNode(_component_u__text, {
                    text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水",
                    customStyle: {
                      width: $data.albumWidth + "px"
                    }
                  }, null, 8, ["customStyle"])
                ],
                4
                /* STYLE */
              ),
              createVNode(_component_u_album, {
                urls: $data.urls2,
                onAlbumWidth: _cache[0] || (_cache[0] = (width) => $data.albumWidth = width),
                multipleSize: "68"
              }, null, 8, ["urls"])
            ])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "更改裁剪模式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "album" }, [
            createElementVNode("view", { class: "album__avatar" }, [
              createElementVNode("u-image", {
                src: "/static/uview/common/logo.png",
                mode: "",
                style: { "width": "32px", "height": "32px" }
              })
            ]),
            createElementVNode("view", { class: "album__content" }, [
              createVNode(_component_u__text, {
                text: "uview UI",
                type: "primary",
                bold: "",
                size: "17"
              }),
              createVNode(_component_u__text, {
                margin: "0 0 8px 0",
                text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水"
              }),
              createVNode(_component_u_album, {
                urls: $data.urls3,
                rowCount: "2",
                maxCount: "4",
                multipleMode: "scaleToFill"
              }, null, 8, ["urls"])
            ])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "更改图片大小"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "album" }, [
            createElementVNode("view", { class: "album__avatar" }, [
              createElementVNode("u-image", {
                src: "/static/uview/common/logo.png",
                mode: "",
                style: { "width": "32px", "height": "32px" }
              })
            ]),
            createElementVNode("view", { class: "album__content" }, [
              createVNode(_component_u__text, {
                text: "uview UI",
                type: "primary",
                bold: "",
                size: "17"
              }),
              createVNode(_component_u__text, {
                margin: "0 0 8px 0",
                text: "全面的组件和便捷的工具会让您信手拈来，如鱼得水"
              }),
              createVNode(_component_u_album, {
                urls: $data.urls4,
                rowCount: "2",
                maxCount: "4",
                multipleSize: "50"
              }, null, 8, ["urls"])
            ])
          ])
        ])
      ])
    ])
  ]);
}
const album = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/album/album.nvue"]]);
export {
  album as default
};
