<template>
  <ul>
    <li :class="{ active: selectedOption === 'poor' }">
      <button type="button" @click="activateOption('poor')">Poor</button>
    </li>
    <li :class="{ active: selectedOption === 'average' }">
      <button type="button" @click="activateOption('average')">Average</button>
    </li>
    <li :class="{ active: selectedOption === 'great' }">
      <button type="button" @click="activateOption('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    activateOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}
.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
