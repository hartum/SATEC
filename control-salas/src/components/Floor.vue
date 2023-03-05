<template>
	<div class="container-salas">
		<div class="grid">
			<div class="col-8">
				<b>Nombre de la Sala</b>
			</div>
			<div class="col-4 text-right">
				<button type="button">Añadir Sala</button>
			</div>
			<Room />
		</div>
	</div>
</template>
<script>
	import Room from '/src/components/Room.vue';
	export default {
		components: {
			Room,
		},
	};
</script>
<style lang="scss">
	.container-salas {
		border: 1px solid var(--azul-oscuro);
		border-radius: 26px;
		padding: 1rem;
	}
</style>
