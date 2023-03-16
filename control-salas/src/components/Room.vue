<template>
	<div class="col-12 md:col-6 lg:col-3 card">
		<div class="room">
			<b>{{ name }}</b>
			<label for="capacity"> Capacidada máxima </label>
			<input
				type="number"
				name="capacity"
				min="0"
				:value="capacity"
				@input="cardCapacity = $event.target.value"
			/>

			<label for="occupation"> Ocupación </label>
			<input
				type="number"
				name="occupation"
				max="100"
				min="0"
				:value="occupation"
				@input="cardOccupation = $event.target.value"
			/>

			<button type="button" @click="updateRoom(roomID)">Modificar</button>
			<div class="deleteRoom" @click="showConfirmation(true)">X</div>
			<div
				v-if="isDelConfirmation"
				class="delConfirmation flex align-content-center flex-wrap text-center justify-content-center"
			>
				<p>¿Seguro que desea borrar esta sala?</p>
				<button type="button" class="outline" @click="showConfirmation(false)">
					Cancelar
				</button>
				<button type="button" class="danger" @click="deleteRoom(roomID)">
					Borrar
				</button>
			</div>
		</div>
	</div>
</template>
<script>
	import { ref } from 'vue';
	import { useStore } from 'vuex';
	export default {
		props: {
			roomID: Number,
			name: String,
			capacity: Number,
			occupation: Number,
		},
		setup(props) {
			const store = useStore();
			let isDelConfirmation = ref(false);
			let cardCapacity = ref();
			let cardOccupation = ref();

			//--- show or hide delete confirmation container
			const showConfirmation = (visible) => {
				isDelConfirmation.value = visible;
			};
			const deleteRoom = (roomID) => {
				showConfirmation(false);
				store.dispatch('delRoom', roomID);
			};
			const updateRoom = (roomID) => {
				const params = {
					id: roomID,
					capacity: cardCapacity.value,
					occupation: cardOccupation.value,
				};
				store.dispatch('updateRoom', params);
			};
			return {
				isDelConfirmation,
				showConfirmation,
				deleteRoom,
				updateRoom,
				cardCapacity,
				cardOccupation,
			};
		},
	};
</script>
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
			.check {
				vertical-align: middle;
			}
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
		.delConfirmation {
			position: absolute;
			background-color: rgba($color: #000000, $alpha: 0.8);
			color: #fff;
			top: 10px;
			left: 10px;
			right: 10px;
			bottom: 10px;
			padding: 0.5em;
			border-radius: var(--radio-containers);
			.outline {
				border: 1px solid #fff;
				background-color: transparent;
				margin-right: 0.5em;
				&:hover {
					background-color: #fff;
				}
			}
			.danger {
				background-color: red;
				&:hover {
					background-color: #fff;
				}
			}
		}
	}
</style>
