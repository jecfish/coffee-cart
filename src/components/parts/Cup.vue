<template>
  <div class="cup">
    <div class="cup-body">
      <div
        v-for="ingredient in item.recipe"
        :key="ingredient.name"
        :class="['ingredient', ingredient.name]"
        :style="{ height: ingredient.quantity + '%'}"
      >{{ ingredient.quantity ? ingredient.name : '' }}</div>
    </div>
    <div class="cup-handler"></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Cup',
  props: ['item']
})
</script>

<style scoped>
.cup {
  display: flex;
}

.cup-body {
  width: 200px;
  height: 180px;
  border: 6px solid black;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
}

.cup-handler {
  width: 30px;
  height: 72px;
  margin-top: 18px;
  background-color: initial;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  border: 8px solid black;
  border-left: 0;
  box-sizing: border-box;
}

.cup:hover {
  cursor: pointer;
  transform: rotate(-4deg);
}

.cup:hover .cup-body {
  border-color: goldenrod;
}

.cup:hover .cup-handler {
  border-color: goldenrod;
}

.ingredient {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* recipe */

.espresso {
  background-color: rgb(222, 98, 38);
}

.milk.foam {
  background-color: rgb(198, 218, 181);
}

.steamed.milk {
  background-color: rgb(178, 187, 140);
}

.steamed.cream {
  background-color: rgb(239, 238, 217);
}

.chocolate.syrup {
  background-color: rgb(154, 128, 69);
}

.whipped.cream {
  background-color: rgb(183, 221, 220);
}

.water {
  background-color: rgb(127, 195, 179);
}
</style>
