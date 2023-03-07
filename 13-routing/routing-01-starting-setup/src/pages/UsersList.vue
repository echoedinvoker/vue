<template>
  <button @click="saveForm">Save Form</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      formSaved: false,
    };
  },
  methods: {
    saveForm() {
      this.formSaved = true;
    },
  },
  // unmounted() {},
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    console.log(to, from);
    if (this.formSaved) {
      next();
    } else {
      const userConfirm = confirm("You haven't saved, sure you want to leave?");
      next(userConfirm);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
