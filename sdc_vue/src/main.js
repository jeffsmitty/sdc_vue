import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueRs from "@appbaseio/reactivesearch-vue";

Vue.config.productionTip = false;
Vue.use(VueRs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
