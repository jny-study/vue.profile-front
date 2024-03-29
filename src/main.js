import Vue from 'vue'
import App from '@/App.vue'
import router from '@/config/router'
import store from '@/vuex/store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
