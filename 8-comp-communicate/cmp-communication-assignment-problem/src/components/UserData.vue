<template>
  <form @submit.prevent="addUser">
    <div>
      <label>Name:</label><br />
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Age:</label><br />
      <input type="text" v-model="age" />
    </div>
    <button>Add User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", this.name, this.age);
    },
  },
};
</script>
