<template>
	<view style="height: 100vh;background-color: #3e3e3e;">
		<h1 class="title">我的收藏 <tn-button @click="deleteSure()" class="tn-icon-delete"
				style="position: absolute;right: 2%; color: white;background-color: orangered">{{deletetext}}</tn-button>
		</h1>
		<view v-if="ifnull" class="imgbox">
			<h2>空空如也</h2>
		</view>
		<tn-grid align="left" :col="col" class="grid-bg content1">
			<block v-for="(item, index) in vList" :key="index">
				<!-- 电影卡片 -->
				<div class="card" :style="{width: gridItemWidth}" @click="handClick(item.vid)">
					<tn-button v-if="deleteBt" @click.native.stop="deleteDataByName(item.vid)"
						class="tn-icon-delete" style="position: absolute;right: 0;font-size: 18px;background-color: orangered;color: white;"></tn-button>
					<img :src=item.url alt="Avatar" style="width:100%">
					<div class="container">
						<h4>{{item.name}}</h4>
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
				col: 3,
				//电影数据数组
				vList: [],
				ifnull: false,
				deleteBt: false,
				deletetext: "删除",
				deleteflag: false,
				//数据库名称，这里我推测应该是要和下面一行数据库路径中的名称保持一致，暂时没验证过不一致会怎样
				databaseName: 'vhistory',
				//数据表名称
				tableName: 'collection',
			}
		},
		computed: {
			// 兼容小程序
			gridItemWidth() {
				return 95 / this.col + '%'
			},
		},
		methods: {
			deleteSure() {
				if (this.deleteflag == false) {
					this.deleteBt = true;
					this.deleteflag = true;
					this.deletetext = "取消";
				} else {
					this.deleteBt = false;
					this.deleteflag = false;
					this.deletetext = "删除";
				}
			},
			deleteDataByName(vid) {
				let deleteDataByNameSql = `DELETE FROM ${this.tableName} WHERE vid = '${vid}'`;
				console.log(deleteDataByNameSql);
				plus.sqlite.executeSql({
					name: this.databaseName,
					sql: deleteDataByNameSql,
					success: (res) => {
						this.querryAllData();
						this.log = '根据姓名删除数据成功';
					},
					fail: (e) => {
						console.log(e);
						this.log = '根据姓名删除数据失败';
					}
				});
			},
			handClick(item) {
				uni.navigateTo({
					url: "/pages/videodetail/videodetail?vid=" + item
				})
			},
			querryAllData() {
				let selectSql = "select * from collection";
				// 注意这里使用的是 selectSql，不是 executeSql
				plus.sqlite.selectSql({
					name: "vhistory",
					sql: selectSql,
					success: (res) => {
						this.vList = res.reverse();
						if (this.vList.length == 0) {
							this.ifnull = true;
						}
					},
					fail: (e) => {
						console.log(e);
						this.log = '查询数据失败';
					}
				});
			},
		},
		onLoad() {
			this.querryAllData();
		}
	}
</script>

<style>
	.title {
		padding: 24rpx;
		margin: auto 20rpx;
		color: #ffa6a6;
		font-size: 36rpx;
		border-bottom: 0.5rpx double orangered;
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
		margin-top: 10rpx;
		background-color: #3e3e3e;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>