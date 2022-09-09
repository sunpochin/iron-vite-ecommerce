export default {
	getTotalCount(state) {
		return state.itemsInCart.reduce((acc, curItem) => {
			console.log('acc: ', acc);
			console.log('curItem: ', curItem.count);
			return acc + curItem.count;
		}, 0);
		// console.log('result: ', result);
		// return result;
	},

	// get the count of categories in cart.
	getCategoryCount(state) {
		return state.itemsInCart.length;
	},
	getSubTotal(state) {
		console.log('getSubTotal');
		return state.itemsInCart.reduce((acc, curItem) => {
			return acc + curItem.price;
		}, 0);
		// return subTotal;
	},
	getCartItems(state) {
		return state.itemsInCart;
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
		console.log('getter getProducts: ', state);
		return state.productsList;
	},
	getCurProduct(state) {
		return state.curProduct;
	},
};
