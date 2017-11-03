<template>
<div>
  <slot>
  </slot>
  <form class="form-horizontal">
    <fieldset>
      <div class="form-group">
        <label class="control-label" for="inputDefault">Name</label>
        <input type="text" class="form-control" v-model="playername" placeholder="Name eg:Aria">
      </div>
      <div class="form-group">
        <label class="control-label" for="inputDefault">Room Name</label>
        <input type="text" class="form-control" v-model="roomname" placeholder="Room Name eg:Ayo Dance">
      </div>
      <div class="form-group">
        <div class="col-lg-12">
          <router-link to="/main" class="btn btn-danger">Back To Main</router-link>
          <button type="button" class="btn btn-success" @click="addRoom(roomname,playername)">Submit</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      roomname: '',
      playername: ''
    }
  },
  firebase: function() {
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
    addRoom(roomname, playername) {
      console.log('roomname ', roomname, 'playername ', playername)
      this.$firebaseRefs.rooms.child(roomname).push({
        name: playername,
        score: 0
      })
      this.$router.push({
        name: 'MariGoyang',
        params: {
          roomname: roomname
        }
      })
    },
    addPlayer(roomname, playername) {
      this.$firebaseRefs.rooms.child(roomname).push({
        name: playername,
        score: 0
      })
    },
    changeScore1(roomname) {
      console.log(this.$firebaseRefs.rooms.child(roomname).push().key);
      // this.$firebaseRefs.rooms.child(roomname).update({
      //   score:10
      // })
    },
    changeScore2(roomname) {
      this.$db.ref(roomname + '/player2').update({
        score: 10
      })
    }

  }
}
</script>

<style scoped>
body {
  background-image: url("/static/giphy.gif")
}

.control-label {
  color: #ababab;
}

input {
  text-align: center
}
</style>
