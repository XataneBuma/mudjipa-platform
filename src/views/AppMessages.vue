<template>
  <div class="app-container">
    <nav class="nav-sidebar">
      <h2>Mensagens</h2>
      <div class="tabs">
        <button @click="setActiveTab('projeto')" :class="{ active: activeTab === 'projeto' }">Proj.</button>
        <button @click="setActiveTab('time')" :class="{ active: activeTab === 'time' }">Time</button>
        <button @click="setActiveTab('clientes')" :class="{ active: activeTab === 'clientes' }">Clientes</button>
        <button @click="setActiveTab('inbox')" :class="{ active: activeTab === 'inbox' }">Inbox</button>
        <button @click="setActiveTab('sent')" :class="{ active: activeTab === 'sent' }">Enviadas</button>
      </div>
    </nav>

    <div class="content-area">
      <h1>{{ activeTabLabel }}</h1>

      <div v-if="activeTab === 'clientes'" class="message-list">
        <div
          v-for="message in messages.clientes"
          :key="message.id"
          class="message-item"
          @click="selectMessage(message)"
          :class="{ selected: selectedMessage && selectedMessage.id === message.id, unread: !message.read }"
        >
          <div class="message-header">
            <span class="message-sender">{{ message.sender }}</span>
            <span class="message-date">{{ formatDate(message.date) }}</span>
          </div>
          <div class="message-content">{{ message.content }}</div>
        </div>
      </div>

      <div v-if="selectedMessage" class="reply-section">
        <h2>Responder a {{ selectedMessage.sender }}</h2>
        <textarea v-model="replyContent" placeholder="Digite sua resposta..."></textarea>
        <div class="reply-buttons">
          <button @click="sendReply">Enviar</button>
          <button @click="archiveMessage(selectedMessage.id)">Arquivar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMessages',
  data() {
    return {
      activeTab: 'clientes',
      messages: {
        projeto: [
          { id: 1, sender: 'Equipe X', content: 'Atualização de status do projeto A', read: false },
          { id: 2, sender: 'Equipe Y', content: 'Novo comentário no projeto B', read: true }
        ],
        time: [],
        clientes: [
          { id: 1, sender: 'Cliente A', content: 'Dúvidas sobre o progresso do projeto C', date: new Date(), read: false },
          { id: 2, sender: 'Cliente B', content: 'Pedido de alteração no projeto D', date: new Date(), read: true }
        ],
        inbox: [],
        sent: [],
      },
      selectedMessage: null,
      replyContent: ''
    };
  },
  computed: {
    activeTabLabel() {
      switch (this.activeTab) {
        case 'projeto':
          return 'Notificações de Projetos';
        case 'time':
          return 'Mensagens do Time';
        case 'clientes':
          return 'Mensagens de Clientes';
        case 'inbox':
          return 'Inbox';
        case 'sent':
          return 'Enviadas';
        default:
          return 'Mensagens';
      }
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
      this.selectedMessage = null;
      this.replyContent = '';
    },
    selectMessage(message) {
      this.selectedMessage = message;
      this.replyContent = '';
      message.read = true; // Marcar como lido ao selecionar
    },
    sendReply() {
      if (this.replyContent.trim()) {
        console.log(`Resposta enviada para ${this.selectedMessage.sender}: ${this.replyContent}`);
        this.replyContent = '';
        this.selectedMessage = null;
        alert('Resposta enviada com sucesso!');
      } else {
        alert('Por favor, digite uma resposta antes de enviar.');
      }
    },
    archiveMessage(id) {
      this.messages.clientes = this.messages.clientes.filter(msg => msg.id !== id);
      this.selectedMessage = null;
      alert('Mensagem arquivada com sucesso!');
    },
    formatDate(date) {
      return new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(date);
    }
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f4f8; /* Cor de fundo da aplicação */
}

.nav-sidebar {
  width: 100%;
  background-color: #f0e5d4; /* Cor de fundo do menu lateral */
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 12px; /* Bordas arredondadas */
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.tabs button {
  flex: 1 1 20%;
  padding: 10px;
  border: none;
  background-color: transparent;
  text-align: center;
  color: #3d3d3d; /* Cor do texto dos botões */
}

.tabs button.active {
  background-color: #6a8e2e; /* Cor do botão ativo */
  color: white;
}

.content-area {
  flex: 1;
  padding: 10px;
  overflow-y: auto; /* Scroll se o conteúdo for longo */
}

.message-list {
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
}

.message-item {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.message-item.selected {
  background-color: #d3e2ff; /* Cor do item selecionado */
}

.message-item.unread {
  font-weight: bold;
}

.message-header {
  display: flex;
  justify-content: space-between;
}

.reply-section textarea {
  width: 100%;
  height: 60px;
  border-radius: 6px; /* Bordas arredondadas para textarea */
  border: 1px solid #ddd;
  padding: 10px;
  transition: border-color 0.3s;
}

.reply-section textarea:focus {
  border-color: #6a8e2e; /* Cor ao focar */
}

.reply-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.reply-buttons button {
  flex: 1;
  margin-right: 5px;
  background-color: #6a8e2e; /* Cor dos botões */
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.reply-buttons button:hover {
  background-color: #5a7b2e; /* Escurecimento ao passar o mouse */
}

.reply-buttons button:last-child {
  margin-right: 0; /* Remove margin do último botão */
}
</style>
