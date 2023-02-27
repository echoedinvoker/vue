const app = Vue.createApp({
  data() {
    return {
      input: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.input);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
