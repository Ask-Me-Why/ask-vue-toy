<style lang="scss">


</style>
<template>
	<div class="ask-view" v-nav="$route.meta">
		<div class="ask-view-box">
			notes
		</div>
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
		console.log(this.notes)
		if(this.notes.length == 0){
			this.$store.dispatch('allNotes');
		}
		
	}
}

</script>
