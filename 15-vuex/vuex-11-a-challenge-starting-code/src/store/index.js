import { createStore } from 'vuex';
import products from './products';

const store = createStore({
  modules: {
    products,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    getLogStatus(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
