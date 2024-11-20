<template>
  <div class="profile-container">
    <div class="cover-photo" :style="{ backgroundImage: `url(${coverPhoto})` }"></div>
    <div class="profile-content">
      <img class="avatar" :src="avatar" alt="Profile Avatar" />
      <h2>{{ userName }}</h2>
      <p class="user-profile">{{ userProfile }}</p>
      <p class="contact-info">{{ contactInfo }}</p>
      
      <label class="toggle-label">
        <input type="checkbox" v-model="isSeller" />
        {{ isSeller ? 'Contratante' : 'Vendedor' }}
      </label>

      <div class="form-group">
        <label for="location">Localização</label>
        <input v-model="location" id="location" type="text" class="form-control" placeholder="Digite sua localização" disabled />
      </div>

      <div class="form-group">
        <label for="certifications">Certificações</label>
        <input v-model="certifications" id="certifications" type="text" class="form-control" placeholder="Digite suas certificações" disabled />
      </div>

      <div class="form-group">
        <label for="birthDate">Data de Nascimento</label>
        <input v-model="birthDate" id="birthDate" type="date" class="form-control" disabled />
      </div>

      <div class="form-group">
        <label for="profession">Profissão</label>
        <input v-model="profession" id="profession" type="text" class="form-control" placeholder="Digite sua profissão" disabled />
      </div>

      <div class="button-group">
        <button class="action-button" v-if="isSeller" @click="viewReviews">Ver Avaliações</button>
        <button class="edit-button" @click="openEditModal">Editar Perfil</button>
        <button class="action-button" @click="saveProfile">Salvar Perfil</button>
        <button class="logout-button" @click="logout">Logout</button>
      </div>
      
      <div v-if="isLoading" class="loading-indicator">Carregando...</div>
    </div>

    <!-- Modal para edição -->
    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeEditModal">&times;</span>
        <h3>Editar Perfil</h3>
        
        <div class="form-group">
          <label for="editLocation">Localização</label>
          <input v-model="editableLocation" id="editLocation" type="text" class="form-control" placeholder="Digite sua localização" />
        </div>
        
        <div class="form-group">
          <label for="editCertifications">Certificações</label>
          <input v-model="editableCertifications" id="editCertifications" type="text" class="form-control" placeholder="Digite suas certificações" />
        </div>

        <div class="form-group">
          <label for="editBirthDate">Data de Nascimento</label>
          <input v-model="editableBirthDate" id="editBirthDate" type="date" class="form-control" />
        </div>

        <div class="form-group">
          <label for="editProfession">Profissão</label>
          <input v-model="editableProfession" id="editProfession" type="text" class="form-control" placeholder="Digite sua profissão" />
        </div>

        <button class="save-button" @click="saveEditedProfile">Salvar Alterações</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProfile',
  data() {
    return {
      coverPhoto: 'https://example.com/cover-photo.jpg', // Replace with actual URL
      avatar: 'https://example.com/avatar.jpg', // Replace with actual URL
      userName: '',
      userProfile: '',
      contactInfo: '',
      location: '',
      certifications: '',
      birthDate: '',
      profession: '',
      isSeller: false,
      isLoading: false, // Flag for loading state
      showEditModal: false,
      editableLocation: '',
      editableCertifications: '',
      editableBirthDate: '',
      editableProfession: '',
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const user = JSON.parse(localStorage.getItem('user')); // Simulando a recuperação de dados do usuário logado
      if (user) {
        this.userName = user.name || 'Nome não disponível';
        this.userProfile = user.profile || 'Perfil não disponível';
        this.contactInfo = user.email || 'Email não disponível';
        this.location = user.location || '';
        this.certifications = user.certifications || '';
        this.birthDate = user.birthDate || '';
        this.profession = user.profession || '';
        this.isSeller = user.isSeller || false;
      }
    },
    viewReviews() {
      console.log('Ver Avaliações clicado');
      // Implement your view reviews logic here
    },
    openEditModal() {
      this.editableLocation = this.location;
      this.editableCertifications = this.certifications;
      this.editableBirthDate = this.birthDate;
      this.editableProfession = this.profession;
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    saveEditedProfile() {
      this.location = this.editableLocation;
      this.certifications = this.editableCertifications;
      this.birthDate = this.editableBirthDate;
      this.profession = this.editableProfession;
      this.closeEditModal();
      this.saveProfile(); // Atualiza o localStorage com as novas informações
    },
    saveProfile() {
      const updatedUser = {
        name: this.userName,
        profile: this.userProfile,
        email: this.contactInfo,
        location: this.location,
        certifications: this.certifications,
        birthDate: this.birthDate,
        profession: this.profession,
        isSeller: this.isSeller,
      };
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Atualiza os dados no localStorage
      console.log('Perfil atualizado com sucesso!');
    },
    logout() {
      this.isLoading = true; // Set loading state
      
      // Simulação de logout - implementar a lógica real de logout aqui
      localStorage.removeItem('user'); // Remover token de autenticação
      this.$emit('user-logout'); // Emitir evento para informar o logout
      
      // Após o logout, redirecionar para a página de login
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push('/login'); // Redireciona para a tela de login
      }, 1000);
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

.user-profile {
  font-weight: 600;
  color: #444;
}

.contact-info {
  color: #666;
  font-size: 14px;
  margin: 10px 0;
}

.toggle-label {
  display: inline-block;
  margin-top: 15px;
}

.form-group {
  margin: 15px 0;
}

.button-group {
  display: flex;
  flex-direction: column; /* Organiza os botões em coluna */
  margin-top: 20px;
  gap: 10px; /* Espaçamento entre os botões */
}

.action-button, .edit-button, .logout-button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button {
  background-color: #007bff; /* Cor para o botão de ver avaliações */
  color: white;
}

.action-button:hover {
  background-color: #0056b3;
}

.edit-button {
  background-color: #28a745; /* Cor para o botão de editar */
  color: white;
}

.edit-button:hover {
  background-color: #218838;
}

.logout-button {
  background-color: #ff4757; /* Cor para o botão de logout */
  color: white;
}

.logout-button:hover {
  background-color: #e84118;
}

.loading-indicator {
  margin-top: 20px;
  color: #999;
  font-style: italic;
}

/* Estilo do Modal */
.modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.save-button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}
</style>
