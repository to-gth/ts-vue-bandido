import Vue from 'vue'
import Vuex from 'vuex'
import Rows from '@/library/Rows'
import CardType from '@/library/CardType'

Vue.use(Vuex)

const deck = CardType.randomAll()
const hands = deck.splice(0, 3)

export default new Vuex.Store({
  state: {
    deck: deck,
    hands: hands,
    rows: Rows.initialized()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
