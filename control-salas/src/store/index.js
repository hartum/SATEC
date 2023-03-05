import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    floorList: [],
    roomList: [],
    activeFloorName:'',
    isFloorLoading: false,
    isRoomLoading: false,
  },
  getters: {
  },
  mutations: {
    updateFloorList(state, list){
      state.floorList = list;
    },
    updateActiveFloorName(state, name){
      state.activeFloorName = name;
    },
    setFloorLoading(state, isLoading){
      state.isFloorLoading = isLoading;
    },
    updateRoomList(state, list){
      state.roomList = list;
    },
    setRoomLoading(state, isLoading){
      state.isRoomLoading = isLoading;
    },
  },
  actions: {
    async getFloorList({commit, dispatch}){
      commit("setFloorLoading", true);
      axios
					.get('https://apimocha.com/hartum/list-floors')
					.then((response) => {
            const data = response.data;
						commit('updateFloorList', data);
						commit('updateActiveFloorName', data[0].name);
						commit("setFloorLoading", false);
            dispatch('getRoomsList', data[0].id);
					})
					.catch(function (error) {
						commit("setFloorLoading", false);
					});
    },
    async getRoomsList({commit},floorID){
      commit("setRoomLoading", true);
      axios
        .get('https://apimocha.com/hartum/list-rooms/' + floorID)
        .then((response) => {
          commit("updateRoomList", response.data);
          commit("setRoomLoading", false);
        })
        .catch(function (error) {
          commit("setRoomLoading", false);
        });
    },
  },
  modules: {
  }
})
