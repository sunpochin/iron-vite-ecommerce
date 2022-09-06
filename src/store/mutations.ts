export interface ModuleItem {
	name: null | string;
	serial_num: string;
	count: number;
}

export interface CartItems {
	itemsInCart: [ModuleItem];
}

export const mutations = {
	getItem(state: CartItems, payload: ModuleItem) {
		const item = state.itemsInCart.filter((item) => {
			item.serial_num === payload.serial_num;
		});
		// console.log('item found: ', item);
		return item.length;
	},
	addToCart(state: CartItems, payload: ModuleItem) {
		// console.log('payload: ', payload);
		state.itemsInCart.push(payload);
	},
};

