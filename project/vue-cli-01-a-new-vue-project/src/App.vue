<template>
  <h3>Friends</h3>
  <ul>
    <li v-for="friend in friends" :key="friend.id">
      <p><strong>Name:</strong> {{ friend.name }}</p>
      <p><strong>Phone:</strong> {{ friend.phone }}</p>
      <p><strong>Email:</strong> {{ friend.email }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "1234 567 890",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0978 567 890",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>
