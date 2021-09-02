import { createStore } from 'vuex';

import coffees from './modules/coffees.state';
import cart from './modules/cart.state';
import snackbar from './modules/snackbar';

export interface State {
  count: number
}

const debug = process.env.NODE_ENV !== 'production'

// Create a new store instance.
const store = createStore<State>({
  modules: {
    coffees,
    cart,
    snackbar
  },
  strict: debug
})

export default store