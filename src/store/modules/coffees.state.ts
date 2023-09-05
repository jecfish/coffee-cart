import coffee from '../../api/coffee.api'

// initial state
const state = () => ({
  waitTime: 0,
  list: []
})

// getters
const getters = {}

// actions
const actions = {
  async getCoffeeList({ state, commit }: any) {
    try {
      const list = await coffee.getListXhr(state.waitTime);
      commit("getListSuccess", list);
    } catch (err) {
      commit("getListFailure", err);
      return err;
    }
  }
}

// mutations
const mutations = {
  setWaitTime(state: any, time: number) {
    state.waitTime = time;
  },
  getListSuccess(state: any, coffees: any) {
    state.list = coffees
  },
  getListFailure(state: any) {
    state.list = [];
  },
  translateCoffee(state: any, coffee: any) {
    const selected = state.list.find((x: any) => x.name === coffee) || {}
    selected.isTranslated = !selected.isTranslated;

    state.list = [...state.list]
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}