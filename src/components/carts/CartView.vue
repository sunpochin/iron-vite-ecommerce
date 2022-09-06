<script setup lang="ts"></script>

<template>
	<h1>Cart view</h1>

	<table class="table">
		<thead></thead>
		<!-- <tbody>
			<tr v-for="(item, key) in getCartProducts" :key="key">
				<td>{{ item.name }}</td>
				<td>{{ item.cash }}</td>
				<td>{{ item.icash }}</td>
			</tr>
		</tbody> -->
		<div class="cart-list">
			<div v-for="cartItem in getCartProducts" :key="cartItem.id">
				<CartCard :cartItem="cartItem" />
			</div>
		</div>
	</table>
</template>

<script lang="ts">
import CartCard from './CartCard.vue';

export default {
	components: {
		CartCard,
	},
	computed: {
		getCartProducts() {
			return this.productsInCart;
		},
	},
	data() {
		return {
			productsInCart: Object,
		};
	},
	methods: {
		getCartProducts() {
			return this.productsInCart;
		},
		setCartProducts(products: any) {
			console.log('setCartProducts: ', products);
			this.productsInCart = products;
		},
	},
	mounted() {
		const productsInCart = [
			{
				id: '1',
				title: 'haha',
				description: 'some description',
				price: 128,
			},
			{
				id: '2',
				title: 'abc',
				description: 'some description',
				price: 100,
			},
		];
		this.setCartProducts(productsInCart);
	},
};
</script>

<style scoped>
.cart-list {
	display: flex;
	flex-direction: column;

	grid-template-columns: repeat(3, minmax(14rem, 18rem));
	gap: 1rem;
	margin: auto;
	padding: auto;
}
</style>