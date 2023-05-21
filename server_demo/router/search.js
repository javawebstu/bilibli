//引入express
const express = require('express')

//引入db工具
const db = require('../utils/db')

//创建路由
const router = express.Router()

//配置业务逻辑
router.get('/search',(req,res)=>{
	//mysql语句     get:req.query.xxx   post:req.body.xxx
	const searchSql = `SELECT * FROM goods WHERE g_name LIKE "%%";`
	
	db.query(searchSql,(err,data)=>{
		if(!err){
			// console.log(data);
			res.send({msg:data})
		}else{
			res.send({msg:'fail'})
		}
	})
})

//导出路由
module.exports=router;