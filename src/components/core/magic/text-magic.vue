<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
.text-magic {
	position: relative;
	display:inline-block;
	left:50%;
	color: map-get($main, 700);
	transform: translate(-50% , 0) skewX(0deg);
	font-size: 40px;
	font-family: Raleway, Verdana, Arial, sans-serif;
	animation: skewX 5s ease-in infinite;
	.white {
		position: absolute;
		left: 0;
		top: 15px;
		width: 100%;
		height: 3px;
		background: map-get($color, 200);
		z-index: 4;
		animation: whiteMove 3s ease-out infinite;
		mix-blend-mode: luminosity;
	}

	&::before {
		content: attr(data-word);
		position: absolute;
		top: 0;
		left: 1px;
		height: 0px;
		color: rgba(255, 0, 0, .9);
		overflow: hidden;
		z-index: 2;
		animation: redShadow 1.5s ease-in infinite;
		-webkit-filter: contrast(200%);
		text-shadow: 0.1px 0 0 red;
		mix-blend-mode: soft-light;
	}

	&::after {
		content: attr(data-word);
		position: absolute;
		top: 0;
		left: -3px;
		height: 64px;
		color: rgba(map-get($main, 700), .8);
		overflow: hidden;
		z-index: 3;
		background: rgba(255, 255, 255, .9);
		animation: redHeight 2s ease-out infinite;
		-webkit-filter: contrast(200%);
		mix-blend-mode: hard-light;
	}
}


@keyframes redShadow {
	20% {
		left: -1px;
		height: 32px;
	}
	60% {
		left: 2px;
		height: 6px;
	}
	100% {
		left: -2px;
		height: 42px;
	}
}

@keyframes redHeight {
	20% {
		height: 42px;
	}
	35% {
		height: 12px;
	}
	50% {
		height: 40px;
	}
	60% {
		height: 20px;
	}
	70% {
		height: 34px;
	}
	80% {
		height: 22px;
	}
	100% {
		height: 0px;
	}
}

@keyframes whiteMove {
	8% {
		top: 38px;
	}
	10% {
		top: 8px;
	}
	12% {
		top: 42px;
	}
	99% {
		top: 36px;
	}
}

@keyframes skewX {
	78% {
		transform: translate(-50%,0) skewX(0);
	}
	79% {
		transform: translate(-50%,0) skewX(10deg);
	}
	80% {
		transform: translate(-50%,0) skewX(-10deg);
	}
	81% {
		transform: translate(-50%,0) skewX(0);
	}
}

</style>
<template>
	<div class="text-magic" :data-word="label">
		{{label}}
		<div class="white"></div>
	</div>
</template>
<script>
export default {
	name: "TextMagic",
	props: ['label']
}

</script>
