export default {
	setProducts(context, payload) {
		context.commit('setProducts', payload);
	},
	setCurProduct(context, payload) {
		context.commit('setCurProduct', payload);
	},
	addToCart(context, payload) {
		console.log('addToCart: ', payload);
		context.commit('addToCart', payload);
	},

  login(context) {
		context.commit('setLoggedIn', { value: true });
	},
	logout(context) {
		context.commit('setLoggedIn', { value: false });
	},
};
