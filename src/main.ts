import { createApp } from "vue";
import App from "./App.vue";
import animateOnView from "./directives/animate-on-view";
import tooltip from "./directives/tooltip";
import { i18n } from "./lib/i18n";
import router from "./router";
import "./style.css";

const app = createApp(App);

app.use(router);
app.use(i18n);

app.directive("animate-on-view", animateOnView);
app.directive("tooltip", tooltip);

app.mount("#app");
