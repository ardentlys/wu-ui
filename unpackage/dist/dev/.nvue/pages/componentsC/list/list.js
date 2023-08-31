import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } } };
const _sfc_main = {
  data() {
    return {
      indexList: [],
      urls: [
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
      ]
    };
  },
  onLoad() {
    this.loadmore();
  },
  methods: {
    scrolltolower() {
      this.loadmore();
    },
    loadmore() {
      for (let i = 0; i < 30; i++) {
        this.indexList.push({
          url: this.urls[uni.$u.random(0, this.urls.length - 1)]
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_avatar = resolveComponent("u-avatar");
  const _component_u_cell = resolveComponent("u-cell");
  const _component_u_list_item = resolveComponent("u-list-item");
  const _component_u_list = resolveComponent("u-list");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_u_list, { onScrolltolower: $options.scrolltolower }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.indexList, (item, index) => {
              return openBlock(), createBlock(
                _component_u_list_item,
                { key: index },
                {
                  default: withCtx(() => [
                    createVNode(_component_u_cell, {
                      title: `列表长度-${index + 1}`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_u_avatar, {
                          slot: "icon",
                          shape: "square",
                          size: "35",
                          src: item.url,
                          customStyle: "margin: -3px 5px -3px 0"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onScrolltolower"])
    ])
  ]);
}
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/list/list.nvue"]]);
export {
  list as default
};
