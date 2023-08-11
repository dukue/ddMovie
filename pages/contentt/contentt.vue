<template>
	<view>
		<tabdetail ref="sload" v-if="mshowif"></tabdetail>
		<vmenu v-if="menushow"></vmenu>
		<userInfo v-if="userShow"></userInfo>
		<funpage v-if="funshow"></funpage>
		<!-- 加载更多 -->
		<view v-if="flag" class="tn-margin-top ttop">
			<tn-load-more class="tn-margin-top" :status=status :loadText="loadText"
				fontColor="rgba(255, 129, 129, 0.8)">
			</tn-load-more>
		</view>
	</view>
</template>

<script>
	import tabdetail from '@/pages/tabdetail/tabdetail.vue';
	import vmenu from '@/pages/menu/menu.vue';
	import userInfo from '@/pages/user/user.vue';
	import funpage from '@/pages/fun_page/fun_page.vue';
	export default {
		data() {
			return {
				loadText: {
					loadmore: '下拉加载',
					loading: '快速加载中……',
					nomore: '没有更多数据了',
					err: '加载失败'
				},
				mshowif: true,
				menushow: false,
				userShow: false,
				funshow: false,
				flag: true,
				status: 'loadmore'
			}
		},
		methods: {
			changeParentProperty(e) {
				this.$emit('child-event', e);
			}
		},
		computed: {
			curridbottom() {
				return this.$store.state.currentId;
			}
		},
		components: {
			tabdetail,
			vmenu,
			userInfo,
			funpage
		},
		watch: {
			curridbottom: {
				handler(nid, oid) {
					if (nid == 0) {
						this.mshowif = true;
						this.menushow = false;
						this.userShow = false;
						this.funshow = false;
						this.changeParentProperty(true);
					} else if (nid == 1) {
						this.menushow = true;
						this.mshowif = false;
						this.userShow = false;
						this.flag = false;
						this.funshow = false;
						this.changeParentProperty(false);
					} else if (nid == 2) {
						this.funshow = true;
						this.mshowif = false;
						this.userShow = false;
						this.menushow = false;
						this.flag = false;
						this.changeParentProperty(false);
					} else if (nid == 4) {
						this.userShow = true;
						this.mshowif = false;
						this.menushow = false;
						this.flag = false;
						this.funshow = false;
						this.changeParentProperty(false);
					}
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style>
	.ttop {
		height: 66rpx;
	}
</style>