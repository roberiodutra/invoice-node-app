import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../layouts/Dashboard.vue';

function lazyLoad(view: string) {
  return import(`../pages/${view}.vue`);
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Dashboard,
    redirect: '/orders',
    children: [
      {
        path: 'orders',
        component: () => lazyLoad('Orders'),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
