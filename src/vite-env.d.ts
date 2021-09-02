/// <reference types="vite/client" />

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<any>;
    $snackbar: any;
  }
}
