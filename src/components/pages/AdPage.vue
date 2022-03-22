<template>
  <Banner  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '../parts/Banner.vue';

export default defineComponent({
  name: "AdPage",
  components: { Banner },
  mounted() {
    setTimeout(() => {
      parent.postMessage('AdLoaded', '*');
    }, 2600); 
    // console.log(parent);
  }
})
</script>

<style>
</style>