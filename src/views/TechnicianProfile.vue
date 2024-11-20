<template>
  <button class="back-button" @click="goBack">
    <i class="fa fa-arrow-left"></i>
  </button>
  <div class="profile-container">
    <div class="cover-photo" :style="{ backgroundImage: `url(${coverPhoto})` }"></div>
    <div class="profile-content">
      <img class="avatar" :src="avatar" alt="Profile Avatar" />
      <h2>Perfil do Técnico: {{ technician.name }}</h2>
      <p><strong>Especialização:</strong> {{ technician.specialization }}</p>
      <p><strong>Contato:</strong> {{ technician.contact }}</p>
      <p><strong>Experiência:</strong> {{ technician.experience }} anos</p>
      <p><strong>Avaliações:</strong> {{ technician.rating }} ★</p>
      <p>Aqui você pode exibir detalhes completos sobre o técnico selecionado.</p>
      
      <div class="action-buttons">
        <button class="btn btn-primary" @click="associateToProject">Associar ao Projeto</button>
        <button class="btn btn-secondary" @click="sendMessage">Enviar Mensagem</button>
        <button class="btn btn-success" @click="scheduleVisit">Agendar Visita</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      coverPhoto: 'src/assets/image1.png', // Substitua pela URL real
      avatar: 'src/assets/image2.png', // Substitua pela URL real
      technician: {}
    };
  },
  created() {
    this.fetchTechnicianData(this.id);
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Navega de volta para a página anterior
    },
    fetchTechnicianData(technicianId) {
      const allTechnicians = [
        { id: 1, name: 'José', specialization: 'Carpintaria', contact: '(258)84 215 0013', experience: 3, rating: 4.5 },
        { id: 2, name: 'Maria', specialization: 'Pintura', contact: '(258)84 215 0014', experience: 5, rating: 4.7 },
        { id: 3, name: 'João', specialization: 'Eletricista', contact: '(258)84 215 0015', experience: 4, rating: 4.1 },
        { id: 4, name: 'Jaimito Marado', specialization: 'Eletrônica', contact: '(258)84 215 0016', experience: 5, rating: 4.8 },
        { id: 5, name: 'Antonio Xipadera', specialization: 'Mecanica', contact: '(258)84 215 0016', experience: 5, rating: 3.2 },
        { id: 7, name: 'João Biscateiro', specialization: 'Pintura', contact: '(258)84 215 0016', experience: 5, rating: 4.1 },
        { id: 8, name: 'Carlos Mapulango', specialization: 'Carpintaria', contact: '(258)84 215 0016', experience: 5, rating: 2.8 },
      ];
      
      this.technician = allTechnicians.find(tech => tech.id === Number(technicianId)) || {};
    },
    associateToProject() {
      alert(`Técnico ${this.technician.name} associado ao projeto!`);
    },
    sendMessage() {
      alert(`Mensagem enviada para ${this.technician.contact}!`);
    },
    scheduleVisit() {
      alert(`Visita agendada com ${this.technician.name}!`);
    }
  }
}
</script>

<style scoped>
.profile-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.back-button {
  background-color: transparent;
  border: none;
  color: #007BFF;
  cursor: pointer;
  font-size: 24px;
  margin: 10px;
  padding: 5px;
  transition: color 0.3s;
}

.back-button:hover {
  color: #0056b3;
}

.cover-photo {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.profile-content {
  padding: 20px;
  text-align: center;
  background: white;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid white;
  margin-top: -50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

h2 {
  margin: 10px 0;
}

.action-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.action-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-success {
  background-color: #28a745;
  color: white;
}
</style>
