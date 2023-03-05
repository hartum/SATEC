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
				<button type="button">Añadir Sala</button>
			</div>
			<Room
				v-for="room in roomList"
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
	export default {
		components: {
			Room,
		},
		setup() {
			const store = useStore();
			const roomList = computed(() => store.state.roomList);
			const floorName = computed(() => store.state.activeFloorName);
			const isRoomLoading = computed(() => store.state.isRoomLoading);
			return { roomList, floorName, isRoomLoading };
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
