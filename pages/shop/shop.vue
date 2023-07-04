<template>
	<view class="shop">

		<!-- <uni-nav-bar title="导航栏组件"></uni-nav-bar> -->

		<view class="shop-item" v-for="(item,index) in list" :key="index">
            <view class="shop-content">
				<view class="shop-left">
					<label class="radio" @tap="selectedItem(index)">
						<radio value="" color="#FF3333" :checked="item.checked"/>
					</label>
					<image :src="item.imgUrl" mode=""></image>
				</view>
				<view class="shop-right">
					<view class="name">
						{{item.name}}
					</view>
					<view class="jisuan">
						<view class="price">
							￥{{item.pprice}}元
						</view>
						<view class="count">
							数量：{{item.num}}
						</view>
					</view>
					
				</view>
				
            </view>
		</view>
		
		<view class="shop-foot">
			<view class="checkAll">
				<label class="radio" @tap="checkedAllFn">
					<radio value="" :checked="checkedAll" color="#FF3333"/><text>全选</text>
				</label>
			</view>
			<view class="contents">
				<view class="money">
					合计：￥{{totalCount.pprice}}元
				</view>
				<view class="send">
					结算（{{totalCount.count}}）
				</view>
			</view>
			
		</view>
		<Tabber currentPage='shop'></Tabber>
	</view>
</template>

<script>
	import Tabber from '@/components/common/Tabber.vue'
	// 使用vuex管理数据
	import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
	export default{
		components:{
			Tabber
		},
		computed:{
			...mapState({
				list:state=>state.shop.list
			}),
			...mapGetters(['checkedAll','totalCount'])
		},
		methods:{
			...mapActions(['checkedAllFn']),
			...mapMutations(['selectedItem'])
		}
	}
</script>

<style scoped>
	.shop-content{
		background-color:#EEFAFF;
		display: flex;
		flex-wrap: nowrap;
		height: 250rpx;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10rpx;
	}
	image{
		width: 220rpx;
		height: 220rpx;
	}
	.shop-left{
		display: flex;
		width: 320rpx;
		align-items: center;
		justify-content: space-between;
		
	}
	.shop-right{
		padding-right: 30rpx;
		margin-left: 20rpx;
		flex: 1;
		/* justify-content: space-between; */
	}
	.name{
		font-weight: bold;
		padding-bottom: 10rpx;
		font-size: 12rpx
	}
	.price{
		font-size: 12rpx;
		padding-bottom: 10rpx;
	}
	.count{
		font-size: 12rpx
	}
	.jisuan{
	   display: flex;
	   justify-content: space-between;
	}
	.shop-foot{
		border-top: 1px solid #ccc;
		font-size: 12rpx;
		position: fixed;
		z-index: 1222;
		left:0;
		bottom: 130rpx;		
		/* right: 0; */
		height: 100rpx;
		background-color: #FFFFFF;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		/* justify-content: space-between; */
	}
	.checkAll{
		width: 200rpx;
	}
	.contents{
		flex:1;
		display: flex;
		flex-wrap: nowrap;
		height: 60rpx;
		line-height: 60rpx;
	}
	.send{
		flex:1;
		margin-left: 30rpx;
		width: 200rpx;
		/* border-radius: 20rpx; */
		text-align: center;
		background-color: #498DFB;
		color: #FFFFFF;
		margin-right: 10rpx;
	
	}
</style>