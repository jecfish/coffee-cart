<template>
  <transition name="fade">
    <div class="modal" v-show="show">
      <img src="/ad.jpg" role="button" alt="free 1 bag of coffe beans advertisement" @click="close()">
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Ad',
  data() {
    return {
      show: false,
      timeout: 1000,
      timeoutId: null,
    }
  },
  methods: {
    close() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId as any);
        this.timeoutId = null;
      }
      this.show = false;
    }
  },
  created() {
    this.timeoutId = setTimeout(() => {
      this.show = true;
    }, this.timeout) as any;
  }
})
</script>

<style scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

img {
  max-width: 80%;
  max-height: 80%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
