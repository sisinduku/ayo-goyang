<template>
  <div>
    <div class="col-md-6">
      <h2><span class="label label-primary">Player One</span></h2>
      <PlayerScore/>
    </div>
    <div class="col-md-6">
      <h2><span class="label label-primary">Player Two</span></h2>
      <PlayerScore/>
    </div>
    <ul>
      <li>{{gyrox}}</li>
      <li>{{gyroy}}</li>
      <li>{{gyroz}}</li>
      <li>{{gyroalpha}}</li>
      <li>{{gyrobeta}}</li>
      <li>{{gyrogamma}}</li>
    </ul>
  </div>
</template>

<script>
import PlayerScore from '@/components/PlayerScore'
export default {
  components: {
    PlayerScore
  },
  data () {
    return {
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
    // console.log(this.msg);
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

<style>
body {
  background-image: url("../assets/colors16.gif")
}
</style>
