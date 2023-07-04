<template>
	<view class="hot ">
	
		<!-- :itemW=JSON.stringify("250rpx") -->
		<Commodity :dataList="dataList" 
		:itemW="250"
		:bigH="220"
		>
			
		</Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		props:{
			dataList:Array
		}
		,
		components:{
			Commodity
		}
	}
</script>

<style>
</style>