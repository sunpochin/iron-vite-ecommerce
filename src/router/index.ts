import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import ProductsView from '../components/ProductsView.vue';
import CartView from '../components/CartView.vue';

const router = createRouter({
	history: createWebHistory('/iron-vite-ecommerce/'),
	routes: [
		{
			path: '/',
			component: HomeView,
		},
		{
			path: '/products',
			component: ProductsView,
		},
		{
			path: '/cart',
			component: CartView,
		},
	],
	linkActiveClass: 'active',
});

export default router;
