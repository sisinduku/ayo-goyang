<template>
  <div>
    <div class="col-md-6">
      <h2><span class="label label-primary">{{rooms[0].name}}</span></h2>
      <h2><span class="glyphicon glyphicon-fire"></span> {{rooms[0].score}}</h2>
    </div>
    <div class="col-md-6">
      <h2><span class="label label-primary">{{rooms[1].name}}</span></h2>
      <h2><span class="glyphicon glyphicon-fire"></span> {{rooms[1].score}}</h2>
    </div>
  </div>
</template>

<script>
export default {
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
  firebase: function() {
    return {
      rooms: {
        source: this.$db.ref(`/rooms/${this.roomname}/`)
      }
    }
  },
  props: ['roomname'],
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
  	});
  }
}
</script>

<style scoped>
body {
  background-image: url("../assets/colors16.gif")
}
</style>
