export default{
	state:{
		list:[
			{
				    checked:false,
					id: 1,
					imgUrl: "../../static/img/TJ1.jpg",
					name: "运动服，活力满满的穿搭时尚单品真的很好穿",
					pprice: "51",
					num: "2",
					discount: "5.2"
				},
				{
					checked:false,
					id: 2,
					imgUrl: "../../static/img/TJ4.jpg",
					name: "时尚单品，白色上衣搭配卡其色背带裙",
					pprice: "43",
					num: "1",
					discount: "5.2"
				},
				
		],
		selectedList:[]
	},
	getters:{
		// 判断是否全选
		checkedAll(state){
			// 判断state里面的数据的情况记得前面加上state
			return state.list.length === state.selectedList.length;
		},
		totalCount(state){
			let total={
				pprice:0,
				count:0
			}
			//判断是不是选中状态
			state.list.forEach(v=>{
				if(state.selectedList.indexOf(v.id)>-1){
					total.pprice+=v.pprice*v.num
					total.count=state.selectedList.length
				}
			})
			return total
		}
	},
	mutations:{
		// 全选
		checkAll(state){
			state.selectedList = state.list.map(v=>{
				v.checked=true;
				return v.id
			})
		},
		// 全不选
		unCheckAll(state){
			state.list.forEach(v=>{
				v.checked=false
			})
			state.selectedList=[]
		},
		// 单选
		selectedItem(state,index){
			let id = state.list[index].id;
			let i = state.selectedList.indexOf(id)
			if(i>-1){
				state.list[index].checked=false;
				return state.selectedList.splice(i,1)
			}
			state.list[index].checked=true
			 state.selectedList.push(id)
		},
		addShopCart(state,goods){
			state.list.push(goods)
		}
	},
	actions:{
		// 调用方法的执行，这个名字要与前面调用的一致
		checkedAllFn({commit,getters}){
			// console.log(111);
			getters.checkedAll ? commit("unCheckAll") : commit("checkAll")
		}
	}
}