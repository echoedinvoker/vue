<template>
  <li>
    <!-- <h2>{{ friendName }} {{ isFavorite === "1" ? "(Favorite)" : "" }}</h2> -->
    <h2>{{ friendName }} {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Set Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["friendName", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
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
    toggleFavorite() {
      // this.isFavorite = !this.isFavorite;
      if (this.friendIsFavorite === "0") {
        this.friendIsFavorite = "1";
      } else {
        this.friendIsFavorite = "0";
      }
    },
  },
};
</script>
