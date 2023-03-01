import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./component/FriendContact.vue";

// createApp(App).mount("#app");
const app = createApp(App);

app.component("friend-contact", FriendContact);

app.mount("#app");
