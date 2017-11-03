<template lang="html">
<div>
  {{ score }}
  <button @click="increaseScore(1)">Naikin</button>
</div>
</template>

<script>
import * as firebase from 'firebase'
import { mapMutations } from 'vuex'
console.log(process.env.APIKEY);
const firebaseApp = firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID
})
const db = firebaseApp.database()
const scoreRef = db.ref('rooms/' + 'contoh' + '/' + 'playerContoh' + '/score')
export default {
  data () {
    return {
      tes: {
        tesisi: 0
      },
      gyrox: 0,
      gyroy: 0,
      gyroz: 0,
      gyroalpha: 0,
      gyrobeta: 0,
      gyrogamma: 0
    }
  },
  props: ['roomName', 'playerName'],
  methods: {
    increaseScore(payload) {
      scoreRef.set(payload)
      this.tes.tesisi += payload
    }
  },
  firebase: {
    scorePlayer: scoreRef
  },
  watch: {
    tes: function(value){
      console.log(value);
    }
  },
  computed: {
    score() {
      return this.$store.state.score;
    },
    roomSlug() {
      return slug(this.roomName);
    }
  },
  mounted() {
    //do something after mounting vue instance
    let ini = this;
    gyro.startTracking(function(o) {
      let accelerometerVal = Math.floor((Math.abs(o.x) / 180) + (Math.abs(o.y) / 180) + (Math.abs(o.z) / 180)) + 1
      let gyroVal = ((Math.abs(o.alpha) / 180) + (Math.abs(o.beta) / 180) + (Math.abs(o.gamma) / 180)) * 3
      console.log(Math.floor(accelerometerVal * gyroVal));
      ini.$store.commit('increaseScore', Math.floor(accelerometerVal * gyroVal))
  		// o.x, o.y, o.z for accelerometer
  		// o.alpha, o.beta, o.gamma for gyro
  	});
  }
}
</script>

<style lang="css">
</style>
