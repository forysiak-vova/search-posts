import { createApp } from "vue";
import App from "@/App.vue";
import Components from "@/Components/UI";
import router from "@/router/router";
import directives from "@/directives";
import store from "@/store";

import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);

Components.forEach((component) => app.component(component.name, component));

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});
app.BootstrapVue(BootstrapVue);
// app.directive("intersection", VIntersection);

app.use(store).use(router).mount("#app");
