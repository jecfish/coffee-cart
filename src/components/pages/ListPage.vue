<template>
  <Banner v-if="renderAd" />
  <!-- <iframe ref="iframe" v-if="showAd" src="/ad" height="1" width="1" scrolling="no" frameborder="0"></iframe> -->
  <Promotion v-if="showPromo" @close="closedPromo()" />
  <div id="coffee-list-container">
    <ul>
      <li v-for="coffee in list" :key="coffee.name">
        <h4>
          {{ coffee.name }}
          <br />
          <small>{{ currency(coffee.price) }}</small>
        </h4>
        <div @click="addToCart(coffee.name);togglePromo(cartCount);">
          <Cup :item="coffee" :isBigger="isBigger" />
        </div>
      </li>
    </ul>
    <Pay />
    <!-- <Ad v-if="showAd" /> -->
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
      renderAd: false,
      showPromo: false,
      waitTime: 1000,
      timeoutId: null,
      isBigger: false
    }
  },
  created() {
    if (this.showAd) {
      window.addEventListener('message', this.resizeFrame);

      this.$store.commit('coffees/setWaitTime', this.waitTime * .5);

      this.timeoutId = setTimeout(() => {
        this.renderAd = true;
        this.renderFonts();

      }, this.waitTime * 2.5) as any;


      slow();
    }

    this.$store.dispatch("coffees/getCoffeeList");
  },
  unmounted() {
    window.removeEventListener('message', this.resizeFrame);

    if (this.timeoutId) {
      clearTimeout(this.timeoutId as any);
      this.timeoutId = null;
    }
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
    },
    resizeFrame() {
      // setTimeout(() => {
      const iframe = this.$refs.iframe as HTMLIFrameElement;
      iframe.width = window.innerWidth + 'px';
      iframe.height = '300px';
      // }, this.waitTime * 1.7); 
      // console.log('resize')
    
    },
    renderFonts() {
      this.timeoutId = setTimeout(() => {
        const newStyle = document.createElement('style');
        this.renderAd = true;
        newStyle.appendChild(document.createTextNode(`
          @font-face {
            font-family: 'Lobster';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            size-adjust: 140%;
            line-gap-override: 150%;
            descent-override: 30%;
            src: url(https://fonts.gstatic.com/s/lobster/v27/neILzCirqoswsqX9zoKmM4MwWJU.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          .relative-positioned {
            position: relative;
            top: 50px;
          }
        `));
        document.head.appendChild(newStyle);
        const coffeeListContainer = document.querySelector('#coffee-list-container'); 
        coffeeListContainer.classList.add('relative-positioned');
        console.log(div.offsetHeight);
        this.isBigger = true;
      }, this.waitTime * 1.5) as any;
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
  display: block;
  position: fixed;
  right: 10px;
  bottom: 10px;
}

@media (min-width: 500px) {
  ul {
    grid-template-columns: repeat(2, auto);
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
