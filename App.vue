<script>
	export default {
		onLaunch: function() {
			const res = this.$myRequest({
				url: "/video/getVersion",
			});
			res.then(result => {
				if ('1.0.0' == result.data){
					uni.showToast({
						title:"已是最新版本",
						duration: 1500
					})
				}
			});
			return res.data

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';
</style>