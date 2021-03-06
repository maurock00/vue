import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import store from './store/store';
import VueResource from 'vue-resource';

Vue.use(VueRouter); 
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-34ed1.firebaseio.com/';

const router = new VueRouter({
  mode: 'history', 
  routes
})

Vue.filter('currencyFilter', (value) => { 
    return `$${value.toLocaleString()}`;
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
