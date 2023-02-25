const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: "",
    };
  },
  methods: {
    setName(event) {
      this.yourName = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#events");
