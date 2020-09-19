import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let q1 = [
  {a: 'A', answer: 'a', choose: false},
  {a: 'B', answer: 'b', choose: false},
  {a: 'C', answer: '正确答案', choose: false},
  {a: 'D', answer: 'd', choose: false},
]
let q2 = [
  {a: 'A', answer: 'a', choose: false},
  {a: 'B', answer: 'b', choose: false},
  {a: 'C', answer: '正确答案', choose: false},
  {a: 'D', answer: 'd', choose: false},
]
let q3 = [
  {a: 'A', answer: 'a', choose: false},
  {a: 'B', answer: 'b', choose: false},
  {a: 'C', answer: '正确答案', choose: false},
  {a: 'D', answer: 'd', choose: false},
]
let score = {
  a: 0
}

export default new Vuex.Store({
  state: {
    q1,
    q2,
    q3,
    score
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
