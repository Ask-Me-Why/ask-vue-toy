<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
.ask-slide-once{
	width: 100%;
	position: relative;
	padding: 28% 0;
	&>img{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}

}
.swiper-container{
	transform: translate(0,-5%);
}
.swiper-slide.swiper-slide-active{
	transform-origin: center center;
	transform: scale(.8);
}
.swiper-slide.swiper-slide-next{
	transform-origin: 0 center;
	transform: translateX(-5%) scale(.7);
}
.swiper-slide.swiper-slide-prev{
	transform-origin: 100% center;
	transform: translateX(5%) scale(.7);
}
.swiper-container-horizontal>.ask-slide-pagination{
	position: absolute;
	bottom: 4%;
	z-index:2;
	@include flexLayout(flex,center,center);
	&>.swiper-pagination-bullet{
		width: 12px;
		height: 4px;
		background: map-get($color,100);
		border-radius: 2px;
		transition: opacity .3s ease-in-out,background .3s ease-in-out;
	}
	&>.swiper-pagination-bullet-active{
		background: map-get($main,500);
		transition: opacity .3s ease-in-out,background .3s ease-in-out;
	}
}
.ask-toy-body{
	width: 100%;
}
@keyframes ac-line-wave-skew{
	0%{
		transform: rotate(-1deg)
	}
	50%{
		transform: rotate(1deg)
	}
	100%{
		transform: rotate(-1deg)
	}
}
.ask-category{
	width: 100%;
	padding: 10px 0 0;
	.ac-line-wave{
		width: 70%;
		margin: 0 auto 12px;
		height: 12px;
		background: linear-gradient(to bottom, map-get($color,200) 50%,map-get($main,500) 100%);
		position: relative;
		border-radius: 0 0 10px 10px;
		animation: ac-line-wave-skew 2s ease-in-out infinite;
		&::before{
			content: '';
			display:block;
			width: 10px;
			height: 12px;
			position: absolute;
			bottom: 0;
			left: 50%;
			margin-left: -10px;
			margin-bottom: -12px;
			z-index: 2;
			background-image: linear-gradient(to top, map-get($color,200) 50%,map-get($color,100) 53%,map-get($color,200) 100%);
			background-size: 100% 4px;
			background-repeat: repeat-y;
		}
	}
	.ac-caption{
		width: 100%;
		padding: 3.2% 0;
		@include flexLayout(flex,justify,center);
		background: linear-gradient(to right, map-get($color,200) 60%,map-get($main,200) 100%); 
		.ac-title{
			flex: 0 0 100%;
			width: 100%;
			padding: 0 0 0 40px;
			font-size: 16px;
			color: map-get($color,300);
			position: relative;
			&::after{
				content: "";
				display:block;
				width: 38px;
				height: 38px;
				background: no-repeat url($baseUrl + 'category.png') transparent;
				background-size: 100px auto;
				background-position: 5px -2px;
				position: absolute;
				top: 50%;
				margin-top: -19px;
				left: 0;
			}
		}
	}
	&:nth-child(6n+2){
		.ac-caption .ac-title{
			&::after{
				background-position: -66px -45px;
			}
		}
	}

	&:nth-child(6n+3){
		.ac-caption .ac-title{
			&::after{
				background-position: -66px -1px;
			}
		}
	}

	&:nth-child(6n+4){
		.ac-caption .ac-title{
			&::after{
				background-position: 5px -45px;
			}
		}
	}

	&:nth-child(6n+5){
		.ac-caption .ac-title{
			&::after{
				background-position: -30px -2px;
			}
		}
	}

	&:nth-child(6n+6){
		.ac-caption .ac-title{
			&::after{
				background-position: -30px -45px;
			}
		}
	}
	.ac-info{
		width: 100%;
		@include flexLayout(flex,justify,normal);
		flex-flow: row wrap;
	}
	.ac-product{
		flex: 0 0 47%;
		width: 47%;
		margin: 2% 1.5% 0;
		border: 1px solid map-get($color,400);
		border-radius: 4px;
		overflow:hidden;
		box-shadow: 0 0 12px map-get($color,400);
	}
	.ac-pcover{
		width: 100%;
		border-bottom: 1px solid map-get($color,400);
		.img-box{
			width: 100%;
			padding: 60% 0;
			position: relative;
			img{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
	.ac-ptext{
		width: 100%;
		padding: 0 10px;
		.title{
			padding: 4px 0;
			font-size: 16px;
			color: map-get($color,300);
			@include textEllipsis(1);
		}
		.des{
			font-size: 12px;
			line-hight: 1.6;
			height: 32px;
			color: map-get($color,300);
			@include textEllipsis(2);
		}
	}
	.ac-poper{
		width: 100%;
		padding: 0 10px 14px;
		position: relative;
		@include flexLayout(flex,justify,normal);
		.price{
			flex: 0 0 auto;
			height: 37px;
			span{
				display:block;
				width: 100%;
				font-size: 16px;
				color: map-get($color,100);
				i{
					font-style:normal;
					font-size: 12px;
				}
				&.gray{
					font-size: 12px;
					color: map-get($color,500);
					text-decoration: line-through;
				}
			}
		}
	}
}
.text-magic{
	margin: 10px 0;
}
</style>
<template>
	<div class="ask-view" v-nav="$route.meta">
		<div class="ask-view-box">
			<ask-swiper :options="options" :slideData="slide">
				<ask-slide v-for="(s,$i) in slide" :key="$i">
					<div class="ask-slide-once">
						<img :src="s.src" alt="轮播图">
					</div>
				</ask-slide>
				<div slot="pagination" class="ask-slide-pagination"></div>
			</ask-swiper>
			<div class="ask-toy-body">
				<template v-for="(c,$i) in categorys">
					<div class="ask-category">
						<div class="ac-line-wave"></div>
						<div class="ac-caption">
							<div class="ac-title">{{c.name}}</div>
						</div>
						<div class="ac-info">
							<template v-for="(product,$p) in c.items">
								<router-link tag="div" class="ac-product" :to="{ name: 'detail' , params: { id: product.id } }">
										<div class="ac-pcover">
											<div class="img-box">
												<img :src="product.cover" alt="图片">
											</div>
										</div>
										<div class="ac-ptext">
											<div class="title">{{product.name}}</div>
											<div class="des">{{product.detail}}</div>
										</div>
										<div class="ac-poper">
											<div class="price">
												<span><i>￥</i>{{product.price}}</span>
												<span class="gray" v-if="product.market_price"><i>￥</i>{{product.market_price}}</span>
											</div>
											<div class="btn">
												<heart-btn @click.native.stop="onClick"><i class="iconfont icon-lanzi"></i></heart-btn>
											</div>
										</div>
								</router-link>
							</template>
						</div>
					</div>
				</template>
			</div>
			<text-magic label="AskMeWhy"></text-magic>
		</div>
	</div>
</template>
<script>
import textMagic from '@core/magic/text-magic';
import heartBtn from '@core/magic/heart-btn';
import { Toy } from '@/services';
export default {
	name: 'index',
	components:{
		"text-magic":textMagic,
		"heart-btn":heartBtn,
	},
	data(){
		return {
			slide:[],
			categorys: [],
	    	options:{
	    		autoplay:{
	    			delay: 3000,
	    			disableOnInteraction:false
	    		},
	    		pagination:{
	    			el:".ask-slide-pagination"
	    		},
	    		loop : true,
	    		slidesPerView: 'auto',
	    		loopedSlides: 1,
	    		loopAdditionalSlides: 3,
	    		observer: true,
	    		observeParents:true
	    	}
		}
	},
	mounted() {
		let toyServer = new Toy();
		toyServer.all().then(r=>{
			this.slide = r.data.slides;
			this.categorys = r.data.category;
		})
	},
	methods:{
		onClick(){
			console.log(233);
		}
	}
}

</script>
