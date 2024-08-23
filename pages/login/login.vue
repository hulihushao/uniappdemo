<template>
	<view class="login">
		<uni-forms ref="formRef" :rules="rules" :model="form" class="forms">
			<uni-forms-item label="" name="name">
				<uni-easyinput prefixIcon='person' v-model="form.name" placeholder="请输入账户" clearable>
					<template #prefixIcon>
						<text class="uni-icon">&#xe101;</text>
					</template>
				</uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="" name="pwd">
				<uni-easyinput prefixIcon='locked' v-model="form.pwd" placeholder="请输入密码" clearable>
					<template #prefixIcon>
						<text class="uni-icon">&#xe101;</text>
					</template>
				</uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="" name="">
				<button type="primary" @click="handleLogin">登 录</button>
			</uni-forms-item>
		</uni-forms>
		<view class="qit">
			<text class="qit-title">第三方登录</text>
			<image @click="handleOrLogin" src="../../static/logo.png" mode="aspectFill"></image>
		</view>
		<view class="xy">
			<checkbox-group @change="change">
				<label>
					<checkbox class="check" value="true" :checked="checkValue" style="transform:scale(0.5)" />
					<text>请勾选<text class="userxy">《用户协议》</text></text>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const formRef = ref()
	const form = ref({
		name: '',
		pwd: ''
	})
	const rules = ref({
		name: {
			rules: [{
				required: true,
				errorMessage: '账户不能为空'
			}]
		},
		pwd: {
			rules: [{
				required: true,
				errorMessage: '密码不能为空'
			}]
		}
	})
	const checkValue = ref(false)
	const change = (e) => {
		console.log(e)
		checkValue.value = e.detail.value.length
	}
	const _getTime = () => {
		let now = new Date()
		return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now
			.getMinutes() + ':' + now.getSeconds()
	}
	const handleLogin = () => {
		if (!checkValue.value) {
			uni.showModal({
				content: '请勾选用户协议',
				showCancel: false,
				confirmText: '确定'
			})
			return
		}
		formRef.value.validate().then(res => {
			console.log(res)
			if (res) {
				uni.setStorage({
					key: 'logininfo',
					data: {
						...res,
						logintime: _getTime()
					},
					success() {
						uni.showToast({
							title: '登录成功'
						})
						uni.switchTab({
							url: '/pages/my/my'
						})
					},
					fail() {
						uni.showToast({
							title: '登录失败'
						})
					}
				})
			}
		})
	}
	const handleOrLogin = () => {
		if (!checkValue.value) {
			uni.showModal({
				content: '请勾选用户协议',
				showCancel: false,
				confirmText: '确定'
			})
			return
		}
		uni.login({
			provider: 'weixin',
			success() {
				uni.showToast({
					title: '登录成功'
				})
			},
			fail() {
				uni.showToast({
					title: '登录失败'
				})
			}
		})
	}
</script>

<style lang="scss" scoped>
	.login {
		background: url(../../static/imgs/1.jpeg) no-repeat center/cover;
		height: calc(100vh - var(--window-top));
		position: relative;

		.forms {
			width: 80%;
			position: absolute;
			top: 300rpx;
			left: 0;
			right: 0;
			margin: auto;
		}

		.qit {
			$color: #616161;
			width: 100%;
			position: absolute;
			bottom: 200rpx;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			color: $color;

			.qit-title {
				font-size: 15rpx;
				position: relative;

				&::after,
				&::before {
					content: '';
					position: absolute;
					width: 120rpx;
					height: 1rpx;
					display: block;
					background: $color;
					top: 50%;
				}

				&::after {

					left: 120rpx;
				}

				&::before {
					left: -100%;
				}
			}

			image {
				width: 40rpx;
				height: 40rpx;
				margin-top: 20rpx;
			}
		}

		.xy {
			width: 100%;
			position: absolute;
			bottom: 40rpx;
			display: flex;
			justify-content: center;

			label {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.userxy {
				color: $uni-color-primary;
			}
		}
	}
</style>