<template>
  <div class="list" v-if="cartList">
    <p v-if="!cartList.length">No coffee, go add some.</p>
    <div v-if="cartList.length">
      <Pay/>
      <ul>
        <li class="list-header">
          <div>Item</div>
          <div>Unit</div>
          <div>Total</div>
          <div></div>
        </li>
        <li v-for="item in cartList" :key="item.name">
          <div>{{ item.name }}</div>
          <div>
            <span class="unit-desc">{{ currency(item.unitPrice) }} x {{ item.quantity }}</span>
            <div class="unit-controller">
              <button type="button" @click="addOneCartItem(item.name)">+</button>
              <button type="button" @click="removeOneCartItem(item.name)">-</button>
            </div>
          </div>
          <div>{{ currency(item.price) }}</div>
          <div>
            <button class="delete" type="button" @click="removeCartItem(item.name)">x</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { currency } from '../../utils';
import Pay from "../parts/Pay.vue";

export default defineComponent({
  name: 'CartPage',
  components: { Pay },
  computed: {
    // Option 2
    ...mapGetters({
      cartList: "cart/cartList"
    }),
  },
  // data() {
  //   return {
  //     cartList: null
  //   }
  // },
  methods: {
    currency,
    ...mapActions("cart", []),
    ...mapMutations("cart", ["addOneCartItem", "removeOneCartItem", "removeCartItem"])
  },
  created() {
    // setTimeout(() => {
    //   this.cartList = this.$store.getters['cart/cartList'];
    // }, 3000) as any;
  }
})
</script>

<style scoped>
p {
  text-align: center;
  font-size: xx-large;
}

.list {
  margin: 0 auto;
  max-width: 680px;
  padding: 10px;
}

ul {
  padding: 0;
}

li {
  padding: 10px;
  font-weight: 300;
  font-size: x-large;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-areas: "a a d" "b b c";
}

li {
  border-bottom: 4px dashed lightgray;
}

/* title */
li div:first-child {
  grid-area: a;
}

/* unit price */
li div:nth-child(2) {
  grid-area: b;
  display: flex;
}

/* total */
li div:nth-child(3) {
  grid-area: c;
  justify-self: end;
}

/* delete button */
li div:last-child {
  grid-area: d;
  justify-self: right;
  display: flex;
  align-items: center;
}

.list-header {
  display: none;
}

@media (min-width: 500px) {
  li {
    grid-template-columns: repeat(3, auto);
    /* autoprefixer: off */
    grid-template-areas: "a a d" "b b c";
  }
}

@media (min-width: 800px) {
  li {
    grid-template-columns: 260px 200px 140px 50px;
    /* autoprefixer: off */
    grid-template-areas: "a b c d";
  }

  .list-header {
    display: grid;
    font-weight: bold;
    font-size: initial;
  }
}

/* delete button */

.delete {
  height: 24px;
  width: 24px;
  font-size: 14px;
  border-radius: 50%;
  font-weight: bold;
  background: rgba(10, 10, 10, 0.15);
  color: white;
  font-weight: bold;
  border: none;
}

.delete:hover {
  color: red;
  background: lightpink;
}

/* unit controller */

.unit-controller {
  margin-left: 10px;
}

.unit-controller button {
  min-height: 20px;
  font-size: 14px;
  border: 2px solid;
  padding: 0 6px;
  margin: 2px -1px;
  background: antiquewhite;
}

.unit-desc {
  min-width: 120px;
}
</style>
