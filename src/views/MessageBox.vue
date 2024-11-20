<template>
    <div class="message-box">
      <h1>Chat com Técnico: {{ technicianId }}</h1>
      <p>Aqui você pode conversar com o técnico selecionado.</p>
  
      <!-- Simulated message box -->
      <div class="chat-window">
        <div class="message">Técnico: Olá, como posso ajudar?</div>
        <div class="message user-message">Você: Preciso de ajuda com...</div>
      </div>
  
      <!-- Input for sending messages -->
      <div class="message-input">
        <input type="text" v-model="newMessage" placeholder="Escreva sua mensagem..." />
        <button @click="sendMessage">Enviar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        newMessage: ''
      };
    },
    computed: {
      technicianId() {
        return this.id;
      }
    },
    methods: {
      sendMessage() {
        // Handle message sending logic here
        console.log('Mensagem enviada:', this.newMessage);
        this.newMessage = ''; // Clear the input
      }
    }
  }
  </script>
  
  <style scoped>
  .message-box {
    padding: 20px;
  }
  
  .chat-window {
    margin-bottom: 20px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
  }
  
  .message {
    margin-bottom: 10px;
  }
  
  .user-message {
    text-align: right;
  }
  
  .message-input {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .message-input input {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .message-input button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .message-input button:hover {
    background-color: #0056b3;
  }
  </style>
  