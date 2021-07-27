import { ActionContext, Module } from 'vuex';

declare interface State {
  userInfo: Record<string, unknown>;
}

enum MUTATIONS {
  SETUSERINFO = 'SETUSERINFO'
}

const User: Module<any, any> = {
  namespaced: true,
  state: {
    userInfo: {}
  },
  getters: {},
  mutations: {
    [MUTATIONS.SETUSERINFO](state: State, data: Record<string, unknown>) {
      state.userInfo = data;
    }
  },
  actions: {
    getUserInfo({ commit }: ActionContext<any, any>, params: Record<string, unknown>) {
      commit(MUTATIONS.SETUSERINFO, params);
    }
  }
};

export default User;
