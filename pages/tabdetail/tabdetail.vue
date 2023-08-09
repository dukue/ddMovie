<template>
	<tn-grid align="left" :col="col" class="grid-bg content1">
		<block v-for="(item, index) in vList" :key="index">
			<!-- 电影卡片 -->
			<div class="card" :style="{width: gridItemWidth}" @click="handClick(item.vId)">
				<img :src=item.vPic alt="Avatar" style="width:100%">
				<div class="container">
					<h4>{{item.vName}}</h4>
					<view class="tagBox">
						<tn-tag shape="radius" class="tnTag" backgroundColor="tn-main-gradient-orangered--reverse"
							fontColor="tn-color-white">{{item.vLang===""?"内详":item.vLang}}</tn-tag>
						<tn-tag shape="circle" :plain="true" class="tnTag" backgroundColor="tn-bg-blue"
							fontColor="tn-color-indigo">{{item.vPublishyear===0?"未知":item.vPublishyear}}</tn-tag>
					</view>
				</div>
			</div>
		</block>
	</tn-grid>
</template>

<script>
	export default {
		data() {
			return {
				col: 3,
				//电影数据数组
				vList: [],
				upid: 1,
				begin: 0,
				end: 15,
				url: '/video/getAllMovie'
			}
		},
		computed: {
			// 兼容小程序
			gridItemWidth() {
				return 95 / this.col + '%'
			},
			currid() {
				return this.$store.state.currents;
			},
		},
		watch: {
			currid: {
				handler(nid, oid) {
					//电影
					if (nid == 1) {
						this.vList = [];
						this.upid = 1;
						this.url = '/video/getAllMovie';
						this.getVideo(this.upid, this.begin, this.end)
					} else if (nid == 2) {
						this.vList = [];
						this.upid = 4;
						this.url = '/video/getAllMovie';
						this.getVideo(this.upid, this.begin, this.end)
					} else if (nid == 3) {
						this.vList = [];
						this.upid = 13;
						this.url = '/video/getAllMovie1?tid=13';
						this.getVideo(this.upid, this.begin, this.end)
					} else if (nid == 4) {
						this.vList = [];
						this.upid = 16;
						this.url = '/video/getAllMovie1?tid=16';
						this.getVideo(this.upid, this.begin, this.end)
					} else if (nid == 5) {
						this.vList = [];
						this.upid = 15;
						this.url = '/video/getAllMovie1?tid=15';
						this.getVideo(this.upid, this.begin, this.end)
					} else if (nid = 6) {
						this.vList = [];
						this.upid = 3;
						this.url = '/video/getAllMovie';
						this.getVideo(this.upid, this.begin, this.end)
					}
				},
				deep: true,
				immediate: true,
			},
		},
		mounted() {
			// this.getVideo(this.upid, this.begin, this.end)
		},
		methods: {
			handClick(item) {
				uni.navigateTo({
					url: "/pages/videodetail/videodetail?vid=" + item
				})
			},
			async getVideo(upid, begin, end) {
				const res = await this.$myRequest({
					url: this.url,
					data: {
						upid,
						begin,
						end
					}
				})
				this.vList = [...this.vList, ...res.data]
				return res.data.length
			},
		},
		components: {}
	}
</script>

<style scoped>
	.grid-bg {
		background-color: #3d3d3d;
	}

	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		border-radius: 5px;
		margin-left: 10rpx;
		position: relative;
	}

	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	img {
		height: 360rpx;
		border-radius: 5px 5px 0 0;
	}

	.container {
		overflow: hidden;
		/* 超出部分隐藏 */
		text-align: left;
		color: #ffffff;
		padding-bottom: 10upx;
	}

	.container h4 {
		white-space: nowrap;
		/* 文本不换行 */
	}

	.content1 {
		background-color: #3e3e3e;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.tagBox {
		overflow: hidden;
		margin-top: 10rpx;
		display: flex;
	}

	.tnTag {
		overflow: hidden;
		white-space: nowrap;
		width: 48%;
	}
</style>