<template>
	<view class="list">
		<!-- 左侧数据栏 -->
		<scroll-view scroll-y="true" class="list-left" :style='"height:"+clientHight+"px"'>
			<view v-for="(item,index) in leftData" :key='index' class="left-item" @tap="changeLeftTap(index,item.id)">	
						
				<view class="left-name " :class='activeIndex===index?"left-name-active":"left-name"'>
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<!-- 右侧商品信息 -->
		<scroll-view scroll-y="true" class="list-right">
			<view class="right-list" v-for="(item,index) in rightData" :key="index">
				<block v-for="(i,k) in item" :key="k">
				<view class="list-item">
					{{i.name}}
				</view>				
					<view class="right-content">
						<view class="right-item" v-for="(a,b) in i.list" :key="b">
							<image :src="a.imgUrl" mode=""></image>
							<view class="right-name">{{a.name}}</view>
						</view>
						
					</view>
				</block>
			</view>
		</scroll-view>
		<Tabber currentPage='list'></Tabber>
	</view>
</template>

<script>
	import Tabber from '@/components/common/Tabber.vue'
	import $http from '@/common/api/request.js'
	export default{
		components:{
			Tabber
		},
		data(){
			return{
				clientHight:0,
				activeIndex:0,
				leftData:[],
				rightData:[]
			}
		},
		onLoad() {
		    this.getData()	
		},
		//获取可视高度
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clientHight = res.windowHeight - this.getClientHeight();
				}
			})
		},
		methods:{
			getData(id){
				if(id===(this.activeIndex+1)){
					return ;
				}
				
				$http.request({
					url:'/goods/list'
				}).then((res)=>{
					// console.log(res);
					let leftData=[];
					let rightData=[];
					res.forEach(v=>{
						leftData.push({
							id:v.id,
							name:v.name
						})
						//如果点击的id值相同
						if(v.id===(this.activeIndex+1)){
							rightData.push(v.data)
						}
					})					
					this.leftData=leftData;
					this.rightData=rightData;
				}).catch(()=>{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
			},
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
			changeLeftTap(index,id){
				this.getData(id)
				this.activeIndex=index
				
				
			}
		}
	}
</script>

<style scoped>
	.list{
		
		display: flex;
	}
	.list-left{
		width: 200rpx;
		
	}
	.left-item{
		/* font-weight: bold; */
		border-bottom: 2rpx solid #FFFFFF;
		background-color: #F7F7F7;
		font-size: 38rpx;
		
		
	}
	.list-right{
		background-color:#EEFAFF;
		flex: 1;
	}
	.left-name{
		padding: 20rpx 16rpx;
	}
	.left-name-active{
		border-left: 8rpx solid #49BDFB;
		background-color: #FFFFFF;
	}
	.list-item{
		font-size: 34rpx;
		/* font-weight: bold; */
	}
	image{
		width: 150rpx;
		height: 150rpx;
	}
	.right-list{
		
		padding: 20rpx 20rpx;
	}
	.right-content{
		border-top: 1px solid #A1E7FF;
		margin-top: 20rpx;
		margin-bottom: 40rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.right-item{
		margin-top: 25rpx;
		width: 150rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rpx ;
	}
	.right-name{
		padding: 16rpx 0;
		font-size: 35rpx
	}
</style>