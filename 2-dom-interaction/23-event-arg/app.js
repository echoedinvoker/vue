const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      // this.counter = this.counter + 1;
      // this.counter = this.counter + 5;
      this.counter = this.counter + num;
    },
  },
});

app.mount("#events");
