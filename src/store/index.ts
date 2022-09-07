import { createStore } from 'vuex';
// import rootMutations from './mutations';
// import rootActions from './actions';
// import counterModule from './counter/index.js';
// import rootGetters from './getters';
// export interface ProductItem {
// 	id: string;
// 	name: null | string;
// 	count: number;
// }

// export interface CartItems {
// 	itemsInCart: ProductItem[];
// }

// export interface ProductsList {
// 	productsList: ProductItem[];
// }
import cartGetters from './getters';
import cartMutations from './mutations';

export interface State {
	count: number;
	productsList: [];
	isLoggedIn: boolean;
	itemsInCart: [];
}

export default createStore<State>({
	// modules: {
	// 	numbers: counterModule,
	// },
	// mutations: rootMutations,
	// actions: rootActions,
	// getters: rootGetters,
	state() {
		return {
			count: 0,
			productsList: [],
			isLoggedIn: false,
			curProduct: null,
			itemsInCart: [],
		};
	},
	mutations: cartMutations,
	actions: {
		login(context) {
			context.commit('setLoggedIn', { value: true });
		},
		logout(context) {
			context.commit('setLoggedIn', { value: false });
		},
		setProducts(context, payload) {
			context.commit('setProducts', payload);
		},
		setCurProduct(context, payload) {
			context.commit('setCurProduct', payload);
		},
	},
	getters: cartGetters,
});

// https://stackoverflow.com/questions/34645731/export-more-than-one-variable-in-es6

// import { createStore } from 'vuex';
// import { game } from './game/game';
// import { mutations, Module1State } from './mutations';

// const state = {
// 	name: null,
// 	count: 0,
// } as Module1State;

// export default createStore({
// 	strict: process.env.NODE_ENV !== 'production', // strict only in dev since its resourcefully expensive-ish
// 	modules: {
// 		game,
// 	},
// 	state,
// 	mutations,
// });

// const store = createStore({
// 	// strict: process.env.NODE_ENV !== 'production', // strict only in dev since its resourcefully expensive-ish
// 	strict: true,
// 	modules: {
// 		game,
// 	},
// 	state,
// 	mutations,
// });
// console.log('local store: ', store);

// export default store;
