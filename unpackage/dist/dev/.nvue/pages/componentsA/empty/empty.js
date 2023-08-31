import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page": { "": { "paddingTop": "40rpx", "paddingRight": 0, "paddingBottom": "40rpx", "paddingLeft": 0 } }, "wu-page__top-box": { "": { "paddingLeft": "40rpx" } }, "empty-select": { "": { "marginTop": 10 } } };
const _sfc_main = {
  data() {
    const baseUrl = "http://cdn.uviewui.com/uview/empty/";
    return {
      mode: "car",
      imgList: {
        car: baseUrl + "car.png",
        address: baseUrl + "address.png",
        comment: baseUrl + "comment.png",
        coupon: baseUrl + "coupon.png",
        data: baseUrl + "data.png",
        history: baseUrl + "history.png",
        list: baseUrl + "list.png",
        message: baseUrl + "message.png",
        news: baseUrl + "news.png",
        order: baseUrl + "order.png",
        page: baseUrl + "page.png",
        permission: baseUrl + "permission.png",
        search: baseUrl + "search.png",
        wifi: baseUrl + "wifi.png"
      },
      list: [
        {
          imgName: "car",
          title: "购物车为空(同时传入slot)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/car.png"
        },
        {
          imgName: "data",
          title: "数据为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/data.png"
        },
        {
          imgName: "comment",
          title: "评论为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/comment.png"
        },
        {
          imgName: "coupon",
          title: "没有优惠券",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/coupon.png"
        },
        {
          imgName: "history",
          title: "无历史记录",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/history.png"
        },
        {
          imgName: "list",
          title: "列表为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/list.png"
        },
        {
          imgName: "message",
          title: "消息列表为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/message.png"
        },
        {
          imgName: "news",
          title: "无新闻列表",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/news.png"
        },
        {
          imgName: "order",
          title: "订单为空",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/order.png"
        },
        {
          imgName: "page",
          title: "页面不存在",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/page.png"
        },
        {
          imgName: "permission",
          title: "无权限",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/permission.png"
        },
        {
          imgName: "search",
          title: "没有搜索结果",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/search.png"
        },
        {
          imgName: "wifi",
          title: "没有WiFi",
          iconUrl: "https://cdn.uviewui.com/uview/demo/empty/wifi.png"
        }
      ]
    };
  },
  methods: {
    //点击改变图片
    openImg(imgName) {
      this.mode = imgName;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_button = resolveComponent("u-button");
  const _component_u_empty = resolveComponent("u-empty");
  const _component_u_cell = resolveComponent("u-cell");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-page__top-box" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "演示效果")
      ]),
      createVNode(_component_u_empty, {
        mode: $data.mode,
        icon: $data.imgList[$data.mode]
      }, {
        default: withCtx(() => [
          $data.mode == "car" ? (openBlock(), createBlock(_component_u_button, {
            key: 0,
            size: "small",
            type: "primary",
            style: { marginTop: "10px" },
            text: "查看更多商品"
          })) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["mode", "icon"]),
      createElementVNode("div", { class: "empty-select" }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($data.list, (item, index) => {
            return openBlock(), createBlock(_component_u_cell, {
              titleStyle: { fontWeight: 500 },
              onClick: ($event) => $options.openImg(item.imgName),
              title: item.title,
              key: index,
              isLink: ""
            }, {
              icon: withCtx(() => [
                createElementVNode("u-image", {
                  class: "wu-cell-icon",
                  src: item.iconUrl,
                  mode: "widthFix"
                }, null, 8, ["src"])
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["onClick", "title"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ])
  ]);
}
const empty = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/empty/empty.nvue"]]);
export {
  empty as default
};
