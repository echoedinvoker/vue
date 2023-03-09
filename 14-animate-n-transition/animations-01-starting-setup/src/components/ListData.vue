<template>
  <ul>
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </ul>
  <input type="text" ref="enteredUser" />
  <button type="button" @click="inputUser">Input User</button>
</template>

<script>
export default {
  data() {
    return {
      users: ['Matt', 'Justin', 'Philip', 'Jocelyn'],
    };
  },
  methods: {
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
    inputUser() {
      if (this.$refs.enteredUser.value.trim()) {
        this.users.unshift(this.$refs.enteredUser.value);
        this.$refs.enteredUser.value = '';
      }
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
</style>
