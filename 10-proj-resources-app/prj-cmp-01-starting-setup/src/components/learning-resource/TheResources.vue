<template>
  <base-card>
    <base-button @click="setSelectedTab('add-resource')" :mode="selectAddRes"
      >Add Resource</base-button
    >
    <base-button
      @click="setSelectedTab('store-resources')"
      :mode="selectStoreRes"
      >Stored Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  computed: {
    selectAddRes() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
    selectStoreRes() {
      return this.selectedTab === 'store-resources' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      this.storedResources.push({
        id: new Date().toISOString(),
        title,
        description,
        link,
      });
      this.selectedTab = 'store-resources';
    },
  },
};
</script>
