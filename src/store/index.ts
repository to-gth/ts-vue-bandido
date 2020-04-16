import Vue from 'vue'
import Vuex from 'vuex'
import Rows from '@/library/Rows'
import CardType from '@/library/CardType'
import Address from '@/library/Address'
import Direction from '@/foundation/Direction'
import Card from '@/library/Card'
import AddressPair from '@/library/AddressPair'
import Turn from '@/foundation/Turn'
import Matrix from '@/foundation/Matrix'
import Size from '@/foundation/Size'
import RowsAttachability from '@/library/RowsAttachability'

Vue.use(Vuex)

const deck = CardType.randomAll()
const hands = deck.splice(0, 5)

export default new Vuex.Store({
  state: {
    deck: deck,
    hands: hands,
    hand: 0,
    handAddress: null as Address | null,
    handCardDirection: Direction.Right,
    rows: Rows.initialized(),
  },
  getters: {
    isFloatingMode: (state): boolean => {
      return !!state.handAddress
    },
    cardType: (state): CardType => {
      return state.hands[state.hand]
    },
    card: (state, getters): Card => {
      const direction = state.handCardDirection
      const cardType = getters.cardType
      return Card.from(direction, cardType)
    },

    rowsWithFloating: (state, getters): Rows => {
      const rows = state.rows
      const handAddress = state.handAddress
      if (!handAddress) return state.rows
      const card = getters.card
      return Rows.floatingCardAttachedAt(handAddress, card, rows)
    },
    floatingAddressPair: (state, getters): AddressPair | null => {
      const card = getters.card
      const address = state.handAddress
      if (!address) return null
      return AddressPair.from(card, address)
    },

    rowsCardAttached: (state, getters): Rows => {
      const rows = state.rows
      const handAddress = state.handAddress
      if (!handAddress) return state.rows
      const card = getters.card
      return Rows.cardAttachedAt(handAddress, card, rows)
    },

    isAttachable: (state, getters): boolean => {
      const address = state.handAddress
      if (!address) return false
      const card = getters.card
      const rows = state.rows
      return RowsAttachability.isOkAt(address, card, rows)
    },

    rowsSize: (state): Size => {
      return Matrix.sizeOf(state.rows)
    },
    bottomend: (_, getters): number => {
      return getters.rowsSize.height - 1
    },
    rightend: (_, getters): number => {
      return getters.rowsSize.width - 1
    },
    isTopend: (state): boolean => {
      const address = state.handAddress
      if (!address) return false
      return address.top === 0
    },
    isBottomend: (state, getters): boolean => {
      const address = state.handAddress
      if (!address) return false
      return address.top === getters.bottomend
    },
    isLeftend: (state): boolean => {
      const address = state.handAddress
      if (!address) return false
      return address.left === 0
    },
    isRightend: (state, getters): boolean => {
      const address = state.handAddress
      if (!address) return false
      return address.left === getters.rightend
    },
  },
  mutations: {

    UPDATE_HAND: (state, hand) => {
      state.hand = hand
    },
    UPDATE_HAND_ADDRESS: (state, handAddress) => {
      state.handAddress = handAddress
    },
    UPDATE_HAND_CARD_DIRECTION: (state, direction) => {
      state.handCardDirection = direction
    },
    REMOVE_AND_REFILL_HANDS: (state) => {
      state.hands.splice(state.hand, 1)
      const refill = state.deck.splice(0, 1)[0]
      state.hands.push(refill)
    },
    UPDATE_ROWS: (state, rows) => {
      state.rows = rows
    },
  },
  actions: {
    updateHand: ({ commit }, hand) => {
      if (hand < 0) return
      if (hand >= 5) return
      commit('UPDATE_HAND', hand)
    },
    handShift: ({ dispatch, state }, direction) => {
      let diff = 0
      switch (direction) {
        case Direction.Up:
          diff = -1
          break
        case Direction.Down:
          diff = 1
          break
        default:
          return
      }
      dispatch('updateHand', state.hand + diff)
    },
    // handPrev: ({ dispatch, state }) => {
    //   dispatch('updateHand', state.hand - 1)
    // },
    // handNext: ({ dispatch, state }) => {
    //   dispatch('updateHand', state.hand + 1)
    // },

    updateHandAddress: ({ commit, state }, handAddress: Address | null) => {
      if (handAddress === null) {
        commit('UPDATE_HAND_ADDRESS', null)
        return
      }
      const rows = state.rows
      if (!Address.isWithin(rows, handAddress)) return
      const secondary = Address.shiftedToNext(state.handCardDirection, handAddress)
      if (!Address.isWithin(rows, secondary)) return
      commit('UPDATE_HAND_ADDRESS', handAddress)
    },
    handAddressShift: ({ dispatch, state }, direction: Direction) => {
      const handAddress = state.handAddress
      if (!handAddress) return
      const shifted = Address.shiftedToNext(direction, handAddress)
      dispatch('updateHandAddress', shifted)
    },
    // handAddressUp: ({ dispatch }) => {
    //   dispatch('handAddressShift', Direction.Up)
    // },
    // handAddressLeft: ({ dispatch }) => {
    //   dispatch('handAddressShift', Direction.Left)
    // },
    // handAddressDown: ({ dispatch }) => {
    //   dispatch('handAddressShift', Direction.Down)
    // },
    // handAddressRight: ({ dispatch }) => {
    //   dispatch('handAddressShift', Direction.Right)
    // },

    keyArrow: ({ dispatch, getters }, direction: Direction) => {
      const actionName = getters.isFloatingMode ? 'handAddressShift' : 'handShift'
      dispatch(actionName, direction)
    },
    keyUp: ({ dispatch }) => {
      dispatch('keyArrow', Direction.Up)
    },
    keyLeft: ({ dispatch }) => {
      dispatch('keyArrow', Direction.Left)
    },
    keyDown: ({ dispatch }) => {
      dispatch('keyArrow', Direction.Down)
    },
    keyRight: ({ dispatch }) => {
      dispatch('keyArrow', Direction.Right)
    },

    initializeHandCardDirection: ({ commit }) => {
      commit('UPDATE_HAND_CARD_DIRECTION', Direction.Right)
    },
    clearHandAddress: ({ dispatch }) => {
      dispatch('initializeHandCardDirection')
      dispatch('updateHandAddress', null)
    },
    attach: ({ getters, commit, dispatch }) => {

      if (!getters.isAttachable) return

      const attachedRows = getters.rowsCardAttached
      commit('UPDATE_ROWS', attachedRows)
      dispatch('clearHandAddress')
      commit('REMOVE_AND_REFILL_HANDS')
    },
    initializeHandAddress: ({ dispatch }) => {
      dispatch('updateHandAddress', Address.zero)
    },
    float: ({ dispatch }) => {
      dispatch('initializeHandAddress')
    },
    keyEnter: ({ getters, dispatch }) => {
      const actionName = getters.isFloatingMode ? 'attach' : 'float'
      dispatch(actionName)
    },

    updateHandCardDirection: ({ state, commit, dispatch, getters }, direction: Direction) => {
      if (
        // Address.endsToward(direction, getters.size, state.handAddress)
        (direction === Direction.Up && getters.isTopend)
        || (direction === Direction.Down && getters.isBottomend)
        || (direction === Direction.Left && getters.isLeftend)
        || (direction === Direction.Right && getters.isRightend)
      ) {
        const diff = Direction.oppositeOf(direction)
        const address = state.handAddress
        if (!address) return
        const shifted = Address.shiftedToNext(diff, address)
        dispatch('updateHandAddress', shifted)
      }
      commit('UPDATE_HAND_CARD_DIRECTION', direction)
    },
    keyTurn: ({ state, getters, dispatch }, turn: Turn) => {
      if (!getters.isFloatingMode) return
      const direction = Direction.turned(state.handCardDirection, turn)
      dispatch('updateHandCardDirection', direction)
    },
    keyLt: ({ dispatch }) => {
      dispatch('keyTurn', Turn.anticlockwise)
    },
    keyGt: ({ dispatch }) => {
      dispatch('keyTurn', Turn.clockwise)
    },
  },
  modules: {
  }
})
