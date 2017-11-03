<template>
  <div>
    <form class="form-horizontal">
      <div class="container">

        <fieldset>
          <div class="form-group">
            <label class="control-label" for="inputDefault">Guest Name</label>
            <input type="text" class="col-lg-4 form-control" id="guestname">
          </div>
          <div class="form-group">
            <label for="select" class="col-lg-4 control-label">Selects</label>
            <div class="col-lg-4">
              <select class="form-control" id="select">
                <option>1</option>
                <option>2</option>
                <!-- Untuk menyimpan pilihan room yang kosong -->
              </select>
              <br>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label" for="inputDefault">Key Room</label>
            <input type="text" class="form-control" id="keyroom">
          </div>
          <div class="form-group">
            <div class="col-lg-12">
              <button type="reset" class="btn btn-default">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </fieldset>
      </div>
    </form>
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

input {
  text-align: center
}

.control-label {
  color: #ababab;
}
</style>
