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


}
</script>

<style lang="css">
</style>
