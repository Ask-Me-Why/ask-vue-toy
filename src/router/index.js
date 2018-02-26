import Vue from 'vue'
import Router from 'vue-router'
import { sessionStorage } from '@/utils'
import Index from '@/views/index.vue';
import Video from '@/views/video.vue';
import Notes from '@/views/notes.vue';
import Personal from '@/views/personal.vue';
import ShopCart from '@/views/shopcart.vue';
import Detail from '@/views/detail.vue';

const nextDirection = (direction) => {
	let el = document.getElementById('app');
	if (el) el.setAttribute('transition-direction', direction);
}
const viewScrollTop = (scrollTop) => {
	const el = document.getElementById('app');
	if (typeof scrollTop == 'number') {
		const pages = el && el.querySelectorAll('.ask-view .ask-view-box');
		const content = pages[pages.length - 1];
		if (content) {
			content.scrollTop = scrollTop;
		}
	} else {

		return el && el.querySelector('.ask-view .ask-view-box') ?
			el.querySelector('.ask-view .ask-view-box').scrollTop : 0
	}
}

const beforeEach = (toRoute, fromRoute, next) => {
	const _to = toRoute.path,
		_from = fromRoute.path,
		scrollTop = viewScrollTop();
	let his = sessionStorage.getItem(_to);

	if (his && his.history) {
		nextDirection('back');
		his.history = false;
		sessionStorage.setItem(_to, his);
	} else {
		nextDirection('forward');
		sessionStorage.setItem(_from || '/', {
			history: true,
			scrollTop: scrollTop
		});
	}
	if( (_to == "/shopcart" && _from == "/") ||
		(_to == "/personal" && _from == "/") ||
		(_to == "/personal" && _from == "/shopcart") ){
		nextDirection('forward');
	}

	if( (_to == "/" && _from == "/shopcart") ||
		(_to == "/" && _from == "/personal") ||
		(_to == "/shopcart" && _from == "/personal") ){
		nextDirection('back');
	}
	next();
}
const afterEach = (toRoute, fromRoute) => {
	const _to = toRoute.path,
		_from = fromRoute.path;
	if (_from == '/') return;

	let his = sessionStorage.getItem(_to);

	if (his && his.scrollTop) {
		Vue.nextTick(() => {
			viewScrollTop(his.scrollTop);
		});
	}
}

Vue.use(Router)
const router = new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: Index,
		meta: { title: 'ASK 赛高' }
	}, {
		path: '/video',
		name: 'video',
		component: Video,
		meta: { title: 'video',showBack:true }
	}, {
		path: '/notes',
		name: 'notes',
		component: Notes,
		meta: { title: 'Notes',showBack:true }
	}, {
		path: '/personal',
		name: 'personal',
		component: Personal,
		meta: { title: '个人中心',hideNavBar:true }
	}, {
		path: '/shopcart',
		name: 'shopcart',
		component: ShopCart,
		meta: { title: 'in cart' }
	}, {
		path: '/detail/:id',
		name: 'detail',
		component: Detail,
		meta: { title: '详情',showBack:true }
	}]
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)
export default router;
