import { createApp } from 'vue';
import App from './App.vue';
import store from '/@/store/index';
import router from '/@/router/index';
import '/@/styles/index.scss';
import './permission';
import './styles/tailwind.css';
import * as element from './plugin/element-plus';

const app = createApp(App);

Object.keys(element.default).forEach((key: any) => {
  app.component(key, element.default[key]);
});

app.use(store).use(router).mount('#app');
