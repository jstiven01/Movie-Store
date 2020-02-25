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
import { mapGetters } from 'vuex'
export default {
    name: "MovieList",
    computed: mapGetters(['allMovies'])
    
}
</script>

<style  scoped>

</style>