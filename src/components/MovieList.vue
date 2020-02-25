<template>
    <div>
        <h3>All Movies</h3>
        <div class="movies">
            <div v-for="movie in allMovies" :key="movie.id">
                {{movie.title}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MovieList',
  methods: {
    ...mapActions(['fetchMovies']),
  },
  computed: mapGetters(['allMovies']),
  created() {
    this.fetchMovies('casa');
  },

};
</script>

<style  scoped>

</style>
