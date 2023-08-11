<template>
	<view class="v-box">
		<view class="v-list">
			<block v-for="(item, index) in vList" :key="index">
				<!-- 电影卡片 -->
				<div class="card" @click="handClick(item.vId)">
					<img :src=item.vPic alt="Avatar" style="width:100%">
					<div class="container">
						<h4>{{item.vName}}</h4>
					</div>
				</div>
			</block>
		</view>
		<view class="page-box">
			<uni-pagination title="标题文字" show-icon="true" :total="total" @change="change"
				:current="current"></uni-pagination>
		</view>
		<view class="jumpPage"><input
				style="width: 30%;height: 80%;text-align:center;display:inline-block;background-color: aliceblue;"
				v-model="current" /><tn-button style="margin-left: 30px;display: inline-block;"
				@click="jumpPage(current)">跳转</tn-button></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1,
				total: 71966,
				vList: [],
				tid: 26,
				begin: 0,
				end: 15,
			}
		},
		methods: {
			async getVideo(tid, begin, end) {
				const res = await this.$myRequest({
					url: "/video/getAllVideo",
					data: {
						tid,
						begin,
						end
					}
				})
				this.vList = res.data;
			},
			change(e) {
				this.begin = e.current * 15 - 15;
				this.getVideo(this.tid, this.begin, this.end);
				this.current = e.current;
			},
			jumpPage(ncurrent) {
				this.begin = ncurrent * 15 - 15;
				this.getVideo(this.tid, this.begin, this.end)
			}
		},
		onLoad() {
			this.getVideo(this.tid, this.begin, this.end);
		}
	}
</script>

<style scoped>
	.v-box {
		overflow-x: hidden;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		height: 100vh;
		width: 100%;
		position: fixed;
		background-color: #3e3e3e;
	}

	.page-box {
		display: inline-block;
		width: 50%;
	}

	.jumpPage {
		padding: 10px;
		display: inline-block;
		width: 50%;
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
</style>