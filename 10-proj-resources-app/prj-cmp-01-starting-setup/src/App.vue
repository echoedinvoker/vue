<template>
  <the-header>Remember Me</the-header>
  <the-resources></the-resources>
</template>

<script>
import TheResources from './components/learning-resource/TheResources.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheResources,
    TheHeader,
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
