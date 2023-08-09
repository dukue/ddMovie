<template>
	<!-- 搜索 -->
	<view class="serchbar">
		<uni-search-bar v-model="searchValue" @confirm="search()" bgColor="#d6d6d6" cancelButton="none"
			:placeholder=holder>
		</uni-search-bar><tn-button @click="search()">搜索</tn-button>
		<tn-popup v-model="show" closeIconColor="red" closeBtnIcon="narrow-all" :closeBtn=true :mask=false mode="bottom"
			height="80%">
			<view style="height: 100%; background-color: #3e3e3e;">
				<view class="poptitle"></view>
				<view v-if="imgshow" class="imgbox">
					<img src="http://124.223.107.207/Upload/shark.png" alt="">
					<h4>没有搜索到相关信息！请尝试减少关键字或联系管理员添加影片。</h4>
				</view>
				<block v-for="(item, index) in searchRes" :key="index">
					<tn-list-cell @click="handClick(item.vId)" padding="0rpx 0rpx" :arrow="true">
						<view class="vBox">
							<div class="movie-poster">
								<img :src=item.vPic alt="Movie Poster">
							</div>
							<div class="movie-info">
								<h5 class="movie-title">{{item.vName}}</h5>
								<h4 class="movie-note">{{item.vNote}}</h4>
								<p class="movie-director">导演：{{item.vDirector}}</p>
								<p class="movie-actors">演员：{{item.vActor}}</p>
								<p class="movie-release">上映时间：{{item.vPublishyear}}</p>
							</div>
						</view>
					</tn-list-cell>
				</block>
			</view>
		</tn-popup>
	</view>
</template>

<script>
	export default {
		name: "searchBar",
		data() {
			return {
				holder: '搜索你想看的电影o(￣ε￣*)  ',
				show: false,
				imgshow: false,
				searchValue: "",
				searchRes: []
			};
		},
		methods: {
			handClick(item) {
				uni.navigateTo({
					url: "/pages/videodetail/videodetail?vid=" + item
				})
			},
			async SelectVideo(vname) {
				const res = await this.$myRequest({
					url: "/video/selectVideo",
					data: {
						vname
					},
				})
				if (res.data.length !== 0) {
					this.searchRes = res.data;
					this.imgshow = false;
				} else {
					this.searchRes = [];
					this.imgshow = true;
				}

			},
			onfocus() {
				this.show = true
			},
			search() {
				if (this.searchValue == null || this.searchValue == "") {
					uni.showToast({
						title: "请输入搜索内容!",
						icon: "none"
					})
				} else {
					this.onfocus();
					this.SelectVideo(this.searchValue);
				}
			}
		}
	}
</script>

<style scoped>
	.serchbar {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.imgbox {
		display: flex;
		width: 100%;
	}

	.imgbox img {
		width: 40%;
	}

	.imgbox h4 {
		margin-top: 20%;
		margin-left: 10%;
		color: white;
		width: 50%;
		display: inline-block;
	}

	.poptitle {
		height: 6%;
		border-bottom: 1px double white;
	}

	.vBox {
		display: flex;
		background-color: #3e3e3e;
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
</style>