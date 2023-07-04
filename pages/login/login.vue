<template>
	<swiper vertical="true" style="height: 100vh;">
		<swiper-item>
			<scroll-view >
				<view class="login-top">
					<view class="img-login">
						<image class="lo-img" src="../../static/img/login.jpg" mode=""></image>
					</view>
					<view class="text-login">
						<text>手机号注册</text>
					</view>
					<view class="other-login">
						<view class="other-text">
							<view class="text-ot">
								或者用以下方式登录
							</view>
						</view>
					</view>
					<view class="other-image">
						<view class="other-item">
							<view><image class="ot-img" src="../../static/img/wb.jpg" mode=""></image></view>
							<view><text class="img-text">微博</text></view>
						</view>
						<view class="other-item">
							<view><image class="ot-img" src="../../static/img/wx.jpg" mode=""></image></view>
							<view><text class="img-text">微信</text></view>
						</view>
						<view class="other-item">
							<view><image class="ot-img" src="../../static/img/QQ.jpg" mode=""></image></view>
							<view><text class="img-text">QQ</text></view>
						</view>
						
					</view>
					<view class="goRegister">
						<view class="text-re">
							<text>已有账号，去登录</text>
						</view>
						<view class="re-img">
							<image class="down-re" src="../../static/img/down.png" mode=""></image>
						</view>
					</view>
				</view>
			</scroll-view>
		</swiper-item>
		<swiper-item>
			<scroll-view >
				<view class="login-bottom">
				
					<view class="goLogin">
						<view class="text-lo">
							<text>没有账号，去注册</text>
						</view>
						<view class="re-img">
							<image class="down-re" src="../../static/img/up.png" mode=""></image>
						</view>
					</view>
				
					<view class="inp-register">
						<view class="inp">
							<text>账号：</text>
							<input type="text" v-model="userName" placeholder="请输入手机号/昵称">
						</view>
						
						<view class="inp">
							<text>密码：</text>
							<input type="password" v-model="userPwd" placeholder="请输入6-16位字符">
						</view>
						<view class="text-re">
							<text>忘记密码？</text>
							<text>免密登录</text>
						</view>
					</view>
					
					<view class="text-login">
						<text @tap="submit">登录</text>
					</view>
					<view class="other-login">
						<view class="other-text">
							<view class="text-ot">
								或者用以下方式登录
							</view>
						</view>
					</view>
					<view class="other-image">
						<view class="other-item" @tap="loginOther('sinaweibo')">
							<view>
								<image class="ot-img" src="../../static/img/wb.jpg" mode=""></image>
							</view>
							<view><text class="img-text">微博</text></view>
						</view>
						<view class="other-item" @tap="loginOther('weixin')">
							<view>
								<image class="ot-img" src="../../static/img/wx.jpg" mode=""></image>
							</view>
							<view><text class="img-text">微信</text></view>
						</view>
						<view class="other-item" @tap="loginOther('qq')" >
							<view>
								<image class="ot-img" src="../../static/img/QQ.jpg" mode=""></image>
							</view>
							<view><text class="img-text">QQ</text></view>
						</view>
				
					</view>
				
				</view>
				
			</scroll-view>
		</swiper-item>
	</swiper>
	<!--  -->

	




</template>

<script>
	import {mapMutations} from 'vuex'
	import $http from '@/common/api/request.js'
	export default {
		data() {
			return {
				userName:"",
				userPwd:"",
				rules:{
					userName:{
						rule:/\S/,
						msg:"账号不能为空"
					},
					userPwd:{
						rule:/^[0-9a-zA-Z]{6,16}$/,
						msg:"密码应该为6-16位字符"
					}
				}

			}
		},
		methods: {
			// 第三方集成登录
			loginOther(mode){
				uni.login({
					provider:mode,
					success:(res)=>{
						console.log(res);
						// let openid = res.authResult.openid;
						// uni.getUserInfo({
						// 	provider:mode,
						// 	success: (res) => {
						// 		console.log(res);
						// 	}
						// })
					}
				})
			},
			...mapMutations(['login']),
			// 点击登录
            submit(){
				// console.log(this.rules.userName.rules.test(this.userName));
				if(!this.validate('userName')) return;
				if(!this.validate('userPwd')) return;
				
				
				
				// uni.showLoading({
				// 	title:"登录中......"
				// })
				
				$http.request({
					url:'/login',
					method:'POST',
					data:{
						userName:this.userName,
						userPwd:this.userPwd
					}
				}).then((res)=>{
					console.log(res.data);
					this.login(res.data)
					uni.showToast({
						title:res.msg,
						icon:"none"
					})
					uni.reLaunch({
						url: '../my/my'
					});
					console.log(res.msg);
					// uni.hideLoading();
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
				
				// setTimeout(()=>{
				// 	uni.hideLoading();
					
				// },2000)
			},
			// 验证规则
			validate(key){
				// console.log(this);
				let bool = true;
				if(!this.rules[key].rule.test(this[key])){
					uni.showToast({
						title:this.rules[key].msg,
						icon:"none"
					})
					bool=false;
					return false;
				}
				return bool;
			}
		}
	}
</script>

<style scoped>
	.img-login {
		margin-top: 50rpx;
		margin-bottom: 80rpx;
	}

	.text-login {
		/* margin-top: 100rpx; */
		border-radius: 40rpx;
		margin: auto;
		color: #FFFFFF;
		width: 500rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		background-color: #498DFB;
	}

	.other-login {
		margin-top: 150rpx;
		padding: 0 20rpx;
	}

	.other-text {
		display: flex;

	}

	.text-ot {
		font-size: 40rpx;
		padding: 0 20rpx;
	}

	.other-text {
		line-height: 0rpx;
	}

	.other-text::after {
		flex: 1;
		content: '';
		height: 2rpx;
		background-color: #ccc;

	}

	.other-text::before {
		flex: 1;
		content: '';
		height: 2rpx;
		background-color: #ccc;
	}

	.lo-img {
		width: 100%;
		height: 500rpx;
	}

	.other-image {
		margin-top: 100rpx;
		display: flex;
		justify-content: space-around;
	}

	.ot-img {
		width: 120rpx;
		height: 100rpx;
	}

	.other-item {
		text-align: center;
	}

	.goRegister {

		margin: 0 auto;
	}

	.text-re {
		margin-top: 150rpx;
		text-align: center;
	}

	.re-img {
		text-align: center;
	}

	.down-re {
		width: 120rpx;
		height: 120rpx;
	}

	.login-bottom {
		margin-top: 30rpx;
	}

	.text-lo {
		text-align: center;
	}

	.inp-register {
		/* background-color: #ccc; */
		padding: 25rpx 80rpx;
		margin-top: 130rpx;
		/* height: 300rpx; */
	}

	.inp {
		margin-top: 30rpx;
		display: flex;
		
	}
	.inp input {
		border-bottom: 1rpx solid #ccc;
	}
	
	.text-re text{
		padding-right: 60rpx;
	}
</style>