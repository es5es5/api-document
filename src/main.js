import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import API_MODEL from './js/model/api'

Vue.config.productionTip = false;

Vue.prototype.API_MODEL = API_MODEL

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
