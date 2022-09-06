<script setup lang="ts"></script>

<template>
	<h1>Cart view</h1>

	<table class="table">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">title</th>
				<th scope="col">description</th>
				<th scope="col">price</th>
			</tr>
		</thead>
		<tr v-for="item in getCartProducts" :key="item.id">
			<td>{{ item.id }}</td>
			<td>{{ item.title }}</td>
			<td>{{ item.description }}</td>
			<td>{{ item.price }}</td>
		</tr>
	</table>
	<button
		class="btn btn-primary"
		data-bs-target="#collapseTarget"
		data-bs-toggle="collapse"
	>
		Bootstrap collapse
	</button>
	<div class="collapse py-2" id="collapseTarget">
		This is the toggle-able content!
	</div>

	<div class="cart-list">
		<div v-for="cartItem in getCartProducts" :key="cartItem.id">
			<CartCard :cartItem="cartItem" />
		</div>
	</div>
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
td,
th {
	border: 1px solid red;
}
.cart-list {
	display: flex;
	flex-direction: column;

	grid-template-columns: repeat(3, minmax(14rem, 18rem));
	gap: 1rem;
	margin: auto;
	padding: auto;
}
</style>