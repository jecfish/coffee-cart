<template>
  <ul>
    <li>
      <router-link aria-label="Menu page" to="/">menu</router-link>
    </li>
    <li>
      <router-link aria-label="Cart page" to="/cart">cart ({{ cartCount }})</router-link>
    </li>
    <li>
      <router-link aria-label="GitHub page" to="/github">github</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Header',
  computed: {
    ...mapGetters({
      cartCount: "cart/cartCount"
    })
  }
})
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  border-bottom: 4px solid black;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  background: rgb(250, 255, 255);
  margin-block: 0;
}

li {
  list-style: none;
  padding: 10px 10px;
}

a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  color: grey;
  text-decoration: none;
  border-bottom: 1px dotted grey;
}

a.router-link-active {
  color: goldenrod;
  border-bottom: 1px dotted goldenrod;
}

@media (min-width: 500px) {
  li {
    padding: 10px 20px;
  }

  a {
    font-size: 1.2rem;
  }
}
</style>
