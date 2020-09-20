import Vue from 'vue'
import App from './components/App.vue'
import store from "@/store";
import './registerServiceWorker'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
