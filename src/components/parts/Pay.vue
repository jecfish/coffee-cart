<template>
  <button class="pay" type="button" @click="pay()">Total: {{ currency(total) }}</button>
  <Contact :isShow="isShow" @close="closed()" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { currency } from '../../utils';
import Contact  from './Contact.vue';

export default defineComponent({
  name: 'Pay',
  components: { Contact },
  computed: {
    ...mapGetters({
      total: 'cart/cartTotal'
    })
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    currency,
    pay() {
      // alert("Yay, order placed. Start a new order!");
      this.isShow = true;
      this.$store.commit("cart/emptyCart");
      this.$router.push("/menu");
    },
    closed() {
      this.isShow = false;
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
