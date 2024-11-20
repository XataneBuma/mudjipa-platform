<template>
  <div class="projects-page">
    <h2>Meus Projetos</h2>
    
    <!-- Barra de Pesquisa e Filtros -->
    <div class="filters">
      <input type="text" v-model="searchQuery" placeholder="Buscar..." @keyup.enter="search" class="search-input"/>
      
      <select v-model="selectedStatus" class="status-select">
        <option value="">Todos os Status</option>
        <option value="ativo">Ativo</option>
        <option value="concluido">Concluído</option>
        <option value="pendente">Pendente</option>
      </select>

      <button @click="search" class="search-button">Buscar</button>
    </div>

    <!-- Lista de Projetos -->
    <div v-if="filteredProjects.length === 0" class="no-projects">
      Nenhum projeto encontrado.
    </div>

    <div class="project-list">
      <div v-for="project in filteredProjects" :key="project.id" class="project-item">
        <div class="project-details">
          <h3>{{ project.name }}</h3>
          <p><i class="fas fa-calendar-alt"></i> Criado em: {{ project.createdAt }}</p>
          <p><i class="fas fa-calendar-check"></i> Término em: {{ project.deadline }}</p>
          <p><i class="fas fa-tasks"></i> Status: <span :class="statusClass(project.status)">{{ project.status }}</span></p>
          <p><i class="fas fa-clock"></i> Tempo Restante: {{ timeRemaining(project.deadline) }}</p>
        </div>
        <div class="project-actions">
          <button class="btn btn-primary" @click="viewDetails(project)">Ver</button>
          <button class="btn btn-edit" @click="editProject(project)">Editar</button>
          <button class="btn btn-danger" @click="deleteProject(project.id)">Remover</button>
        </div>
      </div>
    </div>

    <!-- Botão para Adicionar Novo Projeto -->
    <div class="new-project">
      <button @click="addProject">Novo Projeto</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedStatus: '',
      projects: [
        { id: 1, name: 'Projeto Mudjipa', status: 'ativo', createdAt: '2024-08-12', deadline: '2024-10-20' },
        { id: 2, name: 'Marketing Digital', status: 'concluido', createdAt: '2023-12-05', deadline: '2024-01-15' },
        { id: 3, name: 'Reparação de Eletrodomésticos', status: 'pendente', createdAt: '2024-02-15', deadline: '2024-03-01' },
        // Mais projetos...
      ],
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => {
        const matchesStatus = this.selectedStatus === '' || project.status === this.selectedStatus;
        const matchesQuery = project.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesStatus && matchesQuery;
      });
    }
  },
  methods: {
    search() {
      // Lógica para buscar projetos
    },
    viewDetails(project) {
      this.$router.push({ name: 'ProjectDetails', params: { id: project.id } });
    },
    editProject(project) {
      this.$router.push({ name: 'EditProject', params: { id: project.id } });
    },
    deleteProject(id) {
      if (confirm('Tem certeza que deseja remover este projeto?')) {
        this.projects = this.projects.filter(project => project.id !== id);
      }
    },
    addProject() {
      this.$router.push({ name: 'CreateProject' });
    },
    statusClass(status) {
      return {
        'status-active': status === 'ativo',
        'status-completed': status === 'concluido',
        'status-pending': status === 'pendente',
      };
    },
    timeRemaining(deadline) {
      const endDate = new Date(deadline);
      const now = new Date();
      const timeDiff = endDate - now;

      if (timeDiff <= 0) {
        return 'Projeto finalizado ou prazo expirado';
      }

      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      return `${days} dias e ${hours} horas restantes`;
    }
  }
}
</script>

<style scoped>
.projects-page {
  padding: 20px;
  background-color: #f0f4f8; /* Cor de fundo da página */
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.filters {
  display: flex;
  align-items: center;
  gap: 10px; /* Espaço entre os elementos */
}

.search-input {
  flex: 1; /* Ocupa o espaço restante */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.status-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  padding: 10px 20px;
  background-color: #007bff; /* Cor do botão de busca */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.project-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-item {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.project-details {
  margin-bottom: 10px;
}

.project-details h3 {
  margin: 0 0 5px;
}

.project-details p {
  margin: 3px 0;
}

.status-active {
  color: green;
}

.status-completed {
  color: blue;
}

.status-pending {
  color: orange;
}

.project-actions {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.project-actions button {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff; /* Cor do botão "Ver" */
  color: white;
}

.btn-edit {
  background-color: #ffc107; /* Cor do botão "Editar" */
  color: white;
}

.btn-danger {
  background-color: #dc3545; /* Cor do botão "Remover" */
  color: white;
}

.new-project {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.new-project button {
  padding: 10px;
  background-color: #28a745; /* Cor do botão "Novo Projeto" */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
  transition: background-color 0.3s;
}

.new-project button:hover {
  background-color: #218838; /* Cor do botão "Novo Projeto" ao passar o mouse */
}
</style>
