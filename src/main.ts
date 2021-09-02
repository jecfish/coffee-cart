import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import snackbarPlugin from './plugins/snackbar'

createApp(App)
  .use(router)
  .use(store)
  .use(snackbarPlugin, { store })
  .mount('#app');
