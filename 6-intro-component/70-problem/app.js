const app = Vue.createApp({
  data() {
    return {
      //   detailAreVisible: true,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          mail: "manuel@localhost.com",
          detailAreVisible: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          mail: "julie@localhost.com",
          detailAreVisible: true,
        },
      ],
    };
  },
  methods: {
    toggleDetail() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

app.mount("#app");
