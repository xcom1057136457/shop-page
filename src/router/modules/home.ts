import { RouteRecordRaw } from 'vue-router';
import Layout from '/@/layout/index.vue';

const Home: RouteRecordRaw[] = [
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('/@/views/home/index.vue'),
        meta: {
          title: 'Home'
        }
      },
      {
        path: '/account',
        name: 'Account',
        component: () => import('/@/views/account/index.vue'),
        meta: {
          title: 'Account'
        }
      }
    ]
  }
];

export default Home;
