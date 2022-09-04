// mutations.spec.ts
import { it, describe, expect, test } from 'vitest';
import { mutations, Module1State } from '@/store/mutations';
import { game } from '@/store/game/game';
import store from '@/store';
// destructure assign `mutations`
const { increment, addToCart } = mutations;

describe('mutations', () => {
	const state: Module1State = {
		count: 0,
		inCarts: [],
	};

	it('INCREMENT', () => {
		// mock state
		// console.log('mutations: ', mutations);
		// console.log('mutations: ', store._mutations);
		console.log('state: ', state);
		// apply mutation
		increment(state);
		// assert result
		expect(state.count).to.equal(1);
	});

	it('add to cart', async () => {
		const options = {
			method: 'GET',
			url: 'https://zappos1.p.rapidapi.com/brands/list',
			headers: {
				'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
				'X-RapidAPI-Host': 'zappos1.p.rapidapi.com',
			},
		};

    let response = await fetch('https://zappos1.p.rapidapi.com/brands/list', options);
    let commits = await response.json();
    console.log('commits: ', commits);

		// axios
		// 	.request(options)
		// 	.then(function (response) {
		// 		console.log(response.data);
		// 	})
		// 	.catch(function (error) {
		// 		console.error(error);
		// 	});

		const newItem = {
			name: 'laptop',
			price: 256,
			modal: 'A-type',
			count: 1,
		};
		addToCart(state, newItem);
	});
});

describe(' game mutations', () => {
	const state = {
		gameScore: 0,
		gamePanic: 0,
		gameTimeout: 0,
	};
	it('add to cart', () => {
		console.log('game: ', game);
		game.mutations.addGameScore(state, 1);
	});
});
