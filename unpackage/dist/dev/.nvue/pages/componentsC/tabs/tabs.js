import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page": { "": { "paddingBottom": 500 } } };
const lineBg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=";
const _sfc_main = {
  mixins: [uni.$u.mixin],
  data() {
    return {
      lineBg,
      list1: [{
        name: "关注"
      }, {
        name: "推荐"
      }, {
        name: "电影"
      }, {
        name: "科技"
      }, {
        name: "音乐"
      }, {
        name: "美食"
      }, {
        name: "文化"
      }, {
        name: "财经"
      }, {
        name: "手工"
      }],
      list2: [{
        name: "关注"
      }, {
        name: "推荐",
        badge: {
          isDot: true
        }
      }, {
        name: "电影",
        badge: {
          value: 5
        }
      }, {
        name: "科技"
      }, {
        name: "音乐"
      }, {
        name: "美食"
      }, {
        name: "文化"
      }, {
        name: "财经"
      }, {
        name: "手工"
      }],
      list3: [{
        name: "关注"
      }, {
        name: "推荐"
      }, {
        name: "电影",
        disabled: true
      }, {
        name: "科技"
      }, {
        name: "音乐"
      }, {
        name: "美食"
      }, {
        name: "文化"
      }, {
        name: "财经"
      }, {
        name: "手工"
      }],
      list4: [{
        name: "关注"
      }, {
        name: "推荐",
        badge: {
          isDot: true
        }
      }, {
        name: "电影"
      }, {
        name: "科技"
      }, {
        name: "音乐"
      }, {
        name: "美食"
      }, {
        name: "文化"
      }, {
        name: "财经"
      }, {
        name: "手工"
      }],
      list6: [
        {
          name: "关注"
        },
        {
          name: "推荐"
        },
        {
          name: "电影"
        },
        {
          name: "科技"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    click(item) {
      formatAppLog("log", "at pages/componentsC/tabs/tabs.nvue:222", "item", item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_tabs = resolveComponent("u-tabs");
  const _component_u_sticky = resolveComponent("u-sticky");
  const _component_u_gap = resolveComponent("u-gap");
  const _component_u_icon = resolveComponent("u-icon");
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
          createVNode(_component_u_tabs, {
            list: $data.list1,
            onClick: $options.click,
            current: 3
          }, null, 8, ["list", "onClick"])
        ])
      ]),
      createElementVNode("view", {
        class: "wu-demo-block",
        style: { "margin-bottom": "0" }
      }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "粘性布局")
      ]),
      createVNode(_component_u_sticky, { bgColor: "#fff" }, {
        default: withCtx(() => [
          createVNode(_component_u_tabs, { list: $data.list1 }, null, 8, ["list"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_u_gap, {
        height: "23",
        bgColor: "#fff"
      }),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "显示徽标"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_tabs, { list: $data.list2 }, null, 8, ["list"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "禁止滚动"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_tabs, {
            list: $data.list6,
            scrollable: false
          }, null, 8, ["list"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "禁用菜单"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_tabs, { list: $data.list3 }, null, 8, ["list"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义样式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_tabs, {
            list: $data.list4,
            lineWidth: "30",
            lineColor: "#f56c6c",
            activeStyle: {
              color: "#303133",
              fontWeight: "bold",
              transform: "scale(1.05)"
            },
            inactiveStyle: {
              color: "#606266",
              transform: "scale(1)"
            },
            itemStyle: "padding-left: 15px; padding-right: 15px; height: 34px;"
          }, null, 8, ["list", "activeStyle", "inactiveStyle"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "滑块设置背景图"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_tabs, {
            list: $data.list4,
            lineWidth: "20",
            lineHeight: "7",
            lineColor: `url(${$data.lineBg}) 100% 100%`,
            activeStyle: {
              color: "#303133",
              fontWeight: "bold",
              transform: "scale(1.05)"
            },
            inactiveStyle: {
              color: "#606266",
              transform: "scale(1)"
            },
            itemStyle: "padding-left: 15px; padding-right: 15px; height: 34px;"
          }, null, 8, ["list", "lineColor", "activeStyle", "inactiveStyle"])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "右侧自定义插槽"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createVNode(_component_u_tabs, { list: $data.list1 }, {
            default: withCtx(() => [
              createElementVNode("view", {
                slot: "right",
                style: { "padding-left": "4px" },
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$u.toast("插槽被点击"))
              }, [
                createVNode(_component_u_icon, {
                  name: "list",
                  size: "21",
                  bold: ""
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["list"])
        ])
      ])
    ])
  ]);
}
const tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/tabs/tabs.nvue"]]);
export {
  tabs as default
};
