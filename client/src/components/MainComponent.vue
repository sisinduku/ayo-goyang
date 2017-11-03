<template>
  <div>
    <h1>AYO GOYANG!!</h1>
    <div class="container">
      <h1 v-for="room in listRoom">{{room['.key']}}</h1>
      <!-- <input type="text" v-for="room in listRoom" :value="room[.key]" ><br> -->
      <input type="text" name="rname" placeholder="Room Name" v-model="roomname" ><br>
      <input type="text" name="pname" placeholder="Player Name" v-model="playername"><br>
      <a href="#" @click="addRoom(roomname,playername)" >Add Room</a>
      <a href="#" @click="addPlayer(roomname,playername)" >Add Player</a><br>
      <a href="#" @click="changeScore1(roomname)" >Add Score1</a>
      <a href="#" @click="changeScore2(roomname)" >Add Score2</a><br>
      <router-view>
        <img src="../assets/logo.png">
      </router-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return{
      roomname:'',
      playername:''
    }
  },
  firebase () {
    return {
      rooms: {
         source: this.$db.ref('/rooms')
      }
    }
  },
  computed: {
    listRoom() {
      return this.rooms.filter(room => {
        return Object.keys(room).length <= 2
      })
    }
  },
  methods: {
    addRoom(roomname,playername) {
      this.$firebaseRefs.rooms.child(roomname).push({
        name:playername,
        score:0
      })
    },
    addPlayer(roomname,playername) {
      this.$firebaseRefs.rooms.child(roomname).push({
        name:playername,
        score:0
      })
    },
    changeScore1(roomname){
      console.log(this.$firebaseRefs.rooms.child(roomname).push().key);
      // this.$firebaseRefs.rooms.child(roomname).update({
      //   score:10
      // })
    },
    changeScore2(roomname){
      this.$db.ref(roomname +'/player2').update({
        score:10
      })
    }

  }

}
</script>

<style lang="css">
</style>
