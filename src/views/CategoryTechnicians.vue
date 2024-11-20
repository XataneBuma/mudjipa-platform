<template>
  <div class="category-technicians">
    <button class="back-button" @click="goBack">
      <i class="fa fa-arrow-left"></i>
    </button>

    <div class="no-technicians" v-if="users.length === 0">Nenhum técnico encontrado para esta categoria.</div>
    
    <div class="technicians-list" v-else>
      <div v-for="user in users" :key="user.id" class="result-item">
        <img :src="user.photoUrl" alt="Foto de {{ user.name }}" class="result-image" />
        <div class="result-info">
          <h3>{{ user.name }}</h3>
          <p>{{ user.category }}</p>
          <p><i class="fas fa-map-marker-alt"></i> {{ user.location }}</p>
          <p><i class="fas fa-star"></i> {{ user.rating }} ({{ user.reviewCount }} avaliações)</p>
        </div>
        <div class="technician-actions">
          <button @click="viewProfile(user.id)" class="btn btn-primary">Ver Perfil</button>
          <button @click="contactTechnician(user.id)" class="btn btn-primary contact-button">Contactar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryTechnicians',
  data() {
    return {
      categoryName: this.$route.params.category,
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    fetchUsers() {
      const allUsers = [
        { id: 1, name: 'José Xamussa', category: 'Carpintaria', location: 'Cidade A', rating: 4.5, reviewCount: 10, photoUrl: 'src/assets/image1.png' },
        { id: 2, name: 'Maria Mapenda', category: 'Pintura', location: 'Cidade B', rating: 4.7, reviewCount: 8, photoUrl: 'src/assets/image2.png' },
        { id: 3, name: 'João xapepa', category: 'Carpintaria', location: 'Cidade C', rating: 4.1, reviewCount: 12, photoUrl: 'src/assets/image3.png' },
        { id: 4, name: 'Pedro Ocb', category: 'Mecânica Auto', location: 'Cidade D', rating: 4.9, reviewCount: 15, photoUrl: 'src/assets/image4.png' },
      ];
      this.users = allUsers.filter(user => user.category === this.categoryName);
    },
    viewProfile(technicianId) {
      this.$router.push({ name: 'TechnicianProfile', params: { id: technicianId } });
    },
    contactTechnician(technicianId) {
      this.$router.push({ path: `/messages/${technicianId}` });
    }
  },
  watch: {
    '$route.params.category': function(newCategory) {
      this.categoryName = newCategory;
      this.fetchUsers();
    }
  }
}
</script>

<style scoped>
.category-technicians {
  padding: 20px;
}

.back-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #007bff;
  transition: color 0.3s;
}

.back-button:hover {
  color: #0056b3;
}

.no-technicians {
  text-align: center;
  color: #666;
  font-size: 1.2em;
  margin-bottom: 20px;
}

.technicians-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.result-item {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 300px; /* Largura padrão do card */
}

.result-item:hover {
  transform: translateY(-2px);
}

.result-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  border: 2px solid #007bff;
}

.result-info {
  flex-grow: 1;
}

.result-info h3 {
  margin: 0 0 5px;
  color: #007bff;
}

.result-info p {
  margin: 3px 0;
}

.technician-actions {
  display: flex;
  flex-direction: column; /* Alinhamento vertical */
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 5px; /* Espaçamento entre os botões */
}

.btn-primary.contact-button {
  background-color: #28A745;
}

.btn-primary:hover {
  opacity: 0.9;
}
</style>
