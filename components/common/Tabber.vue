<template>
    <view class="tabber">
		<!-- 底下导航栏跳转 -->
    	<view class="tab" v-for="(item,index) in tabberList" :key="index" @tap="navigatorTo(item.pagePath)">
    		
    			<image v-if="item.pagePath===currentPage" :src="item.selectedIconPath" mode=""></image>
    			<image v-else :src="item.iconPath" mode=""></image>
    		
			<view class="text">
				{{item.text}}
			</view>
    	</view>
    </view>


</template>



<script>
// import { log } from 'console'
	export default {
		// 接收每个页面传递过来的值进行判断
		props:{
			currentPage:{
				type:String,
				default:'index'
			}
		},
		// 点击跳转的事件
		methods:{
			navigatorTo(e){
				// 权限判断,如果是购物车需要先登录
				if(e==='shop'){
					// console.log("no");
					this.navigateTo({
						url:`../../pages/${e}/${e}`
					})
				}else{
					uni.redirectTo({
						url:`../../pages/${e}/${e}`
					})
				}
			}
		},
		// 自定义tabber的数据
		data() {
			return {
			tabberList:[
				{
					"pagePath": "index",
					"iconPath": "/static/tabbar/index.png",
					"selectedIconPath": "/static/tabbar/indexSelect.png",
					"text": "首页"
				},
				{
					"pagePath": "list",
					"iconPath": "/static/tabbar/list.png",
					"selectedIconPath": "/static/tabbar/listSelect.png",
					"text": "分类"
				},
				{
					"pagePath": "shop",
					"iconPath": "/static/tabbar/shop.png",
					"selectedIconPath": "/static/tabbar/shopSelect .png",
					"text": "购物车"
				},
				{
					"pagePath": "my",
					"iconPath": "/static/tabbar/my.png",
					"selectedIconPath": "/static/tabbar/mySelect.png",
					"text": "我的"
				}
			]
			}
		}
	}
</script>

<style scoped>
	.tabber{
		
		/* border-top: 1px solid #498DFB; */
		background-color: #ffffff;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 130rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
	}
	.tab{
		display: flex;
		flex-direction: column;		
		justify-content: center;
		align-content: center;
	}
	image{
		width: 60rpx;
		height: 60rpx;
	}
	.text{
		font-size: 24rpx
	}
</style>