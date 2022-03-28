<template>
  <Header v-show="showTemplate" />
  <Snackbar v-show="showTemplate" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "./components/parts/Header.vue";
import Snackbar from "./components/parts/Snackbar.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Snackbar
  },
  data() {
    return {
      showTemplate: true
    }
  },
  created() {
    if (window.location.href.endsWith('/ad')) {
      this.showTemplate = false
    }
  }
})
</script>

<style>
body {
  font-size: 18px;
  background: rgb(224, 255, 255, 0.15);
  font-family: 'Lobster', Times;
}
</style>
