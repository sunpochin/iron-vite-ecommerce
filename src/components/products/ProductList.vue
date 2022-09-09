<template>
	<router-view></router-view>
	<h1>{{ msg }}</h1>
	<div class="outer">
		<div class="product-list">
			<div v-for="product in getProducts" :key="product.id">
				<ProductCard :product="product" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import ProductCard from './ProductCard.vue';
import { mapActions, useStore, mapGetters, mapState } from 'vuex';
import CommonMixin from '@/utils/CommonMixin';
import { ProductItem, State } from '@/store/types';
import { defineComponent, ref } from 'vue';
import { store } from '@/store';
export default defineComponent({
	components: {
		ProductCard,
	},
	computed: {
		// getProducts() {
		// 	const store = useStore();
		// 	this.store;
		// },
		...mapGetters({ getProducts: 'getProducts' }),
		...mapState(['productsList']),
	},
	props: {
		msg: String,
	},
	methods: {
		...mapActions({
			setProducts: 'setProducts',
			// aliasPro: 'getProducts',
		}),
		haha(pro: any) {
			store.commit('setProducts', pro);
		},
		// async fetchProducts() {
		// 	const response = await axios.get('https://fakestoreapi.com/products');
		// 	// console.log('response: ', response);
		// 	let data = response.data;
		// 	console.log('fetch data: ', data);

		// 	// data = data.filter(
		// 	// 	(product) =>
		// 	// 		product.category === `men's clothing` ||
		// 	// 		product.category === `women's clothing`
		// 	// );

		// 	this.setProducts(data);
		// 	return data;
		// },
	},
	async mounted() {
		console.log('loaded products: ', this.productsList);
		if (this.productsList.length === 0) {
			console.log('fetch!!');
			// this.fetchProducts();
		}
		const { getJsonData, theJson } = CommonMixin();
		// console.log('retProductJson: ', retProductJson);
		const data = await getJsonData('public/products.json');
		console.log('mounted data: ', data);
		this.haha(data);
	},
});
</script>

<style>
/* .product-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly
} */

* {
	box-sizing: border-box;
}

.outer {
	display: flex;
	justify-content: center;
	margin: 1rem;
}

.product-list {
	display: grid;
	grid-template-columns: repeat(3, minmax(14rem, 18rem));
	gap: 1rem;
	margin: auto;
	padding: auto;
}

@media (max-width: 768px) {
	.product-list {
		/* background-color: green; */
		grid-template-columns: repeat(2, minmax(14rem, 18rem));
		justify-content: space-around;
	}
}
@media (max-width: 480px) {
	.product-list {
		/* background-color: red; */
		grid-template-columns: repeat(1, 36rem);
	}
}
</style>