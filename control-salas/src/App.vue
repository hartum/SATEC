<template>
	<FloorSelector />
	<Floor />
</template>

<script>
	import Floor from '/src/components/Floor.vue';
	import FloorSelector from '/src/components/FloorSelector.vue';
	export default {
		name: 'App',
		components: {
			Floor,
			FloorSelector,
		},
	};
</script>

<style lang="scss">
	:root {
		--azul-oscuro: #2e344d;
		--azul-claro: #f5f7fb;
		--radio-containers: 26px;
		--radio-inputs: 13px;
	}
	#app {
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	button[type='button'] {
		background-color: var(--azul-oscuro);
		border: 1px solid var(--azul-oscuro);
		border-radius: 12px;
		color: #fff;
		cursor: pointer;
		padding: 0.5em 1em;
		&:hover {
			background-color: #fff;
			color: var(--azul-oscuro);
		}
	}
</style>
