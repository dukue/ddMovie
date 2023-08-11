<template>
	<!-- 播放器 -->
	<tn-sticky>
		<video id="myVideo" @fullscreenclick="controltag()" @timeupdate="videoTimeUpdateEvent($event)"
			@ended="autoNext()" :vslide-gesture-in-fullscreen=true :title='title' :initial-time="playTime"
			:autoplay=true class="myvideo" :src="Videosrc" :controls="controlshow"></video>
	</tn-sticky>
</template>

<script>
</script>

<style>
</style>