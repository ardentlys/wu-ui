import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "wu-page__item__title": { "": { "color": "#909193", "backgroundColor": "#f3f4f6", "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "fontSize": 15 } }, "wu-page__item__title__slot-title": { "": { "color": "#3c9cff", "fontSize": 14 } }, "wu-page__item__slot-icon": { "": { "width": 17, "height": 17 } } };
const _sfc_main = {
  data() {
    return {
      value1: 0,
      value2: 1,
      value3: "play-right",
      value4: 0,
      value5: 0,
      value6: 0,
      value7: 3
    };
  },
  onLoad() {
  },
  methods: {
    change5(name) {
      if (name === 1)
        return uni.$u.toast("请您先登录");
      else
        this.value5 = name;
    },
    change1(e) {
      this.value1 = e;
      formatAppLog("log", "at pages/componentsB/tabbar/tabbar.nvue:241", "change1", e);
    },
    click1(e) {
      formatAppLog("log", "at pages/componentsB/tabbar/tabbar.nvue:244", "click1", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_tabbar_item = resolveComponent("u-tabbar-item");
  const _component_u_tabbar = resolveComponent("u-tabbar");
  const _component_u_gap = resolveComponent("u-gap");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "基础功能"),
        createVNode(_component_u_tabbar, {
          value: $data.value1,
          onChange: $options.change1,
          fixed: false,
          placeholder: false,
          safeAreaInsetBottom: false
        }, {
          default: withCtx(() => [
            createVNode(_component_u_tabbar_item, {
              text: "首页",
              icon: "home",
              onClick: $options.click1
            }, null, 8, ["onClick"]),
            createVNode(_component_u_tabbar_item, {
              text: "放映厅",
              icon: "photo",
              onClick: $options.click1
            }, null, 8, ["onClick"]),
            createVNode(_component_u_tabbar_item, {
              text: "直播",
              icon: "play-right",
              onClick: $options.click1
            }, null, 8, ["onClick"]),
            createVNode(_component_u_tabbar_item, {
              text: "我的",
              icon: "account",
              onClick: $options.click1
            }, null, 8, ["onClick"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["value", "onChange"])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "显示徽标"),
        createVNode(_component_u_tabbar, {
          value: $data.value2,
          placeholder: false,
          onChange: _cache[0] || (_cache[0] = (name) => $data.value2 = name),
          fixed: false,
          safeAreaInsetBottom: false
        }, {
          default: withCtx(() => [
            createVNode(_component_u_tabbar_item, {
              text: "首页",
              icon: "home",
              dot: ""
            }),
            createVNode(_component_u_tabbar_item, {
              text: "放映厅",
              icon: "photo",
              badge: "3"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "直播",
              icon: "play-right"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "我的",
              icon: "account"
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["value"])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "匹配标签的名称"),
        createVNode(_component_u_tabbar, {
          placeholder: false,
          value: $data.value3,
          onChange: _cache[1] || (_cache[1] = (name) => $data.value3 = name),
          fixed: false,
          safeAreaInsetBottom: false
        }, {
          default: withCtx(() => [
            createVNode(_component_u_tabbar_item, {
              text: "首页",
              icon: "home",
              name: "home"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "放映厅",
              icon: "photo",
              name: "photo"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "直播",
              icon: "play-right",
              name: "play-right"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "我的",
              name: "account",
              icon: "account"
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["value"])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "自定义图标/颜色"),
        createVNode(_component_u_tabbar, {
          value: $data.value4,
          onChange: _cache[2] || (_cache[2] = (name) => $data.value4 = name),
          fixed: false,
          placeholder: false,
          activeColor: "#d81e06",
          safeAreaInsetBottom: false
        }, {
          default: withCtx(() => [
            createVNode(_component_u_tabbar_item, { text: "首页" }, {
              default: withCtx(() => [
                createElementVNode("u-image", {
                  class: "wu-page__item__slot-icon",
                  slot: "active-icon",
                  src: "https://cdn.uviewui.com/uview/common/bell-selected.png"
                }),
                createElementVNode("u-image", {
                  class: "wu-page__item__slot-icon",
                  slot: "inactive-icon",
                  src: "https://cdn.uviewui.com/uview/common/bell.png"
                })
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_u_tabbar_item, {
              text: "放映厅",
              icon: "photo"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "直播",
              icon: "play-right"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "我的",
              icon: "account"
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["value"])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "拦截切换事件(点击第二个标签)"),
        createVNode(_component_u_tabbar, {
          value: $data.value5,
          fixed: false,
          onChange: $options.change5,
          safeAreaInsetBottom: false,
          placeholder: false
        }, {
          default: withCtx(() => [
            createVNode(_component_u_tabbar_item, {
              text: "首页",
              icon: "home"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "放映厅",
              icon: "photo"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "直播",
              icon: "play-right"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "我的",
              icon: "account"
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["value", "onChange"])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "去除上边框"),
        createVNode(_component_u_tabbar, {
          value: $data.value7,
          placeholder: false,
          border: false,
          onChange: _cache[3] || (_cache[3] = (name) => $data.value7 = name),
          fixed: false,
          safeAreaInsetBottom: false
        }, {
          default: withCtx(() => [
            createVNode(_component_u_tabbar_item, {
              text: "首页",
              icon: "home"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "放映厅",
              icon: "photo"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "直播",
              icon: "play-right"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "我的",
              icon: "account"
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["value"])
      ]),
      createElementVNode("view", { class: "wu-page__item" }, [
        createElementVNode("u-text", { class: "wu-page__item__title" }, "固定在底部(固定在屏幕最下方)"),
        createVNode(_component_u_gap, { height: "150" }),
        createVNode(_component_u_tabbar, {
          value: $data.value6,
          onChange: _cache[4] || (_cache[4] = (name) => $data.value6 = name),
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true
        }, {
          default: withCtx(() => [
            createVNode(_component_u_tabbar_item, {
              text: "首页",
              icon: "home"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "放映厅",
              icon: "photo"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "直播",
              icon: "play-right"
            }),
            createVNode(_component_u_tabbar_item, {
              text: "我的",
              icon: "account"
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["value"])
      ])
    ])
  ]);
}
const tabbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/tabbar/tabbar.nvue"]]);
export {
  tabbar as default
};
