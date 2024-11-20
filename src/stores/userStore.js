import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(userData) {
      this.user = userData;
      this.isAuthenticated = false;
      localStorage.setItem('user', JSON.stringify(userData));
    },
    prepUser(userData){
      this.user = userData;
      this.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(userData));
    }
    ,
    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('user');
    },
    checkAuth() {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
        this.isAuthenticated = true;
      } else {
        this.user = null;
        this.isAuthenticated = false;
      }
    },
  },
});
