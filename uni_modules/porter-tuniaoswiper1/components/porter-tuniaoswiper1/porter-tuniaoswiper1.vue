<template>
	<view class="porter-tuniaoswiper1">
		<swiper class="card-swiper" :style="{
			 boxShadow: `6px 6px 8px ${swiperShadowColor}`
		 }" :circular="circular" :vertical="vertical" :autoplay="autoplay" :duration="duration" :interval="interval"
			@change="cardSwiper" :current="currentCardCur">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="currentCardCur==index?'cur':''">
				<view class="swiper-item image-banner">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="indication">
			<block v-for="(item,index) in swiperList" :key="index">
				<view class="spot"
					:class="currentCardCur==index?'active':''" :style="{
					            color: currentCardCur==index?activeColor:spotColor ,
					            backgroundColor: currentCardCur==index?activeBackgroundColor:spotBackgroundColor
					          }" @tap.stop="handleSwiperClick(index)">
					<text class="">{{item.text}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'porter-tuniaoswiper1',
		props: {
			swiperList: {
			      type: Array,
			      default: () => [
			        {
			          id: 0,
			          type: 'image',
			          name: '一起愉快的玩耍叭',
			          text: '恭 · 跨年',
			          url: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg',
			        },
			        {
			          id: 1,
			          type: 'image',
			          name: '如果你也有不错的作品',
			          text: '喜 · 祝福',
			          url: 'https://tnuiimage.tnkjapp.com/swiper/ad1.jpg',
			        },
			        {
			          id: 2,
			          type: 'image',
			          name: '用最少的代码做最骚的效果',
			          text: '发 · 红包',
			          url: 'https://tnuiimage.tnkjapp.com/swiper/ad2.jpg',
			        },
			        {
			          id: 3,
			          type: 'image',
			          name: '商业合作请联系作者',
			          text: '财 · 红庆',
			          url: 'https://tnuiimage.tnkjapp.com/swiper/ad3.jpg',
			        },
			        {
			          id: 4,
			          type: 'image',
			          name: '我们都是好孩子',
			          text: '虎 · 生威',
			          url: 'https://tnuiimage.tnkjapp.com/swiper/ad4.jpg',
			        }
			      ]
			    },
			cardCur: {
				type: Number,
				default: 0
			},
			duration: {
				type: Number,
				default: 500
			},
			interval: {
				type: Number,
				default: 5000
			},
			circular: {
				type: Boolean,
				default: true
			},
			autoplay: {
				type: Boolean,
				default: true
			},
			vertical: {
				type: Boolean,
				default: true
			},
			spotBackgroundColor: {
				type: String,
				default: '#FAD5E8'
			},
			spotColor: {
				type: String,
				default: '#E83A30'
			},
			activeBackgroundColor: {
				type: String,
				default: '#E83A30'
			},
			activeColor: {
				type: String,
				default: '#FFFFFF'
			},
			swiperShadowColor: {
				type: String,
				default: '#fad5e8'
			}


		},
		data() {
			return {
				currentCardCur: this.cardCur
			}
		},
		methods: {
			// cardSwiper
			cardSwiper(e) {
				this.currentCardCur = e.detail.current;
				this.$emit('callBack', this.swiperList[this.currentCardCur], this.currentCardCur);
			},
			// swiper点击事件
			handleSwiperClick(index) {
				this.currentCardCur = index
			},
		}
	}
</script>

<style lang="scss" scoped>
	.porter-tuniaoswiper1{
		margin-top: 150px;/*默认演示高度 不想要就注释掉*/
		overflow: hidden;
	}
	.card-swiper {
		height: 650rpx !important;
		width: 500rpx;
		margin: 30rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.card-swiper swiper-item {
		height: 650rpx;
		width: 500rpx;
		box-sizing: border-box;
		padding: 0rpx;
		border-radius: 20rpx;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		border-radius: 0rpx;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 100%;
	}

	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: inline-block;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		padding: 15rpx 0 0 0;
		text-align: center;
		opacity: 1;
		width: 160rpx;
		height: 60rpx;
		border-radius: 20rpx;
		margin: 20rpx -30rpx !important;
		left: 590rpx;
		right: 0;
		top: -700rpx;
		position: relative;
	}

	.spot.active {
		opacity: 1;
	}

</style>