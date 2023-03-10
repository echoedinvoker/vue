import { createApp } from 'vue';
import { createStore } from 'vuex';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      console.log(state);
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 4;
    },
    rangeCounter(_, getters, rootState, rootGetters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      // counter: 0,
      authenticated: false,
    };
  },
  mutations: {
    // increment(state) {
    //   state.counter++;
    // },
    // increase(state, payload) {
    //   state.counter = state.counter + payload.value;
    // },
    setAuth(state, payload) {
      state.authenticated = payload.isAuth;
    },
  },
  actions: {
    // increment(context) {
    //   setTimeout(function () {
    //     context.commit('increment');
    //   }, 2000);
    // },
    // increase(context, payload) {
    //   console.log(context);
    //   context.commit('increase', payload);
    // },
    login(context) {
      // context.commit('login');
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    authenticated(state) {
      return state.authenticated;
    },
    // finalCounter(state) {
    //   return state.counter * 4;
    // },
    // rangeCounter(_, getters) {
    //   const finalCounter = getters.finalCounter;
    //   if (finalCounter < 0) {
    //     return 0;
    //   }
    //   if (finalCounter > 100) {
    //     return 100;
    //   }
    //   return finalCounter;
    // },
  },
});

import App from './App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
