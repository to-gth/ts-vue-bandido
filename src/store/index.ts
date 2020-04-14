import Vue from 'vue'
import Vuex from 'vuex'
import Rows from '@/library/Rows'
import CardType from '@/library/CardType'

Vue.use(Vuex)

const deck = CardType.randomAll()
const hands = deck.splice(0, 5)

export default new Vuex.Store({
  state: {
    deck: deck,
    hands: hands,
    hand: 0,
    rows: Rows.initialized()
  },
  mutations: {

    UPDATE_HAND: (state, hand) => {
      state.hand = hand
    },
  },
  actions: {
    updateHand: ({ commit }, hand) => {
      if (hand < 0) return
      if (hand >= 5) return
      commit('UPDATE_HAND', hand)
    },
    handPrev: ({ dispatch, state }) => {
      dispatch('updateHand', state.hand - 1)
    },
    handNext: ({ dispatch, state }) => {
      dispatch('updateHand', state.hand + 1)
    },
  },
  modules: {
  }
})
