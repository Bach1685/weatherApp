import { createApp } from "vue";
import App from "./App.vue";
import components from "./components";
import { store, key } from "./store";
const app = createApp(App);
app.use(store);
components.forEach((component) => app.component(component.name, component));

app.mount("#app");
