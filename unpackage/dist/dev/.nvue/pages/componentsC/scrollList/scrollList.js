import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "scroll-list": { "": { "flexDirection": "column" } }, "scroll-list__goods-item": { "": { "marginRight": 20 } }, "scroll-list__goods-item__image": { "": { "width": 60, "height": 60, "borderRadius": 4 } }, "scroll-list__goods-item__text": { "": { "color": "#f56c6c", "textAlign": "center", "fontSize": 12, "marginTop": 5 } }, "scroll-list__show-more": { "": { "backgroundColor": "#fff0f0", "borderRadius": 3, "paddingTop": 3, "paddingRight": 6, "paddingBottom": 3, "paddingLeft": 6, "flexDirection": "column", "alignItems": "center" } }, "scroll-list__show-more__text": { "": { "fontSize": 12, "width": 12, "color": "#f56c6c", "lineHeight": 16 } }, "scroll-list__line": { "": { "flexDirection": "row", "marginTop": 10 } }, "scroll-list__line__item": { "": { "marginRight": 15 } }, "scroll-list__line__item__image": { "": { "width": 61, "height": 48 } }, "scroll-list__line__item__text": { "": { "marginTop": 5, "color": "#606266", "fontSize": 12, "textAlign": "center" } }, "scroll-list__line__item--no-margin-right": { "": { "marginRight": 0 } } };
const _sfc_main = {
  data() {
    return {
      goodsBaseUrl: "https://cdn.uviewui.com/uview/goods/",
      menuBaseUrl: "https://cdn.uviewui.com/uview/menu/",
      goodsArr: [
        {
          price: "230.5",
          thumbnail: "1.jpg"
        },
        {
          price: "74.1",
          thumbnail: "2.jpg"
        },
        {
          price: "8457",
          thumbnail: "6.jpg"
        },
        {
          price: "1442",
          thumbnail: "5.jpg"
        },
        {
          price: "541",
          thumbnail: "2.jpg"
        },
        {
          price: "234",
          thumbnail: "3.jpg"
        },
        {
          price: "562",
          thumbnail: "4.jpg"
        },
        {
          price: "251.5",
          thumbnail: "1.jpg"
        }
      ],
      menuArr: [
        [
          {
            name: "天猫新品",
            icon: "11.png"
          },
          {
            name: "今日爆款",
            icon: "9.png"
          },
          {
            name: "天猫国际",
            icon: "17.png"
          },
          {
            name: "饿了么",
            icon: "6.png"
          },
          {
            name: "天猫超市",
            icon: "11.png"
          },
          {
            name: "分类",
            icon: "2.png"
          },
          {
            name: "天猫美食",
            icon: "3.png"
          },
          {
            name: "阿里健康",
            icon: "12.png"
          },
          {
            name: "口碑生活",
            icon: "7.png"
          }
        ],
        [
          {
            name: "充值中心",
            icon: "8.png"
          },
          {
            name: "机票酒店",
            icon: "10.png"
          },
          {
            name: "金币庄园",
            icon: "18.png"
          },
          {
            name: "阿里拍卖",
            icon: "15.png"
          },
          {
            name: "淘宝吃货",
            icon: "16.png"
          },
          {
            name: "闲鱼",
            icon: "4.png"
          },
          {
            name: "会员中心",
            icon: "6.png"
          },
          {
            name: "造点新货",
            icon: "13.png"
          },
          {
            name: "土货鲜食",
            icon: "14.png"
          }
        ]
      ]
    };
  },
  methods: {
    showMore() {
      uni.$u.toast("查看更多");
    },
    left() {
      formatAppLog("log", "at pages/componentsC/scrollList/scrollList.nvue:179", "left");
    },
    right() {
      formatAppLog("log", "at pages/componentsC/scrollList/scrollList.nvue:182", "right");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_icon = resolveComponent("u-icon");
  const _component_u_scroll_list = resolveComponent("u-scroll-list");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", {
          class: "wu-demo-block__title",
          style: { "margin-bottom": "15px" }
        }, "基础使用"),
        createVNode(_component_u_scroll_list, {
          indicatorColor: "#fff0f0",
          indicatorActiveColor: "#f56c6c",
          onRight: $options.right,
          onLeft: $options.left
        }, {
          default: withCtx(() => [
            createElementVNode("view", {
              class: "scroll-list",
              style: { "flex-direction": "row" }
            }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.goodsArr, (item, index) => {
                  return openBlock(), createElementBlock(
                    "view",
                    {
                      class: normalizeClass(["scroll-list__goods-item", [index === 9 && "scroll-list__goods-item--no-margin-right"]]),
                      key: index
                    },
                    [
                      createElementVNode("u-image", {
                        class: "scroll-list__goods-item__image",
                        src: $data.goodsBaseUrl + item.thumbnail,
                        mode: ""
                      }, null, 8, ["src"]),
                      createElementVNode(
                        "u-text",
                        { class: "scroll-list__goods-item__text" },
                        "￥" + toDisplayString(item.price),
                        1
                        /* TEXT */
                      )
                    ],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              createElementVNode("view", {
                class: "scroll-list__show-more",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.showMore && $options.showMore(...args))
              }, [
                createElementVNode("u-text", { class: "scroll-list__show-more__text" }, "查看更多"),
                createVNode(_component_u_icon, {
                  name: "arrow-leftward",
                  color: "#f56c6c",
                  size: "12"
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onRight", "onLeft"])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "多菜单扩展"),
        createVNode(_component_u_scroll_list, null, {
          default: withCtx(() => [
            createElementVNode("view", { class: "scroll-list" }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.menuArr, (item, index) => {
                  return openBlock(), createElementBlock("view", {
                    class: "scroll-list__line",
                    key: index
                  }, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(item, (item1, index1) => {
                        return openBlock(), createElementBlock(
                          "view",
                          {
                            class: normalizeClass(["scroll-list__line__item", [index1 === item.length - 1 && "scroll-list__line__item--no-margin-right"]]),
                            key: index1
                          },
                          [
                            createElementVNode("u-image", {
                              class: "scroll-list__line__item__image",
                              src: $data.menuBaseUrl + item1.icon,
                              mode: ""
                            }, null, 8, ["src"]),
                            createElementVNode(
                              "u-text",
                              { class: "scroll-list__line__item__text" },
                              toDisplayString(item1.name),
                              1
                              /* TEXT */
                            )
                          ],
                          2
                          /* CLASS */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const scrollList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/scrollList/scrollList.nvue"]]);
export {
  scrollList as default
};
