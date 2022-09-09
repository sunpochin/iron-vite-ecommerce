export default {
	setProducts(context: any, payload: any) {
		context.commit('setProducts', payload);
	},
	setCurProduct(context: any, payload: any) {
		context.commit('setCurProduct', payload);
	},
	addToCart(context: any, payload: any) {
		console.log('addToCart: ', payload);
		context.commit('addToCart', payload);
	},
	removeItem(context: any, payload: any) {
		context.commit('removeItem', payload);
	},

	login(context: any) {
		context.commit('setLoggedIn', { value: true });
	},
	logout(context: any) {
		context.commit('setLoggedIn', { value: false });
	},
};
