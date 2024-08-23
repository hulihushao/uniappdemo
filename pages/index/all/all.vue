<template>
	<view class="all">
		<view class="all-item" v-for="(item,index) in tj" :key="item.url" @click="handleToDetail(index)">
			<image mode="aspectFill" :src="item.url"></image>
		</view>
	</view>
	<uni-load-more iconType="auto" :status="status" class="loadmore"/>
</template>

<script setup>
	const tjvalue=[{
		url: '/static/imgs/1.jpeg',
		value:0
	}, {
		url: '/static/imgs/2.png',
		value:0
	}, {
		url: '/static/imgs/3.png',
		value:0
	}, {
		url: '/static/imgs/4.png',
		value:0
	}, {
		url: '/static/imgs/5.png',
		value:0
	}, {
		url: '/static/imgs/6.png',
		value:0
	}, {
		url: '/static/imgs/7.jpg',
		value:0
	}, {
		url: '/static/imgs/8.png',
		value:0
	}, ]
	import {
		ref
	} from 'vue';
	import {
		onReachBottom,
		onPullDownRefresh
	} from '@dcloudio/uni-app'
	const handleToDetail = (item) => {
		uni.navigateTo({
			url: '/pages/index/detail/detail?id=' + item
		})
	}
	const tj = ref([...tjvalue])
	const status = ref('more')
	const loadcount=ref(0)
	onReachBottom(() => {
		status.value = 'loading'
		if(loadcount.value>3){
			status.value = 'noMore'
			return
		}
		loadcount.value++
		setTimeout(() => {
			tj.value.push(..._sortTJ())
			status.value = 'more'
			// console.log(tj.value)
		}, 1000)
	})
	onPullDownRefresh(() => {
		setTimeout(() => {
			status.value = 'more'
			loadcount.value=0
			tj.value = [..._sortTJ()]
			uni.stopPullDownRefresh()
		}, 1000)
	})
	const _sortTJ = () => {
		tjvalue.forEach(item => {
			item.value = Math.random()*1000
		})
		tjvalue.sort((a, b) => a.value - b.value)
		// console.log(tjvalue)
		return tjvalue
	}
</script>

<style lang="scss">
	.all {
		padding: 10rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 10rpx;

		.all-item {
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

			.all-name {
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

		.all-item:nth-child(1),
		.all-item:nth-child(2),
		.all-item:nth-child(3) {
			margin-top: 0;

		}
	}
	.loadmore{
		margin-top:10rpx;
	}
</style>