<template>
	
	<view class="CARD">
		<!-- <Card class="cardd" cardTitle='猜你喜欢'></Card> -->
	
	<view class="commodity bg-color" :style="'flex-wrap:'+wrap+';'">
		
		<!-- 单个商品组件 -->
		<view class="commodity-item"
		 v-for="(item,index) in dataList" 
		 :key='index'
		 :style="'width:'+itemW+'rpx;'"
		 @tap="goDtails(item.id)"
		 
		 >
			<image class="commodity-img" 
			:src=item.imgUrl 
			mode=""
			:style="'height:'+bigH+'rpx;'"
			
			></image>
			<view class="commodity-content">
				<text class="commodity-name" 
				:style="'font-size:'+nameSize+'rpx;'">
				{{item.name}}</text>
				<view >
					<text class="pprice">￥{{item.pprice}}</text>
					<text class="oprice">￥{{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
			
		</view>
	
		
		
		
	</view>
	</view>
</template>

<script>
	import Card from './Card.vue'
	export default{
		components:{
			Card
		},
		props:{
			// cardTitle:String,
			dataList:Array,
			itemW:{
				type:Number,
				default:375
			},
			bigH:{
				type:Number,
				default:375
			},
			wrap:{
				type:String,
				default:"wrap"
			},
			nameSize:{
				type:Number,
				default: 12 
			}
		},
		methods:{
			goDtails(id){
				uni.navigateTo({
					url:'../../pages/details/details?id='+id+''
				})
			}
		}
	}
</script>

<style scoped>
	
	.cardd{
		position: relative;
		left: 0rpx;
	}
	.commodity{
		margin-top: 10rpx;
		display: flex;
		margin-bottom: 5rpx;
		
		
	}
	.commodity-item{
		/* margin-right: 2rpx; */
		/* margin-left: 2rpx; */
		
		padding-bottom: 20rpx;
		/* height: 350rpx; */
	}
	.commodity-img{
		width: 100%;
		border-radius: 10rpx;
		/* height: 375rpx; */
	}
	.commodity-content{
		padding: 5rpx;
		text-align: center;
	}
	.commodity-name{
		display: -webkit-box;
		 -webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		font-size: 20rpx;
		color: #333333;
	}
	.pprice{
		font-size: 18rpx
	}
	.oprice{
		font-size: 16rpx;
		text-decoration: line-through;
		color:#999999;
		margin-left: 32rpx;
	}
	.discount{
		border-radius: 4rpx;
		border: 1px solid #ccc;
		padding: 2rpx 10rpx;
		font-size: 32rpx;
		color: #FF3333;
	}
</style>