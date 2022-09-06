// mutations.spec.ts
import { it, describe, expect, test } from 'vitest';
import { mutations, ModuleItem, CartItems } from '@/store/mutations';
// import { game } from '@/store/game/game';
// import store from '@/store';
// destructure assign `mutations`
const { addToCart } = mutations;

describe('Add product', () => {
	const cartState: CartItems = {
		itemsInCart: [],
	};
	const newItem = {
		serial_num: '001',
		name: 'laptop',
		price: 256,
		modal: 'A-type',
		count: 1,
	};

	test("add a product not in cart", () => {
		// add item 
		let count = mutations.getItemCount(cartState, newItem);
		let cateCount = mutations.getCategeryCount(cartState);
		expect(count).to.equal(0);

		mutations.addToCart(cartState, newItem);
		let afterCount = mutations.getItemCount(cartState, newItem);
		let afterCateCount = mutations.getCategeryCount(cartState);

		expect(afterCount).to.equal(1);
		expect(afterCateCount).to.equal(cateCount);
	});

	test('add a product already in cart', async () => {
		// total count should + 1
		// but Category count should remain the same.
		let count = mutations.getItemCount(cartState, newItem);
		let cateCount = mutations.getCategeryCount(cartState);
		console.log('origin count: ', count);
		mutations.addToCart(cartState, newItem);
		let afterCount = mutations.getItemCount(cartState, newItem);
		let afterCateCount = mutations.getCategeryCount(cartState);
		expect(afterCount).to.equal(count + 1);
		expect(afterCateCount).to.equal(cateCount);


	});

	it('add to cart', async () => {
	});
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
