import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let q1 = [
  {a: 'A', answer: 'a', choose: 0, score: 0},
  {a: 'B', answer: 'b', choose: 1, score: 0},
  {a: 'C', answer: '正确答案', choose: 2, score: 1},
  {a: 'D', answer: 'd', choose: 3, score: 0},
]
let q2 = [
  {a: 'A', answer: 'a', choose: 0, score: 0},
  {a: 'B', answer: 'b', choose: 1, score: 0},
  {a: 'C', answer: '正确答案', choose: 2, score: 1},
  {a: 'D', answer: 'd', choose: 3, score: 0},
]
let q3 = [
  {a: 'A', answer: 'a', choose: 0, score: 0},
  {a: 'B', answer: 'b', choose: 1, score: 0},
  {a: 'C', answer: '正确答案', choose: 2, score: 1},
  {a: 'D', answer: 'd', choose: 3, score: 0},
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
