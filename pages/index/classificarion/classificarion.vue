<template>
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
		name:'风景'
	}, {
		url: '/static/imgs/2.png',
		name:'背景'
	}, {
		url: '/static/imgs/3.png',
		name:'404'
	}, {
		url: '/static/imgs/4.png',
		name:'动漫'
	}, {
		url: '/static/imgs/5.png',
		name:'科幻'
	}, ])
</script>

<style lang="scss">
	.classification {
		padding: 10rpx;
		display: grid;
		grid-template-columns: repeat(3,1fr);
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
			.classification-name{
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