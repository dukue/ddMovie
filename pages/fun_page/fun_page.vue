<template>
	<view>
		<tn-grid align="left" :col="col" class="grid-bg content1">
			<block v-for="(item, index) in list" :key="index">
				<!-- 电影卡片 -->
				<div class="card" :style="{width: gridItemWidth}" @click="handClick(index)">
					<img :src=item.url alt="Avatar" style="width:100%">
					<div class="container">
						<h4>{{item.title}}</h4>
					</div>
				</div>
			</block>
		</tn-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				col: 2,
				list: [{
					url: "http://124.223.107.207/Upload/comic.png",
					title: "漫画"
				}, {
					url: "http://124.223.107.207/Upload/novel.png",
					title: "小说"
				}, {
					url: "http://124.223.107.207/Upload/live.png",
					title: "直播"
				}, {
					url: "http://124.223.107.207/Upload/video.png",
					title: "视频"
				}, {
					url: "http://124.223.107.207/Upload/animation.png",
					title: "动漫"
				}, {
					url: "http://124.223.107.207/Upload/image.png",
					title: "图片"
				}]
			}
		},
		methods: {
			handClick(index){
				console.log(index)
				if(index==3){
					uni.navigateTo({
						url:"/pages/fun_page/fvideo_list/fvideo_list"
					})
				}
			}
		},
		computed: {
			// 兼容小程序
			gridItemWidth() {
				return 95 / this.col + '%'
			},
		},
	}
</script>

<style scoped>
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
		margin-top: 10rpx;
		background-color: #3e3e3e;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>