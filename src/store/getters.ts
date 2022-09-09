import { State, ProductItem } from './types';

export default {
	getTotalCount(state: State) {
		return state.itemsInCart.reduce((acc: any, curItem: any) => {
			console.log('acc: ', acc);
			console.log('curItem: ', curItem.count);
			return acc + curItem.count;
		}, 0);
		// console.log('result: ', result);
		// return result;
	},

	// get the count of categories in cart.
	getCategoryCount(state: State) {
		return state.itemsInCart.length;
	},
	getSubTotal(state: State) {
		const ret = state.itemsInCart
			.reduce((acc: any, curItem: any) => {
				return acc + curItem.price * curItem.count;
			}, 0)
			.toFixed(2);
		console.log('getSubTotal: state.itemsInCart: ', state.itemsInCart);
		console.log('getSubTotal: ', ret);
		return ret;
	},
	getCartItems(state: State) {
		return state.itemsInCart;
	},
	// get the count
	getCountBy(state: State, payload: any) {
		const index = state.itemsInCart.findIndex((idx: any) => {
			return idx.id === payload.id;
		});
		console.log('getCountBy: ', index);

		let ret = 0;
		if (index > -1) {
			ret = state.itemsInCart[index].count;
		} else {
			ret = 0;
		}
		return ret;
	},

	IsLoggedIn(state: State) {
		return state.isLoggedIn;
	},
	getProducts(state: State) {
		console.log('getter getProducts: ', state);
		return state.productsList;
	},
	// getCurProduct(state: State) {
	// 	return state.curProduct;
	// },
};
