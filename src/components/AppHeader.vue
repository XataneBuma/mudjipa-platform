<template>
  <div class="header">
    <p>Olá, Antonio 👋</p>
    <h1>Descubra as Oportunidades Perfeitas para Você!</h1>
    <div class="search-bar">
      <input type="text" placeholder="Busque um Job" />
      <button><i class="fa fa-search"></i></button>
    </div>
    <div class="notification-wrapper" @click="toggleNotifications">
      <button class="circle-button">
        <i class="fa fa-bell"></i>
        <span v-if="unreadCount" class="notification-badge">{{ unreadCount }}</span>
      </button>
      <div v-if="showNotifications" class="notifications">
        <p>Você tem {{ unreadCount }} novas notificações!</p>
        <!-- Adicione mais conteúdo de notificação aqui -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      showNotifications: false,
      unreadCount: 3 // Exemplo de contagem de notificações
    };
  },
  methods: {
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #f0e5d4; /* Cor suave para um visual mais moderno */
  color: #3d3d3d; /* Tom neutro */
  padding: 30px;
  border-radius: 12px; /* Bordas mais arredondadas */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

.header:hover {
  transform: translateY(-2px);
}

h1 {
  font-size: 28px; /* Tamanho da fonte ajustado */
  margin: 10px 0; /* Espaçamento */
}

.search-bar {
  display: flex;
  margin: 20px 0;
}

.search-bar input {
  flex: 1;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid #ddd; /* Borda sutil */
  transition: border-color 0.3s, box-shadow 0.3s;
  font-size: 16px;
}

.search-bar input:focus {
  border-color: #6a8e2e; /* Cor de destaque ao focar */
  outline: none;
  box-shadow: 0 0 5px rgba(106, 142, 46, 0.5); /* Sombra ao focar */
}

.search-bar button {
  background-color: #6a8e2e; /* Cor do botão */
  border: none;
  color: white;
  padding: 14px 16px;
  border-radius: 6px;
  margin-left: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.search-bar button:hover {
  background-color: #5a7b2e; /* Escurecimento ao passar o mouse */
  transform: scale(1.05);
}

.notification-wrapper {
  position: relative;
  margin-left: 20px; /* Espaço para notificação */
}

.circle-button {
  background-color: #ffffff;
  border-radius: 50%;
  padding: 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.circle-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
}

.notification-badge {
  background-color: #ff4757;
  color: white;
  border-radius: 50%;
  padding: 3px 8px;
  margin-left: 6px;
  font-size: 0.9em; /* Tamanho do texto do badge */
}

.notifications {
  position: absolute;
  right: 0;
  top: 50px; /* Ajuste conforme necessário */
  background-color: white;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s;
  z-index: 10;
}
</style>
