
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#FFFFFF","navigationBar":{"backgroundColor":"#FFFFFF","titleText":"wu-ui","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"wu-ui","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.8.7","entryPagePath":"pages/example/components","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/example/components","meta":{"isQuit":true,"isEntry":true,"navigationBar":{"titleText":"wu-ui","type":"default"},"isNVue":true}},{"path":"pages/componentsA/transition/transition","meta":{"navigationBar":{"titleText":"过渡动画","type":"default"},"isNVue":true}},{"path":"pages/componentsA/test/test","meta":{"navigationBar":{"titleText":"测试","type":"default"},"isNVue":false}},{"path":"pages/componentsA/icon/icon","meta":{"navigationBar":{"titleText":"图标","type":"default"},"isNVue":true}},{"path":"pages/componentsA/cell/cell","meta":{"navigationBar":{"titleText":"单元格","type":"default"},"isNVue":true}},{"path":"pages/componentsA/line/line","meta":{"navigationBar":{"titleText":"线条","type":"default"},"isNVue":true}},{"path":"pages/componentsA/image/image","meta":{"navigationBar":{"titleText":"图片","type":"default"},"isNVue":true}},{"path":"pages/componentsA/link/link","meta":{"navigationBar":{"titleText":"超链接","type":"default"},"isNVue":true}},{"path":"pages/componentsA/button/button","meta":{"navigationBar":{"titleText":"按钮","type":"default"},"isNVue":true}},{"path":"pages/componentsA/loading-icon/loading-icon","meta":{"navigationBar":{"titleText":"加载中图标","type":"default"},"isNVue":true}},{"path":"pages/componentsA/overlay/overlay","meta":{"navigationBar":{"titleText":"遮罩层","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsA/loading-page/loading-page","meta":{"navigationBar":{"titleText":"加载页","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsA/popup/popup","meta":{"navigationBar":{"titleText":"弹窗","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsA/swipeAction/swipeAction","meta":{"navigationBar":{"titleText":"滑动单元格","type":"default"},"isNVue":true}},{"path":"pages/componentsA/sticky/sticky","meta":{"navigationBar":{"titleText":"吸顶","type":"default"},"isNVue":true}},{"path":"pages/componentsA/radio/radio","meta":{"navigationBar":{"titleText":"单选框","type":"default"},"isNVue":true}},{"path":"pages/componentsA/checkbox/checkbox","meta":{"navigationBar":{"titleText":"复选框","type":"default"},"isNVue":true}},{"path":"pages/componentsA/empty/empty","meta":{"navigationBar":{"titleText":"内容为空","type":"default"},"isNVue":true}},{"path":"pages/componentsA/backtop/backtop","meta":{"navigationBar":{"titleText":"返回顶部","type":"default"},"isNVue":true}},{"path":"pages/componentsA/divider/divider","meta":{"navigationBar":{"titleText":"分割线","type":"default"},"isNVue":true}},{"path":"pages/componentsA/rate/rate","meta":{"navigationBar":{"titleText":"评分","type":"default"},"isNVue":true}},{"path":"pages/componentsA/gap/gap","meta":{"navigationBar":{"titleText":"间隔槽","type":"default"},"isNVue":true}},{"path":"pages/componentsA/grid/grid","meta":{"navigationBar":{"titleText":"宫格","type":"default"},"isNVue":true}},{"path":"pages/componentsB/dropdown/dropdown","meta":{"navigationBar":{"titleText":"下拉菜单","type":"default"},"isNVue":true}},{"path":"pages/componentsB/actionSheet/actionSheet","meta":{"navigationBar":{"titleText":"上拉菜单","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsB/parse/parse","meta":{"navigationBar":{"titleText":"富文本解析器","type":"default"},"isNVue":true}},{"path":"pages/componentsB/parse/jump","meta":{"navigationBar":{"titleText":"内部链接","type":"default"},"isNVue":false}},{"path":"pages/componentsB/toast/toast","meta":{"navigationBar":{"titleText":"提示消息","type":"default"},"isNVue":true}},{"path":"pages/componentsB/keyboard/keyboard","meta":{"navigationBar":{"titleText":"键盘","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsB/slider/slider","meta":{"navigationBar":{"titleText":"滑动选择器","type":"default"},"isNVue":true}},{"path":"pages/componentsB/upload/upload","meta":{"navigationBar":{"titleText":"上传","type":"default"},"isNVue":true}},{"path":"pages/componentsB/notify/notify","meta":{"navigationBar":{"titleText":"消息提示","type":"default"},"isNVue":true}},{"path":"pages/componentsB/countDown/countDown","meta":{"navigationBar":{"titleText":"倒计时","type":"default"},"isNVue":true}},{"path":"pages/componentsB/color/color","meta":{"navigationBar":{"titleText":"色彩","type":"default"},"isNVue":true}},{"path":"pages/componentsB/numberBox/numberBox","meta":{"navigationBar":{"titleText":"步进器","type":"default"},"isNVue":true}},{"path":"pages/componentsB/countTo/countTo","meta":{"navigationBar":{"titleText":"数字滚动","type":"default"},"isNVue":true}},{"path":"pages/componentsB/search/search","meta":{"navigationBar":{"titleText":"搜索","type":"default"},"isNVue":true}},{"path":"pages/componentsB/badge/badge","meta":{"navigationBar":{"titleText":"徽标数","type":"default"},"isNVue":true}},{"path":"pages/componentsB/tag/tag","meta":{"navigationBar":{"titleText":"标签","type":"default"},"isNVue":true}},{"path":"pages/componentsB/alert/alert","meta":{"navigationBar":{"titleText":"警告","type":"default"},"isNVue":true}},{"path":"pages/componentsB/switch/switch","meta":{"navigationBar":{"titleText":"开关","type":"default"},"isNVue":true}},{"path":"pages/componentsB/collapse/collapse","meta":{"navigationBar":{"titleText":"折叠面板","type":"default"},"isNVue":true}},{"path":"pages/componentsB/code/code","meta":{"navigationBar":{"titleText":"验证码","type":"default"},"isNVue":true}},{"path":"pages/componentsB/noticeBar/noticeBar","meta":{"navigationBar":{"titleText":"滚动通知","type":"default"},"isNVue":true}},{"path":"pages/componentsB/progress/progress","meta":{"navigationBar":{"titleText":"进度条","type":"default"},"isNVue":true}},{"path":"pages/componentsB/tabbar/tabbar","meta":{"navigationBar":{"titleText":"Tabbar","type":"default"},"isNVue":true}},{"path":"pages/componentsC/table/table","meta":{"navigationBar":{"titleText":"表格","type":"default"},"isNVue":true}},{"path":"pages/componentsC/form/form","meta":{"navigationBar":{"titleText":"表单","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsC/textarea/textarea","meta":{"navigationBar":{"titleText":"文本域","type":"default"},"isNVue":true}},{"path":"pages/componentsC/noNetwork/noNetwork","meta":{"navigationBar":{"titleText":"无网络提示","type":"default"},"isNVue":true}},{"path":"pages/componentsC/loadmore/loadmore","meta":{"navigationBar":{"titleText":"加载更多","type":"default"},"isNVue":true}},{"path":"pages/componentsC/text/text","meta":{"navigationBar":{"titleText":"文本","type":"default"},"isNVue":true}},{"path":"pages/componentsC/steps/steps","meta":{"navigationBar":{"titleText":"步骤条","type":"default"},"isNVue":false}},{"path":"pages/componentsC/navbar/navbar","meta":{"navigationBar":{"titleText":"导航栏","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsC/skeleton/skeleton","meta":{"navigationBar":{"titleText":"骨架屏","type":"default"},"isNVue":true}},{"path":"pages/componentsC/input/input","meta":{"navigationBar":{"titleText":"输入框","type":"default"},"isNVue":true}},{"path":"pages/componentsC/album/album","meta":{"navigationBar":{"titleText":"相册","type":"default"},"isNVue":true}},{"path":"pages/componentsC/avatar/avatar","meta":{"navigationBar":{"titleText":"头像","type":"default"},"isNVue":true}},{"path":"pages/componentsC/readMore/readMore","meta":{"navigationBar":{"titleText":"阅读更多","type":"default"},"isNVue":true}},{"path":"pages/componentsC/layout/layout","meta":{"navigationBar":{"titleText":"布局","type":"default"},"isNVue":true}},{"path":"pages/componentsC/indexList/indexList","meta":{"navigationBar":{"titleText":"索引列表","type":"default"},"isNVue":true}},{"path":"pages/componentsC/tooltip/tooltip","meta":{"navigationBar":{"titleText":"长按提示","type":"default"},"isNVue":false}},{"path":"pages/componentsC/tabs/tabs","meta":{"navigationBar":{"titleText":"标签","type":"default"},"isNVue":true}},{"path":"pages/componentsC/list/list","meta":{"navigationBar":{"titleText":"列表","type":"default"},"isNVue":true}},{"path":"pages/componentsC/swiper/swiper","meta":{"navigationBar":{"titleText":"轮播","type":"default"},"isNVue":true}},{"path":"pages/componentsC/scrollList/scrollList","meta":{"navigationBar":{"titleText":"横向滚动列表","type":"default"},"isNVue":true}},{"path":"pages/componentsC/codeInput/codeInput","meta":{"navigationBar":{"titleText":"验证码输入","type":"default"},"isNVue":true}},{"path":"pages/componentsC/modal/modal","meta":{"navigationBar":{"titleText":"模态框","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsC/picker/picker","meta":{"navigationBar":{"titleText":"选择器","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsC/calendar/calendar","meta":{"navigationBar":{"titleText":"日历","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsC/datetimePicker/datetimePicker","meta":{"navigationBar":{"titleText":"时间选择","style":"custom","type":"default"},"isNVue":true}},{"path":"pages/componentsC/subsection/subsection","meta":{"navigationBar":{"titleText":"分段器","type":"default"},"isNVue":true}},{"path":"pages/componentsD/sku/sku","meta":{"navigationBar":{"titleText":"商品多规格选择器","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[{"wu-line-1":{"":{"lines":1,"textOverflow":"ellipsis","overflow":"hidden","flex":1}},"wu-line-2":{"":{"lines":2,"textOverflow":"ellipsis","overflow":"hidden","flex":1}},"wu-line-3":{"":{"lines":3,"textOverflow":"ellipsis","overflow":"hidden","flex":1}},"wu-line-4":{"":{"lines":4,"textOverflow":"ellipsis","overflow":"hidden","flex":1}},"wu-line-5":{"":{"lines":5,"textOverflow":"ellipsis","overflow":"hidden","flex":1}},"wu-border":{"":{"!borderWidth":0.5,"!borderColor":"#dadbde","borderStyle":"solid"}},"wu-border-top":{"":{"!borderTopWidth":0.5,"!borderColor":"#dadbde","borderTopStyle":"solid"}},"wu-border-left":{"":{"!borderLeftWidth":0.5,"!borderColor":"#dadbde","borderLeftStyle":"solid"}},"wu-border-right":{"":{"!borderRightWidth":0.5,"!borderColor":"#dadbde","borderRightStyle":"solid"}},"wu-border-bottom":{"":{"!borderBottomWidth":0.5,"!borderColor":"#dadbde","borderBottomStyle":"solid"}},"wu-border-top-bottom":{"":{"!borderTopWidth":0.5,"!borderBottomWidth":0.5,"!borderColor":"#dadbde","borderTopStyle":"solid","borderBottomStyle":"solid"}},"wu-reset-button":{"":{"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"backgroundColor":"rgba(0,0,0,0)","borderWidth":0}},"wu-hover-class":{"":{"opacity":0.7}},"wu-block":{"":{"paddingTop":14,"paddingRight":14,"paddingBottom":14,"paddingLeft":14}},"wu-block__section":{"":{"marginBottom":10}},"wu-block__title":{"":{"marginTop":10,"fontSize":15,"color":"#606266","marginBottom":10}},"wu-cell-icon":{"":{"width":"36rpx","height":"36rpx","marginRight":"8rpx"}},"wu-page":{"":{"paddingTop":15,"paddingRight":15,"paddingBottom":40,"paddingLeft":15}},"wu-demo-block":{"":{"flex":1,"marginBottom":23}},"wu-demo-block__content":{"":{"flexDirection":"column"}},"wu-demo-block__title":{"":{"fontSize":14,"color":"#8f9ca2","marginBottom":8,"flexDirection":"row"}}}];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  