<template>
    <div>
      <h1>Caixa de Mensagens com Técnico: {{ technicianId }}</h1>
      <p>Aqui você pode implementar uma interface de chat para se comunicar com o técnico.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    computed: {
      technicianId() {
        return this.id;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  