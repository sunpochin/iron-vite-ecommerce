<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
	<div class="upmost">
		<div class="logo">Logo</div>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/products">Products</router-link> |
			<router-link to="/cart">Cart</router-link> |
			<router-link to="/login">Login</router-link>
		</nav>
	</div>
	<router-view />
</template>

<style>
* {
	color: inherit;
	margin: 0;
	padding: 0;
}

/* ul {
	padding: 0;
	list-style-type: none;
}

hr {
	border: 0;
	border-top: 1px dotted #efefef;
} */

/* .card {
	display: block;
	padding: 0.75rem;
	border: 1px solid #ddd;
	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
}
.card .card-title {
	font-size: 1rem;
	padding-bottom: 0.75rem;
	font-weight: bold;
}
.card .card-body {
	font-size: 1rem;
}
.card .card-body a {
	text-decoration: underline;
}
 */
#app {
	margin: 0;
	padding: 0;
	max-width: 100%;

	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.upmost {
	display: flex;
	max-width: 100%;
	justify-content: space-between;
	background-color: rgb(0, 0, 0);
}

.logo {
	display: flex;
	align-items: center;
	align-content: center;

	color: pink;
	font-size: 32px;
}

nav {
	background-color: rgb(50, 50, 50);
	display: flex;
	justify-content: space-around;
	gap: 30px;
	padding: 10px;
}

nav {
	background-color: rgb(50, 50, 50);
	display: flex;
	justify-content: space-around;
	gap: 30px;
	padding: 10px;
}

nav a:hover {
	transition: transform 0.9s ease-in-out;
	transform: scale(1.4);
	color: rgb(13, 195, 13);
}

nav a {
	font-weight: bold;
	color: rgb(13, 195, 13);
}

nav a.router-link-exact-active {
	color: rgb(229, 226, 241);
}
</style>