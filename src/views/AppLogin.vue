<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="title">Login</h2>
      <p class="subtitle">Bem-vindo de volta! Sentimos sua falta.</p>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" id="email" type="email" class="form-control" required placeholder="Digite seu email" />
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <input v-model="password" id="password" type="password" class="form-control" required placeholder="Digite sua senha" />
        </div>

        <button type="submit" class="btn btn-primary" :disabled="loading">
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>
        <router-link to="/forgot-password" class="forgot-password-link">Esqueceu sua senha?</router-link>

        <div v-if="mensagem" class="alert alert-danger">{{ mensagem }}</div>
      </form>

      <div class="social-login">
        <p>Ou continue com:</p>
        <div class="social-icons">
          <i class="fab fa-github" @click="loginWith('github')" aria-label="Entrar com GitHub" title="Entrar com GitHub"></i>
          <i class="fab fa-google" @click="loginWith('google')" aria-label="Entrar com Google" title="Entrar com Google"></i>
          <i class="fab fa-facebook" @click="loginWith('facebook')" aria-label="Entrar com Facebook" title="Entrar com Facebook"></i>
        </div>
      </div>

      <router-link to="/register" class="register-link">Criar nova conta</router-link>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore';

export default {
  data() {
    return {
      email: '',
      password: '',
      mensagem: '',
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.mensagem = '';
      const userStore = useUserStore();

      try {
        const isAuthenticated = await userStore.login(this.email, this.password);
        if (isAuthenticated) {
          this.$router.push('/dashboard');
        } else {
          this.mensagem = 'Credenciais inválidas. Verifique seu email e senha.';
        }
      } catch (error) {
        this.mensagem = 'Erro ao tentar logar. Por favor, tente novamente mais tarde.';
      } finally {
        this.loading = false;
      }
    },
    loginWith(provider) {
      console.log(`Login com ${provider}`);
    }
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 0 15px;
}

.login-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

input.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

.btn-primary {
  width: 100%;
  padding: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.forgot-password-link {
  display: block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

.alert {
  margin-top: 15px;
  font-size: 14px;
  color: red;
  text-align: center;
}

.social-login {
  margin-top: 25px;
}

.social-login p {
  margin-bottom: 10px;
  color: #666;
  font-size: 14px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icons i {
  font-size: 28px;
  cursor: pointer;
  transition: color 0.3s;
}

.social-icons i:hover {
  color: #007bff;
}

.register-link {
  display: block;
  margin-top: 20px;
  text-align: center;
  color: #007bff;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
