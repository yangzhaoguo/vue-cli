import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import aa from './modules/a';

Vue.use(Vuex);
const state = {
  isLoading: false
};

const mutations = {
  toggleLoading (state, bl){
    state.isLoading = bl;
  }
};
export default new Vuex.Store({
  state,
  mutations,
  modules: {
    aa
  },
  plugins: [createPersistedState()]
});
