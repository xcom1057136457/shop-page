import { createStore } from 'vuex';

const ModuleFiles = import.meta.globEager('./modules/*.ts');
const modules: any = {};

for (const key in ModuleFiles) {
  let moduleName: any = key.split('/').pop();
  moduleName = moduleName?.split('.').shift();
  modules[moduleName] = ModuleFiles[key].default;
}

export default createStore({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules
});
