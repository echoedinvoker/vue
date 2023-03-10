<template>
  <!-- <button @click="addOne">Add 1</button> -->
  <button @click="addTen">Add 10</button>
</template>

<script>
export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increment');
    // },
    addTen() {
      this.$store.commit('increase', { value: 10 });
    },
  },
};
</script>
