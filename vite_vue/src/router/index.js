import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/app/search',
    name: 'search',
    component: () => import('../views/search_result.vue')
  },
  {
    path: '/app/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/app/this-project',
    name: 'this_project',
    component: () => import('../views/this_project.vue')
  },
  {
    path: '/app/admin',
    name: 'admin',
    component: () => import('../views/admin.vue')
  },
  {
    path: '/app/zivotopis',
    name: 'zivotopis',
    component: () => import('../views/zivotopis.vue')
  },
  {
    path: '/app/technologie',
    name: 'technologie',
    component: () => import('../views/technologie.vue')
  }
];

const router = createRouter({
  // base: process.env.NODE_ENV === 'production' ? '/app/' : '/app/',
  history: createWebHistory(),
  routes
});

export default router;
