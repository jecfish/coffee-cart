<template>
  <button class="pay" type="button" @click="pay()">Total: {{ currency(total) }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { currency } from '../../utils';

export default defineComponent({
  name: 'Pay',
  computed: {
    ...mapGetters({
      total: 'cart/cartTotal'
    })
  },
  methods: {
    currency,
    pay() {
      alert("Yay, order placed. Start a new order!");
      this.$store.commit("cart/emptyCart");
      this.$router.push("/menu");
    }
  }
})
</script>

<style scoped>
button.pay {
  border: 4px solid black;
  background: antiquewhite;
  margin: 0 6px;
  font-size: xx-large;
}

button.pay:hover {
  border-color: goldenrod;
  color: goldenrod;
}
</style>
