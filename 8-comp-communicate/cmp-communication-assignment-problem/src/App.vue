<template>
  <active-user
    v-for="user in users"
    :key="user.username"
    :username="user.username"
    :age="user.age"
  ></active-user>
  <user-data @add-user="addUser"></user-data>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          username: "Matt",
          age: 30,
        },
        {
          username: "Marry",
          age: 27,
        },
      ],
    };
  },
  methods: {
    addUser(username, age) {
      this.users.push({
        username,
        age: Number(age),
      });
    },
  },
};
</script>
