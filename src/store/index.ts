import {
	createStore,
	MutationTree,
	ActionContext,
	ActionTree,
	GetterTree,
	Store as VuexStore,
	CommitOptions,
	DispatchOptions,
	createLogger,
} from 'vuex';

import { ProductItem, State } from '@/store/types';

//declare state
// export type State = {
// 	counter: number;
// 	isLoggedIn: false;
// 	productsList: ProductItem[];
// 	itemsInCart: ProductItem[];
// };

//set state
const state: State = {
	counter: 0,
	isLoggedIn: false,
	productsList: [],
	itemsInCart: [],
};

// mutations and action enums

export enum MutationTypes {
	INC_COUNTER = 'SET_COUNTER',
	ADD_TO_CART = 'addToCart',
	SET_PRODUCTS = 'setProducts',
}

export enum ActionTypes {
	INC_COUNTER = 'SET_COUNTER',
}

//Mutation Types
export type Mutations<S = State> = {
	[MutationTypes.INC_COUNTER](state: S, payload: number): void;
	[MutationTypes.ADD_TO_CART](state: S, payload: ProductItem): void;
	[MutationTypes.SET_PRODUCTS](state: S, payload: ProductItem[]): void;
};

//define mutations
const mutations: MutationTree<State> & Mutations = {
	[MutationTypes.INC_COUNTER](state: State, payload: number) {
		state.counter += payload;
	},

	[MutationTypes.ADD_TO_CART](state: State, payload: ProductItem) {
		// state.counter += payload;
		const index = state.itemsInCart.findIndex((idx: any) => {
			return idx.id === payload.id;
		});
		console.log('addToCart index: ', index);
		if (index > -1) {
			console.log('state.itemsInCart: ', state.itemsInCart);
			state.itemsInCart[index].count++;
			state.itemsInCart = state.itemsInCart;
			console.log(
				'state.itemsInCart[index].count: ',
				state.itemsInCart[index].count
			);
		} else {
			payload.count = 1;
			// [...state.itemsInCart, payload];
			// console.log('newitem: ', newitem);
			console.log('payload: ', payload);
			state.itemsInCart.push(payload);
		}
		// console.log('itemsInCart: ', state.itemsInCart);
	},

	[MutationTypes.SET_PRODUCTS](state: State, payload: ProductItem[]) {
		state.productsList = payload;
	},
};

//actions

type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1]
	): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

// actions interface

export interface Actions {
	[ActionTypes.INC_COUNTER](
		{ commit }: AugmentedActionContext,
		payload: number
	): void;
}

export const actions: ActionTree<State, State> & Actions = {
	[ActionTypes.INC_COUNTER]({ commit }, payload: number) {
		commit(MutationTypes.INC_COUNTER, payload);
	},
};

// Getters types
export type Getters = {
	doubleCounter(state: State): number;
	getCartItems(state: State): ProductItem[];
};

//getters

export const getters: GetterTree<State, State> & Getters = {
	doubleCounter: (state) => {
		console.log('state', state.counter);
		return state.counter * 2;
	},
	getCartItems: (state) => {
		return state.itemsInCart;
	}
	
};

//setup store type
export type Store = Omit<
	VuexStore<State>,
	'commit' | 'getters' | 'dispatch'
> & {
	commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
		key: K,
		payload: P,
		options?: CommitOptions
	): ReturnType<Mutations[K]>;
} & {
	getters: {
		[K in keyof Getters]: ReturnType<Getters[K]>;
	};
} & {
	dispatch<K extends keyof Actions>(
		key: K,
		payload: Parameters<Actions[K]>[1],
		options?: DispatchOptions
	): ReturnType<Actions[K]>;
};

// import cartGetters from './getters';
// import cartMutations from './mutations';
// import cartActions from './actions';
// // import State from './types';
// import { ProductItem, State } from './types';

// export type ProductItem = {
// 	id: string;
// 	title: null | string;
// 	count: number;
// 	price: number;
// };

// export type ProductsList = {
// 	productsList: ProductItem[];
// };

// // define your typings for the store state
// export type State = {
// 	isLoggedIn: false;
// 	productsList: ProductItem[];
// 	itemsInCart: ProductItem[];
// };

// const state: State = {
// 	isLoggedIn: false,
// 	productsList: [],
// 	itemsInCart: [],
// };

// import { InjectionKey } from 'vue';
// // define injection key
// export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
	state,
	mutations,
	actions,
	getters,
	plugins: [createLogger()],
});

export function useStore() {
	return store as Store;
}
