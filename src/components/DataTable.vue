<template>
  <table class="table">

    <tbody>
      <tr v-for="repo in repositories" :key="repo.id">
        <th scope="row">
          {{ repositories.indexOf(repo) + 1 }}
        </th>
        <td>
          {{ repo.name }}
        </td>
        <td>
          {{ repo.stargazers_count.toLocaleString() }}
        </td>
        <td>
          <img v-if="repo.owner.avatar_url" class="avatar" :src="repo.owner.avatar_url"/>
        </td>
        <td>
          <a :href="repo.html_url" target="_blank">Link</a>
        </td>
        <td>
          <a v-if="repo.homepage" :href="repo.homepage" target="_blank">Homepage</a>
          <p v-else>No homepage</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'DataTable',
  props: {
    repositories: Array,
  },
};
</script>
<style scoped>
  .avatar {
    max-width: 50px;
  }
</style>
