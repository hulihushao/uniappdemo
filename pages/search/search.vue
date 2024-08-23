<template>
	<view class="search-input">
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @cancel="cancel" @clear="clear"
			@focus="focus">
		</uni-search-bar>
	</view>
	<view class="his" v-if="!isShowRes">
		<text>历史记录</text>
		<view class="history">
			<view class="his-item" v-for="item in hisArr" :key="item.name" @click="handleClickHis(item)">
				<text>{{item.name}}</text>
			</view>
		</view>
	</view>
	<scroll-view scroll-y="true" class="res-scroll" v-else>
		<view class="res">
			<view class="res-item" v-for="(item,index) in tj" :key="item.url" @click="handleToDetail(index)">
				<image mode="aspectFill" :src="item.url"></image>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	let searchValue = ref('')
	let isShowRes = ref(false)
	const search = () => {
		if (searchValue.value) {
			hisArr.value.unshift({
				name: searchValue.value
			})
			isShowRes.value = true
		}
	}
	const focus = () => {
		isShowRes.value = false
	}
	const cancel = () => {
		uni.navigateBack()
	}
	const clear = () => {
		searchValue.value = ''
	}
	let hisArr = ref([{
		name: '动漫'
	}])
	const handleClickHis = (item) => {
		searchValue.value = item.name
		search()
	}

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
	}, {
		url: '/static/imgs/6.png'
	}, {
		url: '/static/imgs/7.jpg'
	}, {
		url: '/static/imgs/8.png'
	}, ])
</script>

<style lang="scss">
	.his {
		padding: 10rpx;
	}

	.history {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10rpx;
		padding: 0 20rpx;

		.his-item {
			border: 1rpx solid #ccc;
			padding: 5rpx;
			border-radius: 10rpx;
			font-size: 20rpx;
			margin-left: 20rpx;
			margin-bottom: 10rpx;
		}

		.his-item:first-of-type {
			margin-left: 0;
		}
	}

	.res-scroll {
		width: 100%;
		height: calc(100vh - var(--window-top) - 112rpx);
	}

	.res {
		flex: 1;
		padding: 10rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 10rpx;
		overflow: auto;

		.res-item {
			border-radius: 20rpx;
			overflow: hidden;
			display: inline-flex;
			margin-top: 10rpx;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 100%;
			}
		}

		.res-item:nth-child(1),
		.res-item:nth-child(2),
		.res-item:nth-child(3) {
			margin-top: 0;

		}
	}
</style>