<template>
	<div class="container-salas">
		<div class="grid">
			<div class="col-8">
				<b>{{ floorName }}</b>
				<span class="is-loading" v-if="isRoomLoading">
					<img src="@/assets/loader.gif" /> Cargando las salas
				</span>
			</div>
			<div class="col-4 text-right">
				<button type="button" @click="showNewRoom">Añadir Sala</button>
			</div>
			<NewRoom />
			<Room
				v-for="room in roomList"
				:roomID="room.id"
				:name="room.name"
				:capacity="room.capacity"
				:occupation="room.occupation"
			/>
		</div>
	</div>
</template>
<script>
	import { useStore } from 'vuex';
	import { computed } from 'vue';
	import Room from '/src/components/Room.vue';
	import NewRoom from './NewRoom.vue';
	export default {
		components: {
			Room,
			NewRoom,
		},
		setup() {
			const store = useStore();
			const roomList = computed(() => store.state.roomList);
			const floorName = computed(() => store.state.activeFloorName);
			const isRoomLoading = computed(() => store.state.isRoomLoading);

			const showNewRoom = () => {
				store.commit('updateNewRoomVisible', true);
			};
			return { roomList, floorName, isRoomLoading, showNewRoom };
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
