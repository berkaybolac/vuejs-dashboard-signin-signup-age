import Vue from 'vue'
import App from './App.vue'
import * as VeeValidate from 'vee-validate'
import vuetify from './plugins/vuetify';
import router from './router'




Vue.config.productionTip = false
Vue.use(VeeValidate);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
