import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import VueCookies from 'vue-cookies'

import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './plugins/element.js'
import ElementUI,{ Message } from 'element-ui'

Vue.config.productionTip = false

new Vue({
  router,
  $,
  store,
  render: h => h(App)
}).$mount('#app')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originalPush.call(this, location).catch(err => err)
}

// 为了实现Class的私有属性
const showMessage = Symbol('showMessage')
/**
 *  重写ElementUI的Message
 *  single默认值true，因为项目需求，默认只弹出一个，可以根据实际需要设置
 */
let messageInstance = null;
class DonMessage {
  success (options, single = true) {
    this[showMessage]('success', options, single)
  }
  warning (options, single = true) {
    this[showMessage]('warning', options, single)
  }
  info (options, single = true) {
    this[showMessage]('info', options, single)
  }
  error (options, single = true) {
    this[showMessage]('error', options, single)
  }
  [showMessage] (type, options, single) {
    if (messageInstance && single) {
      messageInstance.close()//先把原来的关闭
    }
    messageInstance = Message[type](options)//再创建新的消息
  }
}
Vue.use(ElementUI)
Vue.prototype.$message = new DonMessage()

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCookies)

