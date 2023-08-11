<template>
	<view class="vd-bg">
		<uni-nav-bar height="100rpx" :title="video.vName" shadow color="#bcbcbc"
			background-color="#000000"></uni-nav-bar>
		<tn-toast ref="toast"></tn-toast>
		<!-- 播放器 -->
		<tn-sticky>
			<video id="myVideo" @fullscreenclick="controltag()" @timeupdate="videoTimeUpdateEvent($event)"
				@ended="autoNext()" :vslide-gesture-in-fullscreen=true :title='title' :initial-time="playTime"
				:autoplay=true class="myvideo" :src="Videosrc" :controls="controlshow"></video>
		</tn-sticky>
		<!-- 视频信息 -->
		<div class="container">
			<div class="movie-poster">
				<img :src=video.vPic alt="Movie Poster">
				<p @click="clickCollect()"
					style="text-align: center;font-size: 24px;margin-top: 5rpx;border: 1px solid white;border-radius: 5px;"
					:class="cicon"><span style="font-size:18px;">{{ctext}}</span></p>
			</div>
			<div class="movie-info">
				<h5 class="movie-title">{{video.vName}}</h5>
				<h4 class="movie-note">{{video.vNote}}</h4>
				<p class="movie-director">导演：{{video.vDirector}}</p>
				<p class="movie-actors">演员：{{video.vActor}}</p>
				<p class="movie-release">上映时间：{{video.vPublishyear}}</p>
			</div>
		</div>
		<!-- 视频简介 -->
		<div class="messbg">
			<tn-read-more ref="readMore" :showHeight="200" :shadowStyle="shadow" :closeBtn=true openText="展开">
				<rich-text v-html="content"></rich-text>
			</tn-read-more>
		</div>
		<!-- 集数信息 -->
		<view class="slist">
			<div class="list-title">
				<h3 style="color: white;display: inline-block;">播放</h3>(点击全部展开更多剧集)<span @click="show = true">查看全部
					></span>
			</div>
			<tn-scroll-list indicatorWidth="100" indicatorActiveColor="#ff5500">
				<view class="tn-flex tn-margin-sm">
					<block v-for="(item, index) in playdata" :key="index">
						<view @click="handClick(item,index)"
							:class="['list-item', {'active': index === activeIndex}, 'tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center']">
							<view class="tn-color-black tn-text-lg tn-text-center">
								<text :class="[{'active':index === activeIndex},'tn-text-ellipsis']">{{item.Num}}</text>
							</view>
						</view>
					</block>
				</view>
			</tn-scroll-list>
		</view>
		<!-- 集数底部弹窗 -->
		<tn-popup v-model="show" :closeBtn="true" :borderRadius=23 mode="bottom" height="50%">
			<view>
				<tn-grid align="center" :col="col">
					<block v-for="(item, index) in playdata" :key="index">
						<tn-grid-item @click="handClick(item,index)"
							:class="[{'active': index === activeIndex},'showitem']">
							<view :class="[{'active': index === activeIndex},'showtext']" style="padding: 30rpx;">
								{{ item.Num }}
							</view>
						</tn-grid-item>
					</block>
				</tn-grid>
			</view>
		</tn-popup>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: '',
				content: "",
				col: 3,
				vid: 1,
				video: {},
				inputdata: [],
				show: false,
				playdata: [],
				Videosrc: "",
				itemActive: "",
				playTime: 0,
				allTime: 0,
				activeIndex: 0,
				collect: false,
				ctext: "收藏",
				cicon: "tn-icon-star",
				collectionName: 'collection',
				controlshow: true,
				shadow: {
					backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%,rgba(231, 231, 231, 0.5) 80%)",
					paddingTop: "200rpx",
					marginTop: "-200rpx"
				},
				//数据库名称，这里我推测应该是要和下面一行数据库路径中的名称保持一致，暂时没验证过不一致会怎样
				databaseName: 'vhistory',
				//数据库路径
				databasePath: '_doc/vhistory.db',
				//数据表名称
				tableName: 'history',
			}
		},
		methods: {
			controltag() {
				if (this.controlshow == false) {
					this.controlshow = true;
				} else {
					this.controlshow = false;
				}
			},
			videoTimeUpdateEvent(e) { // 播放进度改变
				this.playTime = e.detail.currentTime;
				this.allTime = e.detail.duration
			},
			autoNext() {
				this.activeIndex += 1;
				this.Videosrc = this.playdata[this.activeIndex].link;
				this.title = this.playdata[this.activeIndex].Num;
				this.playTime = 0;
				this.$refs.toast.show({
					title: '播放完毕',
					content: '即将跳转到下一集',
					icon: 'success',
					duration: 1500
				})
			},
			clickCollect() {
				if (this.collect == false) {
					this.collection();
					this.$refs.toast.show({
						title: '',
						content: '收藏成功',
						icon: 'success',
						duration: 1000
					})
				} else {
					this.deleteDataByName();
					this.$refs.toast.show({
						title: '',
						content: '取消收藏',
						icon: 'success',
						duration: 1000
					})
				}
			},
			collection() {
				let key = "(name,url,vid)";
				let value = "'" + this.video.vName + "', '" + this.video.vPic + "', '" + this.vid + "'";
				let insertSql = "insert into " + this.collectionName + key + " values(" + value + ")";
				plus.sqlite.executeSql({
					// 注意这里 name 传参是数据库名，而不是表名
					name: this.databaseName,
					sql: insertSql,
					success: (res) => {
						this.log = '插入数据成功';
						this.collect = true;
						this.cicon = "tn-icon-star-fill yellowc";
						this.ctext = "已收藏"
					},
					fail: (e) => {
						console.log(e);
						if (e.code === -1404) {
							this.log = '插入失败,该数据已存在';
						} else {
							this.log = '插入数据失败';
						}
					}
				});
			},
			async getVideoByid(url, vid) {
				const res = await this.$myRequest({
					url,
					data: {
						vid
					},
				})
				return res.data
			},
			async getUrlByid(url, vid) {
				const res = await this.$myRequest({
					url,
					data: {
						vid
					},
				})
				return res.data
			},
			handClick(item, index) {
				this.Videosrc = item.link;
				this.title = item.Num;
				this.activeIndex = index;
				this.playTime = 0;
			},
			insertOneData() {
				let key = "(name,url,year,vnum,vid,time,alltime,aindex)";
				let value = "'" + this.video.vName + "', '" + this.video.vPic + "', '" + this.video.vPublishyear + "', '" +
					this.title + "', '" + this.vid + "', '" + this.playTime + "', '" + this.allTime + "', '" + this
					.activeIndex + "'";
				let insertSql = "insert into " + this.tableName + key + " values(" + value + ")";
				plus.sqlite.executeSql({
					// 注意这里 name 传参是数据库名，而不是表名
					name: this.databaseName,
					sql: insertSql,
					success: (res) => {
						this.log = '插入数据成功';
					},
					fail: (e) => {
						console.log(e);
						if (e.code === -1404) {
							this.log = '插入失败,该数据已存在';
						} else {
							this.log = '插入数据失败';
						}
					}
				});
			},
			deleteDataByName() {
				let deleteDataByNameSql = `DELETE FROM ${this.collectionName} WHERE vid = '${this.vid}'`;
				console.log(deleteDataByNameSql);
				plus.sqlite.executeSql({
					name: this.databaseName,
					sql: deleteDataByNameSql,
					success: (res) => {
						console.log(res);
						this.collect = false;
						this.cicon = "tn-icon-star";
						this.ctext = "收藏"
					},
					fail: (e) => {
						console.log(e);
						this.log = '根据姓名删除数据失败';
					}
				});
			},
			updateOneData() {
				let updatesql = "update " + this.tableName + " set time=" + this.playTime + "," + "vnum=" + "'" + this
					.title + "'" + "," + "alltime=" + this
					.allTime + "," + "aindex=" + this.activeIndex + " where vid=" + this.vid;
				plus.sqlite.executeSql({
					// 注意这里 name 传参是数据库名，而不是表名
					name: this.databaseName,
					sql: updatesql,
					success: (res) => {
						this.log = '更新数据成功';
					},
					fail: (e) => {
						console.log(e);
						this.log = '更新失败,该数据已存在';
					}
				});
			},
			querryTargetData() {
				let key = "vid";
				let value = "'" + this.vid + "'";
				let selectSql = "select * from " + this.collectionName + " where " + key + " = " + value;
				// 注意这里使用的是 selectSql，不是 executeSql
				plus.sqlite.selectSql({
					name: this.databaseName,
					sql: selectSql,
					success: (res) => {
						if (res.length !== 0) {
							this.collect = true;
							this.cicon = "tn-icon-star-fill yellowc";
							this.ctext = "已收藏"
						}
						this.log = '查询数据成功';
					},
					fail: (e) => {
						console.log(e);
						this.log = '查询数据失败';
					}
				});
			},
			querryHistoryData() {
				let key = "vid";
				let value = this.vid;
				let selectSql = "select * from " + this.tableName + " where " + key + " = " + value;
				// 注意这里使用的是 selectSql，不是 executeSql
				plus.sqlite.selectSql({
					name: this.databaseName,
					sql: selectSql,
					success: (res) => {
						if (res.length !== 0) {
							uni.showLoading({
								title: '定位到上次播放位置' + res[0].time,
							});
							setTimeout(function() {
								uni.hideLoading();
							}, 2000);
							this.playTime = res[0].time;
							this.activeIndex = res[0].aindex;
							this.Videosrc = this.playdata[this.activeIndex].link;
							this.title = this.playdata[this.activeIndex].Num;
						}
						this.log = '查询数据成功';
					},
					fail: (e) => {
						console.log(e);
						this.log = '查询数据失败';
					},
				});
			},
		},
		onLoad(option) {
			this.vid = option.vid;
			this.getVideoByid('/video/selectVideoById', this.vid).then(result => {
					this.video = result
				}),
				this.getVideoByid('/video/selectVideoContent', this.vid).then(result => {
					const regex = /<\/?(?:p|span)[^>]*>|style="[^"]*"|[^一-\u9fa5A-Za-z（。，！？；：“”‘’、）]/g;

					this.content = result.replace(regex, '').replace(/[A-Za-z]/g, '');
				}),
				this.getVideoByid('/video/selectPlayUrl', this.vid).then(result => {
					let oarray = result.replace(/(f|t)(s|p)m3u8#?/g, "").split("$");
					let narray = [];
					let larry = [];
					//获取去空新数组
					for (var i = 0; i < oarray.length; i++) {
						if (oarray[i] !== "" && oarray[i] !== null) {
							narray.push(oarray[i]);
						}
					}
					for (let i = 0; i < narray.length; i += 2) {
						const Num = narray[i];
						const link = narray[i + 1];
						larry.push({
							Num,
							link
						});
					}
					this.playdata = larry;
					this.Videosrc = larry[0].link;
					this.title = larry[0].Num;
					this.querryHistoryData();
				})
			this.querryTargetData();
		},
		onReady() {
			this.$nextTick(() => {
				this.$refs.readMore.init();
			})
		},
		onUnload() {
			this.insertOneData()
			this.updateOneData()
		}
	}
</script>

<style scoped>
	.myvideo {
		width: 100%;
	}

	.vd-bg {
		position: relative;
		height: 100vh;
		width: 100%;
		background-color: #3e3e3e;
	}

	.container {
		color: aliceblue;
		display: flex;
		width: 100%;
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
		height: 70%;
	}

	.movie-info {
		overflow: hidden;
		/* 超出部分隐藏 */
		flex: 70%;
		padding: 10px;
	}

	.movie-title {
		font-size: 18px;
		font-weight: bold;
	}


	.movie-actors,
	.movie-release,
	.movie-director {
		white-space: nowrap;
		/* 文本不换行 */
		margin-top: 15rpx;
		font-size: 16px;
	}

	.movie-note {
		padding: 1%;
		margin-top: 10rpx;
		display: inline-block;
		border-radius: 18%;
		background: #ff5500;
	}

	.messbg {
		border-radius: 6%;
		margin: 10rpx;
		padding: 20rpx;
		background-color: rgba(250, 250, 250, 0.5);
	}

	.slist {
		border-radius: 10rpx;
		margin: 10rpx;
		padding: 10rpx;
		background-color: rgba(250, 250, 250, 0.5);
	}

	.list-title {
		position: relative;
		margin: 20rpx;
		color: #e5e5e5;
	}

	.list-title>span {
		position: absolute;
		top: 0;
		right: 0;
	}

	.list-item {
		background-color: rgba(240, 240, 240, 0.7);
		border-radius: 8rpx;
		margin-left: 10rpx;
		padding: 10rpx;
	}

	.active {
		background-color: orangered;
		/* 设置高亮的背景颜色 */
		color: #ffffff !important;
		/* 设置高亮的文本颜色 */
	}

	.tn-text-ellipsis {
		color: orangered;
	}

	.showitem {
		margin: 10rpx 0;
		border-collapse: collapse;
		border: 1px solid black;
		border-radius: 10rpx;
	}

	.yellowc {
		color: orange;
	}

	.showtext {}
</style>