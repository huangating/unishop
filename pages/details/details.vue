<template>
	<view class="details">
		<!-- 顶部 -->
		<view class="detail">
			<image :src="goods.imgUrl" mode=""></image>
		</view>

		<view class="title">
			{{goods.name}}
		</view>
		<view class="price">
			<view class="oprice">
				￥{{goods.pprice}}
			</view>
			<view class="pprice">
				￥{{goods.oprice}}
			</view>
		</view>
		<hr>
		<view class="title">
			细节展示
		</view>
		<view class="cloth">
			<image src="../../static/img/detail.jpg" mode=""></image>
		</view>
		<view class="cloth2">
			<image src="../../static/img/detail2.jpg" mode=""></image>
		</view>
		<!-- 底部信息 -->
		<view class="detail-foot">
			<view class="iconfont icon-fangdajing"></view>
			<view class="iconfont icon-gouwuche" @tap="goShop"></view>
			<view class="add-shopCart" @tap="ShowPop">加入购物车</view>
			<view class="purchase" @tap="ShowPop">立即购买</view>
		</view>
		<Card cardTitle='猜你喜欢'></Card>
		<CommodityList :dataList='dataList'></CommodityList>

		<!-- 底部弹出层 -->
		<view class="pop" v-show="isShow"  @touchmove.stop.prevent=''>
			<view class="pop-mask" @tap="hidenShow"></view>
			<view class="pop-box">
				<view>
					<image class="pop-img" :src="goods.imgUrl" mode=""></image>
				</view>
				<view class="pop-foot-puchers">
					<view class="color-type">
						<view>颜色分类：</view>
						<view class="color-item">
							黄色
						</view>
					</view>
					<view class="num">
						<view class="shuliang">购买数量</view>
						<!-- <uni-number-box></uni-number-box> -->
						<view class="count">
							<uni-number-box :min="1" v-model="vModelValue" ></uni-number-box>
						</view>
						
						<!-- <uni-number-box :min="0" :max="9"></uni-number-box> -->
						<!-- <uni-number-box @change="bindChange"></uni-number-box> -->
					</view>
					<view class="pop-sub" @tap="addShop">
						确定
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import Card from "@/components/common/Card.vue"
	import CommodityList from "@/components/common/CommodityList.vue"
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				goods:{},
				numberValue: 0,
				vModelValue: 1,
				isShow: false,
				// animationData:{},
				dataList: [{
						id: 1,
						imgUrl: "../../static/img/TJ1.jpg",
						name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice: "5888",
						oprice: "8888",
						discount: "5.2"
					},
					{
						id: 2,
						imgUrl: "../../static/img/TJ4.jpg",
						name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice: "5888",
						oprice: "8888",
						discount: "5.2"
					},
					{
						id: 3,
						imgUrl: "../../static/img/TJ5.jpg",
						name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice: "5888",
						oprice: "8888",
						discount: "5.2"
					},
					{
						id: 3,
						imgUrl: "../../static/img/TJ2.jpg",
						name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice: "5888",
						oprice: "8888",
						discount: "5.2"
					}
				]
			}
		},
		onBackPress() {
				if(this.isShow){
					this.hidenShow()
					return true;
				}
			},
			onLoad(e) {
				this.getData(e.id)
			},
		methods: {
			...mapMutations(['addShopCart']),
			addShop(){
				let goods = this.goods
				// console.log(goods);
				this.goods['checked']=false
				this.goods['num']=this.vModelValue
				
				this.addShopCart(goods)
				this.hidenShow()
				uni.showToast({
					title:"成功加入购物车",
					icon:'none'
				})
				
			},
			// 跳转至购物车页面
			goShop(){
				uni.switchTab({
					url:'../shop/shop'
				})
			},
			// 请求商品数据
			getData(id){
				$http.request({
					url:'/goods/id',
					data:{
						id:id
					}
				}).then((res)=>{
					// console.log(res);
					this.goods=res[0]
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			},
			change(value) {
				this.numberValue = value
			},
			changeValue(value) {
				console.log('返回数值：', value);
			},
			blur(e) {
				console.log('blur:', e);
			},
			focus(e) {
				console.log('focus:', e);
			},
			ShowPop() {
				// var animation = uni.createAnimation({
				//     duration: 200,

				//   })
				this.isShow = true
			},
			hidenShow() {
				this.isShow = false
				this.vModelValue=1
			}
		},
		components: {
			Card,
			CommodityList
		}
	}
</script>

<style scoped>
	.details {
		padding-bottom: 90rpx;
	}

	.detail {
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.title {
		margin-top: 15rpx;
		text-align: center;
		margin-bottom: 18rpx;
	}

	.price {

		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		margin-bottom: 30rpx;
	}

	.oprice {
		color: firebrick;
		margin-right: 30rpx;
	}

	.pprice {
		text-decoration: line-through;
		color: darkgrey;
	}

	.cloth image {
		width: 100%;
		height: 280rpx;
	}

	.cloth2 image {
		width: 100%;
		height: 1200rpx;
	}

	.detail-foot {
		position: fixed;
		z-index: 2;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF;
	}

	.detail-foot .iconfont {
		width: 60rpx;
		height: 60rpx;
		background-color: #498DFB;
		border-radius: 100%;
		color: #FFFFFF;
		text-align: center;
		line-height: 60rpx;
		margin: 0 10rpx;
	}

	.add-shopCart {
		margin: 0 20rpx;
		background-color: #498DFB;
		padding: 6rpx 35rpx;
		color: #FFFFFF;
		border-radius: 40rpx;
	}

	.purchase {
		margin: 0 20rpx;
		background-color: #FF7F50;
		padding: 6rpx 35rpx;
		color: #636363;
		border-radius: 40rpx;
	}

	.pop {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 5;
	}

	.pop-mask {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.pop-box {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 700rpx;
		background-color: #FFFFFF;
		/* display: flex; */

	}

	.pop-img {
		width: 260rpx;
		height: 260rpx;

	}

	.pop-foot-puchers {
		/* display: flex; */
		/* flex-wrap: nowrap; */
	}
   
	.num {
		display: flex;
		flex-wrap: nowrap;
		border-top: 1rpx solid #ccc;
		height: 100rpx;
		line-height: 100rpx;
		padding: 10rpx 30rpx;
		/* width: 300rpx; */
	}
	.shuliang{
		width: 300rpx;
	}
    .count{
		flex: 1;
		height: 100rpx;
		padding-top: 20rpx;
		padding-left: 150rpx;
	}
	.color-type {
		line-height: 100rpx;
		border-top: 1rpx solid #ccc;
		padding: 10rpx 30rpx;
	}

	.color-item {
		margin-top: 10rpx;
		background-color: #498DFB;
		width: 100rpx;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 20rpx;
		text-align: center;
		color: #FFFFFF;
	}

	.pop-sub {
		border-top: 1rpx solid #ccc;
		padding-top: 10rpx;
		line-height: 80rpx;
		background-color: #498DFB;
		color: #FFFFFF;
		text-align: center;
	}
</style>