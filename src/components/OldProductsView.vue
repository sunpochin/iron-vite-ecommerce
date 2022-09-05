<template>
	<h1>Products</h1>
</template>

<script lang="ts">

export default {
	methods: {
		async fetchProducts() {
			const response = await axios.get('https://fakestoreapi.com/products');
			// console.log('response: ', response);
			let data = response.data;
			console.log('data: ', data);

			data = data.filter(
				(product) =>
					product.category === `men's clothing` ||
					product.category === `women's clothing`
			);

			this.setProducts({ value: data });
			return data;
		},
		async getme() {
			const options = {
			};

			axios
				.request(options)
				.then(function (response) {
					console.log(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});

			let commits = await response.json();
			console.log('commits: ', commits);
		},
	},
	mounted() {
		this.getme();
	},
};
</script>