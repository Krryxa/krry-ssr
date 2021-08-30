import Vue from "vue";
import App from "./App.vue";
// import store from "./store";
import { createRouter } from './router'

Vue.config.productionTip = false;

export function createApp() {
  const router = createRouter()
  return new Vue({
    router,
    // store,
    render: (h) => h(App),
  })
}
