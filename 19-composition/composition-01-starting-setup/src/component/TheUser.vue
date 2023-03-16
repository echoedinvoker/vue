<template>
  <h2>{{ userName }}</h2>
  <h3>{{ userAge.userAge }}</h3>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  // props: ['firstName', 'lastName', 'userAge'],
  props: ['firstName', 'lastName'],
  setup(props) {
    const userName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    const userAge = inject('age');

    return {
      userName,
      userAge,
    };
  },
};
</script>
