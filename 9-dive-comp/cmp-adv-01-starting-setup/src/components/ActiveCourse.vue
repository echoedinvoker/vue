<template>
  <h2>Active Course</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <error-alert v-if="inputIsInvalid">
    <h2>Input Invalid!</h2>
    <p>You should input a character at least...</p>
  </error-alert>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      if (!this.$refs.goal.value) {
        // alert("Input should not be empty");
        this.inputIsInvalid = true;
      }
    },
  },
};
</script>
