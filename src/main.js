import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import Fastclick from 'fastclick'
// import toast from "components/common/toast"

import Vuelazload from 'vue-lazyload'

Vue.config.productionTip = false

Fastclick.attach(document.body)

Vue.use(Vuelazload, {
  loading: require('./assets/imgs/common/placeholder.png')
})

//安装toast插件
// Vue.use(toast)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
