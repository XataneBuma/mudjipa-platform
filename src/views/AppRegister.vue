<template>
  <div class="register-container">
    <div class="register-card">
      <h2 class="title">Registrar-se</h2>
      <form @submit.prevent="register" class="form">
        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            v-model="name"
            id="name"
            required
            placeholder="Digite seu nome"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="email"
            id="email"
            required
            placeholder="Digite seu email"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <input
            type="password"
            v-model="password"
            id="password"
            required
            placeholder="Digite sua senha"
            class="form-control"
            @focus="clearError"
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            v-model="confirmPassword"
            id="confirmPassword"
            required
            placeholder="Confirme sua senha"
            class="form-control"
            @focus="clearError"
          />
        </div>

        <button type="submit" class="btn btn-primary">Registrar</button>

        <p class="message" v-if="errorMessage">{{ errorMessage }}</p>
      </form>

      <div class="social-login">
        <p>Ou registre-se com:</p>
        <div class="social-icons">
          <i class="fab fa-github" @click="registerWith('github')" title="Registrar com GitHub"></i>
          <i class="fab fa-google" @click="registerWith('google')" title="Registrar com Google"></i>
          <i class="fab fa-linkedin" @click="registerWith('linkedin')" title="Registrar com LinkedIn"></i>
          <i class="fab fa-facebook" @click="registerWith('facebook')" title="Registrar com Facebook"></i>
        </div>
      </div>

      <div class="link-container">
        <router-link to="/login" class="register-link">Já tem uma conta? Faça login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore';

export default {
  name: 'AppRegister',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'As senhas não coincidem.';
        return;
      }
      const userStore = useUserStore();
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      userStore.setUser(userData);
      this.$router.push('/login');
    },
    clearError() {
      this.errorMessage = '';
    },
    registerWith(provider) {
      console.log(`Registro com ${provider}`);
      // Implementar lógica de registro social
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f4f7;
  font-family: 'Poppins', sans-serif;
}

.register-card {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

input.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}

input.form-control:focus {
  border-color: #007bff;
  box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.1);
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  box-shadow: 0px 4px 15px rgba(0, 123, 255, 0.2);
}

.message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.link-container {
  text-align: center;
  margin-top: 15px;
}

.register-link {
  color: #007bff;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

.social-login {
  text-align: center;
  margin-top: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icons i {
  font-size: 28px;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;
}

.social-icons i:hover {
  color: #007bff;
}
</style>
