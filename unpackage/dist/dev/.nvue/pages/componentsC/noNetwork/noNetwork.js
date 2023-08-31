import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "u-content": { "": { "paddingTop": 150, "paddingRight": 60, "paddingBottom": 0, "paddingLeft": 60, "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "u-content__circle": { "": { "backgroundColor": "#5ac725", "flexDirection": "row", "borderRadius": 100, "width": 60, "height": 60, "alignItems": "center", "justifyContent": "center" } }, "u-content__normal": { "": { "fontSize": 15, "color": "#5ac725", "marginTop": 15 } }, "u-content__tips": { "": { "color": "#909193", "fontSize": 13, "marginTop": 15, "textAlign": "center" } } };
const _sfc_main = {
  methods: {
    disconnected() {
      formatAppLog("log", "at pages/componentsC/noNetwork/noNetwork.nvue:26", "disconnected");
    },
    connected() {
      formatAppLog("log", "at pages/componentsC/noNetwork/noNetwork.nvue:29", "connected");
    },
    retry() {
      formatAppLog("log", "at pages/componentsC/noNetwork/noNetwork.nvue:32", "retry");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_no_network = resolveComponent("u-no-network");
  const _component_u_icon = resolveComponent("u-icon");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createVNode(_component_u_no_network, {
        onDisconnected: $options.disconnected,
        onConnected: $options.connected,
        onRetry: $options.retry
      }, null, 8, ["onDisconnected", "onConnected", "onRetry"]),
      createElementVNode("view", { class: "u-content" }, [
        createElementVNode("view", { class: "u-content__circle" }, [
          createVNode(_component_u_icon, {
            name: "checkbox-mark",
            color: "#fff",
            size: "30"
          })
        ]),
        createElementVNode("u-text", { class: "u-content__normal" }, "网络正常"),
        createElementVNode("u-text", { class: "u-content__tips" }, "请您断开设备的WiFi和数据连接(或开启飞行模式)，即可看到效果")
      ])
    ])
  ]);
}
const noNetwork = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/noNetwork/noNetwork.nvue"]]);
export {
  noNetwork as default
};
