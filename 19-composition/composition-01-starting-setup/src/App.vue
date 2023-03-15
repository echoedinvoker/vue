<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <h2>{{ user.userAge }}</h2>
    <button @click="addAge">add age</button>
    <!-- <input type="text" placeholder="firstName" @input="setFirstName" /> -->
    <input type="text" placeholder="firstName" v-model="firstName" />
    <input type="text" placeholder="lastName" v-model="lastName" />
  </section>
</template>

<script>
import { reactive } from 'vue';
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const user = reactive({
      userAge: 31,
    });

    const firstName = ref('');
    const lastName = ref('');

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    // watch: {
    //   fullName(val){
    //     console.log(val);
    //   }
    // }
    // watch(fullName, function (oldName, newName) {
    watch([firstName, lastName], function (oldNames, newNames) {
      console.log(`Old Name: ${oldNames[0]} ${oldNames[1]}`);
      console.log(`New Name: ${newNames[0]} ${newNames[1]}`);
    });

    function addAge() {
      user.userAge += 1;
    }

    return {
      user,
      addAge,
      firstName,
      lastName,
      fullName,
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
