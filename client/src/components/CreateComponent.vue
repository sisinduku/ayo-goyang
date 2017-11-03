<template>
  <div>
    <div class="container">

      <form class="form-horizontal">
        <fieldset>
          <div class="form-group">
            <label class="control-label" for="inputDefault">Host Name</label>
            <input type="text" class="form-control" id="hostname" placeholder="host name eg:Aria">
          </div>
          <div class="form-group">
            <label class="control-label" for="inputDefault">Room Name</label>
            <input type="text" class="form-control" id="roomname" placeholder="room name eg:Ayo Dance">
          </div>
          <div class="form-group">
            <label class="control-label" for="inputDefault">Room Key</label>
            <input type="text" class="form-control" id="roomkey" placeholder="Room key eg:ayodance">
          </div>
          <div class="form-group">
            <div class="col-lg-12">
              <button type="reset" class="btn btn-default" id="cancel"><router-link to="main">Cancel</router-link></button>
              <button type="submit" class="btn btn-primary" id="submit">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style>
body {
  background-image: url("../assets/giphy.gif")
}

.control-label {
  color: #ababab;
}

input {
  text-align: center
}
</style>
