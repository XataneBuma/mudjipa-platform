<template>
  <div class="container">
    <button class="back-button" @click="goBack">← Voltar</button>

    <div class="project-list" v-if="filteredProjects.length">
      <h3>Servicos Disponíveis - Carpintaria</h3>
      <ul>
        <li v-for="project in filteredProjects" :key="project.id" @click="selectProject(project)">
          <div class="project-item">
            <span>{{ project.project }} - {{ project.contractor }}</span>
            <span class="location">{{ project.location }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="job-detail" v-if="selectedProject">
      <h2>{{ selectedProject.project }}</h2>
      <img :src="selectedProject.src" alt="Project" />
      <p><strong>Contratante:</strong> {{ selectedProject.contractor }}</p>
      <p><strong>Categoria:</strong> {{ selectedProject.category }}</p>
      <p><strong>Descrição:</strong> {{ selectedProject.description }}</p>
      <p><strong>Orçamento:</strong> {{ selectedProject.budget }}</p>
      <p><strong>Prazo:</strong> {{ selectedProject.deadline }}</p>
      <p><strong>Localização:</strong> {{ selectedProject.location }}</p>

      <div class="proposal-form">
        <h3>Enviar Proposta</h3>
        <label for="value">Valor Desejado:</label>
        <input type="number" v-model="proposalValue" placeholder="Digite o valor em MT" />

        <label for="description">Motivos da Proposta:</label>
        <textarea v-model="proposalDescription" placeholder="Descreva seus motivos aqui..."></textarea>

        <button @click="submitProposal">Enviar Proposta</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  data() {
    return {
      selectedProject: null, // Projeto selecionado
      proposalValue: '', // Valor da proposta
      proposalDescription: '', // Descrição da proposta
      projects: [
        { 
          id: 1, 
          contractor: 'Construtora XYZ', 
          project: 'Reforma de Escritório', 
          category: 'Carpintaria', 
          description: 'Reforma completa do escritório com foco em ergonomia.', 
          budget: '2000 MT', 
          deadline: '2024-11-30',
          location: 'Maputo, Mafala',
          src: require('@/assets/image4.jpeg')
        },
        { 
          id: 2, 
          contractor: 'Mauro Mapanda', 
          project: 'Restauracao de Movel', 
          category: 'Carpintaria', 
          description: 'Reparo de uma mesa.', 
          budget: '1500 MT', 
          deadline: '2024-12-15',
          location: 'Maputo, Chamanculo',
          src: require('@/assets/image5.jpeg')
        },
        { 
          id: 3, 
          contractor: 'Sergio Maplaca', 
          project: 'Criação Telas de madeira', 
          category: 'Carpintaria', 
          description: 'Criacao de Movel de Madeira.', 
          budget: '800 MT', 
          deadline: '2024-10-25',
          location: 'Maputo, Maxaquene',
          src: require('@/assets/image6.jpg')
        }
      ],
      filteredProjects: [] // Projetos filtrados
    };
  },
  methods: {
    goBack() {
      this.selectedProject = null; // Reseta o projeto selecionado
      this.filteredProjects = this.projects; // Exibe todos os projetos novamente
      this.$router.go(-1);
    },
    selectProject(project) {
      this.selectedProject = project; // Define o projeto selecionado
      this.proposalValue = ''; // Limpa o valor da proposta
      this.proposalDescription = ''; // Limpa a descrição da proposta
    },
    submitProposal() {
      console.log('Proposta enviada:', this.proposalValue, this.proposalDescription);
      alert('Proposta enviada com sucesso!');
      this.proposalValue = ''; // Limpa o campo após enviar
      this.proposalDescription = ''; // Limpa o campo após enviar
    }
  },
  created() {
    this.filteredProjects = this.projects; // Inicializa a lista de projetos filtrados
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.back-button {
  background: none;
  border: none;
  color: #007bff;
  font-size: 1.1em;
  cursor: pointer;
  margin-bottom: 20px;
}

.project-list {
  margin-top: 20px;
}

.project-list ul {
  list-style-type: none;
  padding: 0;
}

.project-list li {
  padding: 15px;
  border: 1px solid #e0e0e0;
  margin: 10px 0;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.project-list li:hover {
  background-color: #f0f0f0;
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.location {
  font-size: 0.9em;
  color: #888;
}

.job-detail {
  margin-top: 30px;
}

.proposal-form {
  margin-top: 20px;
}

.proposal-form label {
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
}

.proposal-form input,
.proposal-form textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.proposal-form button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.proposal-form button:hover {
  background-color: #0056b3;
}
</style>
