<template>
	<view class="recommend bg-color">
		<view class="recommend-item" v-for="(item,index) in dataList" :key = 'index'>
			<image class="item-big" :src="item.bigUrl"></image>
			<view class="item-small">
				<block  v-for="(i,k) in item.data" :key = 'k'>
					<image class="item-img" :src="i.imgUrl"></image>
				</block>
				
			</view>
		</view>
	<!-- 	<view class="recommend-item">
			<image class="item-big" src="../../static/img/C.jpg"></image>
			<view class="item-small">
				<image class="item-img" src="../../static/img/F1.jpg"></image>
				<image class="item-img" src="../../static/img/F2.jpg"></image>
				<image class="item-img" src="../../static/img/F3.jpg"></image>
			</view>
		</view> -->
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
	.recommend{
		margin-top:15rpx ;
		padding: 20rpx;
		background-color: #AFEEEE;
		
	}
	.recommend-item{
		margin-bottom: 30rpx;
		display: flex;
		border: none;
		flex-direction: column;
		border-radius: 20rpx;
		overflow: hidden;
		border:2rpx solid #ccc;
		margin: 20rpx 0;
	}
	.item-big{
		border: none;
		width: 100%;
		height: 320rpx;
		margin-bottom: 10rpx;
	}
	.item-small{
		width:100%;
		height: 250rpx;
		
	}
	.item-img{
		border-radius: 10rpx;
		width: 32%;
		height: 240rpx;
		margin:0 5rpx; 
	}
</style>