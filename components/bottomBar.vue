<template>
		<!-- 底部导航 -->
		<tn-tabbar :beforeSwitch="beforeSwitch" bg-color="#3d3d3d" activeColor="#ffffff" activeIconColor="tn-cool-bg-color-15" v-model="currentIndex" :list="tabbarList"></tn-tabbar>
</template>

<script>
	export default {
		name:"bottomBar",
		data() {
			return {
				// 底部tabbar菜单数据
				tabbarList: [{
						title: '精选',
						activeIcon: 'home-capsule-fill',
						inactiveIcon: 'home-capsule'
					},
					{
						title: '分类',
						activeIcon: 'menu-fill',
						inactiveIcon: 'menu'
					},
					{
						title: '猫猫',
						activeIcon: 'video',
						inactiveIcon: 'video-fill',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true
					},
					{
						title: '工具',
						activeIcon: 'computer-fill',
						inactiveIcon: 'computer'
					},
					{
						title: '我的',
						activeIcon: 'vip-fill',
						inactiveIcon: 'vip'
					}
				],
				// tabbar当前被选中的序号
				currentIndex: 0,
			};
		},
		methods:{
			beforeSwitch(index) {
			 this.$store.commit("setCurrentId", index);
			 this.currentIndex = this.$store.state.currentId;
			 return true
			}
		}
	}
</script>

<style>

</style>