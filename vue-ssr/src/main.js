import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from './router'
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi)

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app')

export function createApp() {
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  })
  return app
}
