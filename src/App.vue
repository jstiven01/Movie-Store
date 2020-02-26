<template>
  <div id="app">
    <MovieForm />
    <MovieList />
    <Pagination />

  </div>
</template>

<script>
import MovieForm from './components/MovieForm.vue';
import MovieList from './components/MovieList.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    MovieForm,
    MovieList,
    Pagination,
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
