import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "u-alert-item": { "": { "flex": 1, "marginBottom": 10 } }, "wu-demo-block__content": { "": { "!flexDirection": "column", "alignItems": "stretch" } } };
const _sfc_main = {
  data() {
    return {
      description: "",
      title: ""
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_alert = resolveComponent("u-alert");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础功能"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "山不在于高，有了神仙就出名",
              type: "warning"
            })
          ]),
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "水不在深，有龙则灵",
              type: "primary"
            })
          ]),
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青",
              type: "error"
            })
          ]),
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "谈笑有鸿儒，往来无白丁",
              type: "info"
            })
          ]),
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "可以调素琴，阅金经",
              type: "success"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "深浅色"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "无丝竹之乱耳，无案牍之劳形",
              type: "warning"
            })
          ]),
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "南阳诸葛庐，西蜀子云亭。孔子云：何陋之有",
              type: "warning",
              effect: "dark"
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "显示图标"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "六王毕，四海一；蜀山兀，阿房出",
              type: "error",
              showIcon: ""
            })
          ]),
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "覆压三百余里，隔离天日。骊山北构而西折，直走咸阳，二川溶溶，流入宫墙",
              type: "error",
              effect: "dark",
              showIcon: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "可关闭"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角",
              type: "success",
              showIcon: "",
              closable: ""
            })
          ]),
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              description: "盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落",
              type: "success",
              effect: "dark",
              closable: "",
              showIcon: ""
            })
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "带标题"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              title: "妃嫔媵嫱，王子皇孙，辞楼下殿",
              description: "长桥卧波，未云何龙？复道行空，不霁何虹",
              type: "info",
              showIcon: "",
              closable: ""
            })
          ]),
          createElementVNode("view", { class: "u-alert-item" }, [
            createVNode(_component_u_alert, {
              title: "辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也",
              description: "高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐",
              type: "info",
              effect: "dark",
              closable: "",
              showIcon: ""
            })
          ])
        ])
      ])
    ])
  ]);
}
const alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/alert/alert.nvue"]]);
export {
  alert as default
};
