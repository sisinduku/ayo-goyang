<template>
  <div>
    <h1><span class="label label-default">{{score}}</span></h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score : 0
    }
  }
}
</script>

<style>
.label {
  background-color: yellowgreen;
  font-color: red;
}
</style>
