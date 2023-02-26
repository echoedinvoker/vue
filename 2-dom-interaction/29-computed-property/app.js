const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: "",
      confirmName: "",
    };
  },
  computed: {
    fullname() {
      console.log("Running again...");
      return this.yourName ? this.yourName + " " + "Chang" : "";
    },
  },
  methods: {
    resetName() {
      this.yourName = "";
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
