import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([
    { id: 1, name: 'Projeto Mudjipa', status: 'ativo', createdAt: '2024-08-12' },
    { id: 2, name: 'Marketing Digital', status: 'concluido', createdAt: '2023-12-05' },
    { id: 3, name: 'Reparação de Eletrodomésticos', status: 'pendente', createdAt: '2024-02-15' },
    // Mais projetos...
  ]);

  const searchQuery = ref('');
  const selectedStatus = ref('');

  const filteredProjects = computed(() => {
    return projects.value.filter(project => {
      const matchesStatus = selectedStatus.value === '' || project.status === selectedStatus.value;
      const matchesQuery = project.name.toLowerCase().includes(searchQuery.value.toLowerCase());
      return matchesStatus && matchesQuery;
    });
  });

  const deleteProject = (id) => {
    if (confirm('Tem certeza que deseja remover este projeto?')) {
      projects.value = projects.value.filter(project => project.id !== id);
    }
  };

  const addProject = () => {
    // Implementar a lógica para adicionar novo projeto
  };

  return {
    projects,
    searchQuery,
    selectedStatus,
    filteredProjects,
    deleteProject,
    addProject,
  };
});
