export default {
  install: (app: any, { store }: any) => {
    if (!store) {
      throw new Error('Please provide vuex store.');
    }

    app.config.globalProperties.$snackbar = {
      showMessage({ content = '', color = '' }) {
        store.commit('snackbar/showMessage', { content, color }, { root: true });
      }
    }
  }
}