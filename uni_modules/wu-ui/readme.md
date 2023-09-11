# wu-ui
###使用教程
#在main.js 引入  import uiwu from './uni_modules/wu-ui/js_sdk/index.js'
uiwu.http = 'www.baidu.com';//域名配置

Vue.prototype.$w = uiwu ;

##在页面上直接  this.$w.xxx  进行使用...

####多语言使用说明 
#目前只有三个语言的json文件  en.json   ja.json   tw.json  如需需要增加更多 自行新增对应的json文件  在 js_sdk文件里面的index.js进行引入 
##  使用  this.$w.lang('测试')
