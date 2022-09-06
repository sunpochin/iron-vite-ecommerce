export interface ProductItem {
	name: null | string;
	serial_num: string;
	count: number;
}

export interface CartItems {
	itemsInCart: ProductItem[];
}

export const mutations = {
	getTotalCount(state: CartItems) {
		const result = state.itemsInCart.reduce((acc, currentValue) => {
			console.log('acc: ', acc);
			console.log('currentValue: ', currentValue.count);
			return acc + currentValue.count;
		}, 0);
		console.log('result: ', result);
		return result;
	},

	getCategeryCount(state: CartItems) {
		return state.itemsInCart.length;
	},

	addToCart(state: CartItems, payload: ProductItem) {
		const index = state.itemsInCart.findIndex((idx) => {
			return idx.serial_num === payload.serial_num;
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

module.exports = { mutations };
// export default { mutations };
