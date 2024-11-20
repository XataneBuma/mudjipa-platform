<template>
    <div class="home">
      <!-- Home-specific components -->
      <Header />
      <Categories />
      <JobsInDemand />
    </div>
  </template>
  
  <script>
  import Header from '../components/AppHeader.vue';
  import Categories from '../components/AppCategories.vue';
  import JobsInDemand from '../components/JobsInDemand.vue';
  
  export default {
    name: 'AppHome',
    components: {
      Header,
      Categories,
      JobsInDemand
    }
  }
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
  }
  </style>
  