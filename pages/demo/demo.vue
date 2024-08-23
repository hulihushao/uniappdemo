<template>
	<view>
		<button @click="toView">view</button>
		<view class="input-box">
			<input class="uni-input" placeholder="请输入密码" :password="showPassword" />
			<text class="uni-icon" :class="[!showPassword ? 'uni-eye-active' : '']"
				@click="changePassword">&#xe568;</text>
		</view>
		<icon type="clear" size="20"/>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		useStore
	} from 'vuex'
	let showPassword = ref(true)
	const store = useStore()

	function toView() {
		if (store.state.isPC) {
			uni.reLaunch({
				url: "/components/view/view"
			})
		} else {
			uni.navigateTo({
				url: "/components/view/view"
			})
		}
	}
	const changePassword = () => {
		showPassword.value = !showPassword.value
	}
</script>
<style lang="scss">
	.uni-icon {
		font-family: uniicons;
	}

	.input-box {
		display: flex;
		align-items: center;
		border: 1rpx solid #ccc;
		padding: 10rpx;
		border-radius: 10rpx;
	}
	.uni-input{
		flex: 1;
	}
</style>