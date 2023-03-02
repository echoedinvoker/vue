<template>
  <section>
    <h2><strong>Username:</strong> {{ username }}</h2>
    <h3><strong>Age:</strong> {{ age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: String,
    age: Number,
  },
};
</script>
