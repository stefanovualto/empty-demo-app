import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';
import Settings from './views/Settings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/*',
      name: 'notfound',
      component: NotFound,
    },
  ],
});
