const app = Vue.createApp({
  data() {
    return {
      userClass: "",
      isVisible: true,
      color: "",
    };
  },
  computed: {
    dynamicClass() {
      return [
        this.userClass,
        { visible: this.isVisible, hidden: !this.isVisible },
      ];
    },
  },
  methods: {
    switchVisible() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
