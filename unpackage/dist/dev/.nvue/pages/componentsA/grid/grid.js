import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "swiper": { "": { "height": 220 } }, "grid-text": { "": { "fontSize": 14, "color": "#909399", "paddingTop": "10rpx", "paddingRight": 0, "paddingBottom": "20rpx", "paddingLeft": "0rpx" } } };
const _sfc_main = {
  data() {
    return {
      baseList: [
        {
          name: "photo",
          title: "图片"
        },
        {
          name: "lock",
          title: "锁头"
        }
        // {
        // 	name: 'star',
        // 	title: '星星'
        // },
      ],
      list: [
        {
          name: "photo",
          title: "图片"
        },
        {
          name: "lock",
          title: "锁头"
        },
        {
          name: "star",
          title: "星星"
        },
        {
          name: "hourglass",
          title: "沙漏"
        },
        {
          name: "home",
          title: "首页"
        },
        {
          name: "volume",
          title: "音量"
        }
      ],
      swiperList: ["integral", "kefu-ermai", "coupon", "gift", "scan", "pause-circle", "wifi", "email", "list"]
    };
  },
  methods: {
    click(name) {
      this.$refs.uToast.success(`点击了第${name}个`);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_icon = resolveComponent("u-icon");
  const _component_u_grid_item = resolveComponent("u-grid-item");
  const _component_u_grid = resolveComponent("u-grid");
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  const _component_u_toast = resolveComponent("u-toast");
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
        createElementVNode("view", null, [
          createVNode(_component_u_grid, {
            border: false,
            onClick: $options.click,
            align: "center"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.baseList, (baseListItem, baseListIndex) => {
                  return openBlock(), createBlock(
                    _component_u_grid_item,
                    { key: baseListIndex },
                    {
                      default: withCtx(() => [
                        createVNode(_component_u_icon, {
                          customStyle: { paddingTop: "20rpx" },
                          name: baseListItem.name,
                          size: 22
                        }, null, 8, ["name"]),
                        createElementVNode(
                          "u-text",
                          { class: "grid-text" },
                          toDisplayString(baseListItem.title),
                          1
                          /* TEXT */
                        )
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
          }, 8, ["onClick"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "显示边框"),
        createElementVNode("view", null, [
          createVNode(_component_u_grid, { border: true }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.list, (listItem, listIndex) => {
                  return openBlock(), createBlock(
                    _component_u_grid_item,
                    {
                      key: listIndex,
                      customStyle: "padding-top: 10px; padding-bottom: 10px"
                    },
                    {
                      default: withCtx(() => [
                        createVNode(_component_u_icon, {
                          customStyle: { paddingTop: "20rpx" },
                          name: listItem.name,
                          size: 22
                        }, null, 8, ["name"]),
                        createElementVNode(
                          "u-text",
                          { class: "grid-text" },
                          toDisplayString(listItem.title),
                          1
                          /* TEXT */
                        )
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
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "绑定点击事件&自定义列数"),
        createElementVNode("view", null, [
          createVNode(_component_u_grid, {
            border: false,
            col: "4"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.list, (listItem, listIndex) => {
                  return openBlock(), createBlock(
                    _component_u_grid_item,
                    {
                      key: listIndex,
                      customStyle: "padding-top: 10px; padding-bottom: 10px"
                    },
                    {
                      default: withCtx(() => [
                        createVNode(_component_u_icon, {
                          customStyle: { paddingTop: "20rpx" },
                          name: listItem.name,
                          size: 22
                        }, null, 8, ["name"]),
                        createElementVNode(
                          "u-text",
                          { class: "grid-text" },
                          toDisplayString(listItem.title),
                          1
                          /* TEXT */
                        )
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
          })
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "可滑动"),
        createElementVNode("view", null, [
          createVNode(_component_swiper, {
            "indicator-dots": true,
            class: "swiper"
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_item, null, {
                default: withCtx(() => [
                  createVNode(_component_u_grid, { border: true }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList($data.swiperList, (item, index) => {
                          return openBlock(), createBlock(_component_u_grid_item, {
                            index,
                            key: index
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_u_icon, {
                                customStyle: { paddingTop: "20rpx" },
                                name: item,
                                size: 22
                              }, null, 8, ["name"]),
                              createElementVNode(
                                "u-text",
                                { class: "grid-text" },
                                toDisplayString("宫格" + (index + 1)),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["index"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_swiper_item, null, {
                default: withCtx(() => [
                  createVNode(_component_u_grid, { border: true }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList($data.swiperList, (item, index) => {
                          return openBlock(), createBlock(_component_u_grid_item, {
                            index: index + 9,
                            key: index
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_u_icon, {
                                customStyle: { paddingTop: "20rpx" },
                                name: item,
                                size: 22
                              }, null, 8, ["name"]),
                              createElementVNode(
                                "u-text",
                                { class: "grid-text" },
                                toDisplayString("宫格" + (index + 1)),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["index"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_swiper_item, null, {
                default: withCtx(() => [
                  createVNode(_component_u_grid, { border: true }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList($data.swiperList, (item, index) => {
                          return openBlock(), createBlock(_component_u_grid_item, {
                            index: index + 18,
                            key: index
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_u_icon, {
                                customStyle: { paddingTop: "20rpx" },
                                name: item,
                                size: 22
                              }, null, 8, ["name"]),
                              createElementVNode(
                                "u-text",
                                { class: "grid-text" },
                                toDisplayString("宫格" + (index + 1)),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["index"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      createVNode(
        _component_u_toast,
        { ref: "uToast" },
        null,
        512
        /* NEED_PATCH */
      )
    ])
  ]);
}
const grid = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/grid/grid.nvue"]]);
export {
  grid as default
};
