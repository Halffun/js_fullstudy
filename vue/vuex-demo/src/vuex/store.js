import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const getters = {
  abc: (state) => {
    return state.count += 100
  }
}

const mutations = {
  add(state) {
    state.count++
  },
  reduce(state) {
    state.count--
  }
}

const actions = { // 提交mutations里面的方法
  addActions(context) {
    context.commit('add')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})