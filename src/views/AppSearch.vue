<template>
  <div class="search-page">
    <h2>Encontre Técnicos e Serviços</h2>

    <!-- Mensagem de Boas-Vindas -->
    <div class="welcome-message">
      <p>Descubra os melhores técnicos na sua região. Pesquise na barra ou explore as categorias abaixo!</p>
    </div>

    <!-- Barra de Pesquisa -->
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar por técnico ou serviço..."
        @keyup.enter="search"
        class="search-input"
      />
      <button @click="search" class="search-button">🔍</button>
    </div>

    <!-- Dicas de Busca -->
    <div class="search-tips">
      <h3>Dicas de Busca:</h3>
      <ul>
        <li>Use palavras-chave específicas.</li>
        <li>Filtre por categoria e localização.</li>
        <li>Ajuste o preço conforme seu orçamento.</li>
      </ul>
    </div>

    <!-- Filtros -->
    <div class="filters">
      <select v-model="selectedCategory" class="filter-select">
        <option value="">Todas as Categorias</option>
        <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
      </select>

      <select v-model="selectedLocation" class="filter-select">
        <option value="">Todas as Localizações</option>
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>

      <select v-model="selectedRating" class="filter-select">
        <option value="">Qualquer Avaliação</option>
        <option v-for="rating in ratings" :key="rating" :value="rating">{{ rating }} estrelas ou mais</option>
      </select>

      <div class="price-range">
        <input type="range" v-model="selectedPriceRange" min="0" max="10000" step="10" class="price-slider" />
        <span>Até MZN {{ selectedPriceRange }}</span>
      </div>
    </div>

    <!-- Resultados da Pesquisa -->
    <div class="results">
      <div v-if="filteredResults.length === 0" class="no-results">
        Nenhum resultado encontrado.
      </div>
      <div v-else>
        <div v-for="result in filteredResults" :key="result.id" class="result-item">
          <img :src="result.image" alt="Avatar do técnico" class="result-image" />
          <div class="result-info">
            <h3>{{ result.name }}</h3>
            <p>{{ result.category }}</p>
            <p><i class="fas fa-map-marker-alt"></i> {{ result.location }}</p>
            <p><i class="fas fa-star"></i> {{ result.rating }} ({{ result.reviewCount }} avaliações)</p>
            <p><i class="fas fa-dollar-sign"></i> MZN {{ result.price }}</p>
          </div>
          <button class="btn btn-primary" @click="viewDetails(result.id)">Ver Detalhes</button>
        </div>
      </div>
    </div>

    <!-- Técnicos Populares -->
    <div class="popular-technicians">
      <h3>Técnicos Populares</h3>
      <div class="popular-list">
        <div class="result-item" v-for="result in popularResults" :key="result.id">
          <img :src="result.image" alt="Avatar do técnico" class="result-image" />
          <div class="result-info">
            <h4>{{ result.name }}</h4>
            <p>{{ result.category }}</p>
            <p><i class="fas fa-map-marker-alt"></i> {{ result.location }}</p>
            <p><i class="fas fa-star"></i> {{ result.rating }} ({{ result.reviewCount }} avaliações)</p>
            <p><i class="fas fa-dollar-sign"></i> MZN {{ result.price }}</p>
            <button class="btn btn-primary" @click="viewDetails(result.id)">Ver Detalhes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image2 from '@/assets/image1.png';
import image3 from '@/assets/image2.png';
import image4 from '@/assets/image3.png';

export default {
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      selectedLocation: '',
      selectedRating: '',
      selectedPriceRange: 500,
      categories: [
        { id: 1, name: 'Pintura' },
        { id: 2, name: 'Serrelharia' },
        // Outras categorias...
      ],
      locations: ['Chamanculo', 'Malhangalene', 'Mafalala', 'Marracuene'],
      ratings: [1, 2, 3, 4, 5],
      results: [
        {
          id: 7,
          name: 'João Biscateiro',
          category: 'Pintura',
          location: 'Chamanculo',
          rating: 4.8,
          reviewCount: 23,
          price: 150,
          image: image2,
        },
      ],
      popularResults: [
        {
          id: 2,
          name: 'Maria Fiodental',
          category: 'Eletricista',
          location: 'Mafalala',
          rating: 4.5,
          reviewCount: 15,
          price: 200,
          image: image3,
        },
        {
          id: 8,
          name: 'Carlos Mapulango',
          category: 'Carpinteiro',
          location: 'Marracuene',
          rating: 4.9,
          reviewCount: 30,
          price: 180,
          image: image4,
        },
      ],
    };
  },
  computed: {
    filteredResults() {
      return this.results.filter(result => {
        const matchesCategory = this.selectedCategory === '' || result.category === this.selectedCategory;
        const matchesLocation = this.selectedLocation === '' || result.location === this.selectedLocation;
        const matchesRating = this.selectedRating === '' || result.rating >= this.selectedRating;
        const matchesPrice = result.price <= this.selectedPriceRange;
        const matchesQuery = result.name.toLowerCase().includes(this.searchQuery.toLowerCase());

        return matchesCategory && matchesLocation && matchesRating && matchesPrice && matchesQuery;
      });
    }
  },
  methods: {
    search() {
      // A lógica para realizar a pesquisa pode ser implementada aqui
    },
    viewDetails(technicianId) {
      this.$router.push({ name: 'TechnicianProfile', params: { id: technicianId } });
    }
  }
};
</script>

<style scoped>
.search-page {
  padding: 20px;
  background-color: #f0e5d4; /* Cor suave */
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #3d3d3d; /* Tom neutro */
  font-family: 'Arial', sans-serif;
}

.welcome-message {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.1em;
  color: #555; /* Tom neutro */
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  border: 1px solid #ddd; /* Borda sutil */
  border-radius: 6px;
  width: 300px;
  transition: border-color 0.3s;
}

.search-button {
  padding: 10px 15px;
  border: none;
  background-color: #6a8e2e; /* Cor do botão */
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 5px;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #5a7b2e; /* Escurecimento ao passar o mouse */
}

.search-tips {
  margin: 20px 0;
  background: #e3f2fd; /* Cor suave para dicas */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.search-tips h3 {
  margin: 0 0 10px;
}

.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.filter-select, .price-slider {
  padding: 10px;
  border: 1px solid #ddd; /* Borda sutil */
  border-radius: 6px;
  width: 100%;
  max-width: 180px;
  transition: border-color 0.3s;
}

.filter-select:focus, .price-slider:focus {
  border-color: #6a8e2e; /* Cor de destaque ao focar */
}

.price-range {
  display: flex;
  align-items: center;
}

.price-range span {
  margin-left: 10px;
  font-weight: bold;
}

.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-item {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.result-item:hover {
  transform: translateY(-2px);
}

.result-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  border: 2px solid #6a8e2e; /* Borda do avatar */
}

.result-info {
  flex-grow: 1;
}

.result-info h3 {
  margin: 0 0 5px;
  color: #6a8e2e; /* Cor do nome do técnico */
}

.result-info p {
  margin: 3px 0;
}

.btn-primary {
  background-color: #6a8e2e; /* Cor do botão */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #5a7b2e; /* Escurecimento ao passar o mouse */
}

.no-results {
  color: #888;
  font-style: italic;
  text-align: center;
}

.popular-technicians {
  margin-top: 30px;
}

.popular-technicians h3 {
  text-align: center;
  margin-bottom: 10px;
}

.popular-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px; /* Espaçamento entre os itens */
}

.popular-list .result-item {
  flex: 1 1 300px; /* Largura mínima de 300px */
  max-width: 100%; /* Para garantir que não exceda a largura total */
}
</style>
