<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
	.video-play video {
		width: 375px;
		height: 400px;
		border: 1px solid #000;
		display: block;
		overflow: hidden;
		/*height:100%;
		background-color:#000;*/
	}
	*{
		-webkit-backface-visibility: hidden;
	}
	/*
	.video-play video::-webkit-media-controls-start-playback-button {
		display: none;
	}
	.video-play video::-webkit-media-controls-play-button {
		-webkit-appearance:none;
		background-color: red;
	}
	*/

	.video-play video::-webkit-media-controls {
		display: none!important;
	}

	.video-play video::-webkit-media-controls-start-playback-button {
		display: none!important;
	}
	.cover{
		position: absolute;
		z-index: 99;
		width: 100%;
		height: 100%;
		top: 0;
		pointer-events:none;
		background-color: transparent;
		background-size: cover;
		background-position: center center;
		@include flexLayout(flex,center,center);
		overflow: hidden;
	}
	.cover-play-btn:after{
		content: '';
		position: absolute;
		width: 60px;
		height: 60px;
		left: 50%;
		top: 50%;
		transform : translate(-50%,-50%);
		background: url(~@/assets/video/pause.png)  no-repeat;
		background-size: cover;
	}
</style>
<template>
	<div class="ask-view" v-nav="$route.meta">
			<div class="ask-view-box">
				<div class="video-play">
				    <div v-show="showVideoCover" class="cover cover-play-btn" @click="onClick">
				    	<img src="~@/assets/video/back_img.png" alt="封面">
				    </div>
				</div>
			</div>
		</div>
</template>
<script>
import {
	bIsIpad,
	bIsIphoneOs,
	bIsAndroid
} from '@/utils';
	export default{
		name:"Video",
		data(){
			return{
				isFirstTimePlay:false,
				reloadTimer: null,
				playOnError:false,
				playerEl: null,
				showVideoCover: true,
				hlsUrl:""
			}
		},
		mounted(){
			this.hlsUrl = "http://18806.liveplay.myqcloud.com/live/18806_164_15867261_1514535901.m3u8";
			this.initPlayer();
			this.initPlayer();
			document.addEventListener("DOMContentLoaded", (event)=> {
			   this.$el.style.width =  window.innerWidth +'px';
			   this.$el.style.height =  window.innerHeight +'px';
			});
			window.addEventListener("resize", (e)=> {
			    this.$el.style.width =  window.innerWidth +'px';
			    this.$el.style.height =  window.innerHeight +'px';
			});
		},
		methods:{
			onClick(){
				this.showVideoCover = false;
			},
			initPlayer(){
				this.playerEl &&　this.playerEl.remove && this.playerEl.remove();
				this.playerEl = document.createElement('video');
				let EventAry = 'loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange'.split(',');
				EventAry.map(e=>{
					this.playerEl.addEventListener(e, this.videoEventHandler, false);
				})

				this.playerEl.id = 'player';

				if(this.hlsUrl && /myqcloud.com\//.test(this.hlsUrl)){
				    //this.hlsUrl = 'http://2157.liveplay.myqcloud.com/2157_358556a1088511e6b91fa4dcbef5e35a.m3u8';
				    this.playerEl.src = this.hlsUrl;
				    //addSource(_player, hlsUrl, 'application/x-mpegURL');
				}

				this.playerEl.setAttribute('preload', 'auto');
				this.playerEl.setAttribute('webkit-playsinline', 'true');
				this.playerEl.setAttribute('playsinline', 'true');
				this.playerEl.setAttribute('x-webkit-airplay', 'true');
				this.playerEl.setAttribute('x5-video-player-type', 'h5'); //在Android x5内核浏览器下开启同级模式
				this.playerEl.setAttribute('x5-video-player-fullscreen', 'true');//在Android x5内核浏览器下开启播放全屏模式

				// if(getParams('type') == 1){
				//     //点播
				// }else{

				// }
				this.$el.querySelector('.video-play').appendChild(this.playerEl);
				if(bIsIpad || bIsIphoneOs){
				    //_player.style.display = 'none';
				    this.playerEl.play();
				}
			},
			videoEventHandler(event){
			    if(this.playerEl && ( event.type == 'timeupdate') && !this.isFirstTimePlay){
			        this.isFirstTimePlay = true;
			        this.showVideoCover = false;
			        //hideLoading();
			        if(bIsIpad || bIsIphoneOs){
			            this.playerEl.style.height = 'auto';
			            //_player.style.display = '';
			        }
			        if(bIsAndroid){//在android环境下需要延迟，避免页面抖动
			            setTimeout(()=>{
			                this.playerEl.style.height = 'auto';
			            },500);
			        }
			    }
			    if(this.playerEl && event.type == 'pause'){
			        this.isFirstTimePlay = false;
			        this.showVideoCover = true;
			    }
			    if(this.playerEl && event.type == 'error'){//在Android 微信 x5 模式下 首次播放失败没有error事件
			        alert('视频加载失败，请稍后重试或刷新页面');// hls 的直播地址会有30s的延迟, 首次播放需要重试，在Android 微信 x5 模式下系统默认会重试。正式上线可以去掉这里的提示以实现静默重试
			        this.playOnError = true;
			        console.error('video play error', event);
			        if(bIsIpad || bIsIphoneOs){ //ios系统手动重试
			            this.reloadVideo();
			        }
			    }else{
			        this.playOnError = false;
			        if(this.reloadTimer){
			            clearTimeout(this.reloadTimer);
			        }
			    }
			    if(event.type != 'timeupdate'){
			        console.log(event.type);
			    }
			},
			reloadVideo(){
			    if(this.reloadTimer){
			        clearTimeout(this.reloadTimer);
			    }
			    this.reloadTimer = setTimeout(()=>{
			        if(this.playOnError){//未开始播放
			            this.playerEl.src = this.hlsUrl;
			            this.playerEl.play();
			        }
			    }, 3000);//3s后进行重连
			}
		}
	}
</script>