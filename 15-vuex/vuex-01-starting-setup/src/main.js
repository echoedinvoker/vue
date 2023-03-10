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
});

import App from './App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
