<template>
  <div class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/rozvoz">Rozvoz</router-link>
    <router-link to="/baliky">Baliky</router-link>
    <router-link to="/o_projektu">O projektu</router-link>
    <router-link to="/pro_rozvozce">Pro rozvozce</router-link>
    <router-link to="/chleba">Chleba</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
</style>