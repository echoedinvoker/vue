<template>
  <!-- <ul> -->
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <!-- </ul> -->
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
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-move {
  transition: transform 1s ease;
}
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
