<template>
	<div class="col-12 md:col-6 lg:col-3 card" v-if="isNewRoonVisible">
		<div class="room">
			<b>Nueva sala</b>
			<label for="nameRoom">
				Nombre de la Sala*
				<span class="error" v-show="isError"
					>(Por favor teclee un nombre)</span
				></label
			>
			<input
				type="text"
				name="nameRoom"
				:value="nameRoom"
				@input="nameRoom = $event.target.value"
			/>

			<label for="capacity"> Capacidada máxima </label>
			<input
				type="number"
				name="capacity"
				min="0"
				:value="capacity"
				@input="capacity = $event.target.value"
			/>

			<label for="occupation"> Ocupación </label>
			<input
				type="number"
				name="occupation"
				max="100"
				min="0"
				:value="occupation"
				@input="occupation = $event.target.value"
			/>
			<button type="button" @click="createRoom()">Añadir Sala</button>
			<button type="button" class="outline" @click="hideCard()">
				Cancelar
			</button>
		</div>
	</div>
</template>
<script>
	import { ref, computed } from 'vue';
	import { useStore } from 'vuex';
	export default {
		setup() {
			const store = useStore();
			const isNewRoonVisible = computed(() => store.state.isNewRoonVisible);
			let capacity = ref(0);
			let occupation = ref(0);
			let nameRoom = ref('Nombre nueva sala');
			let isError = ref(false);

			const hideCard = () => {
				store.commit('updateNewRoomVisible', false);
			};

			const createRoom = () => {
				if (nameRoom.value.trim() === '') {
					isError.value = true;
					return;
				}
				isError.value = false;
				const params = {
					capacity: capacity.value,
					occupation: occupation.value,
					name: nameRoom.value,
				};
				store.dispatch('createRoom', params);
			};

			return {
				capacity,
				occupation,
				nameRoom,
				isNewRoonVisible,
				hideCard,
				createRoom,
				isError,
			};
		},
	};
</script>
<style lang="scss" scoped>
	.room {
		background-color: var(--azul-claro);
		border: 1px dashed var(--azul-oscuro);
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
			.error {
				color: red;
			}
		}
		input {
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
		.outline {
			border: 1px solid var(--azul-oscuro);
			color: var(--azul-oscuro);
			background-color: transparent;
			margin-right: 0.5em;
			&:hover {
				background-color: #fff;
			}
		}
	}
</style>
