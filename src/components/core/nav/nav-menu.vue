<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
.nav-menu {
	width: 100%;
	height: 48px;
	color: map-get($color,200);
	font-size: 16px;
	line-height: 3;
	text-align: center;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: map-get($color,100);
	z-index: 10;
	@include flexLayout(flex,justify,center);
	.nm-item{
		flex: 0 0 33%;
		width: 33%;
		height: 100%;
		overflow: hidden;
		text-align: center;
		font-size: 32px;
		line-height: 1.5;
		color: inherit;
		@include flexLayout(flex,center,center);
		.iconfont{
			pointer-events:none;
			vertical-align: bottom;
			font:inherit;
			color: inherit;
		}
		.nm-home{
			display:inline-block;
			pointer-events:none;
			width: 32px;
			height: 32px;
			background: no-repeat url("~@/assets/home.png") transparent;
			background-size: cover;
			background-position: 0 0 ;
			border-radius: 20px;
		}
		span{
			@include flexLayout(flex,center,center);
			position: relative;
			i{
				z-index: 2;
				position: relative;
			}
			.border-change{
				display:block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				pointer-events:none;
				animation: border-scale 3s ease-in-out infinite;
				z-index: 1;
				opacity: 0;
				&:nth-child(2n+2){
					animation: border-scale 3s 1500ms ease-in-out infinite;
				}
				&::after{
					content:'';
					display:block;
					width: 50%;
					padding: 60% 0;
					border-radius: 0 100% 100% 0/ 0 50% 50% 0;
					border:none;
					border-top: 1px solid #fff;
					border-right: 1px solid #fff;
					position: absolute;
					top: 50%;
					right: 0;
					transform: translate(150%,-50%);
				}
				&::before{
					content:'';
					display:block;
					width: 50%;
					padding: 60% 0;
					border-radius: 100% 0 0 100%/50% 0 0 50%;
					border:none;
					border-top: 1px solid #fff;
					border-left: 1px solid #fff;
					position: absolute;
					top: 50%;
					left: 0;
					transform: translate(-150%,-50%);
				}
			}
			
		}
	}
}
@keyframes border-scale{
	0%{
		transform: scale(.5);
		opacity: .7;
	}
	50%{
		transform: scale(.8);
		opacity: 1;
	}
	100%{
		transform: scale(.5);
		opacity: .7;
	}
}
</style>
<template>
	<div class="nav-menu" v-if="show">
		<div class="nm-item" @click="$router.forward('/')">
			<span><i class="nm-home"></i>
				<template v-if="$route.name == 'index'">
					<span class="border-change"></span>
					<span class="border-change"></span>
				</template>
			</span>
		</div>
		<div class="nm-item" @click="$router.forward('/shopcart')">
			<span><i class="iconfont icon-lanzi"></i>
				<template v-if="$route.name == 'shopcart'">
					<span class="border-change"></span>
					<span class="border-change"></span>
				</template>
			</span>
		</div>
		<div class="nm-item" @click="$router.forward('/personal')">
			<span><i class="iconfont icon-mengwa"></i>
				<template v-if="$route.name == 'personal'">
					<span class="border-change"></span>
					<span class="border-change"></span>
				</template>
			</span>
		</div>
	</div>
</template>
<script>
export default {
	name: 'NavMenu',
	data(){
		return{
			show:true
		}
	},
	mounted() {
	},
	beforeDestroy() {
	},
	methods:{
	}
}

</script>
