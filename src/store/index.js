import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import LocationStatus from '@/store/LocationStatus/LocationStatus'
import weatherStatus from '@/store/weatherStatus/weatherStatus'
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    LocationStatus,
    weatherStatus
  }
})
