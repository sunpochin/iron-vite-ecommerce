import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
// import ProductsView from '../components/OldProductsView.vue';

import ProductList from '../components/products/ProductList.vue';
import ProductDetail from '../components/products/ProductDetail.vue';
import CartView from '../components/carts/CartView.vue';

const router = createRouter({
	// history: createWebHistory('/iron-vite-ecommerce/'),
	history: createWebHistory('/'),
	routes: [
		{
			path: '/iron-vite-ecommerce',
			component: HomeView,
		},
		{
			path: '/products',
			component: ProductList,
		},
		{
			path: '/products/:productId',
			component: ProductDetail,
			props: true,
		},
		{
			path: '/cart',
			// name: 'cart',
			component: CartView,
		},
		{
			path: '/login',
			// name: 'cart',
			component: CartView,
		},
	],
	linkActiveClass: 'active',
});

export default router;
