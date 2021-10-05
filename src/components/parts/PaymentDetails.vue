<template>
  <div class="modal" v-show="isShow">
    <div class="modal-content">
      <!-- <span class="close" @click="closeModal()">&times;</span> -->
      <section>
        <h1>Payment details</h1>
        <button class="close" @click="closeModal()">&times;</button>
      </section>
      <p>We will send you a payment link via email.</p>
      <form @submit="submit">
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" v-model="name" required>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email" required>
        </div>
        <div>
          <input type="checkbox" name="promotion" id="promotion">
          <label for="promotion">I would like to receive order updates and promotional messages.</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PaymentDetails',
  props: ['isShow'],
  emits: ['close'],
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    resetForm() {
      this.name = '';
      this.email = '';
    },
    submit(e: Event) {
      if (this.name && this.email) {
        this.resetForm();
        this.closeModal();

        this.$store.commit('cart/emptyCart');
        this.$router.push('/');
        this.$snackbar.showMessage({ content: 'Thanks for your purchase. Please check your email for payment.', color: 'success' });
      }

      // load big script
      const existing = document.getElementById("bigcode");
      if (existing) existing.remove();

      const newscript = document.createElement('script');
      newscript.id = "bigcode";
      newscript.type = 'text/javascript';
      newscript.async = true;
      newscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.js'; // bigbigcode2.js'; //
      (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
      

      e.preventDefault();
    }
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
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding-inline: 20px;
  padding-block: 10px;
  /* border: 1px solid #888; */
  width: 80%;
  max-width: 600px;
  min-width: 300px;
  border: 4px solid black;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  border: none;
  background: transparent;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

h1 {
  margin-block: 16px;
}

section {
  display: flex;
  justify-content: space-between;
}

form label {
  margin-inline-end: 10px;
  padding-block: 10px;
}

form input[type="checkbox"] {
  margin-inline-end: 10px;
}

form input[type="email"], form input[type="text"] {
  padding-block: 4px;
  padding-inline: 10px;
}

form div {
  padding-block: 10px;
}

form div:last-of-type {
  display: flex;
  justify-content: flex-end;
}

form button {
  border: 4px solid black;
  background: antiquewhite;
  margin: 0 6px;
  font-size: x-large;
}

form button:hover {
  border-color: goldenrod;
  color: goldenrod;
}

p {
  margin-block: 10px;
}

</style>
