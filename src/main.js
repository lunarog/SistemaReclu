import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vSelect from 'vue-select'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n'

Vue.component('v-select', vSelect)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
