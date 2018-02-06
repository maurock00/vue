import Vue from 'vue'
import App from './App.vue'

Vue.filter('count-characters', (value) => { 
    return (value + ' (' + value.split('').length + ')');
});

new Vue({
  el: '#app',
  render: h => h(App)
})
