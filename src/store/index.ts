import { createStore } from 'vuex';
import { game } from './game';
export interface Module1State {
	name: null | string;
	count: number;
}

const state = {
	name: null,
	count: 0,
} as Module1State;

export const mutations = {
	SET_NAME(state: Module1State, newName: string) {
		state.name = newName;
	},
	increment(state: Module1State) {
		state.count += 1;
	},
};

export default createStore({
	strict: process.env.NODE_ENV !== 'production', // strict only in dev since its resourcefully expensive-ish
	modules: {
		game,
	},
	state,
	mutations,
});

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
