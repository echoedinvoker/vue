<template>
  <h3>{{ counter }}</h3>
  <h2>Do somthing...</h2>
</template>

<script>
export default {
  computed: {
    counter() {
      // return this.$store.getters.finalCounter;
      return this.$store.getters['numbers/finalCounter'];
    },
  },
};
</script>
