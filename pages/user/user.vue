<template>
	<view class="userBox">
		<tn-toast ref="toast"></tn-toast>
		<tn-avatar size="xl" class="logoimg" backgroundColor="#3e3e3e" src="http://124.223.107.207/Upload/logo.png"></tn-avatar>
		<tn-list-view :card="true">
			<block v-for="(item, index) in listitem" :key="index">
				<tn-list-cell @click="handclick(index)" :fontSize=48 :hover=true padding="38rpx 28rpx"
					backgroundColor="#3e3e3e"><span style="color: orangered; margin:50% 3%;"
						:class=item.icon></span><span class="item-text">{{item.text}}</span></tn-list-cell>
			</block>
		</tn-list-view>
		<tn-modal v-model="show" :custom="true">
			<view class="custom-modal-content">
				<view class="tn-icon tn-icon-about-fill"></view>
				<view>
					<img src="http://124.223.107.207/down/down.png" width="100%" alt="">
					<p style="text-align: center;">扫描二维码下载最新安装包</p>
				</view>
			</view>
		</tn-modal>
			<p style="text-align: center;color:gainsboro; margin-top: 20px;">丁丁影视V1.0.0</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listitem: [{
					icon: "tn-icon-time",
					text: "历史记录"
				}, {
					icon: "tn-icon-star",
					text: "我的收藏"
				}, {
					icon: "tn-icon-master",
					text: "分享软件"
				}, {
					icon: "tn-icon-video-square",
					text: "播放器设置"
				}, {
					icon: "tn-icon-help",
					text: "意见反馈"
				}, {
					icon: "tn-icon-windmill",
					text: "检查更新"
				}],
				show: false,
			}
		},
		methods: {
			handclick(index) {
				if (index == 0) {
					uni.navigateTo({
						url: "/pages/vHistory/vHistory"
					})
				} else if(index == 1){
					uni.navigateTo({
						url: "/pages/vCollection/vCollection"
					})
				}
				else if (index == 2) {
					this.show = true
				}
				else if (index == 3){
					this.$refs.toast.show({
						title: '',
						content: '未完善',
						icon: 'error',
						duration: 1500
					})
				}
				else if (index == 4){
					this.$refs.toast.show({
						title: '',
						content: '未完善',
						icon: 'error',
						duration: 1500
					})
				}
				else if (index == 5){
					this.$refs.toast.show({
						title: '',
						content: 'beta测试版，无需更新！',
						icon: 'fail',
						duration: 1500
					})
				}
			},
		},
	}
</script>

<style>
	.userBox {
		position: relative;
	}

	.logoimg {
		margin: 50rpx auto;
		display: flex;
		justify-content: center;
		/* 水平居中 */
	}

	.item-text {
		font-size: 36rpx;
		color: white;
	}
</style>