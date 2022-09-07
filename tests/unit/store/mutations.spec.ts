// mutations.spec.ts
import { it, describe, expect, test, beforeAll } from 'vitest';
import {
	mutations,
	ModuleItem,
	CartItems,
	ProductsList,
	setProducts,
} from '@/store/mutations';
import axios from 'axios';

// import { game } from '@/store/game/game';
// import store from '@/store';
// destructure assign `mutations`
// const { addToCart } = mutations;
	const cartState: CartItems = {
		itemsInCart: [],
	};
	const productsState: ProductsList = {
		productsList: [],
	};

describe('Add product', () => {
	beforeAll(async () => {
		console.log('before all');
		const response = await axios.get('https://fakestoreapi.com/products');
		// console.log('response: ', response);
		let data = response.data;
		console.log('data: ', data);

		data = data.filter(
			(product) =>
				product.category === `men's clothing` ||
				product.category === `women's clothing`
		);
		mutations.setProducts(productsState, { value: data });
	});

	const newItem = {
		id: '001',
		name: 'laptop',
		price: 256,
		modal: 'A-type',
		count: 1,
	};
	test('getProducts', () => {
		let list = mutations.getProducts(productsState);
		console.log('list: ', list);
	});
	test('add a product not in cart', () => {
		// 購物「種類」+ 1
		// 購物「總數」+ 1
		let cateCount = mutations.getCategoryCount(cartState);
		let itemsCount = mutations.getTotalCount(cartState, newItem);
		expect(cateCount).to.equal(0);
		expect(itemsCount).to.equal(0);

		mutations.addToCart(cartState, newItem);

		let afterCateCount = mutations.getCategoryCount(cartState);
		let afterCount = mutations.getTotalCount(cartState);

		expect(afterCount).to.equal(1);
		expect(afterCateCount).to.equal(1);
	});

	test('add a product already in cart', async () => {
		// Category count should remain the same.
		// The count of added category should += 1.
		// Total count should += 1
		// 購物「種類」不改變
		// 購物「總數」+= 1
		let count = mutations.getTotalCount(cartState);
		let cateCount = mutations.getCategoryCount(cartState);
		let countBy = mutations.getCountBy(cartState, newItem);
		console.log('origin count: ', count);
		console.log('origin countBy: ', countBy);

		mutations.addToCart(cartState, newItem);

		let afterCount = mutations.getTotalCount(cartState);
		let afterCateCount = mutations.getCategoryCount(cartState);
		let afterCountBy = mutations.getCountBy(cartState, newItem);
		console.log('afterCountBy: ', afterCountBy);

		expect(afterCount).to.equal(count + 1);
		expect(afterCateCount).to.equal(cateCount);
		expect(afterCountBy).to.equal(countBy + 1);
	});

	it('add to cart', async () => {});
});

// describe('game mutations', () => {
// 	const state = {
// 		gameScore: 0,
// 		gamePanic: 0,
// 		gameTimeout: 0,
// 	};
// 	it('add to cart', () => {
// 		console.log('game: ', game);
// 		game.mutations.addGameScore(state, 1);
// 	});
// });
