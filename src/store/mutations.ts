export interface Module1State {
	name: null | string;
	count: number;
	inCarts: [Module1State];
}

export const mutations = {
	increment(state: Module1State) {
		state.count += 1;
	},
	addToCart(state: Module1State, payload: Module1State) {
    console.log('payload: ', payload);
		state.inCarts.push(payload);
	},
};

