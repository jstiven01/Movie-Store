<template>
  <div id="app">
    <MovieForm />
    <MovieList />

  </div>
</template>

<script>
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
export default {
  name: 'App',
  components: {
    MovieForm,
    MovieList
  }
}
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
