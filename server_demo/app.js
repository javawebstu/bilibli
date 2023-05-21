//引入express
const express = require('express');

//引入路由
const search = require('./router/search')

//创建服务器
const app = express();

//定义相关配置
app.use(express.json())  //定义前后台交互的数据格式为json格式
app.use(express.urlencoded({extended:false}))  //定义请求头类型为 application/json

//使用路由
app.use(search);

//创建端口号
app.listen(80,()=>{
	console.log("服务器已启动！");
})