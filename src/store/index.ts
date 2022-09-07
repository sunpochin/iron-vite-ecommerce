import { createStore } from 'vuex';
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
import cartActions from './actions';
// export interface State {
// 	productsList: ProductItem[];
// 	isLoggedIn: boolean;
// 	itemsInCart: ProductItem[];
// }

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
	actions: cartActions,
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
