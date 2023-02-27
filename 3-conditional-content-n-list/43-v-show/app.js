const app = Vue.createApp({
  data() {
    return {
      input: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputd);
    },
  },
});

app.mount("#user-goals");
