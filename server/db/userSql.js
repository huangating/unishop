 var User = {
	 //查询用户名
	 queryUserName(param){
		 return "select * from user where userName ='"+param.userName+"'or userPhone = '"+param.userName+"'";
		 
	 },
	 //验证用户名和密码
	 queryUserPwd(param){
	 		 return "select * from user where userName ='"+param.userName+"' and userPwd = '"+param.userPwd+"'";
	 		 
	 }
 }

 module.exports=User