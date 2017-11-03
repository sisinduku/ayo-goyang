import Vue from 'vue'
import Router from 'vue-router'
import PlayerComponent from '@/components/PlayerComponent'
import HelloWorld from '@/components/HelloWorld'
import OptionComponent from '@/components/OptionComponent'
import MainComponent from '@/components/MainComponent'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: MainComponent,
      children: [{
        path: '',
        component: OptionComponent
      }, {
        path: 'create-room',
        component: CreateComponent
      }, {
        path: 'join-room',
        component: JoinComponent
      }]
    },
    {
      path: '/loading',
      component: LoadingPage
    }, {
      path: '/dance-stage',
      component: DanceStage
    }
  ]
})
