import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
const ModuleFiles = import.meta.globEager('./modules/*.ts');
const ModuleRoutes: any[] = [];

for (const key in ModuleFiles) {
  ModuleRoutes.push(...ModuleFiles[key].default);
}

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home/index'
  },
  ...ModuleRoutes
];

const router = createRouter({
  routes: constantRoutes,
  history: createWebHashHistory()
});

export default router;
