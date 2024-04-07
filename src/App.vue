<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">jobs</router-link>
  </nav>
  <button @click="backward">go back</button>
  <button @click="redirect">redirect</button>
  <button @click="forward">go forward</button>
  <router-view />
</template>

<script>
export default {
  methods: {
    backward() {
      this.$router.go(-1);
    },
    redirect() {
      this.$router.go(0);//or
      // this.$router.push({name : "home"});
    },
    forward() {
      this.$router.go(1);
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  text-decoration: none;
  color: #ffffff;
  background: #42b983;
}
button {
  padding: 10px;
  margin: 10px auto;
  cursor: pointer;
  border: none;
  border_radius: 5px;
}
</style>
