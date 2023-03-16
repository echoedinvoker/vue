<template>
  <section class="container">
    <the-user
      :first-name="firstName"
      :last-name="lastName"
      v-if="life"
    ></the-user>
    <button @click="addAge">add age</button>
    <input type="text" placeholder="firstName" v-model="firstName" />
    <input type="text" placeholder="lastName" ref="lastNameInput" />
    <button @click="setLastName">Input Last Name</button>
    <button @click="kill">kill</button>
  </section>
</template>

<script>
import { reactive } from 'vue';
import { ref, computed, watch, provide } from 'vue';
import TheUser from './component/TheUser.vue';

export default {
  components: {
    TheUser,
  },

  setup() {
    const user = reactive({
      userAge: 31,
    });

    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const life = ref(true);

    const fullName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([firstName, lastName], function (oldNames, newNames) {
      console.log(`Old Name: ${oldNames[0]} ${oldNames[1]}`);
      console.log(`New Name: ${newNames[0]} ${newNames[1]}`);
    });

    provide('age', user);

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    function addAge() {
      user.userAge += 1;
      console.log(user.userAge);
    }

    function kill() {
      life.value = false;
    }

    return {
      addAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
      fullName,
      life,
      kill,
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
