<template>
    <div class="list">
        this is a form
        <form @submit.prevent="addMovie">
            <input type="text"
            name="title"
            id="nameMovie"
            v-model="title"
            placeholder="Insert Name Movie">
            <button type="submit">Name search movie</button>
        </form>
        <div>{{title}}</div>
        <h3>All Movies</h3>
        <div class="movies">
            <div v-for="movie in allMovies" :key="movie.id">
               <span>{{movie.title}}</span>
               <button type="button" @click="handleClick(movie,  $event)">Add Movie</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MovieForm',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['fetchMovies']),
    addMovie() {
      this.fetchMovies(this.title);
    },
  },
  computed: mapGetters(['allMovies']),
};
</script>

<style scoped>

</style>
