import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainComponent from '@/components/MainComponent'
import CreateComponent from '@/components/CreateComponent'
import JoinComponent from '@/components/JoinComponent'
import LoadingPage from '@/components/LoadingPage'
import DanceStage from '@/components/DanceStage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: MainComponent
    }, 
    {
      path: '/create-room',
      component: CreateComponent
    },
    {
      path: '/join-room',
      component: JoinComponent
    },
    {
      path: '/loading',
      component: LoadingPage
    },
    {
      path: '/dance-stage',
      component: DanceStage
    }
  ]
})
