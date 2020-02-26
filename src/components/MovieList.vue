<template>
    <div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MovieList',
  methods: {
    ...mapActions(['fetchMovies']),
    handleClick(movie, event) {
      console.log(event.target, movie);
    },
  },
  created() {
    // this.fetchMovies('casa');
    console.log('created');
  },

};
</script>

<style  scoped>

</style>
