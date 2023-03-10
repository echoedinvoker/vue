<template>
  <button @click="addTen">Add 10</button>
</template>

<script>
export default {
  methods: {
    addTen() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.dispatch('increase', { value: 10 });
    },
  },
};
</script>
