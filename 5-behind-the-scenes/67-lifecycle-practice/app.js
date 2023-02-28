const app = Vue.createApp({
  data() {
    return {
      message: "Vue is great!",
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userText.value;
      console.log(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 5000);
