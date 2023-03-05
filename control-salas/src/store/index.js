import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    floorList: [],
    activeFloorName:'',
    isFloorLoading: false,
  },
  getters: {
  },
  mutations: {
    updateFloorList(state, list){
      state.floorList = list;
    },
    updateFloorName(state, name){
      state.activeFloorName = name;
    },
    setFloorLoading(state, isLoading){
      state.isFloorLoading = isLoading;
    }
  },
  actions: {
    async getFloorList({commit, dispatch}){
      commit("setFloorLoading", true);
      axios
					.get('https://apimocha.com/hartum/list-floors')
					.then((response) => {
						commit('updateFloorList', response.data);
						commit('updateFloorName', response.data[0].name);
						commit("setFloorLoading", false);
					})
					.catch(function (error) {
						commit("setFloorLoading", false);
					});
    }
  },
  modules: {
  }
})
