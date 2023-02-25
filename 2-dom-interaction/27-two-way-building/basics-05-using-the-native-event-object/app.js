const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    resetName() {
      // document.querySelector("input").value = "";
      this.name = "";
    },
    setName(event, lastName) {
      // this.name = event.target.value + " " + lastName;
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
