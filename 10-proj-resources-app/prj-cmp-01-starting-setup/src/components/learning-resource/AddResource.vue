<template>
  <!-- <h2>Add Resource</h2> -->
  <base-card>
    <!-- <form @submit.prevent="addResource(title, description, link)"> -->
    <form @submit.prevent="callAddResource()">
      <div class="form-control">
        <label for="title">Title</label>
        <!-- <input id="title" name="title" type="text" v-model="title" /> -->
        <input id="title" name="title" type="text" ref="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <!-- <textarea
          id="description"
          name="description"
          row="3"
          v-model="description"
        ></textarea> -->
        <textarea
          id="description"
          name="description"
          row="3"
          ref="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <!-- <input id="link" name="link" type="url" v-model="link" /> -->
        <input id="link" name="link" type="url" ref="link" />
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  // data() {
  //   return {
  //     title: '',
  //     description: '',
  //     link: '',
  //   };
  // },
  inject: ['addResource'],
  methods: {
    callAddResource() {
      const title = this.$refs.title.value;
      const description = this.$refs.description.value;
      const link = this.$refs.link.value;

      this.addResource(title, description, link);
    },
  },
};
</script>

<style>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
