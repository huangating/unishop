import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
Vue.use(Vuex)
import shop from './modules/shop.js'
export default new Vuex.Store({
	modules:{
		shop,
		user
	}
})
