Vue.createApp({
  data() {
    return {
      enteredValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   // read value of input field
//   const enteredValue = inputEl.value;

//   // create a list element of DOM and give it value of input field
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;

//   // append list element into ul element
//   listEl.appendChild(listItemEl);

//   // clear input field
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);
