import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/this-project',
    name: 'this_project',
    component: () => import('../views/this_project.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin.vue')
  },
  {
    path: '/zivotopis',
    name: 'zivotopis',
    component: () => import('../views/zivotopis.vue')
  },
  {
    path: '/sbirka-znalosti',
    name: 'sbirka_znalosti',
    component: () => import('../views/sbirka_znalosti.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
