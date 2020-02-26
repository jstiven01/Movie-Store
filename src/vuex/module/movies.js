import axios from 'axios';


const getters = {
  allMovies: (state) => state.movies,
};
const actions = {
  async fetchMovies({ commit }, title) {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: '0ff5b80581bf1b540b658c2d699cc617',
          query: title,
        },
      },
      { withCredentials: true },
    );
    console.log(response.data);
    commit('setMovies', response.data.results);
  },
};
const mutations = {
  setMovies(state, movies) {
    // eslint-disable-next-line no-param-reassign
    state.movies = movies;
    return state.movies;
  },
};

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

export default {
  state,
  getters,
  actions,
  mutations,
};
