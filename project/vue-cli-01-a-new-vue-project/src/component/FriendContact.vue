<template>
  <li>
    <p><strong>Name:</strong> {{ friend.name }}</p>
    <button @click="toggleDetail">
      {{ detailAreVisible ? "Hide" : "Show" }} Detail
    </button>
    <ul v-if="detailAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "1234 567 890",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetail() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
};
</script>
