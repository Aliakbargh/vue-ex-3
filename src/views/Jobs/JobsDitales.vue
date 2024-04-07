<template>
  <h2>jobs details</h2>
  <!-- <p>{{ $route.params.id }}</p> -->
  <!-- path: '/jobs/:id' -->
  <div v-if="job">
    <h2>{{ job.jab }}</h2>
    <p>{{ id }}</p>
  </div>
  <div v-else>
    <p>job detilae loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: null,
    };
  },
  props: ["id"],
  mounted() {
    fetch("http://localhost:3000/jabs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>