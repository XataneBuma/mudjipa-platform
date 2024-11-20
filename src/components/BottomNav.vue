<template>
    <div class="bottom-nav">
        <ul>
            <li>
                <router-link to="/" class="nav-item" >
                    <i class="fa fa-home"></i>
                    <p>Home</p>
                </router-link>
            </li>
            <li v-if="!isAuthenticated">
                <router-link to="/login" class="nav-item">
                    <i class="fa fa-sign-in-alt"></i>
                    <p>Login</p>
                </router-link>
            </li>
            <li v-if="!isAuthenticated">
                <router-link to="/register" class="nav-item">
                    <i class="fa fa-user-plus"></i>
                    <p>Registrar-se</p>
                </router-link>
            </li>
            <li v-if="isAuthenticated">
                <router-link to="/search" class="nav-item">
                    <i class="fa fa-search"></i>
                    <p>Procurar</p>
                </router-link>
            </li>
            <li v-if="isAuthenticated">
                <router-link to="/messages" class="nav-item">
                    <i class="fa fa-envelope"></i>
                    <p>Mensagens</p>
                </router-link>
            </li>
            <li v-if="isAuthenticated">
                <router-link to="/projects" class="nav-item">
                    <i class="fa fa-briefcase"></i>
                    <p>Meus Projetos</p>
                </router-link>
            </li>
            <li v-if="isAuthenticated">
                <router-link to="/profile" class="nav-item">
                    <i class="fa fa-user"></i>
                    <p>Perfil</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useUserStore } from '../stores/userStore';

export default {
    name: 'BottomNav',
    setup() {
        const userStore = useUserStore();
        const isAuthenticated = computed(() => userStore.user !== null);

        return { isAuthenticated };
    }
    
    
}
</script>

<style scoped>
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.bottom-nav ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 10px 0;
    list-style-type: none;
}

.nav-item {
    display: flex;
    flex-direction: column; /* Centraliza ícone e texto */
    align-items: center; /* Centraliza horizontalmente */
    text-decoration: none;
    color: #333;
    font-size: 14px;
    text-align: center; /* Centraliza o texto */
}

.nav-item.router-link-active {
    color: #6200ea; /* Cor do link ativo */
}

.nav-item.active {
    color: #6200ea;
}

.nav-item:hover {
    color: #6200ea;
}

.nav-item i {
    margin-bottom: 5px; /* Adiciona espaço entre o ícone e o texto */
}
</style>
