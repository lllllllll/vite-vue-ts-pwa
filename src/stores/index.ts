// @ts-ignore
import { createStore, createLogger } from 'vuex'
import { user } from './modules'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store