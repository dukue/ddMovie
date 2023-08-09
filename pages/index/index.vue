<template>
	<view class="body">
		<!-- 自定义导航栏样式 -->
		<uni-nav-bar dark shadow>
			<view class="bar-title">DD Movie</view>
		</uni-nav-bar>
		<!-- 状态栏滚动条 -->
		<statusBar></statusBar>
		<!-- 搜索 -->
		<searchBar v-if="show"></searchBar>
		<!-- 横向滚动tabs标签栏 -->
		<tabsBar v-if="show"></tabsBar>
		<!-- 内容主体 -->
		<contentt @child-event="handleChildEvent" ref="load"></contentt>
		<!-- 底部导航 -->
		<bottomBar></bottomBar>
	</view>
</template>

<script>
	import statusBar from "@/components/statusBar.vue";
	import searchBar from "@/components/searchBar.vue";
	import tabsBar from "@/components/tabsBar.vue";
	import bottomBar from "@/components/bottomBar.vue";

	import contentt from "@/pages/contentt/contentt.vue"
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				show: true,
				searchShow: true,
				//数据库名称，这里我推测应该是要和下面一行数据库路径中的名称保持一致，暂时没验证过不一致会怎样
				databaseName: 'vhistory',
				//数据库路径
				databasePath: '_doc/vhistory.db',
				//数据表名称
				tableName: 'history',
				collectionName: 'collection',
				//操作日志
				log: '请开始操作'
			};
		},
		methods: {
			handleChildEvent(e) {
				this.show = e;
			},
			openDatabase() {
			    plus.sqlite.openDatabase({
			        name: this.databaseName,
			        path: this.databasePath,
			        success: (e) => {
			            this.log = '打开或创建数据库成功';
			        },
			        fail: (e) => {
			            console.log(e);
			            this.log = '打开或创建数据库失败';
			        }
			    });
			},
			closeDatabase() {
			    plus.sqlite.closeDatabase({
			        name: this.databaseName,
			        success: (e) => {
			            this.log = '关闭数据库成功';
			        },
			        fail: (e) => {
			            console.log(e);
			            this.log = '关闭数据库失败';
			        }
			    });
			},
			createTable() {
			    const createSql = 'create table if not exists ' + this.tableName +
			        '(name VARCHAR(32) PRIMARY KEY NOT NULL,url VARCHAR(32) NOT NULL,year VARCHAR(32) NOT NULL,vnum VARCHAR(32) NOT NULL,vid INTEGER NOT NULL,time INTEGER NOT NULL,alltime INTEGER NOT NULL,aindex INTEGER NOT NULL)';
			    console.log(createSql);
			    plus.sqlite.executeSql({
			        name: this.databaseName,
			        sql: createSql,
			        success: (e) => {
			            this.log = '创建数据表成功';
			        },
			        fail: (e) => {
			            console.log(e);
			            this.log = '创建数据表失败';
			        }
			    });
			},
			createCollectionTable() {
			    const createSql = 'create table if not exists ' + this.collectionName +
			        '(name VARCHAR(32) PRIMARY KEY NOT NULL,url VARCHAR(32) NOT NULL,vid INTEGER NOT NULL)';
			    console.log(createSql);
			    plus.sqlite.executeSql({
			        name: this.databaseName,
			        sql: createSql,
			        success: (e) => {
			            this.log = '创建数据表成功';
			        },
			        fail: (e) => {
			            console.log(e);
			            this.log = '创建数据表失败';
			        }
			    });
			},
		},
		components: {
			contentt,
			statusBar,
			searchBar,
			tabsBar,
			bottomBar,
		},
		onReady() {
			this.openDatabase();
			this.createTable();
			this.createCollectionTable();
		},
		onReachBottom() {
			let par = this.$refs.load.$refs.sload
			//触底获取下一页新数据
			par.begin += par.end;
			par.end += 15;
			this.$refs.load.flag = true;
			this.$refs.load.status = 'loading'
			par.getVideo(par.upid, par.begin, par.end).then(result => {
				if (result < 15) {
					this.$refs.load.status = 'nomore'
					this.$refs.load.flag = true;
				}
			});
		},
	}
</script>

<style>
	.body {
		min-height: 100vh;
		position: relative;
		background-color: #3e3e3e;
	}


	/* 标题 */
	.bar-title {
		text-align: center;
		margin: auto;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>