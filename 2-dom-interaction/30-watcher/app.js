const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: "",
      yourLastName: "",
      // fullname: "",
    };
  },
  watch: {
    // yourName(value) {
    //   this.fullname =
    //     value && this.yourLastName ? value + " " + this.yourLastName : "";
    // },
    // yourLastName(value) {
    //   this.fullname = this.yourName && value ? this.yourName + " " + value : "";
    // },
    counter(value) {
      // this.counter = value > 50 ? 0 : value;
      // if (value > 50) {
      //   setTimeout(() => {
      //     this.counter = 0;
      //   }, 2000);
      // }
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    fullname() {
      return (this.fullname =
        this.yourName && this.yourLastName
          ? this.yourName + " " + this.yourLastName
          : "");
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
