<template>
	<!-- 横向滚动tabs标签栏 -->
	<view class="tabsbar">
		<tn-tabs :fontSize=36 :list="tabList" :isScroll="true" :current="current" inactiveColor="#ffffff"
			activeColor="#ff0000" name="tab-name" @change="change">
		</tn-tabs>
	</view>
</template>

<script>
	export default {
		name: "tabsBar",
		data() {
			return {
				tabList: [{
					'tab-name': '主页'
				}, {
					'tab-name': '电影'
				}, {
					'tab-name': '动漫'
				}, {
					'tab-name': '国产剧'
				}, {
					'tab-name': '日韩剧'
				}, {
					'tab-name': '欧美剧'
				}, {
					'tab-name': '综艺'
				}],
				current: 0
			};
		},
		methods: {
			change(index) {
				this.$store.commit("setCurrent", index);
				this.current = this.$store.state.currents;
			},
		},
	}
</script>

<style scoped>
	.tabsbar {
		width: 100%;
	}
</style>