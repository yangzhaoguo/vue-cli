import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login';
import Train from '@/views/train';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/train',
      name: 'train',
      component: Train
    }
  ]
});
