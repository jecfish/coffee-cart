<template>
  <Header />
  <Snackbar />
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
  }
})
</script>

<style>
body {
  font-size: 18px;
  background: rgb(224, 255, 255, 0.15);
}
</style>
