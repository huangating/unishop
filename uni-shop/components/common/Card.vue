<template>
	<view class="card">
		<view class="">-</view>
		<view class="card-name">{{cardTitle}}</view>
		<view class="">-</view>
	</view>
</template>

<script>
	export default{
		props:["cardTitle"],
		
		
		
	}
</script>

<style scoped>
	.card{
		padding: 20rpx;
		display: flex;
		/* 文字居中 */
		justify-content: center;
		font-weight: bold;
		font-size: 20rpx
	}
	.card-name{
		 padding: 0 20rpx; 
		 /* font-size: 32rpx */
	}
</style>