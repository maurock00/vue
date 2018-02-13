import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-e0872.firebaseio.com/';

//Interceptors to execute code between requests ... to interecept responses it coul be done on next(); function
//PUT method overwrites the data on FIREBASE, is the behavior on FIREBASE

Vue.http.interceptors.push((request, next) => { 
  console.log(request); 
  if(request.method == "POST")
    request.method = "PUT";
  
  next(response => { 
    response.json = () => { return { messages: response.body } }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
