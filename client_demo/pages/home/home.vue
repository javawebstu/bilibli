<template>
	<!-- 一个搜索框，一个搜索按钮 -->
	<view class="home">
		<input type="text" v-model="inputs">
		<button @click="search">搜索</button>
	</view>
</template>

<script>
	
	export default{
		data(){
			return{
				inputs:''
			}
		},
		methods:{
			//取到inputs，把inputs传输给search.vue
			search(){
				uni.navigateTo({
					url:`/pages/home/search?inputs=${this.inputs}`
				})
			}
		}
	}
</script>

<style>
	.home{
		display: flex;
	}
	button{
		width: 200rpx;
	}
</style>