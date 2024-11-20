// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../views/AppHome.vue';
import AppSearch from '../views/AppSearch.vue';
import AppMessages from '../views/AppMessages.vue';
import AppProjects from '../views/AppProjects.vue';
import AppProfile from '../views/AppProfile.vue';
import CategoryTechnicians from '../views/CategoryTechnicians.vue';
import TechnicianProfile from '../views/TechnicianProfile.vue';
import ChatWithTechnician from '../views/ChatWithTechnician.vue';
import AllCategories from '@/views/AllCategories.vue';
import AppLogin from '../views/AppLogin.vue';
import AppRegister from '../views/AppRegister.vue';
import JobDetail from '@/components/JobDetail.vue';
import { useUserStore } from '../stores/userStore';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  {
    path: '/search',
    name: 'Search',
    component: AppSearch
  },
  {
    path: '/login',
    name: 'Login',
    component: AppLogin,
  },
  {
    path: '/register',
    name: 'Register',
    component: AppRegister,
  },
  {
    path: '/messages',
    name: 'Messages',
    component: AppMessages
  },
  {
    path: '/projects',
    name: 'Projects',
    component: AppProjects
  },
  {
    path: '/profile',
    name: 'Profile',
    component: AppProfile
  },
  {
    path: '/category/:category',
    name: 'CategoryTechnicians',
    component: CategoryTechnicians,
    props: true  // This allows passing the category as a prop
  },
  {
    path: '/technician/:id',
    name: 'TechnicianProfile',
    component: TechnicianProfile,
    props: true
  },
  {
    path: '/chat/:id',
    name: 'ChatWithTechnician',
    component: ChatWithTechnician,
    props: true
  },
  {
    path: '/categorias',
    name: 'AllCategories',
    component: AllCategories,
    props: true
  },
    {
      path: '/job/:id', // A rota pode ser ajustada de acordo com suas necessidades
      name: 'JobDetail',
      component: JobDetail,
      props: true
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  userStore.checkAuth(); // Verifica a autenticação

  // Lista de rotas que não precisam de autenticação
  const publicPages = ['/login', '/register', '/'];

  // Se a rota não está na lista de páginas públicas e o usuário não está autenticado, redirecione para o login
  if (!publicPages.includes(to.path) && !userStore.isAuthenticated) {
    next('/login');  // Redireciona para o login se não autenticado
  } else {
    next();  // Continua para a rota desejada
  }
});


export default router;
