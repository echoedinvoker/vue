<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <!-- <h2>{{ userAge }}</h2> -->
    <!-- <h2>{{ user.userName }}</h2> -->
    <h2>{{ user.userAge }}</h2>
  </section>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    const userName = ref('Maximilian');
    // const userAge = ref(31);
    // const user = ref({
    const user = reactive({
      // userName: 'Maximilian',
      userAge: 31,
    });

    setTimeout(() => {
      userName.value = 'Max';
      // userAge.value = 32;
      // user.value.userName = 'Max';
      // user.value.userAge = 32;
      // user.userName = 'Max';
      user.userAge = 32;
    }, 2000);

    console.log(userName);
    console.log(user);

    return {
      userName,
      // userName: user.value.userName,
      // userAge: user.value.userAge,
      user,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
