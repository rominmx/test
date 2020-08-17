import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Field from '../views/Field.vue';
import AddOperation from '../components/AddOperation.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/field/:fieldId/:filter',
    name: 'field',
    component: Field,
    children: [
      { path: 'add', name: 'addOperation', component: AddOperation },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
