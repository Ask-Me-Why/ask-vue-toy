<style lang="scss">


</style>
<template>
	<div class="ask-view" v-nav="$route.meta">
		<ask-scroll2 
			direction="x|y" 
			thresholdR="44" 
			thresholdI="44" 
			scrollX 
			scrollY 
			barX 
			barY 
			:onRefresh="onRefresh" 
			:onInfinite="onInfinite" >
			内容
		</ask-scroll2>
	</div>
</template>
<script>
export default {
	name: "Notes",
	computed: {
		notes() {
			return this.$store.getters.allNotes;
		}
	},
	created(){
		if(this.notes.length == 0){
			this.$store.dispatch('allNotes');
		}
	},
	methods:{
		onRefresh(){},
		onInfinite(){}
	}
}

</script>
