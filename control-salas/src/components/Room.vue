<template>
	<div class="col-12 md:col-6 lg:col-3 card">
		<div class="room">
			<b>Nombre de la sala</b>
			<label for="capacity"> Capacidada máxima </label>
			<input type="number" name="capacity" min="0" value="10" />

			<label for="occupation"> Ocupación </label>
			<input type="number" name="occupation" max="100" min="0" value="4" />

			<button type="button">Modificar</button>
			<div class="deleteRoom">X</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.room {
		background-color: var(--azul-claro);
		border-radius: var(--radio-containers);
		padding: 1em;
		clear: both;
		overflow: hidden;
		position: relative;
		b {
			display: block;
			margin-bottom: 1em;
		}
		label {
			display: block;
			font-size: 0.8em;
			margin-bottom: 0.5em;
		}
		input[type='number'] {
			padding: 0.5em 1em;
			border: 1px solid var(--azul-oscuro);
			border-radius: var(--radio-inputs);
			display: block;
			margin-bottom: 1em;
			box-sizing: border-box;
			width: 100%;
		}
		button[type='button'] {
			float: right;
		}
		.deleteRoom {
			background-color: var(--azul-oscuro);
			color: #fff;
			position: absolute;
			padding: 0.3em 0.5em;
			top: 1em;
			right: 1em;
			font-weight: bold;
			border-radius: 20px;
			cursor: pointer;
			&:hover {
				background-color: #fff;
				color: var(--azul-oscuro);
			}
		}
	}
	.card {
		position: relative;
	}
</style>
