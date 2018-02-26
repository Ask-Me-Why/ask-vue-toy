// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store';
import router from './router';
import ASKComponents from  './components/ask'

Vue.config.productionTip = false

const nextDirection = (direction) => {
	let el = document.getElementById('app');
	if (el) el.setAttribute('transition-direction', direction);
}

router['_push'] = router['push'];
router.forward = router['push'] = (target) => {
	nextDirection('forward')
	setTimeout(() => {router['_push'](target)})
}
router.back = (target) => {
	nextDirection('back')
	setTimeout(() => { router['_push'](target) })
}

Vue.use(ASKComponents);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
