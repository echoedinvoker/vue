<template>
  <h3>{{ counter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('numbers', {
      counter: 'finalCounter',
    }),
  },
};
</script>
