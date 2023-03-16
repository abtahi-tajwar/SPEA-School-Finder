import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      isTranslated: false
    }
  },
  mutations: {
    toggleTranslation (state) {
      state.isTranslated = !state.isTranslated
    }
  }
})

export default store