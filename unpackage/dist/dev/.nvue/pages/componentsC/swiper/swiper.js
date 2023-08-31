import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "indicator": { "": { "flexDirection": "row", "justifyContent": "center" } }, "indicator__dot": { "": { "height": 6, "width": 6, "borderRadius": 100, "backgroundColor": "rgba(255,255,255,0.35)", "marginTop": 0, "marginRight": 5, "marginBottom": 0, "marginLeft": 5, "transitionProperty": "backgroundColor", "transitionDuration": 300 } }, "indicator__dot--active": { "": { "backgroundColor": "#ffffff" } }, "indicator-num": { "": { "paddingTop": 2, "paddingRight": 0, "paddingBottom": 2, "paddingLeft": 0, "backgroundColor": "rgba(0,0,0,0.35)", "borderRadius": 100, "width": 35, "flexDirection": "row", "justifyContent": "center" } }, "indicator-num__text": { "": { "color": "#FFFFFF", "fontSize": 12 } }, "@TRANSITION": { "indicator__dot": { "property": "backgroundColor", "duration": 300 } } };
const _sfc_main = {
  data() {
    return {
      current: 0,
      currentNum: 0,
      list: [
        {
          // image: 'https://cdn.uviewui.com/uview/resources/video.mp4',
          image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          poster: "https://cdn.uviewui.com/uview/swiper/swiper1.png"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
        }
      ],
      list1: [
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png"
      ],
      list2: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          type: "image"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
        }
      ],
      list3: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png"
      ],
      list4: [
        {
          url: "https://cdn.uviewui.com/uview/resources/video.mp4",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          poster: "https://cdn.uviewui.com/uview/swiper/swiper1.png"
        },
        {
          url: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          title: "身无彩凤双飞翼，心有灵犀一点通"
        },
        {
          url: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳"
        }
      ],
      list5: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png"
      ],
      list6: [
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png"
      ]
    };
  },
  methods: {
    change(e) {
    },
    click(e) {
      formatAppLog("log", "at pages/componentsC/swiper/swiper.nvue:176", "click", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_swiper = resolveComponent("u-swiper");
  const _component_u_gap = resolveComponent("u-gap");
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
        createVNode(_component_u_swiper, {
          list: $data.list1,
          onChange: $options.change,
          onClick: $options.click
        }, null, 8, ["list", "onChange", "onClick"])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "带标题"),
        createVNode(_component_u_swiper, {
          list: $data.list2,
          keyName: "image",
          showTitle: "",
          autoplay: false,
          circular: ""
        }, null, 8, ["list"])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "带指示器"),
        createVNode(_component_u_swiper, {
          list: $data.list3,
          indicator: "",
          indicatorMode: "line",
          circular: ""
        }, null, 8, ["list"])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "加载中"),
        createVNode(_component_u_swiper, {
          list: $data.list3,
          loading: ""
        }, null, 8, ["list"])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "嵌入视频"),
        createVNode(_component_u_swiper, {
          list: $data.list4,
          keyName: "url",
          autoplay: false
        }, null, 8, ["list"])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义指示器"),
        createVNode(_component_u_swiper, {
          list: $data.list5,
          onChange: _cache[0] || (_cache[0] = (e) => $data.current = e.current),
          autoplay: false
        }, {
          default: withCtx(() => [
            createElementVNode("view", {
              slot: "indicator",
              class: "indicator"
            }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($data.list5, (item, index) => {
                  return openBlock(), createElementBlock(
                    "view",
                    {
                      class: normalizeClass(["indicator__dot", [index === $data.current && "indicator__dot--active"]]),
                      key: index
                    },
                    null,
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["list"]),
        createVNode(_component_u_gap, {
          bgColor: "transparent",
          height: "15"
        }),
        createVNode(_component_u_swiper, {
          list: $data.list6,
          onChange: _cache[1] || (_cache[1] = (e) => $data.currentNum = e.current),
          autoplay: false,
          indicatorStyle: "right: 20px"
        }, {
          default: withCtx(() => [
            createElementVNode("view", {
              slot: "indicator",
              class: "indicator-num"
            }, [
              createElementVNode(
                "u-text",
                { class: "indicator-num__text" },
                toDisplayString($data.currentNum + 1) + "/" + toDisplayString($data.list6.length),
                1
                /* TEXT */
              )
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["list"])
      ])
    ])
  ]);
}
const swiper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/swiper/swiper.nvue"]]);
export {
  swiper as default
};
