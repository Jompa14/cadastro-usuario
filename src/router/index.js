import Vue from 'vue';
import VueRouter from 'vue-router';
import CadastroUsuario from '../views/CadastroUsuario.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: CadastroUsuario,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
