<template>
	<view class="category">
		<view class="ablock">
			<view class="cateTitle">
				<h2>电影</h2>
			</view>
			<view class="cateDetail">
				<tn-tag v-for="(item,index) in list1" :key="index" @click="handClick(item.tid,item.name)" margin="10rpx"
					backgroundColor="tn-bg-blue" fontColor="tn-color-white">{{item.name}}</tn-tag>
			</view>
		</view>
		<view class="ablock">
			<view class="cateTitle">
				<h2>电视剧</h2>
			</view>
			<view class="cateDetail">
				<tn-tag v-for="(item,index) in list2" :key="index" @click="handClick(item.tid,item.name)" margin="10rpx"
					backgroundColor="tn-bg-blue" fontColor="tn-color-white">{{item.name}}</tn-tag>
			</view>
		</view>
		<view class="ablock">
			<view class="cateTitle">
				<h2>综艺</h2>
			</view>
			<view class="cateDetail">
				<tn-tag v-for="(item,index) in list3" :key="index" @click="handClick(item.tid,item.name)" margin="10rpx"
					backgroundColor="tn-bg-blue" fontColor="tn-color-white">{{item.name}}</tn-tag>
			</view>
		</view>
		<view class="ablock">
			<view class="cateTitle">
				<h2>动漫</h2>
			</view>
			<view class="cateDetail">
				<tn-tag v-for="(item,index) in list4" :key="index" @click="handClick(item.tid,item.name)" margin="10rpx"
					backgroundColor="tn-bg-blue" fontColor="tn-color-white">{{item.name}}</tn-tag>
			</view>
		</view>
		<view class="ablock">
			<view class="cateTitle">
				<h2>时间</h2>
			</view>
			<view class="cateDetail">
				<tn-tag v-for="(item,index) in list5" :key="index" @click="handClick1(item)" margin="10rpx"
					backgroundColor="tn-bg-blue" fontColor="tn-color-white">{{item}}</tn-tag>
			</view>
		</view>
		<view class="numBox"><span style="color: white; font-size: 36;">上映时间：</span><tn-number-box v-model="year"
				:min="1900" :max="maxyear"></tn-number-box><tn-button style="margin-left: 10rpx;" @click="handClick1(year)" backgroundColor="tn-bg-blue"
				fontColor="tn-color-white">跳转</tn-button></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cateIndex: '',
				begin: 0,
				end: 15,
				year:2023,
				maxyear:2023,
				list1: [{
					name: "动作片",
					tid: 5
				}, {
					name: "爱情片",
					tid: 6
				}, {
					name: "科幻片",
					tid: 7
				}, {
					name: "恐怖片",
					tid: 8
				}, {
					name: "战争片",
					tid: 9
				}, {
					name: "喜剧片",
					tid: 10
				}, {
					name: "纪录片",
					tid: 11
				}, {
					name: "剧情片",
					tid: 12
				}, {
					name: "动画片",
					tid: 35
				}],
				list2: [{
					name: "大陆剧",
					tid: 13
				}, {
					name: "港台剧",
					tid: 14
				}, {
					name: "欧美剧",
					tid: 15
				}, {
					name: "日韩剧",
					tid: 16
				}, {
					name: "泰剧",
					tid: 36
				}],
				list3: [{
					name: "大陆综艺",
					tid: 29
				}, {
					name: "港台综艺",
					tid: 30
				}, {
					name: "日韩综艺",
					tid: 31
				}, {
					name: "欧美综艺",
					tid: 32
				}],
				list4: [{
					name: "国漫",
					tid: 25
				}, {
					name: "日漫",
					tid: 26
				}, {
					name: "欧美动漫",
					tid: 27
				}, {
					name: "海外动漫",
					tid: 28
				}],
				list5: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
			}
		},
		methods: {
			handClick(tid, name) {
				uni.navigateTo({
					url: "/pages/typedetail/typedetail?tid=" + tid + "&name=" + name
				})
			},
			handClick1(year) {
				uni.navigateTo({
					url: "/pages/typedetail/typedetail?year=" + year
				})
			},
			querryAllData() {
			    let selectSql = "select * from history";
			    console.log(selectSql);
			    // 注意这里使用的是 selectSql，不是 executeSql
			    plus.sqlite.selectSql({
			        name: "vhistory",
			        sql: selectSql,
			        success: (res) => {
			            console.log(res);
			        },
			        fail: (e) => {
			            console.log(e);
			            this.log = '查询数据失败';
			        }
			    });
			},
		},
		onReady() {
			const date = new Date();
			this.maxyear = date.getFullYear();
		}
	}
</script>

<style scoped>
	.ablock {
		display: flex;
	}

	.cateTitle {
		width: 20%;
		color: white;
		padding: 10rpx;
	}

	.cateDetail {
		margin-top: 10%;
		width: 80%;
	}

	.numBox {
		margin: 50rpx auto;
	}
</style>