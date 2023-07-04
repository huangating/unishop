<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
		<swiper-item v-for="(item,index) in dataList" :key = 'index'>
			<view class="swiper-item">
				<image class="swiper-img" :src="item.imgUrl" alt=""></image>
			</view>
		</swiper-item>
<!-- 		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swiperTow.jpg" alt=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swiperThree.jpg" alt=""></image>
			</view>
		</swiper-item> -->
	</swiper>
</template>

<script>
	export default{
		props:{
			dataList:Array
		}
	}
</script>

<style scoped>
	swiper{
		width: 100%;
		height: 460rpx;
	}
	.swiper-img{
		width: 100%;
		height: 460rpx;
	}
</style>