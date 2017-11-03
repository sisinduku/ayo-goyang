<template>
  <div>
    <h2>The Winner Is ...</h2>
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{winner}} is the winner!</h3>
      </div>
      <div class="panel-body">
        Congratulations to {{winner}} with score = {{score}}
        You are fantastic
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      winner: '',
      score: 0
    }
  }
}
</script>

<style>

</style>
