<template>
  <div id="app">
    <!-- Content of each route will be shown here -->
    <router-view />
    
    <!-- Fixed Bottom Navigation, visible on all pages -->
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from './components/BottomNav.vue';

export default {
  components: {
    BottomNav
  }
}
</script>

<style>
#app {
  padding-bottom: 70px;  /* Adjust based on the height of your BottomNav */
}

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>
