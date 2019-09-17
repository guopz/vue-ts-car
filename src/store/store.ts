import Vue from 'vue'
import Vuex from 'vuex'

import about from '@/store/modules/about'
import home from '@/store/modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    about
  }
})
