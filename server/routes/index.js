var express = require('express');
var router = express.Router();
const cors = require('cors')
var user = require('../db/userSql.js')
var connection = require('../db/sql.js')
router.use(cors())
// 用户登录
router.post("/api/login",function(req,res,next){
	// 前端给后端传递的数据
	let params={
		userName:req.body.userName,
		userPwd:req.body.userPwd
	}
	// 查询用户名或者手机号存在不存在
	connection.query(user.queryUserName(params),function(error,result,fields){
		if(result != undefined && result != null && result.length>0){
			connection.query(user.queryUserPwd(params),function(err,results){
				if(results != undefined && results != null && results.length>0){
					res.send({
						data:{
							success:true,
							msg:"登录成功",
							data:results[0]
						}
					})
				}else{
					res.send({
						data:{
							success:false,
							msg:"密码不正确",
							
						}
					})
				}
			})
		}else{
			res.send({
				data:{
					success:false,
					msg:"用户名或密码不存在",
					
				}
			})
		}
		
	});
});
router.get("/api/goods/id",function(req,res,next){
	// 根据前端传递的id进行查询
	let id = req.query.id;
	connection.query("select * from goods where id="+id+"",function(error,result,fields){
		if(error)throw error;
		res.send({
			code:'0',
			data:result
		})
	});
});
router.get("/api/goods/list",function(req,res,next){
	res.json({
		code:'0',
		data:[{
			id:1,
			name:'服装',
			data:[
				{
					
					name:'上衣',
					list:[
						{
							id:1,
							name:'卫衣/衬衣',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'毛衣',
							imgUrl:'../../static/img/F2.jpg',
						},
						{
							id:3,
							name:'衬衫',
							imgUrl:'../../static/img/F3.jpg',
						},
						{
							id:4,
							name:'外套',
							imgUrl:'../../static/img/TJ4.jpg',
						},
						{
							id:5,
							name:'毛衣',
							imgUrl:'../../static/img/TJ1.jpg',
						},
						{
							id:6,
							name:'背带裤',
							imgUrl:'../../static/img/TJ6.jpg',
						},
					]
				},
				{
					name:'休闲衣',
					list:[
						{
							id:1,
							name:'短裤',
							imgUrl:'../../static/img/F1.jpg',
						},
						{
							id:2,
							name:'西装裤',
							imgUrl:'../../static/img/TJ4.jpg',
						},
						{
							id:3,
							name:'哈伦裤',
							imgUrl:'../../static/img/TJ5.jpg',
						},
						{
							id:4,
							name:'运动裤',
							imgUrl:'../../static/img/F2.jpg',
						},
						{
							id:5,
							name:'绿色裤子',
							imgUrl:'../../static/img/TJ6.jpg',
						},
						{
							id:6,
							name:'裤',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				}
			]
		},
		{
			id:2,
			name:'女装',
			data:[
				{
					
					name:'连衣裙',
					list:[
						{
							id:1,
							name:'旗袍',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'半身裙',
							imgUrl:'../../static/img/TJ2.jpg',
						},
						{
							id:3,
							name:'牛仔裙',
							imgUrl:'../../static/img/TJ5.jpg',
						},
						{
							id:4,
							name:'休闲裙',
							imgUrl:'../../static/img/TJ3.jpg',
						},
						{
							id:5,
							name:'裙子',
							imgUrl:'../../static/img/F1.jpg',
						},
						{
							id:6,
							name:'衣服',
							imgUrl:'../../static/img/F2.jpg',
						}
					]
				},
				{
					name:'短裙',
					list:[
						{
							id:1,
							name:'短裙',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'蛋糕裙',
							imgUrl:'../../static/img/F1.jpg',
						},
						{
							id:3,
							name:'MAOYI',
							imgUrl:'../../static/img/F2.jpg',
						},
						{
							id:4,
							name:'休闲套装',
							imgUrl:'../../static/img/F3.jpg',
						},
						{
							id:5,
							name:'很好',
							imgUrl:'../../static/img/TJ4.jpg',
						},
						{
							id:6,
							name:'耶耶耶',
							imgUrl:'../../static/img/TJ5.jpg',
						}
						
					]
				}
			]
		},
		{
			id:3,
			name:'精品鞋服',
			data:[
				{
					
					name:'连衣裙',
					list:[
						{
							id:1,
							name:'旗袍',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'半身裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				},
				{
					name:'短裙',
					list:[
						{
							id:1,
							name:'短裙',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'蛋糕裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				}
			]
		},
		{
			id:4,
			name:'家居家纺',
			data:[
				{
					
					name:'连衣裙',
					list:[
						{
							id:1,
							name:'旗袍',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'半身裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				},
				{
					name:'短裙',
					list:[
						{
							id:1,
							name:'短裙',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'蛋糕裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				}
			]
		},
		{
			id:5,
			name:'运动服',
			data:[
				{
					
					name:'连衣裙',
					list:[
						{
							id:1,
							name:'旗袍',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'半身裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				},
				{
					name:'短裙',
					list:[
						{
							id:1,
							name:'短裙',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'蛋糕裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				}
			]
		},
		{
			id:6,
			name:'休闲女装',
			data:[
				{
					
					name:'连衣裙',
					list:[
						{
							id:1,
							name:'旗袍',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'半身裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				},
				{
					name:'短裙',
					list:[
						{
							id:1,
							name:'短裙',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'蛋糕裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				}
			]
		},
		{
			id:7,
			name:'休闲男装',
			data:[
				{
					
					name:'连衣裙',
					list:[
						{
							id:1,
							name:'旗袍',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'半身裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				},
				{
					name:'短裙',
					list:[
						{
							id:1,
							name:'短裙',
							imgUrl:'../../static/img/list1.jpg',
						},
						{
							id:2,
							name:'蛋糕裙',
							imgUrl:'../../static/img/list1.jpg',
						}
					]
				}
			]
		},
		
		]
	})
});
router.get("/api/goods/search",function(req,res,next){
	connection.query("select * from test_data",function(error,result,fields){
		if(error)throw error;
		console.log('the solution is:',result);
	});
});
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});
// 首页数据
router.get('/api/index_list/data', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			topBar: [{
					id: 1,
					name: '推荐'
				},
				{
					id: 2,
					name: '服装'
				},
				{
					id: 3,
					name: '家居百货'
				},
				{
					id: 4,
					name: '零食'
				},
				{
					id: 5,
					name: '鞋子'
				},
				{
					id: 6,
					name: '更多'
				},

			],
			data: [
				{
					type: "cartName",
					data: [
						{
						name: "猜你喜欢"
					    }
					
					]
				},
				{
					type: "swiperList",
					data: [
						{
						imgUrl: "../../static/img/swiperOne.jpg"
					    },
					{
					imgUrl: "../../static/img/swiperTow.jpg"
					},
					{
					imgUrl: "../../static/img/swiperThree.jpg"
					}
					]
				},
				{
					type: "recommendList",
					data: [{
							bigUrl: "../../static/img/recommC22222.jpg",
							data: [{
								imgUrl: "../../static/img/C1.jpg"
							},{
								imgUrl: "../../static/img/C2.jpg"
							} ,{
								imgUrl: "../../static/img/C3.jpg"
							}]
						},
						{
							bigUrl: "../../static/img/C.jpg",
							data: [{
								imgUrl: "../../static/img/F1.jpg"
							} ,{
								imgUrl: "../../static/img/F2.jpg"
							} ,{
								imgUrl: "../../static/img/F3.jpg"
							}]
						},
					]
				},
				{
					type: "commodityList",
					data: [{
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
							id: 4,
							imgUrl: "../../static/img/TJ2.jpg",
							name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice: "5888",
							oprice: "8888",
							discount: "5.2"
						}
					]
				},
			]
		}
	});
});

//第二个运动户外的数据
router.get('/api/index_list/2/data/1', function(req, res, next) {
	res.json({
		code:"0",
		data:[
			{
			type:"bannerList",
			imgUrl:"../../static/img/recommC.jpg"
			},
			{
			type:"iconsList",
			data:[
				{imgUrl:"../../static/img/cart_03.gif",name:"运动户外"},
				{imgUrl:"../../static/img/cart_01.gif",name:"运动户外"},
				{imgUrl:"../../static/img/cart_02.gif",name:"运动户外"},
				{imgUrl:"../../static/img/cart_04.gif",name:"运动户外"},
				{imgUrl:"../../static/img/cart_03.gif",name:"运动户外"},
				{imgUrl:"../../static/img/cart_03.gif",name:"运动户外"},
				{imgUrl:"../../static/img/cart_02.gif",name:"运动户外"},
				{imgUrl:"../../static/img/cart_01.gif",name:"运动户外"}
			]
			},
			{
			type:"hotList",
			data:[
					{
						id:1,
						imgUrl:"../../static/img/TJ1.jpg",
						name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice:"5888",
						oprice:"8888",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/TJ4.jpg",
						name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice:"5888",
						oprice:"8888",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/TJ5.jpg",
						name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice:"5888",
						oprice:"8888",
						discount:"5.2"
					}
				
				]
			},
			{
			type:"shopList",
			data:[
				{
					bigUrl:"../../static/img/C.jpg",
					data:[
						{
							id:1,
							imgUrl:"../../static/img/TJ1.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:2,
							imgUrl:"../../static/img/TJ4.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:3,
							imgUrl:"../../static/img/TJ5.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:4,
							imgUrl:"../../static/img/TJ2.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:5,
							imgUrl:"../../static/img/TJ3.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						}
					]
				},
				{
					bigUrl:"../../static/img/recommC22222.jpg",
					data:[
						{
							id:1,
							imgUrl:"../../static/img/TJ1.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:2,
							imgUrl:"../../static/img/TJ4.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:3,
							imgUrl:"../../static/img/TJ5.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:4,
							imgUrl:"../../static/img/TJ3.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:5,
							imgUrl:"../../static/img/TJ5.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						}
					]
				}
				
			]
			},
			{
				type: "commodityList",
				data: [{
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
						id: 4,
						imgUrl: "../../static/img/TJ2.jpg",
						name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice: "5888",
						oprice: "8888",
						discount: "5.2"
					}
				]
			}
		]
	});
});
// 首页数据第一次触底
router.get("/api/index_list/1/data/2",function(req,res,next){
	res.json({
		code:'0',
		data:[{
			type:"commodityList",
			data: [{
					id: 1,
					imgUrl: "../../static/img/TJ1.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				},
				{
					id: 2,
					imgUrl: "../../static/img/TJ2.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				},
				{
					id: 3,
					imgUrl: "../../static/img/TJ3.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				},
				{
					id: 4,
					imgUrl: "../../static/img/TJ4.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				}
			]
		}
			
		]
	})
});
// 运动户外第一次触底的数据
router.get("/api/index_list/2/data/2",function(req,res,next){
	res.json({
		code:'0',
		data:[{
			type:"commodityList",
			data: [{
					id: 1,
					imgUrl: "../../static/img/TJ1.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				},
				{
					id: 2,
					imgUrl: "../../static/img/TJ2.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				},
				{
					id: 3,
					imgUrl: "../../static/img/TJ3.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				},
				{
					id: 4,
					imgUrl: "../../static/img/TJ4.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				}
			]
		}
			
		]
	})
});
// 运动户外第二次触底的数据
router.get("/api/index_list/2/data/3",function(req,res,next){
	res.json({
		code:'0',
		data:[{
			type:"commodityList",
			data: [{
					id: 1,
					imgUrl: "../../static/img/TJ1.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				},
				{
					id: 2,
					imgUrl: "../../static/img/TJ2.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				},
				{
					id: 3,
					imgUrl: "../../static/img/TJ3.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				},
				{
					id: 4,
					imgUrl: "../../static/img/TJ4.jpg",
					name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
					pprice: "5888",
					oprice: "8888",
					discount: "5.2"
				}
			]
		}
			
		]
	})
});
// 第三个服饰内衣的数据
router.get('/api/index_list/3/data/1', function(req, res, next) {
	res.json({
		code:"0",
		data:[
			{
			type:"bannerList",
			imgUrl:"../../static/img/recommC.jpg"
			},
			{
			type:"iconsList",
			data:[
				{imgUrl:"../../static/img/cart_03.gif",name:"服饰内衣"},
				{imgUrl:"../../static/img/cart_01.gif",name:"服饰内衣"},
				{imgUrl:"../../static/img/cart_02.gif",name:"服饰内衣"},
				{imgUrl:"../../static/img/cart_04.gif",name:"服饰内衣"},
				{imgUrl:"../../static/img/cart_03.gif",name:"服饰内衣"},
				{imgUrl:"../../static/img/cart_03.gif",name:"服饰内衣"},
				{imgUrl:"../../static/img/cart_02.gif",name:"服饰内衣"},
				{imgUrl:"../../static/img/cart_01.gif",name:"服饰内衣"}
			]
			},
			{
			type:"hotList",
			data:[
					{
						id:1,
						imgUrl:"../../static/img/TJ1.jpg",
						name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice:"5888",
						oprice:"8888",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/TJ4.jpg",
						name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice:"5888",
						oprice:"8888",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/TJ5.jpg",
						name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice:"5888",
						oprice:"8888",
						discount:"5.2"
					}
				
				]
			},
			{
			type:"shopList",
			data:[
				{
					bigUrl:"../../static/img/C.jpg",
					data:[
						{
							id:1,
							imgUrl:"../../static/img/TJ1.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:2,
							imgUrl:"../../static/img/TJ4.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:3,
							imgUrl:"../../static/img/TJ5.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:4,
							imgUrl:"../../static/img/TJ3.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:5,
							imgUrl:"../../static/img/TJ2.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						}
					]
				},
				{
					bigUrl:"../../static/img/C.jpg",
					data:[
						{
							id:1,
							imgUrl:"../../static/img/TJ1.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:2,
							imgUrl:"../../static/img/TJ4.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:3,
							imgUrl:"../../static/img/TJ5.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:4,
							imgUrl:"../../static/img/TJ3.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						},
						{
							id:5,
							imgUrl:"../../static/img/TJ2.jpg",
							name:"纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
							pprice:"5888",
							oprice:"8888",
							discount:"5.2"
						}
					]
				}
				
			]
			},
			{
				type: "commodityList",
				data: [{
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
						id: 4,
						imgUrl: "../../static/img/TJ3.jpg",
						name: "纯白色系时尚，美丽的白色礼服,纯白色系时尚，美丽的白色礼服",
						pprice: "5888",
						oprice: "8888",
						discount: "5.2"
					}
				]
			}
		]
	});
});

module.exports = router;