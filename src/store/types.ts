export type ProductItem = {
	id: string;
	title: null | string;
	count: number;
	price: number;
}

export type ProductsList = {
	productsList: ProductItem[];
}

// export default interface State {
// 	isLoggedIn: boolean;
// 	productsList: ProductItem[];
// 	itemsInCart: ProductItem[];
// }
// define your typings for the store state
export type State = {
	isLoggedIn: false;
	productsList: ProductItem[];
	itemsInCart: ProductItem[];
};