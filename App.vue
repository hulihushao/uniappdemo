<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// uni.switchTab({
			// 	url:'/pages/about/index'
			// })
		},
		
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '@/static/static.css';
	.uni-icon {
		font-family: uniicons;
	}
</style>
