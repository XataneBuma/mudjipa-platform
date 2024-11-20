<template>
    <div class="technician-list">
      <h2>Technicians for {{ selectedCategory.name }}</h2>
      <div class="technicians">
        <div v-for="tech in technicians" :key="tech.id" class="technician-item">
          <h3>{{ tech.name }}</h3>
          <p>{{ tech.location }}</p>
          <p>Rating: {{ tech.rating }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TechnicianList',
    props: {
      selectedCategory: Object
    },
    data() {
      return {
        technicians: [
          { id: 1, name: 'Jose Silva', location: 'Sao Paulo', rating: 4.5 },
          { id: 2, name: 'Maria Oliveira', location: 'Rio de Janeiro', rating: 4.2 },
          // More technicians...
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .technician-list {
    padding: 20px;
  }
  
  .technician-item {
    margin-bottom: 10px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
  }
  </style>
  