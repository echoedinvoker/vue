<template>
  <button @click="login" v-if="!authenticated">Login</button>
  <button @click="logout" v-if="authenticated">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['authenticated']),
  },
};
</script>
