<template>
  <form @submit.prevent="addFriend">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="phone" />
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="email" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addFriend() {
      this.$emit("add-friend", this.name, this.phone, this.email);
    },
  },
};
</script>
