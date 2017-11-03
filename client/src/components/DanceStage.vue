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
  <div class="col-md-12">
    <button v-if="rooms.length >= 2 && rooms[2]['.value'] == 30" @click.prevent="play" type="submit" class="btn btn-default">Play</button>
    <CountDown ref="countdown" :time="30" :autoStart=false @onProgress="countDownProgress" @onFinish="countDownFinished">
    {{rooms[2]['.value']}}
    </CountDown>
    <h1 v-if="winner">Winner is: {{winner}}</h1>
  </div>
</div>
</template>

<script>
import CountDown from 'vuejs-count-down'
export default {
  components: {
    CountDown
  },
  data() {
    return {
      winner: false
    }
  },
  firebase: function() {
    return {
      rooms: {
        source: this.$db.ref(`/rooms/${this.roomname}/`)
      }
    }
  },
  methods: {
    countDownProgress(time) {
      this.$firebaseRefs.rooms.child('time').set(time)
    },
    countDownFinished() {
      // restart when countdown ends
      this.$refs.countdown.$emit('stop')
      this.winner = (this.rooms[0].score > this.rooms[1].score) ? this.rooms[0].name : this.rooms[1].name
      gyro.stopTracking()
    },
    play() {
      this.$refs.countdown.$emit('start')
      //do something after creating vue instance
      // console.log(this.msg);
      let ini = this;
      gyro.frequency = 1000
      gyro.startTracking(function(o) {
        let accelerometerVal = Math.floor((Math.abs(o.x) / 180) + (Math.abs(o.y) / 180) + (Math.abs(o.z) / 180)) + 1
        let gyroVal = ((Math.abs(o.alpha) / 180) + (Math.abs(o.beta) / 180) + (Math.abs(o.gamma) / 180)) * 3
        console.log(Math.floor(accelerometerVal * gyroVal));
        ini.$firebaseRefs.rooms.child(ini.playerKey).once('value', function(snapshot) {
          ini.$firebaseRefs.rooms.child(ini.playerKey).set({
            name: ini.playername,
            score: (snapshot.val().score + Math.floor(accelerometerVal * gyroVal))
          })
        })
      });
    }
  },
  props: ['roomname', 'playername', 'playerKey'],
  mounted() {

  }
}
</script>

<style scoped>
body {
  background-image: url("../assets/colors16.gif")
}
</style>
