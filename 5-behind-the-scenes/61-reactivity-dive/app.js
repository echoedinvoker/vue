const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

// The following native JavaScript example is used to demonstrate the Proxy

// let message = "Hello!";
// let logMessage = message + "world";

const data = {
  message: "Hello!",
  logMessage: "Hello!world",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.logMessage = value + "world";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

// console.log(logMessage);
console.log(proxy.logMessage);

// message = "Hello!!!!!!!!";
proxy.message = "Hello!!!!!!!";

// console.log(logMessage);
console.log(proxy.logMessage);
