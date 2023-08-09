# porter-tuniaoswiper1
TuniaoUi for porter-tuniaoswiper1 v0.0.1| by 白日梦想家 2023-6-25
```
porter-tuniaoswiper1/components/porter-tuniaoswiper1/porter-tuniaoswiper1.vue
porter-tuniaoswiper1.vue 默认添加了 margin-top:150px 不需要可以注释掉
```
使用方式：
```
Tips:本插件完美贴合图鸟UI，如果需获得更好的使用体验请引用图鸟UI:https://ext.dcloud.net.cn/plugin?id=7088

<template>
	<!-- 渲染组件 -->
	<tuniaoswiper1 :cardCur="cardCur" @callBack="callBack"></tuniaoswiper1>
</template>

<script>
	//引用组件
	import tuniaoswiper1 from "@/uni_modules/porter-tuniaoswiper1/components/porter-tuniaoswiper1/porter-tuniaoswiper1.vue"
	export default {
		components: {
			tuniaoswiper1, //注册组件
		},
		data() {
			return {
				swiperList: null, //数据源
				cardCur: 0, //当前选中下标
			}
		},
		methods: {
			//回调方法,v:当前obj,i当前下标
			callBack(v, i) {
				console.log(v, i)
			}
		}
	}
</script>

<style>
</style>
	 
```
```
props结构:
swiperList:数据源
cardCur:当前选中值
duration:滑动动画时长 
interval:自动切换时间间隔
circular:是否采用衔接滑动，即播放到末尾后重新回到开头
autoplay:是否自动切换 
vertical:滑动方向是否为纵向
spotBackgroundColor:选项卡默认背景颜色
spotColor:选项卡默认文字颜色
activeBackgroundColor:选项卡选中背景颜色
activeColor:选项卡选中文字颜色
swiperShadowColor:轮播图阴影颜色

swiperList结构
{
  id: 0,
  type: 'image',
  name: '一起愉快的玩耍叭',
  text: '恭 · 跨年',
  url: 'https://tnuiimage.tnkjapp.com/shop/banner2.jpg',
},
```
仅供开发，如作它用所承受的法律责任一概与作者无关
图鸟文档地址:[](https://vue2.tuniaokj.com/)
uniapp插件社区:[](https://ext.dcloud.net.cn/publisher?id=356088)
*使用TuniaoUi开发扩展与插件时，请注明基于tuniao字眼
## 图鸟开源项目

[![开源项目](https://tnuiimage.tnkjapp.com/uniapp_market/qr-code-new3.jpg "开源项目")](https://tnuiimage.tnkjapp.com/uniapp_market/qr-code-new3.jpg "开源项目")

