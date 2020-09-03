import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import math, { exNumber } from './utils'
import http from './request/index'
import './assets/styles/reset.less'
import 'element-ui/lib/theme-chalk/index.css'
import { Card, Button, Message, Dialog, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$math = math;
Vue.prototype.$exNumber = exNumber;
Vue.prototype.$http = http;
Vue.prototype.$message = Message;

Vue.use(Card)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
