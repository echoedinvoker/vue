<template>
  <the-header>Remember Me</the-header>
  <!-- <store-resources :resources="storedResources"></store-resources> -->
  <the-resources :resources="storedResources"></the-resources>
</template>

<script>
// import StoreResources from './components/learning-resource/StoreResources.vue';
import TheResources from './components/learning-resource/TheResources.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    // StoreResources,
    TheResources,
    TheHeader,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
