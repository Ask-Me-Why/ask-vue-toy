<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
.ask-scroll2 {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	-webkit-overflow-scrolling: touch;
	will-change: scroll-position;
	&::-webkit-scrollbar {
		display:none;
	}
	.ask-scroll-bar{
	}
	.ask-scroll-body {
		position: absolute;
		top: 0;
		width: 100%;
		transition-duration: 300ms;
		.ask-scroll-header {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 40px;
			transform: translate3d(0, -100%, 0);
			color: #aaa;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.ask-scroll-footer {
			height: 40px;
			color: #aaa;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}

</style>
<template>
	<div class="ask-scroll2" :class="{
				'refresh-before': (state == 0),
				'refresh-loosen' : (state == 1),
				'refresh-in': (state == 2),
				'refresh-end': (state == 3),
				'infinite-before': (infiniteState == 0),
				'infinite-in': (infiniteState == 1),
				'infinite-end': (infiniteState == 2),
				'touching': touching
			}" 
			@touchstart="onRefresh ? touchStart($event) : undefined" 
			@touchmove="onRefresh ? touchMove($event) : undefined" 
			@touchend="onRefresh ? touchEnd($event) : undefined" 
			@mousedown="onRefresh ? mouseDown($event) : undefined" 
			@mousemove="onRefresh ? mouseMove($event) : undefined" 
			@mouseup="onRefresh ? mouseUp($event) : undefined" 
			@scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined"
		>
		<div class="ask-scroll-body" :style="style">
			<div class="ask-scroll-header" v-if="onRefresh">
				<slot name="refresh">
					<div class="scroll-before">下拉刷新</div>
					<div class="scroll-loosen">松开你的爪子</div>
					<div class="scroll-in">正在刷新</div>
					<div class="scroll-end">刷新成功</div>
				</slot>
			</div>
			<slot></slot>
			<div class="ask-scroll-footer" v-if="onInfinite">
				<slot name="infinite">
					<div class="scroll-before">上拉加载</div>
					<div class="scroll-in">正在加载</div>
					<div class="scroll-end">加载成功</div>
				</slot>
			</div>
		</div>
		<div class="ask-scroll-bar">
			<div class="as-barx">
				<div class="as-bartrack"></div>
			</div>
			<div class="as-bary">
				<div class="as-bartrack"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "ask-scroll",
	props: {
		offset: {
			type: Number,
			default: 44
		},
		onRefresh: {
			type: Function,
			default: undefined,
			required: false
		},
		onInfinite: {
			type: Function,
			default: undefined,
			required: false
		},
		chat:{
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			infiniteState: 0,
			state: 0,
			top: 0,
			start: {
				x: 0,
				y: 0
			},
			touching: false,
			infiniteLoading: false,
			scrollMove: 0
		}
	},
	computed: {
		style() {
			return { transform: `translate3d(0,${this.top}px,0)` };
		}
	},
	methods: {
		touchStart(e) {
			this.start = this.getPosition(e);
		},
		touchMove(e) {
		},
		touchEnd(e) {
		},
		mouseDown(e) { this.touchStart(e) },
		mouseMove(e) { this.touchMove(e) },
		mouseUp(e) { this.touchEnd(e) },
		onScroll(e) {
		},
		getPosition(e) {
			e = e.originalEvent || e;

			if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend') {
				return {
					x: e.targetTouches[0].pageX,
					y: e.targetTouches[0].pageY
				};
			} else {
				return {
					x: e.pageX,
					y: e.pageY
				};
			}
		},
		refresh() {
			this.state = 2;
			this.top = this.offset;
			if(this.chat){
				this.scrollMove = this.$el.scrollHeight;
			}
			this.onRefresh(this.refreshDone);
		},
		refreshDone() {
			this.state = 3;
			setTimeout(() => {
				this.state = 0;
				this.top = 0;
				if(this.chat){
					this.$el.scrollTop = this.$el.scrollHeight - this.scrollMove - 100;
				}
			}, 500);
		},
		infinite() {
			this.infiniteState = 1;
			this.infiniteLoading = true;
			this.onInfinite(this.infiniteDone);
		},
		infiniteDone() {
			this.infiniteState = 2;
			setTimeout(() => {
				this.infiniteState = 0;
				this.infiniteLoading = false;
			}, 500)
		}
	}
}

</script>
