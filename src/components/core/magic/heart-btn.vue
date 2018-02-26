<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
	.heart-btn{
		outline:none;
		border:none;
		display:inline-block;
		background:transparent;
		position: relative;
		width: 48px;
		height: 40px;
		padding: 0;

	}
	.heart-box {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 1;
	    pointer-events: none;
	}
	.heart-box::before,
	.heart-box::after {
	    position: absolute;
	    content: "";
	    top: 0;
	    left: 25%;
	    width: 50%;
	    margin-top: -50%;
	    height: 100%;
	    background: linear-gradient(to bottom, map-get($main,50) 2%, map-get($main,800) 100%);
	    border-radius: 100% 100% 0 0/50% 50% 0 0;
		mix-blend-mode: lighten;
	}
	.heart-box::before{
	    transform-origin: -50% 98%;
	    transform: rotate(45deg);
	}
	.heart-box::after{
	    transform-origin: 150% 98%;
	    transform: rotate(-45deg);
	}
	.heart-info{
		position: relative;
		z-index: 2;
		font-size: 16px;
		color: map-get($color,100);
	}
</style>
<template>
	<button class="heart-btn">
		<div class="heart-box"></div>
		<div class="heart-info">
			<slot></slot>
		</div>
	</button>
</template>
<script>
	export default{
		name:"HeartBtn"
	}
</script>