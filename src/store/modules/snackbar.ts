const state = () => ({
  content: '',
  color: ''
})

const mutations = {
  showMessage(state: any, payload: any) {
    state.content = payload.content
    state.color = payload.color
  }
}

export default {
  namespaced: true,
  state,
  mutations
}