<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
	<div class="upmost">
		<div class="logo">Fashion shop</div>
		<nav>
			<router-link to="/iron-vite-ecommerce">首頁</router-link>
			<router-link to="/products">產品列表</router-link>
			<router-link to="/cart">購物車</router-link>
			<router-link to="/login">登入/註冊</router-link>
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
	padding: 1rem;
}

nav {
	background-color: rgb(50, 50, 50);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 10px;
	padding: 10px;
	font-size: 10px;
}

nav a:hover {
	transition: transform 0.9s ease-in-out;
	transform: scale(1);
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