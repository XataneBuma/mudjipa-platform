<template>
  <div class="categories">
    <h2>
      Categorias 
      <router-link to="/categorias" class="view-all">Ver Todos</router-link>
    </h2>
    <div class="category-list">
      <div v-for="(category, index) in categories" :key="category.id" class="category-item" :style="{ backgroundColor: category.color }" @click="goToCategory(category.name)" :class="{ 'blur': index >= 6 }">
        <i :class="category.icon"></i>
        <p>{{ category.name }}</p>
        <p class="category-description">{{ category.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCategories',
  data() {
    return {
      categories: [
        { id: 1, name: 'Pintura', icon: 'fa fa-paint-brush', color: '#ffccbc', description: 'Arte com tintas' },
        { id: 2, name: 'Marketing Digital', icon: 'fa fa-bullhorn', color: '#cfd8dc', description: 'Promoção online' },
        { id: 3, name: 'Marcenaria', icon: 'fa fa-gear', color: '#ffe0b2', description: 'Trabalho em madeira' },
        { id: 4, name: 'Carpintaria', icon: 'fa fa-hammer', color: '#b2dfdb', description: 'Construção em madeira' },
        { id: 5, name: 'Eletro-Auto', icon: 'fa fa-car', color: '#ffcc80', description: 'Manutenção automotiva' },
        { id: 6, name: 'Mecanica Auto', icon: 'fa fa-wrench', color: '#ffab91', description: 'Reparos de veículos' },
        { id: 7, name: 'Canalizacao', icon: 'fa fa-pipeline', color: '#80deea', description: 'Instalação de tubulações' },
        { id: 8, name: 'Mecanica Industrial', icon: 'fa fa-industry', color: '#d1c4e9', description: 'Máquinas industriais' }
      ]
    };
  },
  methods: {
    goToCategory(categoryName) {
      this.$router.push({ name: 'CategoryTechnicians', params: { category: categoryName } });
    }
  }
}
</script>

<style scoped>
.categories {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f3eb; /* Cor mais clara */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
}

.view-all {
  color: #007bff; /* Cor de link */
  text-decoration: none;
  transition: color 0.3s;
}

.view-all:hover {
  text-decoration: underline;
}

.category-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Cria um grid de 2 colunas */
  gap: 15px; /* Espaçamento entre os cards */
}

.category-item {
  height: auto; /* Permite que a altura seja flexível */
  cursor: pointer; /* Indica que o card é interativo */
  padding: 10px; /* Espaçamento interno */
  border-radius: 8px;
  text-align: center; /* Centraliza o texto */
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s; /* Efeitos de transição */
}

.category-item:hover {
  background-color: #e0e0e0; /* Cor ao passar o mouse */
  transform: scale(1.05); /* Efeito de aumento ao passar o mouse */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Sombra ao passar o mouse */
}

.category-item i {
  font-size: 28px;
  color: #c8b19b; /* Cor de acento */
  margin-bottom: 5px;
}

.category-item p {
  margin: 0;
  font-weight: 500;
  color: #555;
}

.category-description {
  font-size: 0.9em;
  color: #777; /* Cor mais clara para a descrição */
}

.blur {
  filter: blur(4px); /* Aplica um efeito de desfoque */
  opacity: 0.5; /* Opacidade para destacar o efeito */
}

@media (max-width: 600px) {
  .category-item {
    width: 90%; /* Cada card ocupa a largura total em telas pequenas */
  }

  .category-item:nth-child(n+7) {
    filter: blur(4px); /* Aplica desfoque nos cards da terceira linha */
    opacity: 0.5; /* Diminui a opacidade */
  }
}
</style>
