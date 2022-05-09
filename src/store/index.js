import { createStore } from "vuex";

export default createStore({
  state: {
    userinfo: {
      username: "张三",
      age: 19,
    },
  },
  getters: {
    username: (state) => {
      return state.userinfo.username;
    },
  },
  mutations: {
    changeUsername(state, name) {
      state.userinfo.username = name;
    },
    increment(state, n = 1) {
      state.userinfo.age += n;
    },
  },
  actions: {
    asyncIncrement(context) {
      context.commit("increment", 3);
    },
    async actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("increment", 10);
          resolve();
        }, 1000);
      });
    },
  },
  modules: {},
});
