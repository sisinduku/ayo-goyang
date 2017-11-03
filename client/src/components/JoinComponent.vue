<template>
  <div>
    <slot>
    </slot>
    <form class="form-horizontal">
        <fieldset>
          <div class="form-group">
            <label class="control-label" for="inputDefault">Guest Name</label>
            <input type="text" class="form-control" v-model="playername">
          </div>
          <div class="form-group">
            <label for="select" class="control-label">Selects Room</label>
            <div>
              <select class="form-control" id="select" v-model="roomname">
                <option v-for="room in listRoom" :key="room['.key']" :value="room['.key']">{{room['.key']}}</option>
              </select>
              <br>
            </div>
          </div>
          <div class="form-group">
            <div class="col-lg-12">
						  <router-link to="/main" class="btn btn-danger">Back To Main</router-link>
              <button type="button" @click="addPlayer(roomname,playername)" class="btn btn-success">Submit</button>
            </div>
          </div>
        </fieldset>
    </form>
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
  firebase: function () {
    return {
      rooms: {
         source: this.$db.ref('/rooms')
      }
    }
  },
  computed: {
    listRoom() {
      return this.rooms.filter(room => {
        return Object.keys(room).length <= 3
      })
    }
  },
  methods: {
    addPlayer(roomname,playername) {
      let tes = this.$firebaseRefs.rooms.child(roomname).push({
        name:playername,
        score:0
      })
      this.$router.push({
        name: 'MariGoyang',
        params: {
          roomname: roomname,
          playername: playername,
          playerKey: tes.path.pieces_[2]
        }
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

<style scoped>
body {
  background-image: url("/static/giphy.gif")
}

input {
  text-align: center
}

.control-label {
  color: #ababab;
}
</style>
