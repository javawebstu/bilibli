<template>
	<view class="search">
		<view class="top">
			<view class="title">搜索结果</view>
		</view>
		<view class="list">
			<view class="card" v-for=" l in list" :key="l.g_id">
				<view class="name">{{l.g_name}}</view>
				<view class="content">{{l.g_content}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../utils/http.js';
	
	export default{
		data(){
			return{
				inputs:'',
				list:[]
			}
		},
		onLoad:function(options){
			this.inputs=options.inputs;
			console.log(this.inputs);
		},
		onShow() {
			http({
				url:'/search',
				params:{
					inputs:this.inputs
				},
				success:(res)=>{
					if(res.data.msg!="fail"){ //[{xxx},{xxx}...]
						this.list=res.data.msg;
					}else{
						uni.showToast({
							title:"fail",
							icon:'error'
						})
					}
				}
			})
		}
		
	}


</script>

<style>
	.title{
		font-size: 50rpx;
		text-align: center;
	}
	
	.card{
		display: flex;
		justify-content: space-around;
	}
</style>