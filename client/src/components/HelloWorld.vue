<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="'main'" class="btn btn-primary btn-lg"> Let's Dance !</router-link>
    <!-- <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>{{gyrox}}</li>
      <li>{{gyroy}}</li>
      <li>{{gyroz}}</li>
      <li>{{gyroalpha}}</li>
      <li>{{gyrobeta}}</li>
      <li>{{gyrogamma}}</li>
    </ul>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      gyrox: '',
      gyroy: '',
      gyroz: '',
      gyroalpha: '',
      gyrobeta: '',
      gyrogamma: ''
    }
  },
  mounted () {
    //do something after creating vue instance
    console.log(this.msg);
    let ini = this;
    gyro.startTracking(function(o) {
      console.log(ini);
      ini.gyrox = o.x
      ini.gyroy = o.y
      ini.gyroz = o.z
      ini.gyroalpha = o.alpha
      ini.gyrobeta = o.beta
      ini.gyrogamma = o.gamma
  		// o.x, o.y, o.z for accelerometer
  		// o.alpha, o.beta, o.gamma for gyro
  	});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
