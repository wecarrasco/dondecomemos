import Vue from 'vue'
import App from './App.vue'
//import Home from './components/home.vue'
import Dashboard from './components/dashboard.vue'
import perfilRestaurante from './components/perfilRestaurante.vue'

import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'
import Materials from 'vue-materials'

Vue.use(Materials)
Vue.use(VueResouce);
Vue.use(VueRouter);


Vue.http.options.credentials = true;
const router = new VueRouter({
  routes:[
    {
      name: 'LandingPage',
      path: '/',
      component: perfilRestaurante
    },
    {
      name: 'Dashboard',
      path: '/home',
      component: Dashboard
    },
    {
      name: 'PerfilRestaurante',
      path: '/restaurante',
      component: perfilRestaurante
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
