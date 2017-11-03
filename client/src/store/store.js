import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    score: 0
  },
  mutations: {
    increaseScore(state, payload) {
      state.score += payload
    }
  }
})

export default store
