import Vue from 'vue'
import App from './App.vue'
import Status from './Status.vue'

Vue.component('app-server-status', Status)

new Vue({
  el: '#app',
  render: h => h(App)
})
