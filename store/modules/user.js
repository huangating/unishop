export default{
	state:{
		//登录状态
		loginStatus:false,
		// token
		token:null,
		//用户信息
		userInfo:{
			
		}
	},
	getters:{},
	mutations:{
		//一旦进入APP，立马执行这个方法获取之前存储的用户数据
		initUser(state){
			let userInfo = uni.getStorageSync('userInfo');
			if(userInfo){
				userInfo=JSON.parse(userInfo);
				state.userInfo=userInfo;
				state.loginStatus=true;
				state.token=userInfo.token
			}
		},
		//登录后保存用户信息
		login(state,userInfo){
			state.userInfo=userInfo;
			state.loginStatus=true;
			state.token=userInfo.token;
			// 持久化存储			
			uni.setStorageSync('userInfo',JSON.stringify(userInfo))
		},
		// 退出登录
		loginOut(state){
			state.loginStatus=false;
			state.userInfo={};
			state.token=null;
			//本地删除数据
			uni.removeStorageSync('userInfo')
		}
		
	},
	actions:{}
}