const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {},
});

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetail">
            Show Details
          </button>
          <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.mail }}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        mail: "manuel@localhost.com",
        detailAreVisible: true,
      },
    };
  },
  methods: {
    toggleDetail() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});

app.mount("#app");
