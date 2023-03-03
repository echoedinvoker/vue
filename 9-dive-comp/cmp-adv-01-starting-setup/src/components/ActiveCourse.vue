<template>
  <div>
    <h2>Active Course</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input Invalid!</h2>
        <p>You should input a character at least...</p>
      </error-alert>
    </teleport>
  </div>
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
        this.inputIsInvalid = true;
      }
    },
  },
};
</script>
