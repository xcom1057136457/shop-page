declare interface Getters {
  userInfo: unknown;
}

declare interface State {
  user?: User;
}

declare interface User {
  userInfo?: Record<string, unknown>;
}

const getters: Getters = {
  userInfo: (state: State) => state.user?.userInfo
};

export default getters;
