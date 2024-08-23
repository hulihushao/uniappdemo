<template>
	<uni-nav-bar class="custom-nav-bar" :fixed="true">
		<template v-slot:left>
			<view class="navbar-title">
				分类
			</view>
			<view class="navbar-input">
				<view class="navbar-input-view">
					<icon class="input-uni-icon" type="search" size="18" color="#999" />
					<input confirm-type="search" class="nav-bar-input" type="text" :disabled="true" placeholder="搜索"/>
				</view>
			</view>
		</template>
	</uni-nav-bar>
	<view class="classification">
		<view class="classification-item" v-for="(item,index) in jx" :key="item.url" @click="handleToAll(item.name)">
			<image mode="aspectFill" :src="item.url"></image>
			<text class="classification-name">{{item.name}}</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const handleToAll = (item) => {
		uni.navigateTo({
			url: '/pages/index/all/all?name=' + item
		})
	}
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
	},  {
		url: '/static/imgs/6.png',
		name: '后端'
	}, {
		url: '/static/imgs/7.jpg',
		name: '截图'
	}, {
		url: '/static/imgs/8.png',
		name: '代码'
	},])
</script>

<style lang="scss">
	.navbar-title {
		font-size: 30rpx;
	}

	.navbar-input {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.navbar-input-view {
		width: 40%;
		height: 60rpx;
		padding: 10rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		border: 1rpx solid #ccc;
		border-radius: 44rpx;
		margin-left: 20rpx;
	}

	.classification {
		padding: 10rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 20rpx;

		.classification-item {
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

			.classification-name {
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

		.classification-item:nth-child(1),
		.classification-item:nth-child(2),
		.classification-item:nth-child(3) {
			margin-top: 0;

		}
	}
</style>