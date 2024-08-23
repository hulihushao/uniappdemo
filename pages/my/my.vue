<template>
	<view class="my">
		<view class="top-bg">
			<view class="avatar" @click="handleLogin">
				<image v-if="username=='未登录'" src="../../static/logo.png" mode="aspectFill"></image>
				<uni-file-picker v-else class="filepicker" v-model="file" title="" limit="1" file-mediatype="image"
					:imageStyles="imageStyles" :del-icon="false" disable-preview @select="selectFile"></uni-file-picker>
				<!-- <text v-if="username=='未登录'" class="tologin">点击登录</text> -->
			</view>
			<text class="username">{{username}}</text>
			<view class="time" v-if="username!='未登录'">
				登录于 <text>{{logintime}}</text>
			</view>
		</view>
		<view class="main" v-if="username!='未登录'">
			<uni-list>
				<uni-list-item title="账户详情" clickable showArrow @click="click"></uni-list-item>
				<uni-list-item title="我的下载" clickable showArrow @click="click"></uni-list-item>
				<uni-list-item title="系统设置" clickable showArrow @click="click"></uni-list-item>
				<uni-list-item title="关于" clickable showArrow @click="clickAbout"></uni-list-item>
			</uni-list>
		</view>
		<view class="footer" v-if="username!='未登录'">
			<button type="primary" class="out-btn" @click="handleOut">退出登录</button>
		</view>
	</view>
</template>

<script setup>
	import {
		onShow,onLoad
	} from '@dcloudio/uni-app'
	// uni.login({
	// 	provider: 'weixin',
	// 	success() {
	// 		uni.showToast({
	// 			title: '登录成功'
	// 		})
	// 	},
	// 	fail() {
	// 		uni.showModal({
	// 			content: "登录失败",
	// 			showCancel: false,
	// 			confirmText: "确定"
	// 		})
	// 	}
	onShow(() => {
		if(username.value!='未登录')return
		uni.getStorage({
			key: "logininfo",
			success({
				data
			}) {
				username.value = data?.name || '未登录'
				logintime.value = data?.logintime || ''
			}
		})
	})
	import {
		ref
	} from 'vue';
	const file = ref({
		name: 'logo.png',
		extname: 'png',
		url: '../../static/logo.png'
	})
	const imageStyles = ref({
		width: '220rpx',
		height: '220rpx',
		border: {
			radius: '50%'
		},
		
	})
	const username = ref('未登录')
	const logintime=ref('')
	const handleLogin = () => {
		if (username.value == '未登录') {
			uni.navigateTo({
				url: '/pages/login/login'
			})
		}
	}
	const click = () => {

	}
	const selectFile = (e) => {
		console.log(e)
		uni.showLoading({
			title: '正在上传'
		})
		setTimeout(() => {
			uni.hideLoading()
			uni.showToast({
				title: '上传完成'
			})
		}, 1000)
	}
	const handleOut = () => {
		uni.clearStorageSync()
		username.value = '未登录'
		logintime.value = ''
	}
	const clickAbout=()=>{
		uni.navigateTo({
			url:'/pages/about/about'
		})
	}
</script>

<style lang="scss" scoped>
	.my {
		.top-bg {
			height: 400rpx;
			width: 100%;
			background: rgb(241, 241, 241);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.avatar {
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
				overflow: hidden;
				position: relative;
				text-align: center;

				image {
					width: 100%;
					height: 100%;
				}

				.filepicker {
					width: 100%;
					height: 100%;
					display: flex;
					    justify-content: center;
					    align-items: center;
				}

				.tologin {
					line-height: 200rpx;
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					color: #797a82;
					mix-blend-mode: difference;
				}
			}

			.username {
				margin-top: 30rpx;
			}
			.time{
				font-size: 16rpx;
				margin-top: 10rpx;
			}
		}

		.main,
		.footer {
			padding: 30rpx;
			margin-top: 60rpx;
		}

		.out-btn {
			margin-top: 30rpx;
		}
	}
</style>