import Vue from 'vue'
import Router from 'vue-router'
import PlayerComponent from '@/components/PlayerComponent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: PlayerComponent
  }]
})
