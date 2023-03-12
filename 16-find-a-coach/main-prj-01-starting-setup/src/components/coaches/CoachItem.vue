<template>
  <base-card>
    <h3>
      {{ fullName }}
    </h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <!-- <span v-for="area in areas" :key="area">{{ area }}</span> -->
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div>
      <!-- <router-link :to="coachContactLink">Contact</router-link> -->
      <base-button mode="outline" :to="coachContactLink">Contact</base-button>
      <!-- <router-link :to="coachDetailsLink">View Details</router-link> -->
      <base-button :to="coachDetailsLink">View Details</base-button>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact'; // coaches/c1/contact
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id; // coaches/c1
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
