import { resolveComponent, openBlock, createElementBlock, createVNode, withCtx, createElementVNode, Fragment, renderList, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "list__item": { "": { "flexDirection": "row", "paddingTop": 6, "paddingRight": 12, "paddingBottom": 6, "paddingLeft": 12, "alignItems": "center" } }, "list__item__avatar": { "": { "height": 35, "width": 35, "borderRadius": 3 } }, "list__item__user-name": { "": { "fontSize": 16, "marginLeft": 10, "color": "#303133" } }, "list__footer": { "": { "color": "#909193", "fontSize": 14, "textAlign": "center", "marginTop": 15, "marginRight": 0, "marginBottom": 15, "marginLeft": 0 } } };
const indexList = () => {
  const indexList2 = [];
  const charCodeOfA = "A".charCodeAt(0);
  indexList2.push("↑");
  indexList2.push("☆");
  for (let i = 0; i < 26; i++) {
    indexList2.push(String.fromCharCode(charCodeOfA + i));
  }
  indexList2.push("#");
  return indexList2;
};
const _sfc_main = {
  data() {
    return {
      indexList: indexList(),
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
      ],
      names: [
        "勇往无敌",
        "疯狂的迪飙",
        "磊爱可",
        "梦幻梦幻梦",
        "枫中飘瓢",
        "飞翔天使",
        "曾经第一",
        "追风幻影族长",
        "麦小姐",
        "胡格罗雅",
        "Red磊磊",
        "乐乐立立",
        "青龙爆风",
        "跑跑卡叮车",
        "山里狼",
        "supersonic超"
      ]
    };
  },
  computed: {
    itemArr() {
      return this.indexList.map((item) => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push({
            name: this.names[uni.$u.random(0, this.names.length - 1)],
            url: this.urls[uni.$u.random(0, this.urls.length - 1)]
          });
        }
        return arr;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_avatar = resolveComponent("u-avatar");
  const _component_u_line = resolveComponent("u-line");
  const _component_u_index_anchor = resolveComponent("u-index-anchor");
  const _component_u_index_item = resolveComponent("u-index-item");
  const _component_u_index_list = resolveComponent("u-index-list");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createVNode(_component_u_index_list, { indexList: $data.indexList }, {
      default: withCtx(() => [
        createElementVNode("view", {
          slot: "header",
          class: "list"
        }, [
          createElementVNode("view", { class: "list__item" }, [
            createVNode(_component_u_avatar, {
              shape: "square",
              size: "35",
              icon: "man-add-fill",
              fontSize: "26",
              randomBgColor: ""
            }),
            createElementVNode("u-text", { class: "list__item__user-name" }, "新的朋友")
          ]),
          createVNode(_component_u_line),
          createElementVNode("view", { class: "list__item" }, [
            createVNode(_component_u_avatar, {
              shape: "square",
              size: "35",
              icon: "tags-fill",
              fontSize: "26",
              randomBgColor: ""
            }),
            createElementVNode("u-text", { class: "list__item__user-name" }, "标签")
          ]),
          createVNode(_component_u_line),
          createElementVNode("view", { class: "list__item" }, [
            createVNode(_component_u_avatar, {
              shape: "square",
              size: "35",
              icon: "chrome-circle-fill",
              fontSize: "26",
              randomBgColor: ""
            }),
            createElementVNode("u-text", { class: "list__item__user-name" }, "朋友圈")
          ]),
          createVNode(_component_u_line),
          createElementVNode("view", { class: "list__item" }, [
            createVNode(_component_u_avatar, {
              shape: "square",
              size: "35",
              icon: "qq-fill",
              fontSize: "26",
              randomBgColor: ""
            }),
            createElementVNode("u-text", { class: "list__item__user-name" }, "QQ")
          ]),
          createVNode(_component_u_line)
        ]),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($options.itemArr, (item, index) => {
            return openBlock(), createElementBlock(
              Fragment,
              { key: index },
              [
                createVNode(_component_u_index_anchor, {
                  text: $data.indexList[index]
                }, null, 8, ["text"]),
                createVNode(
                  _component_u_index_item,
                  null,
                  {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(item, (item1, index1) => {
                          return openBlock(), createElementBlock("view", {
                            class: "list",
                            key: index1
                          }, [
                            createElementVNode("view", { class: "list__item" }, [
                              createElementVNode("u-image", {
                                class: "list__item__avatar",
                                src: item1.url
                              }, null, 8, ["src"]),
                              createElementVNode(
                                "u-text",
                                { class: "list__item__user-name" },
                                toDisplayString(item1.name),
                                1
                                /* TEXT */
                              )
                            ]),
                            createVNode(_component_u_line)
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        createElementVNode("view", {
          slot: "footer",
          class: "u-safe-area-inset--bottom"
        }, [
          createElementVNode("u-text", { class: "list__footer" }, "共305位好友")
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["indexList"])
  ]);
}
const indexList$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/indexList/indexList.nvue"]]);
export {
  indexList$1 as default
};
