import {Store} from 'vuex';
import createLogger from '../plugins/logger';
import cart from './modules/cart'
import products from './modules/products'

// Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const createStore = () => {
  return new Store({
    modules: {
      cart,
      products
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
}



export default createStore
