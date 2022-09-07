export default {
	setProducts(state, payload) {
		console.log('setProducts: ', payload.value);
		state.productsList = payload.value;
	},
	// add an item into cart.
	addToCart(state, payload) {
		const index = state.itemsInCart.findIndex((idx) => {
			return idx.id === payload.id;
		});
		console.log('index: ', index);
		if (index > -1) {
			state.itemsInCart[index].count++;
		} else {
			const haha = [...state.itemsInCart, payload];
			console.log('haha: ', haha);
			state.itemsInCart.push(payload);
			// state.itemsInCart = haha;
		}
		// console.log('itemsInCart: ', state.itemsInCart);
	},
};


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

// export const mutations = {
// 	setProducts(state: ProductsList, payload: ProductsList) {
// 		state.productsList = payload.productsList;
// 	},
// 	getProducts(state: ProductsList) {
// 		return state.productsList;
// 	},
// 	//
// 	getTotalCount(state: CartItems) {
// 		const result = state.itemsInCart.reduce((acc, currentValue) => {
// 			console.log('acc: ', acc);
// 			console.log('currentValue: ', currentValue.count);
// 			return acc + currentValue.count;
// 		}, 0);
// 		console.log('result: ', result);
// 		return result;
// 	},

// 	// get the count of categories in cart.
// 	getCategoryCount(state: CartItems) {
// 		return state.itemsInCart.length;
// 	},

// 	// get the count
// 	getCountBy(state: CartItems, payload: ProductItem) {
// 		const index = state.itemsInCart.findIndex((idx) => {
// 			return idx.id === payload.id;
// 		});
// 		console.log('getCountBy: ', index);

// 		let ret = 0;
// 		if (index > -1) {
// 			ret = state.itemsInCart[index].count;
// 		} else {
// 			ret = 0;
// 		}
// 		return ret;
// 	},

// 	// add an item into cart.
// 	addToCart(state: CartItems, payload: ProductItem) {
// 		const index = state.itemsInCart.findIndex((idx) => {
// 			return idx.id === payload.id;
// 		});
// 		console.log('index: ', index);
// 		if (index > -1) {
// 			state.itemsInCart[index].count++;
// 		} else {
// 			const haha = [...state.itemsInCart, payload];
// 			console.log('haha: ', haha);
// 			state.itemsInCart.push(payload);
// 			// state.itemsInCart = haha;
// 		}
// 		// console.log('itemsInCart: ', state.itemsInCart);
// 	},
// };

// module.exports = { mutations };
// // export default { mutations };
