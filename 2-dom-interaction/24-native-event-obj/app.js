const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: "",
    };
  },
  methods: {
    // setName(event) {
    setName(event, lastName) {
      this.yourName = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#events");
