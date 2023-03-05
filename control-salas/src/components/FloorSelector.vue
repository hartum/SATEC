<template>
	<div class="header">
		<h1>Salas</h1>
		<select>
			<option value="1">Planta 1</option>
			<option value="2">Planta 2</option>
			<option value="3">Planta 3</option>
		</select>
	</div>
</template>
<style lang="scss">
	.header {
		border-bottom: 1px solid #eeeff2;
		color: var(--azul-oscuro);
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		#floorSelect {
			border-radius: 12px;
			width: 130px;
			height: 30px;
			margin-right: 1em;
		}
	}
</style>
