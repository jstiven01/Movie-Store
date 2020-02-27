<template>
  <div id="app">
    <MovieForm />
    <MovieList />
    <DataTable :repositories="repositories" />

  </div>
</template>

<script>
import axios from 'axios';
import MovieForm from './components/MovieForm.vue';
import MovieList from './components/MovieList.vue';
import DataTable from './components/DataTable.vue';

const githubAPI = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100&page=';

export default {
  name: 'App',
  components: {
    MovieForm,
    MovieList,
    DataTable,
  },
  data() {
    return {
      githubPage: 1,
      repositories: [],
    };
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get(githubAPI + this.githubPage)
        .then(({ data }) => {
          this.repositories = this.repositories.concat(data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
