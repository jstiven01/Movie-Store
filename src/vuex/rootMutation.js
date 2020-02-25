import Vuex from 'vuex';
import Vue from 'vue';
import movies from './module/movies';
// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store(
  {
    modules: {
      movies,
    },
  },
);
