<p align="center">
    <img alt="logo" src="https://wu.geeks.ink/logo.png?v2" width="150">
</p>
<strong>
    <h3 align="center" size="40px" style="
        margin: 0 0 30px;
        line-height: 40px !important;
        font-size: 40px !important;
        font-weight: bold;
        background: linear-gradient(to right, #94fcf0 0%, #6696ff 60%);
        -webkit-background-clip: text;
        color: transparent;">
        WU-UI
    </h3>
</strong>
<h3 align="center" size="20px" style="
    font-size: 20px;
    font-weight: bold; 
    background: linear-gradient(to right, #94fcf0 0%, #6696ff 60%);
    -webkit-background-clip: text;
    color: transparent;">多平台快速开发的UI框架(无论平台，一致体验)
</h3>

[![stars](https://img.shields.io/github/stars/ardentlys/wu-ui?style=flat-square&logo=GitHub)](https://github.com/ardentlys/wu-ui)
[![forks](https://img.shields.io/github/forks/ardentlys/wu-ui?style=flat-square&logo=GitHub)](https://github.com/ardentlys/wu-ui)
[![issues](https://img.shields.io/github/issues/ardentlys/wu-ui?style=flat-square&logo=GitHub)](https://github.com/ardentlys/wu-ui/issues)
[![Website](https://img.shields.io/badge/wuui-Up-ui?style=flat-square)](https://wu.geeks.ink/)
[![version](https://img.shields.io/github/package-json/v/ardentlys/wu-ui)](https://wu.geeks.ink/zh-CN/components/changelog.html)
[![license](https://img.shields.io/github/license/ardentlys/wu-ui)](https://en.wikipedia.org/wiki/MIT_License)

[![stars](https://gitee.com/ardentlys/wu-ui/badge/star.svg?theme=gvp)](https://gitee.com/ardentlys/wu-ui)
[![forks](https://gitee.com/ardentlys/wu-ui/badge/fork.svg?theme=gvp)](https://gitee.com/ardentlys/wu-ui)

## 官方群
### wu-ui官方1群: <a href="https://qm.qq.com/cgi-bin/qm/qr?k=wMDUlZILOnS_yBmzBYH1ADD85NqdC9uE&amp;jump_from=webapi&amp;authKey=8RK3knFoAV6/a/HnDEUWorC8EKN1RNezJJ4Y0CZoVU4RcOOGLoYwK79FhKEorai0" target="_blank">767943089</a>

## 说明
wu-ui(如虎添翼) 是 全面兼容多端的uniapp生态框架，基于vue2、vue3和nvue开发。丰富组件库，便捷工具库，简单高效。无论平台，一致体验。选择我们，开发更轻松！

## [官方文档：https://wu.geeks.ink](https://wu.geeks.ink)


## 预览
通过微信或浏览器扫码查看演示效果，后续上线小程序端等。
<br>
<br>
<img src="https://wu.geeks.ink/ys.png" width="250" height="250" >

## 链接

- [官方文档](https://wu.geeks.ink)
- [演示地址](https://h5.wu.geeks.ink)
- [更新日志](https://wu.geeks.ink/zh-CN/components/changelog.html)
- [关于我们](https://wu.geeks.ink/cooperation/about.html)
- [组件列表](#组件列表)

## 交流反馈
欢迎加入我们的QQ群交流反馈：[点此跳转](https://wu.geeks.ink/zh-CN/components/qqFeedBack.html)

## wu-ui产品特点
1. **`wu-ui` 是基于 `uview2.x` 改造而来，增加了对vue3的兼容、新的组件(未来这些组件甚至可能包含原生组件与业务中常用的组件)，无论平台，一致体验。感谢 `uview-ui` 作者的开源奉献，在这里再次感谢作者和所有开源的开发者，因为有了你们，社区才变得更加美好。**
2. **全端兼容: `wu-ui` 支持 vue2、vue3、app-vue、app-nvue、h5、小程序等。**
3. **扩展配置: 由于`wu-ui`特殊的组件单独导入的方式，内置的方法默认不再挂载到uni对象之上，也就意味着默认情况下不能在项目中直接使用uni.$w.xxx使用内置方法。但是可以通过扩展配置进行使用，使用方式请参考[扩展配置](https://wu.geeks.ink/zh-CN/components/extendedConfiguration.html)。**

## 快速开始
`wu-ui` 强烈建议通过 `下载插件并导入HbuilderX` 导入组件。或者下载完整 [wu-ui](https://ext.dcloud.net.cn/plugin?id=13992) 项目 将 `uni_modules` 复制到自己的项目。

请通过[快速上手](https://wu.geeks.ink/zh-CN/components/quickStart.html)了解更详细的内容。

## 使用方法
组件导入 `uni_modules` 后，直接在项目中使用，无需通过import引入组件。

```html
<template>
	<wu-button text="今朝有酒今朝醉,明日愁来明日愁"></wu-button>
</template>
```

## 扩展功能
`wu-ui` 内置了强大的工具函数、请求封装等，可以根据自身需求进行扩展配置，详情请查看扩展配置。

**注意：只有扩展配置后才能在自己的项目页面中使用组件库内置方法和变量等。**

## 组件列表
下表为 `wu-ui` 的组件单独下载列表，点击每个组件**点击下载&安装**即可在详情页面导入组件到项目，导入后请重新运行即可直接使用，符合[esaycom](https://uniapp.dcloud.net.cn/component/#easycom%E7%BB%84%E4%BB%B6%E8%A7%84%E8%8C%83)的规范，因此无需引入。

| 组件名 | 组件说明 |
| ----- | -------- |
| wu-calendar | [最全日历](https://wu.geeks.ink/zh-CN/components/calendar.html) |
| wu-sku | [商品多规格选择器](https://wu.geeks.ink/zh-CN/components/sku.html) |
| wu-image | [图片](https://wu.geeks.ink/zh-CN/components/image.html) |
| wu-button | [按钮](https://wu.geeks.ink/zh-CN/components/button.html) |
| wu-icon | [图标](https://wu.geeks.ink/zh-CN/components/icon.html) |
| wu-loading-icon | [加载动画](https://wu.geeks.ink/zh-CN/components/loadingIcon.html) |
| wu-layout | [布局](https://wu.geeks.ink/zh-CN/components/layout.html) |
| wu-link | [超链接](https://wu.geeks.ink/zh-CN/components/link.html) |
| wu-text | [文本](https://wu.geeks.ink/zh-CN/components/text.html) |
| wu-number-box | [步进器](https://wu.geeks.ink/zh-CN/components/numberBox.html) |
| wu-transition | [动画](https://wu.geeks.ink/zh-CN/components/transition.html) |
| wu-input | [输入框](https://wu.geeks.ink/zh-CN/components/input.html) |
| wu-code | [验证码](https://wu.geeks.ink/zh-CN/components/code.html) |
| wu-navbar | [自定义导航栏](https://wu.geeks.ink/zh-CN/components/navbar.html) |
| wu-status-bar | [顶部安全区域](https://ext.dcloud.net.cn/plugin?name=wu-status-bar) |
| wu-safe-bottom | [底部安全区域](https://ext.dcloud.net.cn/plugin?name=wu-safe-bottom) |
| wu-radio | [单选框](https://wu.geeks.ink/zh-CN/components/radio.html) |
| wu-checkbox | [复选框](https://wu.geeks.ink/zh-CN/components/checkbox.html) |
| wu-textarea | [文本域](https://wu.geeks.ink/zh-CN/components/textarea.html) |
| wu-gap | [间隔槽](https://wu.geeks.ink/zh-CN/components/gap.html) |
| wu-cell | [单元格](https://wu.geeks.ink/zh-CN/components/cell.html) |

## 版权信息
wu-ui遵循[MIT](https://en.wikipedia.org/wiki/MIT_License)开源协议，意味着您无需支付任何费用，也无需授权，即可将wu-ui应用到您的产品中。

## **bug**
`wu-ui` 目前仍处于开发阶段，并且由于目前仅有作者一人，开发速度有限，难免会产生bug，如果您遇见组件无法使用的情况，请您先不要生气，添加[官网q群](https://wu.geeks.ink/zh-CN/components/qqFeedBack.html)反馈即可，会在核实后，在官网产生bug的组件中会有专属的地方来展示您对组件的贡献(好的建议或好的组件提议(不需要您写，只需要您提出规划即可)也会享有同样的待遇)。

### **在此郑重谢过各位大佬，作者不图大家的钱财，只希望您体验感不错的情况下可以作者一个五星好评，您的好评亦是我们开源的动力。**


