<template>
  <transition name="fade">
    <div>
      <img src="/banner.jpg" role="button" alt="free 1 bag of coffe beans advertisement" @click="close()">
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Banner',
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
    // this.timeoutId = setTimeout(() => {
      this.show = true;
    // }, this.timeout * 1.5) as any;
  },
  unmounted() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId as any);
      this.timeoutId = null;
    }
  }
})
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}

/* img {
  max-width: 80%;
} */

img {
  min-height: 100px;
  max-height: 50vh;
  overflow: auto;
  /* max-height: 50vh; */
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
