import Vue from "vue";
import App from "./App.vue";
// import store from "./store";
import { createRouter } from './router'

Vue.config.productionTip = false;

// const router = createRouter()
// new Vue({
//   router,
//   // store,
//   render: (h) => h(App),
// }).$mount('#app')

export function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    // store,
    render: (h) => h(App),
  })
  return app
}
