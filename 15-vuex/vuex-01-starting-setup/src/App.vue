<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 1</button>
    <the-button></the-button>
  </base-container>
</template>

<script>
import { mapActions } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import TheButton from './components/TheButton.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    TheButton,
    FavoriteValue,
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions({
      addOne: 'increment',
    }),
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
