
<p align="center">
    <img alt="logo" src="https://www.uxframe.cn/logo/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">UxFrame 1.0.3</h3>
<h3 align="center">UxFrame是基于UNI-APP-X开发的低代码高性能UI框架</h3>

## UxFrame 愚人节不愚人，开源！！！如果您有任何问题或在2024年4月1日之前购买本插件想要退款的请随时通过QQ群：450704209 与我联系。我会为您提供最专业的解答和帮助，并与您分享与UniAppX开发相关的经验。再次感谢您的信任和支持！

## 前言介绍

欢迎使用UxFrame前端UI框架！我们的框架旨在为您的应用程序提供一套完整、灵活且易于使用的界面解决方案。通过使用我们的框架，您可以快速构建出外观精美、功能强大的前端界面，从而为您的用户提供更好的体验。

## 官方文档

[https://www.uxframe.cn](https://www.uxframe.cn)

## 交流反馈

欢迎加入我们的QQ群[450704209]交流反馈：[点击跳转](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ItVxW4K__0lR35nZSCwVSVd4tnfPlh3H&authKey=lMa8NBbpJMkABtLOkgmWGewtpO5bC07M4Qv4IbpA7bM52ngsT%2FR144LAt2boKErT&noverify=0&group_code=450704209)

## 使用方法

### 全局挂载
在main.uts中全局挂载$ux
```ts

import App from './App'
import { createSSRApp } from 'vue'

import { install } from '@/uni_modules/ux-frame/index.uts'

export function createApp() {
  const app = createSSRApp(App)
  
  app.config.globalProperties.$ux = install()
  
  return {
    app,
  }
}
```

使用API
```
this.$ux.doSomething()
```

无需`import`组件，直接引用即可。

```html
<template>
	<ux-button text="按钮"></ux-button>
</template>
```

## 1.0.5 功能特性快速了解 

![Image](https://www.uxframe.cn/source/intro/1.gif)
![Image](https://www.uxframe.cn/source/intro/2.gif)
![Image](https://www.uxframe.cn/source/intro/3.gif)
![Image](https://www.uxframe.cn/source/intro/4.gif)
![Image](https://www.uxframe.cn/source/intro/5.gif)

## 扫码体验

![Image](https://www.uxframe.cn/source/intro/download.png)
