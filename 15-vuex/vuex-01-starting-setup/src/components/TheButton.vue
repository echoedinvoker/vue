<template>
  <!-- <button @click="addTen">Add 10</button> -->
  <button @click="addTen({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addTen() {
    //   this.$store.dispatch('increase', { value: 10 });
    // },
    ...mapActions({
      addTen: 'increase',
    }),
  },
};
</script>
