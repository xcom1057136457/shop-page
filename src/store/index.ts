import { createStore } from 'vuex';
import getters from './getters';

const ModuleFiles = import.meta.globEager('./modules/*.ts');
const modules: any = {};

for (const key in ModuleFiles) {
  let moduleName: any = key.split('/').pop();
  moduleName = moduleName?.split('.').shift();
  modules[moduleName] = ModuleFiles[key].default;
}

const Getters: any = getters;

export default createStore({
  getters: Getters,
  modules
});
