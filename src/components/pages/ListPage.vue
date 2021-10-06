<template>
  <Banner v-if="showAd" />
  <Promotion v-if="showPromo" @close="closedPromo()" />
  <div>
    <ul>
      <li v-for="coffee in list" :key="coffee.name">
        <h4>
          {{ coffee.name }}
          <br />
          <small>{{ currency(coffee.price) }}</small>
        </h4>
        <div @click="addToCart(coffee.name);togglePromo(cartCount);">
          <Cup :item="coffee" />
        </div>
      </li>
    </ul>
    <Pay />
    <Ad v-if="showAd" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations, mapGetters } from 'vuex';
import { currency, slow } from '../../utils';
import Cup from '../parts/Cup.vue';
import Pay from '../parts/Pay.vue';
import Ad from '../parts/Ad.vue';
import Banner from '../parts/Banner.vue';
import Promotion from '../parts/Promotion.vue';

export default defineComponent({
  name: "ListPage",
  components: { Cup, Pay, Ad, Banner, Promotion },
  computed: {
    ...mapState({
      list: (state: any) => state.coffees.list.filter((x:any) => !x.discounted),
    }),
    ...mapGetters({
      cartCount: "cart/cartCount"
    })
  },
  data() {
    return {
      showAd: this.$route.query.ad,
      showPromo: false,
      waitTime: 1600
    }
  },
  created() {
    if (this.showAd) {
      this.$store.commit('coffees/setWaitTime', this.waitTime);
    }

    this.$store.dispatch("coffees/getCoffeeList");
  },
  methods: {
    currency,
    // ...mapMutations("cart", ["addToCart"]),
    addToCart(name: string) {
      slow();
      this.$store.commit('cart/addToCart', name);
    },
    togglePromo(count: number) {
      this.showPromo =  count > 0 && (count) % 3 == 0;
      return;
    },
    closedPromo() {
      this.showPromo = false;
    }
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
