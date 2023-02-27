const app = Vue.createApp({
  data() {
    return {
      input: "",
      assignment: [],
      showList: true,
    };
  },
  methods: {
    addTask() {
      this.assignment.push(this.input);
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});
app.mount("#assignment");
