<template>
  <div class="jobs-in-demand">
    <h2>
      Jobs em Demanda 
      <router-link to="/jobs" class="view-all">Ver Todos</router-link>
    </h2>
    <div class="job-list">
      <div class="job-item" v-for="(job) in jobs" :key="job.id" @click="goToJobDetail(job.id)">
        <img :src="job.src" alt="Job" />
        <h3>{{ job.title }}</h3>
        <p>{{ job.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobsInDemand',
  data() {
    return {
      jobs: [
        { id: 1, src: require('@/assets/image4.jpeg'), title: 'Carpintaria', description: 'Construção de estruturas utilizando madeira.' },
        { id: 2, src: require('@/assets/image5.jpeg'), title: 'Mecânica Auto', description: 'Reparação de veículos automóveis.' },
        { id: 3, src: require('@/assets/image6.jpg'), title: 'Marketing Digital', description: 'Gestão de identidade visual digital de uma entidade.' }
      ]
    };
  },
  methods: {
    goToJobDetail(jobId) {
      this.$router.push({ name: 'JobDetail', params: { id: jobId } });
    }
  }
}
</script>

<style scoped>
/* Estilos permanecem os mesmos */
.jobs-in-demand {
  margin-top: 20px;
  height: 100%;
  padding: 20px;
  background-color: #f9f3eb;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  overflow: hidden;
}

h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
  color: #343a40;
  margin-bottom: 15px;
}

.view-all {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.view-all:hover {
  text-decoration: underline;
}

.job-list {
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  gap: 15px;
}

.job-item {
  flex: 0 0 auto;
  width: 220px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  border: 1px solid #dee2e6;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer; /* Adicionando cursor pointer */
}

.job-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.job-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

h3 {
  font-size: 1.2em;
  margin: 10px 0 5px;
  color: #343a40;
}

p {
  font-size: 0.9em;
  color: #6c757d;
}
</style>
