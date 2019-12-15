import Vue from 'vue'
import 'lib-flexible'
import router from "../src/router";
import App from "./App.vue";
import store from "./vuex/store";
import Header from "./components/Header/Header.vue";
Vue.config.productionTip = false
Vue.component('Header',Header)
new Vue({
  // component:{
  //   App
  // },
  // template: '<App/>',
  render: h => h(App),
  router,
  store
}).$mount('#app')
