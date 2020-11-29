import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//1.安装插件
Vue.use(Vuex)

const state = {
  isLogin:false
}

//2.创建 store 对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

//3.挂载到 Vue 实例上
export default store
