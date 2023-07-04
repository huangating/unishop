<template>
	<view class="my">
		<view class="my-top">
			<view class="out" @tap="goOut">
				<view class="out-text">
					退出登录
				</view>
			</view>
			<view class="my-img">
				<image class="my-ph" :src=" loginStatus ? userInfo.userImg : '../../static/img/login.jpg' " mode=""></image>
				<view class="name-my"><text>{{loginStatus?userInfo.nickName:"用户昵称"}}</text></view>
			</view>	
		    <view class="set" @tap="goLogin">
		    	<image class="setting" src="../../static/img/setting.png" mode=""></image>
		    </view>
		</view>
		<view class="my-bottom">
			<view class="shop-message">
				<view class="one">
					<image class="icon-my" src="../../static/img/send.png" mode=""></image>
					<view ><text class="text-my">待发货</text></view>
				</view>
				<view class="one">
					<image class="icon-my" src="../../static/img/resever.png" mode=""></image>
					<view ><text class="text-my">待收货</text></view>
				</view>
				<view class="one">
					<image class="icon-my" src="../../static/img/tails.png" mode=""></image>
					<view ><text class="text-my">待付款</text></view>
				</view>
				<view class="one">
					<image class="icon-my" src="../../static/img/assign.png" mode=""></image>
					<view ><text class="text-my">待评价</text></view>
				</view>
				<view class="one">
					<image class="icon-my" src="../../static/img/repair.png" mode=""></image>
					<view ><text class="text-my">退货/退款</text></view>
				</view>
	
			</view>
			<view class="list-my">
				
					<li>我的订单记录</li>
					<li>我的收藏店铺</li>
					<li>我的权益</li>
					<li>我的收货地址</li>
					<li>联系我们</li>
				
			</view>
		</view>
		<Tabber currentPage='my'></Tabber>
	</view>
</template>

<script>
	import Tabber from '@/components/common/Tabber.vue'
	import {mapState,mapMutations} from 'vuex'
	export default{
		components:{
			Tabber
		},
		methods:{
			...mapMutations(['loginOut']),
			goLogin(){
				uni.navigateTo({
					url:'../../pages/login/login'
				})
			},
			goOut(){
				uni.showToast({
					title:"退出成功",
					icon:"none"
				})
				this.loginOut();
				uni.reLaunch({
					url:'../my/my'
				})
			}
		},
		computed:{
			...mapState({
				// 这里的user是指属于user的仓库
				loginStatus:state=>state.user.loginStatus,
				userInfo:state=>state.user.userInfo
			})
		}
	}
</script>

<style scoped>
	
	.my-top{
		text-align: center;
		/* position: relative; */
		width: 100%;
		height: 400rpx;
		background-color: #D9F0F9;
	}
	.my-img{
		text-align: center;
		position: fixed;
		left: 35%;
		top: 5%;
		/* margin-bottom: 30rpx; */
	}
	.out{
		font-size: 20rpx;
		position: fixed;
		left: 2%;
		top: 2%;
	}
	.set{
		position: fixed;
		right: 2%;
		top: 2%;
	}
	.setting{
		width: 50rpx;
		height: 50rpx;
	}
	.my-ph{	
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}
	.name-my{
		margin-top: 10rpx;
		/* font-size: 13rpx */
	}
	.shop-message{
		margin-top: 30rpx;
		display: flex;
		justify-content: space-around;
	}
	.one{
		text-align: center;
	}
	.text-my{
		font-size: 35rpx;
	}
	.icon-my{
		
		width: 70rpx;
		height: 70rpx;
	}
	.list-my{
		margin-top: 40rpx;
		
	}
	li{
		margin-top: 10rpx;
		font-size: 40rpx;
		padding-left: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
	list-style: none;
	background-color: #F5F6F6;
		margin-bottom: 7rpx;
	}
</style>