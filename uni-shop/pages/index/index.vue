<template>
	<view class="index">
		<!-- #ifdef MP-WEIXIN -->
		<!-- <view class="wx-nav">
			<view class="iconfont icon-xiaoxizhongxin">	</view>			
			<text>uni-app</text>
			<view class="iconfont icon-fangdajing"></view>
		</view> -->
		<!-- #endif -->
		<!-- 导航栏标题 -->
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
			<view :id="'top'+index" v-for="(item,index) in topBar" :key="index" @tap="changeTap(index)"
				class="scroll-item">
				<text :class='topBarIndex===index?"f-active-color":"f-color"'>{{item.name}}</text>
			</view>
		</scroll-view>
		<!-- 对应的内容通过swiper进行展示，刚好有一个事件就是根据index的值变化内容 -->
		<swiper @change="onChangeTab" :current="topBarIndex" :style='"height:"+clientHight+"px"'>
			<!-- newTopBar数据接收 -->
			<swiper-item v-for="(item,index) in newTopBar" :key="index">
				<scroll-view scroll-y="true" :style='"height:"+clientHight+"px"' @scrolltolower="loadMore(index)">
					<!-- 数据里的内容分类展示 -->
					<block v-if="item.data.length>0">
					<!-- 第二层数据 -->
						<block v-for="(i,k) in item.data" :key='k'>
							<!-- 首页推荐 -->
							<!-- 这里需要额外注意因为swiper有固定高度，所以需要外面套一个view标签获取组件的高度值并相加得到可视高度 -->
							<IndexSwiper v-if="i.type=='swiperList'" :dataList="i.data"></IndexSwiper>
							<Recommend v-if="i.type==='recommendList'" :dataList="i.data"></Recommend>																																			
							<!-- 运动户外 组件-->
							<Banner v-if="i.type==='bannerList'" :dataList='i.imgUrl'></Banner>
							<template v-if="i.type==='iconsList'">
								<Icons :dataList='i.data'></Icons>
								<!-- <Card cardTitle='热销商品' ></Card> -->
							</template>														
							<template v-if="i.type==='shopList'">
								<!-- <Card cardTitle='推荐店铺'></Card> -->
								<Shop :dataList='i.data'></Shop>							
							</template>							
							<template v-if="i.type==='hotList'">
								<!-- <Card cardTitle='为你推荐'></Card> -->
								<Hot :dataList='i.data'></Hot>							
							</template>																				
							<CommodityList v-if="i.type==='commodityList'" :dataList="i.data"></CommodityList>																				
						</block>
					</block>
					<view v-else>
						敬请期待
					</view>	
					<view class="load-text #636363">
						{{item.loadText}}
					</view>		
				</scroll-view>
			</swiper-item>
		</swiper>
		<Tabber currentPage='index'></Tabber>
	</view>
</template>

<script>
	import Tabber from '@/components/common/Tabber.vue'
	import $http from '@/common/api/request.js'
	// import { url } from 'inspector'
	import IndexSwiper from '@/components/index/indexSwiper.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import Card from "@/components/common/Card.vue"
	import CommodityList from "@/components/common/CommodityList.vue"
	import Banner from '@/components/index/Banner.vue'
	import Icons from '@/components/index/Icons.vue'
	import Hot from '@/components/index/Hot.vue'
	import Shop from '@/components/index/Shop.vue'
// import { log } from 'console'
	// import { log } from 'console'
	// import { log } from 'util'
	export default {
		data() {
			return {
				//选中的索引
				topBarIndex: 0,
				//页面一加载的时候导航栏滑块在哪里位置|顶栏跟随的索引值
				scrollIntoIndex: 'top0',
				//内容块的高度值
				clientHight: 0,
				//顶栏数据
				topBar: [

				],
				//承载新数据的index
				newTopBar: [],
				title: 'Hello'
			}
		},
		components: {
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			Shop,
			Tabber
		},
		onLoad() {
			//封装请求函数
			this.__init();
		},
		onReady() {

			// 系统信息的获取,这里可以获取到一些信息
			uni.getSystemInfo({
				success: (res) => {
					// this.clientHight = res.windowHeight - uni.upx2px(80) - this.getClientHeight();
					this.clientHight = res.windowHeight - this.getClientHeight();
				}
			})
		},
		methods: {
			//添加数据
			__init() {
				
				$http.request({
					url:'/index_list/data'
				}).then((res)=>{
					this.topBar = res.topBar
					this.newTopBar = this.initData(res)
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
				
			
			},
			// 点击顶栏
			changeTap(index) {
				if (this.topBarIndex === index)
					return;
				this.topBarIndex = index
				this.scrollIntoIndex = 'top' + index
				// 每一次滑动--->赋值为first
				if(this.newTopBar[this.topBarIndex].load==='first'){
					this.addData()
				}
				
			},
			// 下方数据根据index改变，对应滑动
			onChangeTab(e) {
				//根据内容的改变，对应导航栏的样式也要跟着改变，调用上面的方法 
				this.changeTap(e.detail.current);
			},
			//获取相应数据
			initData(res) {
				let arr = [];
				// console.log(this.topBar.length);
				for (let i = 0; i < this.topBar.length; i++) {
					let obj = {
						data: [],
						//定义变量控制每次滑动都会触发请求的问题
						load:"first",
						loadText:"上拉加载更多...."
					}
					// 获取首次数据,就是在index为1的下面进行数据渲染
					if (i == 0) {
						obj.data = res.data;
					}
					// obj.d ata=res.data;
					arr.push(obj)
					console.log(arr);
				}
				return arr;
			},
			//获取可视区域高度【兼容不同设备】
			getClientHeight() {
				//同步系统信息获取
				const res = uni.getSystemInfoSync()
				const system = res.platform
				if (system === 'ios') {
					return 44 + res.statusBarHeight;
				} else if (system === 'android') {
					return 0 + res.statusBarHeight;
				} else {
					return 0;
				}
			},
			//对应显示不同数据
			addData(callback){
				
				//拿到索引
				let index = this.topBarIndex;
				//拿到ID
				let id = this.topBar[index].id
				let page = Math.ceil(this.newTopBar[index].data.length/5)+1;
					//请求不同的数据
				$http.request({
					url:`/index_list/${id}/data/${page}`
				}).then((res)=>{
					this.newTopBar[index].data=[...this.newTopBar[index].data,...res]
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			
				// 当请求结束后,重新赋值改变他们身上的first
				this.newTopBar[index].load='last'
				if(typeof callback==='function'){
					callback()
				}
			},
			// 上拉加载更多
			loadMore(index){
				this.newTopBar[index].loadText="加载中..."
				// 请求完成后文字变回来还是上拉加载更多
				this.addData(()=>{
					this.newTopBar[index].loadText="上拉加载更多..."
				})
			}

		}
	}
</script>

<style scoped>
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}

	.scroll-item {
		display: inline-block;
		padding-left:30rpx;
		padding-right: 6rpx;
	}

	.f-active-color {
		padding: 10rpx 0;
		border-bottom: 6rpx solid #498DFB;
	}

	
    .load-text{
	   border-top: 1rpx solid #ccc;
	   line-height: 60rpx;
	   text-align: center;
    }
	/* .wx-nav{
	text-align: center;
	height: 200rpx;
	width: 100%;
	line-height: 200rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
	 */
</style>