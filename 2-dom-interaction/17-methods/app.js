const app = Vue.createApp({
  data: function () {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org/",
    };
  },

  outputStr() {
    return "I am outside of methods!";
  },

  methods: {
    randomGoal() {
      const rand = Math.random();
      if (rand < 0.5) {
        return "Newbie Goal...";
      } else {
        return "Master Goal!";
      }
    },
  },
});

app.mount("#user-goal");
