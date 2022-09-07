export default {
	getTotalCount(state) {
		const result = state.itemsInCart.reduce((acc, currentValue) => {
			console.log('acc: ', acc);
			console.log('currentValue: ', currentValue.count);
			return acc + currentValue.count;
		}, 0);
		console.log('result: ', result);
		return result;
	},

	// get the count of categories in cart.
	getCategoryCount(state) {
		return state.itemsInCart.length;
	},

	// get the count
	getCountBy(state, payload) {
		const index = state.itemsInCart.findIndex((idx) => {
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

	counter(state) {
		return state.count;
	},
	IsLoggedIn(state) {
		return state.isLoggedIn;
	},
	getProducts(state) {
		console.log('getProducts: ', state);
		return state.productsList;
	},
	getCurProduct(state) {
		return state.curProduct;
	},
};
