import coffee from '../../api/coffee.api'

// initial state
const state = () => ({
  list: []
})

// getters
const getters = {}

// actions
const actions = {
  async getCoffeeList({ commit }: any) {
    try {
      const list = await coffee.getList();
      commit("getListSuccess", list);
    } catch (err) {
      commit("getListFailure", err);
      return err;
    }
  }
}

// mutations
const mutations = {
  getListSuccess(state: any, coffees: any) {
    state.list = coffees
  },
  getListFailure(state: any) {
    state.list = [];
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}