const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result() {
      const timer = setInterval(() => {
        this.result = 0;
      }, 5000);
    },
  },
  computed: {
    message() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result > 37) {
        return "Too much!";
      } else {
        return "";
      }
    },
  },
  methods: {
    add(num) {
      this.result += num;
    },
  },
});

app.mount("#assignment");
