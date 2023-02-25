const app = Vue.createApp({
  data() {
    return {
      input: "",
      confirmInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("hihihi");
    },
    userInput(event) {
      this.input = event.target.value;
    },
    setConfirmInput() {
      this.confirmInput = this.input;
    },
  },
});

app.mount("#assignment");
