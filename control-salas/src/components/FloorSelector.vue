<template>
	<div class="header">
		<h1>Salas</h1>
		<select id="floorSelect" @change="setActiveFloor($event)">
			<option v-for="floor in floorList" :value="floor.id">
				{{ floor.name }}
			</option>
		</select>
		<span class="is-loading" v-if="isFloorLoading">
			<img src="@/assets/loader.gif" /> Cargando las plantas
		</span>
	</div>
</template>
<script>
	import { onMounted, computed } from 'vue';
	import { useStore } from 'vuex';
	export default {
		setup() {
			const store = useStore();
			const floorList = computed(() => store.state.floorList);
			const isFloorLoading = computed(() => store.state.isFloorLoading);

			onMounted(() => {
				store.dispatch('getFloorList');
			});
			//--- Make request to get rooms in active floor
			const setActiveFloor = (event) => {
				const selectedIndex = event.target.options.selectedIndex;
				const floorName = event.target.options[selectedIndex].textContent;

				store.commit('updateActiveFloorName', floorName);
				store.dispatch('getRoomsList', event.target.value);
			};

			return {
				floorList,
				isFloorLoading,
				setActiveFloor,
			};
		},
	};
</script>
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
