<template>
  <div>
    <ul>
      <li v-for="coffee in list" :key="coffee.name">
        <h4>
          {{ coffee.name }}
          <br />
          <small>{{ currency(coffee.price) }}</small>
        </h4>
        <div class="cup" @click="addToCart(coffee.name)">
          <Cup :item="coffee" />
        </div>
      </li>
    </ul>
    <Pay />
    <Ad v-if="showAd" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";
import { currency } from "../../utils";
import Cup from "../parts/Cup.vue";
import Pay from "../parts/Pay.vue";
import Ad from "../parts/Ad.vue";

export default defineComponent({
  name: "ListPage",
  components: { Cup, Pay, Ad },
  computed: {
    ...mapState({
      list: (state: any) => state.coffees.list,
    }),
  },
  data() {
    return {
      showAd: this.$route.query.ad
    }
  },
  created() {
    this.$store.dispatch("coffees/getCoffeeList");
  },
  methods: {
    currency,
    ...mapMutations("cart", ["addToCart"]),
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: grid;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 100px;
}

div {
  margin-top: 10px;
}

button {
  border: 4px solid black;
  background: antiquewhite;
  margin: 0 6px;
}

button:hover {
  border-color: goldenrod;
  color: goldenrod;
}

:deep(.pay) {
  display: none;
}

@media (min-width: 500px) {
  ul {
    grid-template-columns: repeat(2, auto);
  }

  :deep(.pay) {
    display: block;
    position: fixed;
    right: 10px;
    bottom: 10px;
  }
}

@media (min-width: 800px) {
  ul {
    grid-template-columns: repeat(3, auto);
  }
}

li {
  padding: 10px 20px;
}

li:hover h4 {
  color: goldenrod;
}

li h4 {
  /* text-align: center; */
  margin: 10px 0;
}
</style>
