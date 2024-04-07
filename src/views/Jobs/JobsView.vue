<template>
  <h1>my jobs</h1>
  <div v-if="jobs.length" >
    <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'jobsDitales', params: { id: job.id } }">
      <h2>
        {{ job.jab }}
      </h2>
    </router-link>
  </div>
  </div>
  <!-- <JobsDitales/> -->
</template>

<script>
import JobsDitales from "./JobsDitales.vue";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  components: {
    JobsDitales,
  },
  mounted(){
    fetch('http://localhost:3000/jabs')
    .then(res => res.json())
    .then(data => this.jobs = data)
    .catch(err => console.log(err.message));
  }
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 2px;
  border-radius: 10px;
  margin: 10px auto;
  max-block-size: 500px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>