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
    </div>
</template>

<script>
export default {
  name: 'MovieForm',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    addMovie() {
      console.log('hey pal');
    },
  },
};
</script>

<style scoped>

</style>
