// mutations.spec.ts
import { it, describe, expect, test } from 'vitest';
import { mutations, ModuleItem, CartItems } from '@/store/mutations';
import { game } from '@/store/game/game';
import store from '@/store';
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
		let ret = mutations.getItemCount(cartState, newItem);
		expect(ret).to.equal(0);

		mutations.addToCart(cartState, newItem);
		ret = mutations.getItemCount(cartState, newItem);

		expect(ret).to.equal(1);
	});
	test('add a product already in cart', async () => {
		// 	expect(state.count).to.equal(1);
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
