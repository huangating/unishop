import App from './App'
	// @import 'at.alicdn.com/t/c/font_4075334_kql9adjymoa.css'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

import store from './store/index.js'
// 给vue绑上$store这个属性
Vue.prototype.$store=store

Vue.config.productionTip = false
App.mpType = 'app'

// 权限跳转
Vue.prototype.navigateTo=(option)=>{
	// 如果是购物车页面必须先登录
	if(!store.state.user.loginStatus){
		uni.showToast({
			title:"请先登录",
			icon:"none"
		})
		return uni.navigateTo({
			url:'/pages/login/login'
		})
	}
	// 如果是其他的页面直接跳转
	uni.navigateTo(option)
}


const app = new Vue({
	store,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif