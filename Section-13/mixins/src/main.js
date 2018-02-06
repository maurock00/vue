import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) { 
  return value.toLowerCase();
});

Vue.mixin({ 
  created() { 
    console.log('It comes from global mixin created method')
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
