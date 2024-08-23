<template>
	<uni-nav-bar class="custom-nav-bar" :fixed="true">
		<template v-slot:left>
			<view class="navbar-title">
				首页
			</view>
			<view class="navbar-input">
				<view class="navbar-input-view" @click="handleToSearch">
					<icon class="input-uni-icon" type="search" size="18" color="#999" />
					<input confirm-type="search" class="nav-bar-input" type="text" :disabled="true" placeholder="搜索"
						/>
				</view>
			</view>
		</template>
	</uni-nav-bar>
	<view class="content">
		<swiper class="swiper-img" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item class="swiper-item-con" v-for="(item,index) in tj" :key="item.url">
				<view class="swiper-item">
					<image class="logo" mode="aspectFill" :src="item.url"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="notice">
			<text class="uni-icon">&#xe590;</text>
			<text class="notice-content">正在进行。。。</text>
		</view>

		<view class="main-title">推荐 <text class="uni-icon">&#xe83f;</text> </view>

		<scroll-view :scroll-x="true" class="scroll-img">
			<view class="scroll-item" v-for="(item,index) in tj" :key="item.url" @click="handleToDetail(index)">
				<image mode="aspectFill" :src="item.url"></image>
			</view>

		</scroll-view>

		<view class="main-title jx">
			<view>精选 <text class="uni-icon">&#xe7f4;</text></view>
			<text @click="handleToClassification()">More+</text>
		</view>

		<view class="jx-content">
			<view class="jx-item" v-for="(item,index) in jx" :key="item.url" @click="handleToAll(item.name)">
				<image mode="aspectFill" :src="item.url"></image>
				<text class="jx-name">{{item.name}}</text>
			</view>
			<view class="jx-item" @click="handleToClassification()">
				<image mode="aspectFill" src="/static/logo.png"></image>
				<text class="more uni-icon">
					&#xe537;
				</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const handleToDetail = (item) => {
		uni.navigateTo({
			url: '/pages/index/detail/detail?id=' + item
		})
	}
	const tj = ref([{
		url: '/static/imgs/1.jpeg'
	}, {
		url: '/static/imgs/2.png'
	}, {
		url: '/static/imgs/3.png'
	}, {
		url: '/static/imgs/4.png'
	}, {
		url: '/static/imgs/5.png'
	}, ])
	const jx = ref([{
		url: '/static/imgs/1.jpeg',
		name: '风景'
	}, {
		url: '/static/imgs/2.png',
		name: '背景'
	}, {
		url: '/static/imgs/3.png',
		name: '404'
	}, {
		url: '/static/imgs/4.png',
		name: '动漫'
	}, {
		url: '/static/imgs/5.png',
		name: '科幻'
	}, ])
	const handleToClassification = () => {
		uni.navigateTo({
			url: '/pages/index/classificarion/classificarion'
		})
	}
	const handleToAll = (name) => {
		uni.navigateTo({
			url: '/pages/index/all/all?name=' + name
		})
	}
	const handleToSearch=()=>{
		uni.navigateTo({
			url: '/pages/search/search'
		})
	}
</script>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				showPassword: true
			}
		},
		onLoad() {
			console.log('App onLoad')

		},
		onReady() {
			
		},
		onUnload() {
			
		},
		methods: {}
	}
</script>

<style lang="scss">
	
	.navbar-title{
		font-size: 30rpx;
	}
	.navbar-input{
		height: 100%;
		display: flex;
		align-items: center;
	}
	.navbar-input-view{
		width:40%;
		height: 60rpx;
		padding: 10rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		border: 1rpx solid #ccc;
		border-radius: 44rpx;
		margin-left: 20rpx;
	}
	.content {
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		padding: 10rpx;
	}

	.swiper-img {
		width: 100%;
		height: 150px;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.swiper-item {
		height: 100%;
		margin: 0 10rpx;
		border-radius: 10rpx;
		overflow: hidden;

		image {
			height: 100%;
			width: 100%;
		}
	}

	.logo {
		width: 100%;
		margin: auto;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
		margin: 10rpx 0;
	}

	.hover-title {
		.title {
			color: #f00;
		}
	}

	.main-title {
		margin: 20rpx 10rpx;
		font-size: 40rpx;
	}

	.uni-icon {
		font-family: uniicons;
	}

	.uni-eye-active {
		color: $uni-color-primary;
	}

	.scroll-img {
		width: 100%;
		height: 500rpx;
		white-space: nowrap;

		.scroll-item {
			display: inline-flex;
			width: 40%;
			margin: 0rpx 20rpx;
			border-radius: 20rpx;
			overflow: hidden;

			image {
				width: 100%;
			}
		}

		.scroll-item:first-of-type {
			margin-left: 0;
		}

		.scroll-item:last-of-type {
			margin-right: 0;
		}
	}

	.notice {
		$height: 60rpx;
		width: 70%;
		height: $height;
		margin: 20rpx auto;
		padding: 0 20rpx;
		border-radius: 30rpx;
		line-height: $height;
		color: rgb(255, 154, 67);
		background: rgb(255, 249, 234);
box-shadow: 0px 0px 2px 0px #ff9a43;
		.notice-content {
			margin-left: 20rpx;
		}
	}

	.jx {
		display: flex;
		justify-content: space-between;
	}

	.jx-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.jx-item {
			width: 30%;
			border-radius: 20rpx;
			overflow: hidden;
			display: inline-flex;
			margin: 10rpx 0;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 100%;
			}

			.jx-name {
				width: 100%;
				padding: 20rpx 0;
				font-size: 30rpx;
				color: #fff;
				text-align: center;
				position: absolute;
				background: rgba(0, 0, 0, 0.2);
				backdrop-filter: blur(5rpx);
			}
		}

		.jx-item:nth-child(1),
		.jx-item:nth-child(2),
		.jx-item:nth-child(3) {
			margin-top: 0;
		}

		.jx-item:last-of-type {
			position: relative;

			.more {
				position: absolute;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 120rpx;
				color: #fff;
				background: rgba(255, 255, 255, 0.5);
				backdrop-filter: blur(10rpx);
			}
		}
	}
</style>