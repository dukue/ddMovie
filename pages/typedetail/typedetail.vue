<template>
	<view>
		<uni-nav-bar height="100rpx" @clickLeft="back" :statusBar="true" :fixed="true" leftIcon="undo" :title="typeTitle"
			dark></uni-nav-bar>
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
		<!-- 加载更多 -->
		<view v-if="flag" class="tn-margin-top ttop">
			<tn-load-more class="tn-margin-top" :status=status :loadText="loadText"
				fontColor="rgba(255, 129, 129, 0.8)">
			</tn-load-more>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				col: 3,
				//电影数据数组
				vList: [],
				tid: 1,
				year: 2023,
				begin: 0,
				end: 15,
				vtype: false,
				flag: true,
				typeTitle: "",
				loadText: {
					loadmore: '下拉加载',
					loading: '快速加载中……',
					nomore: '没有更多数据了',
					err: '加载失败'
				},
				status: 'loadmore'
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			async getType(tid, begin, end) {
				const res = await this.$myRequest({
					url: '/video/getAllMovie1',
					data: {
						tid,
						begin,
						end
					}
				})
				this.vList = [...this.vList, ...res.data]
				return res.data.length
			},
			async getYear(year, begin, end) {
				const res = await this.$myRequest({
					url: '/video/pageYearVideo',
					data: {
						year,
						begin,
						end
					}
				})
				this.vList = [...this.vList, ...res.data]
				return res.data.length
			},
			handClick(item) {
				uni.navigateTo({
					url: "/pages/videodetail/videodetail?vid=" + item
				})
			},
		},
		onLoad(options) {
			if (options.year !== undefined) {
				this.vtype = true;
				this.typeTitle = options.year + "年上映";
				this.year = options.year;
				this.getYear(this.year, this.begin, this.end);
			} else {
				this.typeTitle = options.name;
				this.tid = options.tid;
				this.getType(this.tid, this.begin, this.end);
			}
		},
		computed: {
			// 兼容小程序
			gridItemWidth() {
				return 95 / this.col + '%'
			},
		},
		onReachBottom() {
			this.begin += 15;
			this.end += 15;
			this.status = "loading";
			if (this.vtype == true) {
				this.getYear(this.year, this.begin, this.end);
			} else {
				this.getType(this.tid, this.begin, this.end);
			}
		}
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