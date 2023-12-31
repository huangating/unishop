export default{
	
	common:{
		baseUrl:"http://192.168.64.48:3000/api",
		data:{},
		header:{
			'content-type':'application/json',
			'content-type':'application/x-www-form-urlencoded'
		},
		method:'GET',
		dataType:'json',
		// host:'localhost'
	},

	request(options={}){
		
		uni.showLoading({
			title: '加载中'
		});
		options.url=this.common.baseUrl+options.url;
		options.data=options.data || this.common.data;
		options.header=options.header || this.common.header;
		options.method=options.method || this.common.method;
		options.dataType=options.dataType || this.common.dataType;
		// options.host= options.host || this.host ;
		return new Promise((res,rej)=>{
			uni.request({
				...options,
				success:(result)=>{
					if(result.statusCode!=200){
						return rej()
					}
					// setTimeout(function () {
					// 	uni.hideLoading();
					// }, 200);
					uni.hideLoading();
					let data=result.data.data;
					res(data);
					
				}
			})
		})
	}
}