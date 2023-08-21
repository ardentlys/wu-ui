import App from './App'
import wuUI from '@/uni_modules/wu-ui-tools/index.js'
import mixin from './common/mixin'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
Vue.use(wuUI)
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(wuUI)
  return {
    app
  }
}
// #endif