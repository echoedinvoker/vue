import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    finalCounter(state) {
      // return state.counter * 3;
      return state.counter * 4;
    },
    rangeCounter(_, getters) {
      // const finalCounter = state.counter * 3;
      // const finalCounter = state.counter * 4;
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
});

import App from './App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
