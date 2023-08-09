<template>
		<!-- 状态栏滚动消息 -->
		<tn-notice-bar :list="messList" mode="vertical" :speed="140" backgroundColor="tn-bg-red"
			fontColor="#FFFFFF"></tn-notice-bar>
</template>

<script>
	export default {
		name:"statusBar",
		data() {
			return {
				messList: [
					'丁丁影视v1.0.0正式发布',
					'今天天气晴朗，适合处理bug'
				],
			};
		}
	}
</script>

<style>

</style>