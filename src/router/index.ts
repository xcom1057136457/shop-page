import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
const ModuleFiles = import.meta.globEager('./modules/*.ts');
const ModuleRoutes: any[] = [];

for (const key in ModuleFiles) {
  ModuleRoutes.push(...ModuleFiles[key].default);
}

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/:catchAll*',
    name: 'error',
    component: () => import('/@/views/error/404.vue'),
    meta: {
      title: '404'
    }
  },
  ...ModuleRoutes
];

const router = createRouter({
  routes: constantRoutes,
  history: createWebHashHistory()
});

export default router;
