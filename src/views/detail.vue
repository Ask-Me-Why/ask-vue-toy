<template>
	<div class="ask-view" v-nav="nav_meta">
		<div class="ask-view-box">
			detail
		</div>
	</div>
</template>
<script >
import { merge } from '@/utils'
	export default{
		name: "Detail",
		data(){
			return{
				product: {
					title:"天下第一详情"
				}
			}
		},
		computed:{
			nav_meta(){
				var _obj = {};
				if(this.product && this.product.title){
					_obj['title'] = this.product.title;
				}
				return merge(true,this.$route.meta,_obj);
			}
		}
	}
</script>