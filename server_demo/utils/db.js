//引入mysql
const mysql = require('mysql');

//配置mysql
const db = mysql.createConnection({
	host:'localhost',   //本地：localhost  云服务器：ip
	port:3306,
	user:'root',
	password:'pangbo128**',
	database:'server_data'
})

//导出db
module.exports=db;