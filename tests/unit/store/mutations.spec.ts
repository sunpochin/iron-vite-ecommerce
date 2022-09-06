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
		// 購物「種類」+ 1
		// 購物「總數」+ 1
		let cateCount = mutations.getCategeryCount(cartState);
		let itemsCount = mutations.getTotalCount(cartState, newItem);
		expect(cateCount).to.equal(0);
		expect(itemsCount).to.equal(0);

		mutations.addToCart(cartState, newItem);

		let afterCateCount = mutations.getCategeryCount(cartState);
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
		let cateCount = mutations.getCategeryCount(cartState);
		let countBy = mutations.getCountBy(cartState, newItem);
		console.log('origin count: ', count);

		mutations.addToCart(cartState, newItem);

		let afterCount = mutations.getTotalCount(cartState);
		let afterCateCount = mutations.getCategeryCount(cartState);
		let afterCountBy = mutations.getCountBy(cartState, newItem);
		expect(afterCount).to.equal(count + 1);
		expect(afterCateCount).to.equal(cateCount);
		expect(afterCountBy).to.equal(countBy + 1);
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
