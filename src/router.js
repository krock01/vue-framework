import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/layout';
import Home from './views/Home';
import Menu from '@/views/Menu';
import User from '@/views/User';

Vue.use(Router);
export const routes = {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            label: '首页',
            cache: true
          }
        },
        {
          path: 'user',
          name: 'user',
          component: User,
          meta: {
            label: '用户管理',
            cache: true
          }
        },
        {
          path: 'menu',
          name: 'menu',
          component: Menu,
          meta: {
            label: '菜单管理',
            cache: true
          }
        }
      ]
    }
    // {
    //  path: '/about',
    //  name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
};
export default new Router(routes);
