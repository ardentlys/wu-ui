import { _ as __easycom_1, a as __easycom_2 } from "../../../wu-cell-group.js";
import { resolveComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../wu-icon.js";
import "../../../mixin.js";
import "../../../wu-line.js";
const _style_0 = { "wu-page": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } } };
const _sfc_main = {
  data() {
    return {
      index: 0,
      loading: false,
      columnData: [
        ["深圳", "厦门", "上海", "拉萨"],
        ["得州", "华盛顿", "纽约", "阿拉斯加"]
      ],
      columns1: [
        ["中国", "美国", "日本"]
      ],
      columns2: [
        ["中国", "美国", "日本"]
      ],
      columns3: [
        ["中国", "美国"],
        ["深圳", "厦门", "上海", "拉萨"]
      ],
      columns4: [
        ["中国", "美国"],
        ["深圳", "厦门", "上海", "拉萨"]
      ],
      columns5: [
        ["中国", "美国", "日本"]
      ],
      columns6: [
        ["中国", "美国", "日本"]
      ],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      list: [
        {
          title: "基础使用",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/2.png"
        },
        {
          title: "设置默认项",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/5.png"
        },
        {
          title: "多列联动",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/1.png"
        },
        {
          title: "加载中状态(切换第一列)",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/3.png"
        },
        {
          title: "设置标题",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/4.png"
        },
        {
          title: "允许点击遮罩关闭",
          iconUrl: "https://cdn.uviewui.com/uview/demo/picker/6.png"
        }
      ]
    };
  },
  methods: {
    changeHandler1(e) {
      this.change(e);
      const {
        columnIndex,
        value,
        values,
        index,
        // 微信小程序无法将picker实例传出来，只能通过ref操作
        picker: picker2 = this.$refs.uPicker3
      } = e;
      if (columnIndex === 0) {
        picker2.setColumnValues(1, this.columnData[index]);
      }
    },
    changeHandler2(e) {
      this.change(e);
      const {
        columnIndex,
        value,
        values,
        index,
        // 微信小程序无法将picker实例传出来，只能通过ref操作
        picker: picker2 = this.$refs.uPicker4
      } = e;
      if (columnIndex === 0) {
        this.loading = true;
        uni.$u.sleep(1500).then(() => {
          picker2.setColumnValues(1, this.columnData[index]);
          this.loading = false;
        });
      }
    },
    navigateBack() {
      uni.navigateBack();
    },
    change(e) {
    },
    showPicker(index) {
      this.index = index + 1;
      this[`show${index + 1}`] = true;
    },
    close() {
      this[`show${this.index}`] = false;
    },
    confirm(e) {
      this[`show${this.index}`] = false;
    },
    cancel() {
      this[`show${this.index}`] = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_navbar = resolveComponent("u-navbar");
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_u_picker = resolveComponent("u-picker");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode(
      "view",
      {
        class: "wu-page",
        ref: "page"
      },
      [
        createVNode(_component_u_navbar, {
          title: "选择器",
          onLeftClick: $options.navigateBack,
          safeAreaInsetTop: "",
          fixed: "",
          placeholder: ""
        }, null, 8, ["onLeftClick"]),
        createVNode(_component_wu_cell_group, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.list, (item, index) => {
                return openBlock(), createBlock(_component_wu_cell, {
                  onClick: ($event) => $options.showPicker(index),
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
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_u_picker, {
          show: $data.show1,
          columns: $data.columns1,
          onChange: $options.change,
          onCancel: $options.cancel,
          onConfirm: $options.confirm
        }, null, 8, ["show", "columns", "onChange", "onCancel", "onConfirm"]),
        createVNode(_component_u_picker, {
          show: $data.show2,
          columns: $data.columns2,
          defaultIndex: [1],
          onCancel: $options.cancel,
          onConfirm: $options.confirm,
          onChange: $options.change
        }, null, 8, ["show", "columns", "onCancel", "onConfirm", "onChange"]),
        createVNode(_component_u_picker, {
          show: $data.show3,
          columns: $data.columns3,
          ref: "uPicker3",
          onCancel: $options.cancel,
          onConfirm: $options.confirm,
          onChange: $options.changeHandler1
        }, null, 8, ["show", "columns", "onCancel", "onConfirm", "onChange"]),
        createVNode(_component_u_picker, {
          show: $data.show4,
          columns: $data.columns4,
          onCancel: $options.cancel,
          onConfirm: $options.confirm,
          loading: $data.loading,
          onChange: $options.changeHandler2,
          ref: "uPicker4"
        }, null, 8, ["show", "columns", "onCancel", "onConfirm", "loading", "onChange"]),
        createVNode(_component_u_picker, {
          show: $data.show5,
          columns: $data.columns5,
          title: "标题太长就会显示省略号",
          onCancel: $options.cancel,
          onConfirm: $options.confirm,
          onChange: $options.change
        }, null, 8, ["show", "columns", "onCancel", "onConfirm", "onChange"]),
        createVNode(_component_u_picker, {
          show: $data.show6,
          columns: $data.columns6,
          closeOnClickOverlay: "",
          onCancel: $options.cancel,
          onConfirm: $options.confirm,
          onClose: $options.close,
          onChange: $options.change
        }, null, 8, ["show", "columns", "onCancel", "onConfirm", "onClose", "onChange"])
      ],
      512
      /* NEED_PATCH */
    )
  ]);
}
const picker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsC/picker/picker.nvue"]]);
export {
  picker as default
};
