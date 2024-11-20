<template>
  <div class="categories">
    <h2>Categorias 
      <router-link to="/categorias">Ver Todos</router-link>
    </h2>
    <div class="category-list">
      <div v-for="category in categories" :key="category.id" class="category-item" @click="openTechnicianList(category)">
        <i :class="category.icon"></i>
        <p>{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'JobCategories',
    data() {
      return {
        categories: [
          { id: 1, name: 'Pintura', icon: 'fa fa-paint-brush' },
          { id: 2, name: 'Marketing Digital', icon: 'fa fa-bullhorn' },
          // More categories...
        ]
      };
    },
    methods: {
      openTechnicianList(category) {
        // Emit the selected category to the parent component or trigger modal
        this.$emit('categorySelected', category);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles for categories */
  </style>
  