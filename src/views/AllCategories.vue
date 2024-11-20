<template>
  <div class="all-categories">
    <button class="back-button" @click="goBack">
      <i class="fa fa-arrow-left"></i>
    </button>
    <h2>Todas as Categorias</h2>
    <div class="category-list">
      <div v-for="category in categories" :key="category.id" class="category-item">
        <button class="category-button" @click="goToCategory(category.name)">
          <i :class="category.icon"></i>
          <div class="category-content">
            <p class="category-name">{{ category.name }}</p>
            <p class="category-description">{{ category.description }}</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: 'Pintura', icon: 'fa fa-paint-brush', description: 'Serviços de pintura para todos os tipos de ambientes.' },
        { id: 2, name: 'Marketing Digital', icon: 'fa fa-bullhorn', description: 'Estratégias de marketing para impulsionar seu negócio online.' },
        { id: 3, name: 'Marcenaria', icon: 'fa fa-gear', description: 'Trabalhos personalizados em madeira para sua casa.' },
        { id: 4, name: 'Carpintaria', icon: 'fa fa-hammer', description: 'Construção e reparação de estruturas de madeira.' },
        { id: 5, name: 'Eletro-Auto', icon: 'fa fa-car', description: 'Serviços elétricos para veículos automotores.' },
        { id: 6, name: 'Mecanica Auto', icon: 'fa fa-wrench', description: 'Manutenção e reparo de veículos automotivos.' },
        { id: 7, name: 'Canalizacao', icon: 'fa fa-pipeline', description: 'Instalação e reparo de sistemas de encanamento.' },
        { id: 8, name: 'Mecanica Industrial', icon: 'fa fa-industry', description: 'Serviços de manutenção em máquinas industriais.' }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Voltar para a página anterior
    },
    goToCategory(categoryName) {
      this.$router.push({ name: 'CategoryTechnicians', params: { category: categoryName } });
    }
  }
};
</script>

<style scoped>
.all-categories {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  background-color: #f0f4f8;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative; /* Para posicionar o botão de voltar */
}

.back-button {
  position: absolute; /* Posicionamento absoluto */
  top: 20px;
  left: 20px;
  background: transparent; /* Fundo transparente */
  border: none; /* Sem borda */
  cursor: pointer; /* Cursor de ponteiro */
  font-size: 24px; /* Tamanho do ícone */
  color: #007bff; /* Cor do ícone */
  transition: color 0.3s; /* Transição suave na cor */
}

.back-button:hover {
  color: #0056b3; /* Cor ao passar o mouse */
}

h2 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.category-list {
  display: flex;
  flex-direction: column; 
  gap: 10px; /* Espaçamento entre os itens */
}

.category-item {
  width: 100%; 
}

.category-button {
  background: #ffffff;
  border: none; 
  border-radius: 12px;
  padding: 20px;
  text-align: left; 
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: row; 
  align-items: center; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%; 
}

.category-button:hover {
  transform: translateY(-4px); 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
}

.category-button i {
  font-size: 32px; 
  color: #007bff; 
  margin-right: 10px; 
}

.category-content {
  display: flex;
  flex-direction: column; 
}

.category-name {
  margin: 0;
  font-weight: 600; 
  color: #444; 
}

.category-description {
  margin: 0;
  font-size: 14px; 
  color: #666; 
}
</style>
