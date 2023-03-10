<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <the-button></the-button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import TheButton from './components/TheButton.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    TheButton,
  },
  methods: {
    addOne() {
      // this.$store.state.counter += 1;
      this.$store.commit('increment');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
