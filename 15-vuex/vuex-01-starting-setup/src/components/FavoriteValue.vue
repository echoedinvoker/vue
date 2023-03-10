<template>
  <h3>{{ counter }}</h3>
  <h2>Do somthing...</h2>
</template>

<script>
export default {
  computed: {
    counter() {
      // return this.$store.state.counter;
      return this.$store.state.counter * 3;
    },
  },
};
</script>
