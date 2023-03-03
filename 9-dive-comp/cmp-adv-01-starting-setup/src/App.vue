<template>
  <div>
    <TheHeader />
    <button @click="setSelectComponent('active-course')">active-course</button>
    <button @click="setSelectComponent('manage-course')">manage-course</button>
    <keep-alive>
      <component :is="selectComponent"></component>
    </keep-alive>
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
