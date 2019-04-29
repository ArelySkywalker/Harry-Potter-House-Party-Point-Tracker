import Vue from 'vue'
import App from './App.vue'

// Portal Vue https://portal-vue.linusb.org/
import PortalVue from 'portal-vue'

// Bootstrap Vue components. https://bootstrap-vue.js.org/docs
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(PortalVue)
Vue.use(BootstrapVue);

//This event bus is used to track events accross all components without passing every event as a prop
export const eventBus = new Vue();

//This is the MAIN Vue instance that renders our App
new Vue({
  el: '#app',
  render: h => h(App)
})
