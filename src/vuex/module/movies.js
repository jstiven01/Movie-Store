import axios from 'axios';

const state = {
  movies: [
    {
      id: 1,
      title: 'Movie One',
    },
    {
      id: 2,
      title: 'Movie Two',
    },
  ],
};
const getters = {
  allMovies: (state) => state.movies,
};
const actions = {
  async fetchMovies({ commit, name }) {
    console.log(commit, name);
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: '0ff5b80581bf1b540b658c2d699cc617',
          query: 'casa',
        },
      },
      { withCredentials: true },
    );
    commit('setMovies', response.data.results);
  },
};
const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
