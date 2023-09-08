import { _ as __easycom_0$1 } from "../../wu-image.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, toDisplayString, Fragment, renderList, createBlock, withCtx } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
import { _ as __easycom_1, a as __easycom_2 } from "../../wu-cell-group.js";
import { _ as __easycom_4 } from "../../wu-gap.js";
import "../../wu-icon.js";
import "../../mixin.js";
import "../../wu-line.js";
const _style_0$1 = { "nav-wrap": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "position": "relative" } }, "lang": { "": { "position": "absolute", "top": 15, "right": 15 } }, "nav-title": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "flex-start" } }, "nav-info": { "": { "marginLeft": 15 } }, "nav-info__title": { "": { "flexDirection": "row", "alignItems": "center" } }, "nav-info__title__text": { "": { "color": "#6696ff", "fontSize": 25, "fontWeight": "bold", "textAlign": "left" } }, "logo": { "": { "width": 70, "height": 70 } }, "nav-slogan": { "": { "color": "#6696ff", "fontWeight": "800", "fontSize": 14, "marginTop": 5 } }, "nav-desc": { "": { "marginTop": 10, "fontSize": 14, "color": "#606266", "lineHeight": 20 } } };
const _sfc_main$1 = {
  props: {
    desc: String,
    title: String
  },
  data() {
    return {
      version: uni.$w.config.v
    };
  },
  methods: {
    jumpToWx() {
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_image = resolveEasycom(resolveDynamicComponent("wu-image"), __easycom_0$1);
  return openBlock(), createElementBlock("view", {
    class: "nav-wrap",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "nav-title" }, [
      createVNode(_component_wu_image, {
        src: "https://wu.geeks.ink/logo.png",
        width: "73px",
        height: "84px"
      }),
      createElementVNode("view", { class: "nav-info" }, [
        createElementVNode("view", {
          class: "nav-info__title",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.jumpToWx && $options.jumpToWx(...args))
        }, [
          createElementVNode(
            "u-text",
            { class: "nav-info__title__text" },
            "WU-UI " + toDisplayString($data.version),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("u-text", { class: "nav-slogan" }, "多平台快速开发的UI框架")
      ])
    ]),
    createElementVNode(
      "u-text",
      { class: "nav-desc" },
      toDisplayString($props.desc),
      1
      /* TEXT */
    )
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/components/page-nav/page-nav.vue"]]);
const list = [
  {
    groupName: "最新组件",
    groupName_en: "latest components",
    list: [
      {
        path: "/pages/componentsC/calendar/calendar",
        icon: "calendar",
        title: "Calendar 最全日历",
        title_en: "Calendar The most comprehensive calendar"
      },
      {
        path: "/pages/componentsD/sku/sku",
        icon: "sku",
        title: "SKU 商品多规格选择器",
        title_en: "SKU commodity multi-spec selector"
      },
      {
        path: "/pages/componentsA/image/image",
        icon: "image",
        title: "Image 图片",
        title_en: "Image"
      }
    ]
  },
  {
    groupName: "基础组件",
    groupName_en: "Basic components",
    list: [
      {
        path: "/pages/componentsB/color/color",
        icon: "color",
        title: "Color 色彩",
        title_en: "Color"
      },
      {
        path: "/pages/componentsA/icon/icon",
        icon: "icon",
        title: "Icon 图标",
        title_en: "Icon"
      },
      {
        path: "/pages/componentsA/image/image",
        icon: "image",
        title: "Image 图片",
        title_en: "Image"
      },
      {
        path: "/pages/componentsA/button/button",
        icon: "button",
        title: "Button 按钮",
        title_en: "Button"
      },
      {
        path: "/pages/componentsC/text/text",
        icon: "text",
        title: "Text 文本",
        title_en: "Text"
      },
      {
        path: "/pages/componentsC/layout/layout",
        icon: "layout",
        title: "Layout 布局",
        title_en: "Layout"
      },
      {
        path: "/pages/componentsA/cell/cell",
        icon: "cell",
        title: "Cell 单元格",
        title_en: "Cell"
      }
      // {
      // 	path: '/pages/componentsB/badge/badge',
      // 	icon: 'badge',
      // 	title: 'Badge 徽标数',
      // 	title_en: 'Badge'
      // }, {
      // 	path: '/pages/componentsB/tag/tag',
      // 	icon: 'tag',
      // 	title: 'Tag 标签',
      // 	title_en: 'Tag'
      // }, {
      // 	path: '/pages/componentsA/loading-icon/loading-icon',
      // 	icon: 'loading',
      // 	title: 'Loading 加载动画',
      // 	title_en: 'loading Icon'
      // }, {
      // 	path: '/pages/componentsA/loading-page/loading-page',
      // 	icon: 'loading-page',
      // 	title: 'Loading page 加载页',
      // 	title_en: 'Loading Page'
      // }
    ]
  },
  {
    groupName: "表单组件",
    groupName_en: "Form components",
    list: [
      // {
      // 	path: '/pages/componentsC/form/form',
      // 	icon: 'form',
      // 	title: 'Form 表单',
      // 	title_en: 'Form'
      // }, 
      {
        path: "/pages/componentsC/calendar/calendar",
        icon: "calendar",
        title: "Calendar 最全日历",
        title_en: "Calendar The most comprehensive calendar"
      },
      // {
      // 	path: '/pages/componentsB/keyboard/keyboard',
      // 	icon: 'keyboard',
      // 	title: 'Keyboard 键盘',
      // 	title_en: 'Keyboard'
      // }, {
      // 	path: '/pages/componentsC/picker/picker',
      // 	icon: 'picker',
      // 	title: 'Picker 选择器',
      // 	title_en: 'Picker'
      // }, {
      // 	path: '/pages/componentsC/datetimePicker/datetimePicker',
      // 	icon: 'datetimePicker',
      // 	title: 'DatetimePicker 时间选择器',
      // 	title_en: 'Picker'
      // }, {
      // 	path: '/pages/componentsA/rate/rate',
      // 	icon: 'rate',
      // 	title: 'Rate 评分',
      // 	title_en: 'Rate'
      // }, {
      // 	path: '/pages/componentsB/search/search',
      // 	icon: 'search',
      // 	title: 'Search 搜索',
      // 	title_en: 'Search'
      // }, 
      {
        path: "/pages/componentsB/numberBox/numberBox",
        icon: "numberBox",
        title: "NumberBox 步进器",
        title_en: "NumberBox"
      },
      // {
      // 	path: '/pages/componentsB/upload/upload',
      // 	icon: 'upload',
      // 	title: 'Upload 上传',
      // 	title_en: 'Upload'
      // }, 
      {
        path: "/pages/componentsB/code/code",
        icon: "code",
        title: "Code 验证码倒计时",
        title_en: "VerificationCode"
      },
      {
        path: "/pages/componentsC/input/input",
        icon: "field",
        title: "Input 输入框",
        title_en: "Input"
      },
      {
        path: "/pages/componentsC/textarea/textarea",
        icon: "textarea",
        title: "Textarea 文本域",
        title_en: "Textarea"
      },
      {
        path: "/pages/componentsA/checkbox/checkbox",
        icon: "checkbox",
        title: "Checkbox 复选框",
        title_en: "Checkbox"
      },
      {
        path: "/pages/componentsA/radio/radio",
        icon: "radio",
        title: "Radio 单选框",
        title_en: "Radio"
      }
      // {
      // 	path: '/pages/componentsB/switch/switch',
      // 	icon: 'switch',
      // 	title: 'Switch 开关选择器',
      // 	title_en: 'Switch'
      // }, {
      // 	path: '/pages/componentsB/slider/slider',
      // 	icon: 'slider',
      // 	title: 'Slider 滑动选择器',
      // 	title_en: 'Slider'
      // }, {
      // 	path: '/pages/componentsC/album/album',
      // 	icon: 'album',
      // 	title: 'Album 相册',
      // 	title_en: 'Album'
      // },
    ]
  },
  // {
  // 	groupName: '数据组件',
  // 	groupName_en: 'Data components',
  // 	list: [
  // 		{
  // 			path: '/pages/componentsC/list/list',
  // 			icon: 'list',
  // 			title: 'List 列表',
  // 			title_en: 'List'
  // 		}, {
  // 			path: '/pages/componentsB/progress/progress',
  // 			icon: 'progress',
  // 			title: 'Progress 进度条',
  // 			title_en: 'Progress'
  // 		},
  // 		// {
  // 		// 	path: '/pages/componentsC/table/table',
  // 		// 	icon: 'table',
  // 		// 	title: 'Table 表格（暂无）',
  // 		// 	title_en: 'Table',
  // 		// },
  // 		{
  // 			path: '/pages/componentsB/countDown/countDown',
  // 			icon: 'countDown',
  // 			title: 'CountDown 倒计时',
  // 			title_en: 'CountDown'
  // 		}, {
  // 			path: '/pages/componentsB/countTo/countTo',
  // 			icon: 'countTo',
  // 			title: 'CountTo 数字滚动',
  // 			title_en: 'CountTo'
  // 		}
  // 	]
  // }, 
  // {
  // 	groupName: '反馈组件',
  // 	groupName_en: 'Feedback components',
  // 	list: [{
  // 			path: '/pages/componentsC/tooltip/tooltip',
  // 			icon: 'tooltip',
  // 			title: 'Tooltip 长按提示',
  // 			title_en: 'ActionSheet'
  // 		}, {
  // 			path: '/pages/componentsB/actionSheet/actionSheet',
  // 			icon: 'actionSheet',
  // 			title: 'ActionSheet 上拉菜单',
  // 			title_en: 'ActionSheet'
  // 		}, {
  // 			path: '/pages/componentsB/alert/alert',
  // 			icon: 'alert',
  // 			title: 'Alert 警告提示',
  // 			title_en: 'Alert'
  // 		}, {
  // 			path: '/pages/componentsB/toast/toast',
  // 			icon: 'toast',
  // 			title: 'Toast 消息提示',
  // 			title_en: 'Toast'
  // 		}, {
  // 			path: '/pages/componentsB/noticeBar/noticeBar',
  // 			icon: 'noticeBar',
  // 			title: 'NoticeBar 滚动通知',
  // 			title_en: 'NoticeBar'
  // 		}, {
  // 			path: '/pages/componentsB/notify/notify',
  // 			icon: 'notify',
  // 			title: 'Notify 消息提示',
  // 			title_en: 'Notify'
  // 		}, {
  // 			path: '/pages/componentsA/swipeAction/swipeAction',
  // 			icon: 'swipeAction',
  // 			title: 'SwipeAction 滑动单元格',
  // 			title_en: 'SwipeAction'
  // 		}, {
  // 			path: '/pages/componentsB/collapse/collapse',
  // 			icon: 'collapse',
  // 			title: 'Collapse 折叠面板',
  // 			title_en: 'Collapse'
  // 		}, {
  // 			path: '/pages/componentsA/popup/popup',
  // 			icon: 'popup',
  // 			title: 'Popup 弹出层',
  // 			title_en: 'Popup'
  // 		}, {
  // 			path: '/pages/componentsC/modal/modal',
  // 			icon: 'modal',
  // 			title: 'Modal 模态框',
  // 			title_en: 'Modal'
  // 		}
  // 		// {
  // 		// 	path: '/pages/componentsA/fullScreen/fullScreen',
  // 		// 	icon: 'pressingScreen',
  // 		// 	title: 'fullScreen 压窗屏（暂无）',
  // 		// 	title_en: 'fullScreen',
  // 		// },
  // 	]
  // }, 
  // {
  // 	groupName: '布局组件',
  // 	groupName_en: 'Layout components',
  // 	list: [{
  // 			path: '/pages/componentsC/scrollList/scrollList',
  // 			icon: 'scrollList',
  // 			title: 'ScrollList 横向滚动列表',
  // 			title_en: 'ScrollList'
  // 		}, {
  // 			path: '/pages/componentsA/line/line',
  // 			icon: 'line',
  // 			title: 'Line 线条',
  // 			title_en: 'Line'
  // 		}, {
  // 			path: '/pages/componentsA/overlay/overlay',
  // 			icon: 'mask',
  // 			title: 'Overlay 遮罩层',
  // 			title_en: 'Overlay'
  // 		},
  //
  // 		{
  // 			path: '/pages/componentsC/noNetwork/noNetwork',
  // 			icon: 'noNetwork',
  // 			title: 'NoNetwork 无网络提示',
  // 			title_en: 'NoNetwork'
  // 		},
  //
  // 		{
  // 			path: '/pages/componentsA/grid/grid',
  // 			icon: 'grid',
  // 			title: 'Grid 宫格布局',
  // 			title_en: 'Grid'
  // 		}, {
  // 			path: '/pages/componentsC/swiper/swiper',
  // 			icon: 'swiper',
  // 			title: 'Swiper 轮播图',
  // 			title_en: 'Swiper'
  // 		}, {
  // 			path: '/pages/componentsC/skeleton/skeleton',
  // 			icon: 'skeleton',
  // 			title: 'Skeleton 骨架屏',
  // 			title_en: 'Skeleton'
  // 		}, {
  // 			path: '/pages/componentsA/sticky/sticky',
  // 			icon: 'sticky',
  // 			title: 'Sticky 吸顶',
  // 			title_en: 'Sticky'
  // 		},
  // 		{
  // 			path: '/pages/componentsA/divider/divider',
  // 			icon: 'divider',
  // 			title: 'Divider 分割线',
  // 			title_en: 'Divider'
  // 		}
  // 	]
  // },
  {
    groupName: "导航组件",
    groupName_en: "Navigation components",
    list: [
      // 		// {
      // 		// 	path: '/pages/componentsB/dropdown/dropdown',
      // 		// 	icon: 'dropdown',
      // 		// 	title: 'Dropdown 下拉菜单',
      // 		// 	title_en: 'Dropdown',
      // 		// },
      // 		{
      // 			path: '/pages/componentsB/tabbar/tabbar',
      // 			icon: 'tabbar',
      // 			title: 'Tabbar 底部导航栏',
      // 			title_en: 'Tabbar'
      // 		}, {
      // 			path: '/pages/componentsA/backtop/backtop',
      // 			icon: 'backTop',
      // 			title: 'BackTop 返回顶部',
      // 			title_en: 'BackTop'
      // 		},
      {
        path: "/pages/componentsC/navbar/navbar",
        icon: "navbar",
        title: "Navbar 导航栏",
        title_en: "Navbar"
      }
      // {
      // 			path: '/pages/componentsC/tabs/tabs',
      // 			icon: 'tabs',
      // 			title: 'Tabs 标签',
      // 			title_en: 'Tabs'
      // 		},
      // 		//
      // 		// {
      // 		// 	path: '/pages/template/order/order',
      // 		// 	icon: 'tabsSwiper',
      // 		// 	title: 'TabsSwiper 全屏选项卡（暂无）',
      // 		// 	title_en: 'TabsSwiper',
      // 		// },
      // 		//
      // 		{
      // 			path: '/pages/componentsC/subsection/subsection',
      // 			icon: 'subsection',
      // 			title: 'Subsection 分段器',
      // 			title_en: 'Subsection'
      // 		}, {
      // 			path: '/pages/componentsC/indexList/indexList',
      // 			icon: 'indexList',
      // 			title: 'IndexList 索引列表',
      // 			title_en: 'IndexList'
      // 		}, {
      // 			path: '/pages/componentsC/steps/steps',
      // 			icon: 'steps',
      // 			title: 'Steps 步骤条',
      // 			title_en: 'Steps'
      // 		}, {
      // 			path: '/pages/componentsA/empty/empty',
      // 			icon: 'empty',
      // 			title: 'Empty 内容为空',
      // 			title_en: 'Empty'
      // 		}
    ]
  },
  {
    groupName: "其他组件",
    groupName_en: "Other components",
    list: [
      //  {
      // 			path: '/pages/componentsB/parse/parse',
      // 			icon: 'parse',
      // 			title: 'Parse 富文本解析器',
      // 			title_en: 'Parse'
      // 		}, {
      // 			path: '/pages/componentsC/codeInput/codeInput',
      // 			icon: 'messageInput',
      // 			title: 'CodeInput 验证码输入',
      // 			title_en: 'CodeInput'
      // 		},
      // 		// {
      // 		// 	path: '/pages/componentsC/avatarCropper/avatarCropper',
      // 		// 	icon: 'avatarCropper',
      // 		// 	title: 'AvatarCropper 头像裁剪（暂无）',
      // 		// 	title_en: 'AvatarCropper',
      // 		// },
      // 		{
      // 			path: '/pages/componentsC/loadmore/loadmore',
      // 			icon: 'loadmore',
      // 			title: 'Loadmore 加载更多',
      // 			title_en: 'Loadmore'
      // 		}, {
      // 			path: '/pages/componentsC/readMore/readMore',
      // 			icon: 'readMore',
      // 			title: 'ReadMore 展开阅读更多',
      // 			title_en: 'ReadMore'
      // 		},
      // 		// {
      // 		// 	path: '/pages/componentsA/lazyLoad/lazyLoad',
      // 		// 	icon: 'lazyLoad',
      // 		// 	title: 'LazyLoad 懒加载（暂无）',
      // 		// 	title_en: 'LazyLoad',
      // 		// },
      {
        path: "/pages/componentsA/gap/gap",
        icon: "gap",
        title: "Gap 间隔槽",
        title_en: "Gap"
      }
      // {
      // 			path: '/pages/componentsC/avatar/avatar',
      // 			icon: 'avatar',
      // 			title: 'Avatar 头像',
      // 			title_en: 'Avatar'
      // 		}, {
      // 			path: '/pages/componentsA/link/link',
      // 			icon: 'link',
      // 			title: 'Link 超链接',
      // 			title_en: 'Link'
      // 		}, {
      // 			path: '/pages/componentsA/transition/transition',
      // 			icon: 'transition',
      // 			title: 'transition 动画',
      // 			title_en: '动画'
      // 		}
    ]
  },
  {
    groupName: "业务组件",
    groupName_en: "business component",
    list: [{
      path: "/pages/componentsD/sku/sku",
      icon: "sku",
      title: "SKU 商品多规格选择器",
      title_en: "SKU commodity multi-spec selector"
    }]
  }
];
const pages = [
  {
    path: "pages/example/components",
    style: {
      navigationBarTitleText: "wu-ui"
    }
  }
];
const subPackages = [
  {
    root: "pages/componentsA",
    pages: [
      {
        path: "transition/transition",
        style: {
          navigationBarTitleText: "过渡动画"
        }
      },
      {
        path: "test/test",
        style: {
          navigationBarTitleText: "测试"
        }
      },
      {
        path: "icon/icon",
        style: {
          navigationBarTitleText: "图标"
        }
      },
      {
        path: "cell/cell",
        style: {
          navigationBarTitleText: "单元格"
        }
      },
      {
        path: "line/line",
        style: {
          navigationBarTitleText: "线条"
        }
      },
      {
        path: "image/image",
        style: {
          navigationBarTitleText: "图片"
        }
      },
      {
        path: "link/link",
        style: {
          navigationBarTitleText: "超链接"
        }
      },
      {
        path: "button/button",
        style: {
          navigationBarTitleText: "按钮"
        }
      },
      {
        path: "loading-icon/loading-icon",
        style: {
          navigationBarTitleText: "加载中图标"
        }
      },
      {
        path: "overlay/overlay",
        style: {
          navigationBarTitleText: "遮罩层",
          navigationStyle: "custom"
        }
      },
      {
        path: "loading-page/loading-page",
        style: {
          navigationBarTitleText: "加载页",
          navigationStyle: "custom"
        }
      },
      {
        path: "popup/popup",
        style: {
          navigationBarTitleText: "弹窗",
          navigationStyle: "custom"
        }
      },
      {
        path: "swipeAction/swipeAction",
        style: {
          navigationBarTitleText: "滑动单元格"
        }
      },
      {
        path: "sticky/sticky",
        style: {
          navigationBarTitleText: "吸顶"
        }
      },
      {
        path: "radio/radio",
        style: {
          navigationBarTitleText: "单选框"
        }
      },
      {
        path: "checkbox/checkbox",
        style: {
          navigationBarTitleText: "复选框"
        }
      },
      {
        path: "empty/empty",
        style: {
          navigationBarTitleText: "内容为空"
        }
      },
      {
        path: "backtop/backtop",
        style: {
          navigationBarTitleText: "返回顶部"
        }
      },
      {
        path: "divider/divider",
        style: {
          navigationBarTitleText: "分割线"
        }
      },
      {
        path: "rate/rate",
        style: {
          navigationBarTitleText: "评分"
        }
      },
      {
        path: "gap/gap",
        style: {
          navigationBarTitleText: "间隔槽"
        }
      },
      {
        path: "grid/grid",
        style: {
          navigationBarTitleText: "宫格"
        }
      }
    ]
  },
  {
    root: "pages/componentsB",
    pages: [
      {
        path: "dropdown/dropdown",
        style: {
          navigationBarTitleText: "下拉菜单"
        }
      },
      {
        path: "actionSheet/actionSheet",
        style: {
          navigationBarTitleText: "上拉菜单",
          navigationStyle: "custom"
        }
      },
      {
        path: "parse/parse",
        style: {
          navigationBarTitleText: "富文本解析器"
        }
      },
      {
        path: "parse/jump",
        style: {
          navigationBarTitleText: "内部链接"
        }
      },
      {
        path: "toast/toast",
        style: {
          navigationBarTitleText: "提示消息"
        }
      },
      {
        path: "keyboard/keyboard",
        style: {
          navigationBarTitleText: "键盘",
          navigationStyle: "custom"
        }
      },
      {
        path: "slider/slider",
        style: {
          navigationBarTitleText: "滑动选择器"
        }
      },
      {
        path: "upload/upload",
        style: {
          navigationBarTitleText: "上传"
        }
      },
      {
        path: "notify/notify",
        style: {
          navigationBarTitleText: "消息提示"
        }
      },
      {
        path: "countDown/countDown",
        style: {
          navigationBarTitleText: "倒计时"
        }
      },
      {
        path: "color/color",
        style: {
          navigationBarTitleText: "色彩"
        }
      },
      {
        path: "numberBox/numberBox",
        style: {
          navigationBarTitleText: "步进器"
        }
      },
      {
        path: "countTo/countTo",
        style: {
          navigationBarTitleText: "数字滚动"
        }
      },
      {
        path: "search/search",
        style: {
          navigationBarTitleText: "搜索"
        }
      },
      {
        path: "badge/badge",
        style: {
          navigationBarTitleText: "徽标数"
        }
      },
      {
        path: "tag/tag",
        style: {
          navigationBarTitleText: "标签"
        }
      },
      {
        path: "alert/alert",
        style: {
          navigationBarTitleText: "警告"
        }
      },
      {
        path: "switch/switch",
        style: {
          navigationBarTitleText: "开关"
        }
      },
      {
        path: "collapse/collapse",
        style: {
          navigationBarTitleText: "折叠面板"
        }
      },
      {
        path: "code/code",
        style: {
          navigationBarTitleText: "验证码"
        }
      },
      {
        path: "noticeBar/noticeBar",
        style: {
          navigationBarTitleText: "滚动通知"
        }
      },
      {
        path: "progress/progress",
        style: {
          navigationBarTitleText: "进度条"
        }
      },
      {
        path: "tabbar/tabbar",
        style: {
          navigationBarTitleText: "Tabbar"
        }
      }
    ]
  },
  {
    root: "pages/componentsC",
    pages: [
      {
        path: "table/table",
        style: {
          navigationBarTitleText: "表格"
        }
      },
      {
        path: "form/form",
        style: {
          navigationBarTitleText: "表单",
          navigationStyle: "custom"
        }
      },
      {
        path: "textarea/textarea",
        style: {
          navigationBarTitleText: "文本域"
        }
      },
      {
        path: "noNetwork/noNetwork",
        style: {
          navigationBarTitleText: "无网络提示"
        }
      },
      {
        path: "loadmore/loadmore",
        style: {
          navigationBarTitleText: "加载更多"
        }
      },
      {
        path: "text/text",
        style: {
          navigationBarTitleText: "文本"
        }
      },
      {
        path: "steps/steps",
        style: {
          navigationBarTitleText: "步骤条"
        }
      },
      {
        path: "navbar/navbar",
        style: {
          navigationBarTitleText: "导航栏",
          navigationStyle: "custom"
        }
      },
      {
        path: "skeleton/skeleton",
        style: {
          navigationBarTitleText: "骨架屏"
        }
      },
      {
        path: "input/input",
        style: {
          navigationBarTitleText: "输入框"
        }
      },
      {
        path: "album/album",
        style: {
          navigationBarTitleText: "相册"
        }
      },
      {
        path: "avatar/avatar",
        style: {
          navigationBarTitleText: "头像"
        }
      },
      {
        path: "readMore/readMore",
        style: {
          navigationBarTitleText: "阅读更多"
        }
      },
      {
        path: "layout/layout",
        style: {
          navigationBarTitleText: "布局"
        }
      },
      {
        path: "indexList/indexList",
        style: {
          navigationBarTitleText: "索引列表"
        }
      },
      {
        path: "tooltip/tooltip",
        style: {
          navigationBarTitleText: "长按提示"
        }
      },
      {
        path: "tabs/tabs",
        style: {
          navigationBarTitleText: "标签"
        }
      },
      {
        path: "list/list",
        style: {
          navigationBarTitleText: "列表"
        }
      },
      {
        path: "swiper/swiper",
        style: {
          navigationBarTitleText: "轮播"
        }
      },
      {
        path: "scrollList/scrollList",
        style: {
          navigationBarTitleText: "横向滚动列表"
        }
      },
      {
        path: "codeInput/codeInput",
        style: {
          navigationBarTitleText: "验证码输入"
        }
      },
      {
        path: "modal/modal",
        style: {
          navigationBarTitleText: "模态框",
          navigationStyle: "custom"
        }
      },
      {
        path: "picker/picker",
        style: {
          navigationBarTitleText: "选择器",
          navigationStyle: "custom"
        }
      },
      {
        path: "calendar/calendar",
        style: {
          navigationBarTitleText: "日历",
          navigationStyle: "custom"
        }
      },
      {
        path: "datetimePicker/datetimePicker",
        style: {
          navigationBarTitleText: "时间选择",
          navigationStyle: "custom"
        }
      },
      {
        path: "subsection/subsection",
        style: {
          navigationBarTitleText: "分段器"
        }
      }
    ]
  },
  {
    root: "pages/componentsD",
    pages: [
      {
        path: "sku/sku",
        style: {
          navigationBarTitleText: "商品多规格选择器"
        }
      }
    ]
  }
];
const preloadRule = {
  "pages/example/components": {
    network: "all",
    packages: [
      "pages/componentsA",
      "pages/componentsB"
    ]
  }
};
const globalStyle = {
  navigationBarTextStyle: "black",
  navigationBarTitleText: "wu-ui",
  navigationBarBackgroundColor: "#FFFFFF",
  backgroundColor: "#FFFFFF"
};
const pages$1 = {
  pages,
  subPackages,
  preloadRule,
  globalStyle
};
const _style_0 = {};
const _style_1 = { "wu-cell-icon1": { "": { "width": "36rpx", "height": "36rpx", "marginRight": "8rpx" } }, "wu-cell-group__title__text": { "": { "fontWeight": "bold" } } };
const _sfc_main = {
  data() {
    return {
      list,
      desc: "全面兼容多端的uniapp生态框架，基于vue2、vue3和nvue开发。丰富组件库，便捷工具库，简单高效。无论平台，一致体验。选择我们，开发更轻松！"
    };
  },
  computed: {
    getIcon() {
      return (path) => {
        return "/static/icon/" + path + ".png";
      };
    }
  },
  onLoad(opt) {
    let findComponentPath = false;
    for (let i = 0; i < pages$1.subPackages.length; i++) {
      let item = pages$1.subPackages[i];
      if (findComponentPath) {
        break;
      }
      for (let p = 0; p < item.pages.length; p++) {
        let page = item.pages[p];
        if (page.path.includes(opt.componentName + "/" + opt.componentName)) {
          uni.navigateTo({
            url: "/" + item.root + "/" + page.path
          });
          findComponentPath = true;
          break;
        }
      }
    }
  },
  methods: {
    openPage(detail) {
      const path = detail.name;
      if (uni.$w.os() === "android") {
        const noSupportForAndroid = ["steps"];
        for (let i = 0; i < noSupportForAndroid.length; i++) {
          if (path.indexOf(noSupportForAndroid[i]) > -1) {
            return uni.$w.toast("安卓nvue下暂不支持此组件");
          }
        }
      }
      uni.$w.route({
        url: path
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_page_nav = resolveEasycom(resolveDynamicComponent("page-nav"), __easycom_0);
  const _component_wu_cell = resolveEasycom(resolveDynamicComponent("wu-cell"), __easycom_1);
  const _component_wu_cell_group = resolveEasycom(resolveDynamicComponent("wu-cell-group"), __easycom_2);
  const _component_wu_gap = resolveEasycom(resolveDynamicComponent("wu-gap"), __easycom_4);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wrap" }, [
      createVNode(_component_page_nav, { desc: $data.desc }, null, 8, ["desc"]),
      createElementVNode("view", { class: "list-wrap" }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($data.list, (item, index) => {
            return openBlock(), createBlock(_component_wu_cell_group, {
              "title-bg-color": "rgb(243, 244, 246)",
              title: item.groupName,
              key: index
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(item.list, (item1, index1) => {
                    return openBlock(), createBlock(_component_wu_cell, {
                      titleStyle: { fontWeight: 500 },
                      title: item1.title,
                      key: index1,
                      isLink: "",
                      onClick: $options.openPage,
                      name: item1.path
                    }, {
                      icon: withCtx(() => [
                        createElementVNode("u-image", {
                          class: "wu-cell-icon1",
                          src: $options.getIcon(item1.icon),
                          mode: "widthFix"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["title", "onClick", "name"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["title"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      createVNode(_component_wu_gap, {
        height: "30",
        bgColor: "#fff"
      })
    ])
  ]);
}
const components = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/example/components.nvue"]]);
export {
  components as default
};
