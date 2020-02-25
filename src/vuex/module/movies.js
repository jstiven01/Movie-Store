//import axios from 'axios';

const state = {
    movies: [
        {
            id: 1,
            title: 'Movie One'
        },
        {
            id: 2,
            title: 'Movie Two'
        }
    ]
};
const getters = {
    allMovies: (state) => state.movies
};
const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions, 
    mutations
}