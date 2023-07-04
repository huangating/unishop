<template>
	<view class="icon">
		<view class="icon-item" v-for="(item,index) in dataList" :key="index">
			<image class="icon-img" :src="item.imgUrl" mode=""></image>
			<text class="message f-color">{{item.name}}</text>
		</view>
		
	</view>
</template>

<script>
	
	export default{
		props:{
			dataList:Array
		}
		
	}
</script>

<style scoped>
	.icon{
		/* background-color:#E0FFFF; */
		
		margin-top: 10rpx;
		border-radius: 20rpx;
		 display: flex; 
		 flex-wrap: wrap; 
		width: 100%;
	
	}
	.message{
		font-size: 18rpx;
	}
	.icon-item{
		display: flex;
		flex-wrap: wrap;
		/* 垂直方向上 对齐*/
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 20rpx;
		width: 25%;
		height:180rpx;
		
	}
	.icon-img{
		width: 120rpx;
		height: 120rpx;
		border-radius: 30rpx;
		margin-bottom: 10rpx;
	}
</style>