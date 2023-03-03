<template>
  <div>
    <TheHeader />
    <button @click="setSelectComponent('active-course')">active-course</button>
    <button @click="setSelectComponent('manage-course')">manage-course</button>
    <!-- <active-course v-if="selectComponent === 'active-course'"></active-course> -->
    <!-- <manage-course v-if="selectComponent === 'manage-course'"></manage-course> -->
    <component :is="selectComponent"></component>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveCourse from "./components/ActiveCourse.vue";
import ManageCourse from "./components/ManageCourse.vue";
export default {
  components: {
    TheHeader,
    ActiveCourse,
    ManageCourse,
  },
  data() {
    return {
      selectComponent: "active-course",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectComponent(component) {
      this.selectComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
