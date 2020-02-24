<template>
  <div id="app">
    <MovieForm />
  </div>
</template>

<script>
import MovieForm from './components/MovieForm'
export default {
  name: 'App',
  components: {
    MovieForm
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
