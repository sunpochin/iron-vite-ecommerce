<script setup lang="ts"></script>

<template>
	<h1>Cart view</h1>

	<table class="table">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">title</th>
				<th scope="col">img</th>
				<th scope="col">description</th>
				<th scope="col">price</th>
				<th scope="col">count</th>
			</tr>
		</thead>
		<tr v-for="item in getCartProducts" :key="item.id">
			<td>{{ item.id }}</td>
			<td>{{ item.title }}</td>
			<td><img :src="item.image" /></td>
			<td>{{ item.description }}</td>
			<td>{{ item.price }}</td>
			<td>{{ item.count }}</td>
		</tr>
	</table>

	<div class=".cart-list" v-for="product in getCartProducts" :key="product.id">
		<CartCard :cartItem="product" />
	</div>
	<!-- <button
		class="btn btn-primary"
		data-bs-target="#collapseTarget"
		data-bs-toggle="collapse"
	>
		Bootstrap collapse
	</button>
	<div class="collapse py-2" id="collapseTarget">
		This is the toggle-able content!
	</div> -->

	<!-- <div class="cart-list">
		<div v-for="cartItem in getCartProducts" :key="cartItem.id">
			<CartCard :cartItem="cartItem" />
		</div>
	</div> -->
</template>

<script lang="ts">
import CartCard from './CartCard.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import CommonMixin from '@/utils/CommonMixin.js';

export default {
	components: {
		CartCard,
	},
	computed: {
		getCartProducts() {
			return this.$store.getters.getCartItems;
		},
		...mapState(['productsList']),
	},
	data() {
		return {
			productsInCart: Object,
		};
	},
	methods: {
		haha(pro) {
			this.$store.commit('setProducts', pro);
		},
		setCartProducts(products: any) {
			console.log('setCartProducts: ', products);
			this.productsInCart = products;
		},
	},
	async mounted() {
		// todo: remove this temp codes for doing layout of cart.
		const { getJsonData} = CommonMixin();
		const { data } = await getJsonData('public/products.json');
		console.log('mounted data: ', data);
		this.haha(data);
		
		this.$store.commit('addToCart', data[0]);
		this.$store.commit('addToCart', data[0]);
		this.$store.commit('addToCart', data[1]);
		this.$store.commit('addToCart', data[1]);
		this.$store.commit('addToCart', data[1]);
		this.$store.commit('addToCart', data[2]);
		this.$store.commit('addToCart', data[2]);
	},
};
</script>

<style scoped>
td,
th {
	border: 1px solid grey;
}
.cart-list {
	display: flex;
	flex-direction: column;

	/* grid-template-columns: repeat(3, minmax(14rem, 18rem)); */
	gap: 10rem;
	margin: auto;
	padding: auto;
}
</style>