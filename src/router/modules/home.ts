import { RouteRecordRaw } from 'vue-router';
import Layout from '/@/layout/index.vue';

const Home: RouteRecordRaw[] = [
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '/home/index',
        name: 'Home',
        component: () => import('/@/views/home/index.vue')
      }
    ]
  }
];

export default Home;
