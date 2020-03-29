import Vue from 'vue'
import Vuex from 'vuex'
import Rows from '@/library/Rows'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rows: Rows.initialized()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
