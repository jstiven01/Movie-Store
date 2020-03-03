<template>
  <div id="app">
    <MovieForm />
    <MovieList />
    <DataTable :showRepos="showRepos" :repositories="repositories" />
     <div class="my-4"> <!-- Pagination -->
   <ul class="pagination pagination-md justify-content-center text-center">
        <li class="page-item">
          <a class="page-link" @click="prevPage">Previous</a>
        </li>
        <li class="page-link" style="background-color: inherit">
            1 of 5
        </li>
        <li class="page-item">
          <a class="page-link" @click="nextPage">Next</a>
        </li>
      </ul>
 </div><!--./Pagination -->

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
      page: 1,
      loading: false,
      perPage: 20,
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
    prevPage() {
      this.loading = true;
      this.page -= 1;
    },
    nextPage() {
      this.loading = true;
      this.page += 1;
    },
  },
  computed: {
    showRepos() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      // this.loading = false;
      return this.repositories.slice(start, end);
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
