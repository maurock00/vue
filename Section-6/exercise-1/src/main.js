import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue' 
import Dashboard from './Dashboard.vue'
import Footer from './Footer.vue'

Vue.component('header-v', Header);
Vue.component('dashboard', Dashboard);
Vue.component('footer-v', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
