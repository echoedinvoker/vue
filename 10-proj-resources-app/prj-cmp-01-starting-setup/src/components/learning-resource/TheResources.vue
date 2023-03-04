<template>
  <base-card>
    <base-button @click="selectedTab('add-resource')">Add Resource</base-button>
    <base-button @click="selectedTab('store-resources')"
      >Stored Resources</base-button
    >
  </base-card>
  <component :is="selectedTab" :resources="resources"></component>
</template>

<script>
import StoreResources from './StoreResources.vue';
import AddResource from './AddResource.vue';

export default {
  props: ['resources'],
  components: {
    StoreResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'store-resources',
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
