<template>
	<div id="app">
		<nav-bar></nav-bar>
		<div class="ask-toy-container">
			<transition name="ask-switch">
				<router-view/>
			</transition>
		</div>
		<nav-menu></nav-menu>
	</div>
</template>
<style src="./assets/font/iconfont.css" lang="css"></style>
<style src="./styles/base.scss" lang="scss"></style>
<script>
import Vue from 'vue';
import channel from '@core/nav/channel.js';
import navBar from '@core/nav/nav-bar.vue';
import navMenu from '@core/nav/nav-menu.vue';
Vue.directive('nav', {
	inserted: function(el, binding) {
		let data = binding.value;
		channel.$emit('UpdateNavBar', data);
	}
})
export default {
	name: 'app',
	components: {
		"nav-bar": navBar,
		"nav-menu": navMenu
	},
	/*watch:{
		"$router":(n,o){}
	}*/
}
</script>
