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
import { mapActions, mapGetters, mapState } from 'vuex';
import axios from 'axios';

export default {
	components: {
		ProductCard,
	},
	computed: {
		...mapGetters({ getProducts: 'getProducts' }),
		...mapState(['products']),
	},
	props: {
		msg: String,
	},
	methods: {
		...mapActions({
			setProducts: 'setProducts',
			aliasPro: 'getProducts',
		}),
		async fetchProducts() {
			const response = await axios.get('https://fakestoreapi.com/products');
			// console.log('response: ', response);
			let data = response.data;
			console.log('data: ', data);

			data = data.filter(
				(product) =>
					product.category === `men's clothing` ||
					product.category === `women's clothing`
			);

			this.setProducts({ value: data });
			return data;
		},
	},
	mounted() {
		console.log('loaded products: ', this.products);
		if (this.products.length === 0) {
			console.log('fetch!!');
			this.fetchProducts();
		}
		// console.log('this.dondon: ', this.dondon);
		// console.log('this.dondon length: ', this.dondon.length);
		// console.log('this.aliasPro: ', this.aliasPro);
		// console.log('this.aliasPro length: ', this.aliasPro.length);
		// if (this.products.length === 0) {
		// 	this.fetchProducts();
		// }
	},
};
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