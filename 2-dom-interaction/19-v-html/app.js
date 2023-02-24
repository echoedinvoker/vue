const app = Vue.createApp({
  data: function () {
    return {
      courseGoal1: "Finish the course and learn Vue!",
      courseGoal2: "<h1>Master Vue and buld amazing apps!<h1>",
      vueLink: "https://vuejs.org/",
    };
  },

  methods: {
    randomGoal() {
      const rand = Math.random();
      if (rand < 0.5) {
        return this.courseGoal1;
      } else {
        return this.courseGoal2;
      }
    },
  },
});

app.mount("#user-goal");
