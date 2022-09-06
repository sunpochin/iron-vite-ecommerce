export interface ProductItem {
	name: null | string;
	serial_num: string;
	count: number;
}

export interface CartItems {
	itemsInCart: [ProductItem];
}

export const mutations = {
	getItemCount(state: CartItems, payload: ProductItem) {
		const found = state.itemsInCart.filter(function(item) 
			{
				if (item.serial_num === payload.serial_num ) {
					return item;
				}
			}
		);
		console.log('item found: ', found);
		return found.length;
	},

	addToCart(state: CartItems, payload: ProductItem) {
		console.log('payload: ', payload);
		state.itemsInCart.push(payload);
		console.log('itemsInCart: ', state.itemsInCart);
	},
};
