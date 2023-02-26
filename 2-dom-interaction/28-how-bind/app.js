const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: "",
      confirmName: "",
    };
  },
  methods: {
    outputFullname() {
      console.log("Running again...");
      if (this.yourName) {
        return this.yourName + " " + "Chang";
      } else {
        return "";
      }
    },
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
