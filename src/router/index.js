import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/login';
import List from '../views/list';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
});
