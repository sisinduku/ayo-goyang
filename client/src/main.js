// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/store'
import App from './App'
import router from './router'
import gyro from './assets/js/gyro'
import VueFire from 'vuefire'
import Firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBfusfUjaSXeGi2cKBPzQX5PebvnQg5UdM",
  authDomain: "ayo-goyang-898a9.firebaseapp.com",
  databaseURL: "https://ayo-goyang-898a9.firebaseio.com",
  projectId: "ayo-goyang-898a9",
  storageBucket: "ayo-goyang-898a9.appspot.com",
  messagingSenderId: "450439215089"
};

var firebaseApp = Firebase.initializeApp(config)
Vue.prototype.$db = firebaseApp.database()

// explicit installation required in module environments
Vue.use(VueFire)

window.gyro = gyro

Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
