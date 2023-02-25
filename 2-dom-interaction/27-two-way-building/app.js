const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: "",
      confirmName: "",
    };
  },
  methods: {
    setConfirmName() {
      this.confirmName = this.yourName;
    },
    setName(event) {
      this.yourName = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#events");
