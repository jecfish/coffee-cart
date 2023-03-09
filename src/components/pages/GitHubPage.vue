<template>
  <div class="container">
    <p>Star our repository <a href="https://github.com/jecfish/coffee-cart">jecfish/coffee-cart</a>. Report in the repository if you found any issues.</p>
    <p>Here are the extra actions you can perform apart from the <a href="https://goo.gle/devtools-recorder">usual add to cart flows.</a></p>
    <ul>
      <li>Double click on coffee title to translate it to Chinese.</li>
      <li>Right click on coffee icon to open an add to cart dialog.</li>
      <li>[Desktop only] Hover over Pay button will show a quick cart preview, click to add or remove items.</li>
      <li>A random promo coffee pop up show up when adding every 3rd items to the cart. (e.g. 3, 6, 9, ...)</li>
      <li>The add to cart process will be slowing down (intentionally) when the cart has more than 7 items.</li>
      <li>Slow down page load performance with ads by passing in an <code>ads</code> param. <a href="https://coffee-cart.netlify.app/?ad=1">https://coffee-cart.netlify.app/?ad=1</a></li>
      <li>Simulate throw an error when adding coffee to cart. <a href="https://coffee-cart.netlify.app/?breakable=1">https://coffee-cart.netlify.app/?breakable=1</a></li>
   
    </ul>
    <p>You can use this demo to learn DevTools features. We have tutorial and video to guide you.</p>
    <ul>
      <li>Record, replay and measure user flows with the Recorder panel (<a href="https://goo.gle/devtools-recorder">link</a>).</li>
      <li>Get actionable insights for your websites' performance with the Performance insights panel (<a href="https://goo.gle/devtools-performance">link</a>) </li>
    </ul>
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
