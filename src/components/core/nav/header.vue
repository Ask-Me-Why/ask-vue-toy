<style lang="scss">
.header-box {
	display: block;
	position: relative;
	height: 54px;
	text-align: left;
	z-index: 2;
	&.leave {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 1;
		width: 100%;
	}
	.back {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 50px;
		z-index: 2;
		text-align: center;
		font-size: 18px;
		.iconfont{
			font:inherit;
			color:inherit;
		}

	}
	.title {
		width: 100%;
		position: relative;
		z-index: 1;
		text-align: center;
		padding: 0 50px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: opacity, transform 0ms cubic-bezier(.15, .1, .02, 1);
		span {
			display: inline-block;
			vertical-align: bottom;
		}
	}
	.hide {
		display: none;
		opacity: 0;
	}
}

</style>
<template>
	<div class="header-box" :class="{leave:cached}">
		<div class="back" @click="onClick" :class="{hide: cached || !showBack}">
			<i class="iconfont icon-back"></i>
		</div>
		<div class="title">
			<span>{{title || '导航栏'}}</span>
		</div>
	</div>
</template>
<script>
let TRANSITION_DURATION = 500;
export default {
	name: 'Header',
	props: {
		title: String,
		onBack: Function,
		showBack: {
			type: Boolean,
			default: false
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.titleEnter();
		})
	},
	data() {
		return {
			cached: false
		}
	},
	methods: {
		onClick() {
			if (this.onBack) {
				this.onBack();
				return;
			}
			let main = document.getElementById('app');
			if (main) main.setAttribute('transition-direction', 'back');
			history.go(-1);
		},
		titleEnter() {
			let title = this.$el.querySelector('.title'),
				text = this.$el.querySelector('.title>span');
			let style = title.style;
			let diff = (title.offsetWidth - text.offsetWidth) / 4 | 0;
			diff += 'px';
			let direction = document.getElementById('app').getAttribute('transition-direction');
			if (direction) {
				style.transform = 'translate3d(' + (direction == 'back' ? '-' : '') + diff + ',0,0)';
				style.opacity = 0;
			}
			window.getComputedStyle(title).getPropertyValue('opacity');

			style.transitionDuration = `${TRANSITION_DURATION}ms`;
			style.transform = 'translate3d(0,0,0)';
			style.opacity = 1;

		},
		titleLeave() {
			this.cached = true;
			let title = this.$el.querySelector('.title'),
				text = this.$el.querySelector('.title>span');
			let style = title.style;
			let diff = (title.offsetWidth - text.offsetWidth) / 4 | 0;
			diff += 'px';
			let direction = document.getElementById('app').getAttribute('transition-direction');

			style.transform = 'translate3d(0,0,0)';
			style.opacity = 1;
			window.getComputedStyle(title).getPropertyValue('opacity');
			style.transitionDuration = `${TRANSITION_DURATION}ms`;

			if (direction) {
				style.transform = 'translate3d(' + (direction == 'back' ? '' : '-') + diff + ',0,0)';
				style.opacity = 0;
			}
			setTimeout(() => {
				this.$destroy();
			}, TRANSITION_DURATION)
		},
		cache() {
			this.titleLeave();
		}
	},
	destroyed() {
		this.$nextTick(() => {
			if (this.$el && this.$el.remove) {
				this.$el.remove();
			}
		})
	}
}

</script>
