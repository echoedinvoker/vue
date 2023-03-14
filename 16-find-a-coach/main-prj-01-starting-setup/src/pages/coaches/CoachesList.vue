<template>
  <coach-filter @change-filter="setFilters"></coach-filter>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline" @click="loadChoaches">Refresh</base-button>
        <base-button link to="/register" v-if="!isCoach"
          >Register as Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </section>
  </base-card>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      // return this.$store.getters['coaches/coaches'];
      const coaches = this.$store.getters['coaches/coaches'];
      const filteredCoaches = coaches.filter((coach) => {
        if (this.activeFilter.frontend && coach.areas.includes('frontend'))
          return true;
        if (this.activeFilter.backend && coach.areas.includes('backend'))
          return true;
        if (this.activeFilter.career && coach.areas.includes('career'))
          return true;
        return false;
      });
      return filteredCoaches;
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  created() {
    this.loadChoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilter = updatedFilters;
    },
    loadChoaches() {
      this.$store.dispatch('coaches/loadCoaches');
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
