/*
	封装的目标:
	http({
		url:'/login',
		method:'',
		data:{},
		params:{
			a:1,
			b:2
		},  //get请求传输数据的时候，后面拼接的字符串  'http://localhost/login?a=1&b=2'
		success:()=>{},
		fail:()=>{}
	})
*/

const baseUrl='http://localhost';

const jsonToUrl=(json)=>{
	let arr=[];
	for(let key in json){
		arr.push(key+'='+json[key]);
	}
	//arr[a=1,b=2...]
	return arr.join('&');
}

const http=(options)=>{
	if(!options.url){
		console.log('Please enter url!');
		return;
	}
	let url=options.url;
	let method=options.method ||'get';
	let data=options.data ||{};
	let params=options.params ||{};
	
	let json={
		url:baseUrl+url+'?'+jsonToUrl(params),
		method,
		data
	}
	if(options.success){
		json.success=options.success;
	}
	if(options.fail){
		json.fail=options.fail;
	}
	uni.request(json);
	
	
}

//导出http
export default http;