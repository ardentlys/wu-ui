import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "wu-page__upload-item": { "": { "marginTop": 5 } } };
const _sfc_main = {
  data() {
    return {
      fileList1: [],
      fileList2: [],
      fileList3: [{
        url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
      }],
      fileList4: [
        {
          url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
        },
        {
          url: "https://cdn.uviewui.com/uview/swiper/1.jpg"
        }
      ],
      fileList5: [],
      fileList6: [],
      fileList7: []
    };
  },
  onLoad() {
  },
  methods: {
    // 删除图片
    deletePic(event) {
      this[`fileList${event.name}`].splice(event.index, 1);
    },
    // 新增图片
    async afterRead(event) {
      let lists = [].concat(event.file);
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中"
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url);
        let item = this[`fileList${event.name}`][fileListLen];
        this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
          status: "success",
          message: "",
          url: result
        }));
        fileListLen++;
      }
    },
    uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        uni.uploadFile({
          url: "http://www.example.com/upload",
          // 仅为示例，非真实的接口地址
          filePath: url,
          name: "file",
          formData: {
            user: "test"
          },
          success: (res) => {
            setTimeout(() => {
              resolve(res.data.data);
            }, 1e3);
          }
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_upload = resolveComponent("u-upload");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "基础用法"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__upload-item" }, [
            createVNode(_component_u_upload, {
              fileList: $data.fileList1,
              onAfterRead: $options.afterRead,
              onDelete: $options.deletePic,
              name: "1",
              multiple: "",
              maxCount: 10
            }, null, 8, ["fileList", "onAfterRead", "onDelete"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "上传视频"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__upload-item" }, [
            createVNode(_component_u_upload, {
              fileList: $data.fileList2,
              onAfterRead: $options.afterRead,
              onDelete: $options.deletePic,
              name: "2",
              multiple: "",
              maxCount: 10,
              accept: "video"
            }, null, 8, ["fileList", "onAfterRead", "onDelete"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "文件预览"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__upload-item" }, [
            createVNode(_component_u_upload, {
              fileList: $data.fileList3,
              onAfterRead: $options.afterRead,
              onDelete: $options.deletePic,
              name: "3",
              multiple: "",
              maxCount: 10,
              previewFullImage: true
            }, null, 8, ["fileList", "onAfterRead", "onDelete"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "隐藏上传按钮"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__upload-item" }, [
            createVNode(_component_u_upload, {
              fileList: $data.fileList4,
              onAfterRead: $options.afterRead,
              onDelete: $options.deletePic,
              name: "4",
              multiple: "",
              maxCount: 2
            }, null, 8, ["fileList", "onAfterRead", "onDelete"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "限制上传数量"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__upload-item" }, [
            createVNode(_component_u_upload, {
              fileList: $data.fileList5,
              onAfterRead: $options.afterRead,
              onDelete: $options.deletePic,
              name: "5",
              multiple: "",
              maxCount: 3
            }, null, 8, ["fileList", "onAfterRead", "onDelete"])
          ])
        ])
      ]),
      createElementVNode("view", { class: "wu-demo-block" }, [
        createElementVNode("u-text", { class: "wu-demo-block__title" }, "自定义上传样式"),
        createElementVNode("view", { class: "wu-demo-block__content" }, [
          createElementVNode("view", { class: "wu-page__upload-item" }, [
            createVNode(_component_u_upload, {
              fileList: $data.fileList6,
              onAfterRead: $options.afterRead,
              onDelete: $options.deletePic,
              name: "6",
              multiple: "",
              maxCount: 1,
              width: "250",
              height: "150"
            }, {
              default: withCtx(() => [
                createElementVNode("u-image", {
                  src: "https://cdn.uviewui.com/uview/demo/upload/positive.png",
                  mode: "widthFix",
                  style: { "width": "250px", "height": "150px" }
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["fileList", "onAfterRead", "onDelete"])
          ])
        ])
      ])
    ])
  ]);
}
const upload = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsB/upload/upload.nvue"]]);
export {
  upload as default
};
