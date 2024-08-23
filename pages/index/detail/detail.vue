<template>
	<view class="detail">
		<view class="top">
			<text>{{new Date().getFullYear()}}-</text>
			<text>{{new Date().getMonth()+1}}-</text>
			<text>{{new Date().getDate()}}</text>
			<view>星期{{new Date().getDay()}}</view>
		</view>
		<swiper class="detail-scroll" :current="currentIndex">
			<swiper-item class="img-item" v-for="item in tj" :key="item.url">
				<image :src="item.url" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="foot">
			<text class="uni-icon" @click="downLoad">&#xe403;</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
import {onUnload} from '@dcloudio/uni-app'
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
	}, {
		url: '/static/imgs/6.png'
	}, {
		url: '/static/imgs/7.jpg'
	}, {
		url: '/static/imgs/8.png'
	}, ])

	const formatTime = (time) => {
		if (typeof time !== 'number' || time < 0) {
			return time
		}

		var hour = parseInt(time / 3600)
		time = time % 3600
		var minute = parseInt(time / 60)
		time = time % 60
		var second = time

		return ([hour, minute, second]).map(function(n) {
			n = n.toString()
			return n[1] ? n : '0' + n
		}).join(':')
	}
	let currentIndex = ref(0)
	import {
		onLoad
	} from '@dcloudio/uni-app'
	onLoad((e) => {
		console.log(e)
		if (e.id) {
			currentIndex.value = Number(e.id)
		}
	})
	const downLoad = () => {
		uni.showLoading({
			title: '下载中...'
		})
		let target = tj.value[currentIndex.value]

		uni.downloadFile({
			url: target.url,
			success(res) {
				console.log(res)
				console.log(uni,uni.getAppBaseInfo(),uni.getFileSystemManager())
				uni.File
				uni.saveFile({
					tempFilePath: res.tempFilePath,
					success() {

						uni.showToast({
							title: '下载成功'
						})
						uni.hideLoading()
					},
					fail(err) {
						console.log(err)
						uni.showToast({
							title: '下载失败'
						})
						uni.hideLoading()
					}
				})
			},
			fail() {
				uni.showToast({
					title: '下载失败'
				})
				uni.hideLoading()
			}
		})
	}
	onUnload(()=>{
		uni.hideLoading()
	})
</script>

<style lang="scss">
	.detail {
		width: 100%;
		position: relative;
	}

	.detail-scroll {
		width: 100%;
		height: calc(100vh - var(--window-top));
	}

	.img-item {
		width: 100%;
		display: inline-block;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.top,
	.foot {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 99;
		text-align: center;
		// mix-blend-mode: difference;
		color: #9c9c9c;
	}

	.top {
		font-size: 60rpx;
		top: 20rpx;
	}

	.foot {
		$height: 80rpx;
		height: $height;
		line-height: $height;
		width: 80%;
		bottom: 100rpx;
		font-size: 60rpx;
		background: rgba(0, 0, 0, .2);
		border-radius: 40rpx;
	}
</style>