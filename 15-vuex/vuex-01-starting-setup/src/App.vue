<template>
  <base-container title="Vuex">
    <!-- <h3>{{ counter }}</h3> -->
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  methods: {
    addOne() {
      // this.counter += 1;
      this.$store.state.counter += 1;
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
