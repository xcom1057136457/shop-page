import { RouteRecordRaw } from 'vue-router';
import Layout from '/@/layout/index.vue';

const Home: RouteRecordRaw[] = [
  {
    path: '',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'Home',
        component: () => import('/@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/account',
        name: 'Account',
        component: () => import('/@/views/account/index.vue'),
        meta: {
          title: '账号'
        }
      }
    ]
  }
];

export default Home;
