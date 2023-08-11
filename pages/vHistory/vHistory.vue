<template>
	<view class="hbox">
		<tn-modal v-model="show" :title="title" :content="content" @click="click" :button="button"></tn-modal>
		<h1 class="title">历史记录 <span @click="deleteSure()" class="tn-icon-delete"
				style="position: absolute;right: 2%;color: aqua;">清空</span></h1>
		<view v-if="ifnull" class="imgbox">
			<h2>没有历史记录，快去看剧吧！</h2>
		</view>
		<block v-for="(item, index) in hlist" :key="index">
			<tn-list-cell @click="handClick(index)" padding="0rpx 0rpx">
				<view class="vBox">
					<div class="movie-poster">
						<img :src=item.url alt="Movie Poster">
					</div>
					<div class="movie-info">
						<h5 class="movie-title">{{item.name}}</h5>
						<p class="movie-release">上映时间：{{item.year}}</p>
						<p class="movie-vnum">播放至：{{item.vnum}}</p>
						<p class="movie-time">已播放：{{secondsToFormatTime(item.time)}}</p>
						<tn-line-progress :height=6 :round=false :percent="pnum(item.time,item.alltime)"
							activeColor="#01BEFF"></tn-line-progress>
					</div>
				</view>
			</tn-list-cell>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hlist: [],
				show: false,
				title: '清空历史记录',
				ifnull: false,
				content: '确定要清空所有记录吗？',
				vpercent:"0",
				button: [{
						text: '取消',
						backgroundColor: '#E6E6E6',
						fontColor: '#a2a2a2',
						plain: true,
						shape: 'round'
					},
					{
						text: '确定',
						backgroundColor: 'tn-bg-indigo',
						fontColor: '#FFFFFF'
					}
				]
			}
		},
		methods: {
			handClick(index) {
				uni.navigateTo({
					url: "/pages/videodetail/videodetail?vid=" + this.hlist[index].vid
				})
			},
			click(e) {
				if (e.index == 0) {
					this.show = false;
				} else {
					this.show = false;
					this.deleteList();
				}
			},
			querryAllData() {
				let selectSql = "select * from history";
				// 注意这里使用的是 selectSql，不是 executeSql
				plus.sqlite.selectSql({
					name: "vhistory",
					sql: selectSql,
					success: (res) => {
						this.hlist = res.reverse();
						if (this.hlist.length == 0) {
							this.ifnull = true;
						}
					},
					fail: (e) => {
						console.log(e);
						this.log = '查询数据失败';
					}
				});
			},
			pnum(time, alltime) {
				return Math.floor((time / alltime) * 100)
			},
			secondsToFormatTime(seconds) {
				var date = new Date(null)
				date.setSeconds(seconds)
				return date.toISOString().substr(11, 8)
			},
			deleteSure() {
				this.show = true;
			},
			deleteList() {
				let deleteAllDstaSql = `DELETE FROM history`;
				console.log(deleteAllDstaSql);
				plus.sqlite.executeSql({
					name: "vhistory",
					sql: deleteAllDstaSql,
					success: (res) => {
						this.log = '删除所有数据成功';
						this.hlist = [];
						if (this.hlist.length == 0) {
							this.ifnull = true;
						}
					},
					fail: (e) => {
						console.log(e);
						this.log = '删除所有数据失败';
					}
				});			
			}
		},
		onLoad() {
		},
		onShow() {
			this.querryAllData();
		}
	}
</script>

<style scoped>
	.hbox {
		height: 100vh;
		background-color: #3e3e3e;
	}

	.title {
		padding: 18rpx;
		margin: auto 20rpx;
		color: #ffa6a6;
		font-size: 36rpx;
		border-bottom: 0.5rpx double orangered;
	}

	.vBox {
		display: flex;
		background-color: #3e3e3e;
		width: 100%;
	}

	.imgbox {
		display: flex;
		width: 100%;
	}

	.imgbox h2 {
		margin-top: 50%;
		margin-left: 20%;
		color: white;
		display: inline-block;
	}

	.movie-poster {
		flex: 30%;
		padding: 10px;
	}

	.movie-poster img {
		border: 1px solid #C1C1C1;
		box-shadow: 2px 2px 2px #6F6F6F;
		border-radius: 10%;
		width: 100%;
		height: auto;
	}

	.movie-info {
		overflow: hidden;
		/* 超出部分隐藏 */
		flex: 70%;
		padding: 10px;
		color: white;
		border-bottom: 1px solid orangered;
	}

	.movie-title {
		white-space: nowrap;
		/* 文本不换行 */
		color: #ffe2af;
		font-size: 21px;
		font-weight: bold;
		margin-bottom: 20rpx;
	}

	.movie-time {
		white-space: nowrap;
		/* 文本不换行 */
		font-size: 15px;
		margin-bottom: 20rpx;
	}

	.movie-vnum {
		white-space: nowrap;
		/* 文本不换行 */
		font-size: 15px;
		margin-bottom: 20rpx;
	}

	.movie-release {
		white-space: nowrap;
		/* 文本不换行 */
		font-size: 15px;
		margin-bottom: 20rpx;
	}
</style>