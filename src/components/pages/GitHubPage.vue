<template>
  <div class="container">
   
    <p>Here are some extra actions you can perform apart from theusual add to cart flows.</a></p>
    <ul>
      <li>Double click on coffee title to translate it to Chinese.</li>
      <li>Right click on coffee icon to open an add to cart dialog.</li>
      <li>[Desktop only] Hover over Pay button will show a quick cart preview, click to add or remove items.</li>
      <li>A random promo coffee pop up show up when adding every 3rd items to the cart. (e.g. 3, 6, 9, ...)</li>
      <li>The add to cart process will be slowing down (intentionally) when the cart has more than 7 items.</li>
    </ul>
    <p>You can use this demo to learn DevTools features. We have tutorial and video to guide you.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "GitHubPage",
});
</script>

<style scoped>
  .container {
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
  }
</style>
