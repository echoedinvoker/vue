<template>
  <li>
    <!-- <h2>{{ friend.name }}</h2> -->
    <h2>{{ friendName }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        <!-- {{ friend.phone }} -->
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        <!-- {{ friend.email }} -->
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["friendName", "phoneNumber", "emailAddress"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
