<template>
	<view class="shop">
		
	<view class="shop-item" v-for="(item,index) in dataList" :key='index'>
	
		<image class="shop-big" :src="item.bigUrl" mode=""></image>
		<scroll-view scroll-x="true" class="scroll-content">
			<view class="scroll-item">
				<Commodity :dataList="item.data"
				wrap="no-wrap"
				:itemW="200"
				:bigH="200"
				:nameSize="6"
				></Commodity>
			</view>
			
		</scroll-view>
	</view>	
	</view>
</template>

<script>
	
	import Commodity from '../common/Commodity.vue'
	export default{
		props:{
			dataList:Array
		},
			components:{
				Commodity,
				
			}
		
	}
</script>

<style scoped>
	.shop-big{
		width: 100%;
		height: 350rpx;
	}
	.scroll-content{
		width: 100%;
		white-space: nowrap;
	}
	.scroll-item{
		/* margin-top: 8rpx; */
		display: inline-block;
		/* width: 300rpx; */
		/* height:300rpx; */
	}
</style>