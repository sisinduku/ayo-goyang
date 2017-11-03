<template>
  <div>
    <slot>
      
    </slot>
    <div class="btn-group btn-group-justified">
        <router-link :to="'/main/create-room'" class="btn btn-default">Create Room</router-link>
        <router-link :to="'/main/join-room'" class="btn btn-default">Join Room</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
