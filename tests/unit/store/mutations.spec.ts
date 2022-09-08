// mutations.spec.ts
import { it, describe, expect, test, beforeAll } from 'vitest';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';
import axios from 'axios';
import productJson from '@/assets/products.json'

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
		// use local data instead, faster.
		let data = productJson;
		// console.log('productJson: ', productJson);
		// const response = await axios.get('https://fakestoreapi.com/products');
		// // console.log('response: ', response);

		// let data;
		// fetch('file.txt')
		// 	.then((response) => response.text())
		// 	.then((text) => {
		// 		console.log(text);
		// 		data = text;
		// 	});
		// // let data = response.data;
		// // console.log('data: ', data);

		// data = data.filter(
		// 	(product) =>
		// 		product.category === `men's clothing` ||
		// 		product.category === `women's clothing`
		// );
		mutations.setProducts(productsState, data);
	});

	const newItem = {
		id: '001',
		name: 'laptop',
		price: 256,
		modal: 'A-type',
		count: 1,
	};
	test('getProducts', () => {
		let list = getters.getProducts(productsState);
		console.log('getProducts list: ', list.slice(0, 3));
	});
	test('add a product not in cart', () => {
		// 購物「種類」+ 1
		// 購物「總數」+ 1
		let cateCount = getters.getCategoryCount(cartState);
		let itemsCount = getters.getTotalCount(cartState, newItem);
		expect(cateCount).to.equal(0);
		expect(itemsCount).to.equal(0);

		mutations.addToCart(cartState, newItem);

		let afterCateCount = getters.getCategoryCount(cartState);
		let afterCount = getters.getTotalCount(cartState);

		expect(afterCount).to.equal(1);
		expect(afterCateCount).to.equal(1);
	});

	test('add a product already in cart', async () => {
		// Category count should remain the same.
		// The count of added category should += 1.
		// Total count should += 1
		// 購物「種類」不改變
		// 購物「總數」+= 1
		let count = getters.getTotalCount(cartState);
		let cateCount = getters.getCategoryCount(cartState);
		let countBy = getters.getCountBy(cartState, newItem);
		console.log('origin count: ', count);
		console.log('origin countBy: ', countBy);

		mutations.addToCart(cartState, newItem);

		let afterCount = getters.getTotalCount(cartState);
		let afterCateCount = getters.getCategoryCount(cartState);
		let afterCountBy = getters.getCountBy(cartState, newItem);
		console.log('afterCountBy: ', afterCountBy);

		expect(afterCount).to.equal(count + 1);
		expect(afterCateCount).to.equal(cateCount);
		expect(afterCountBy).to.equal(countBy + 1);
	});

	it('add to cart', async () => {});
});
