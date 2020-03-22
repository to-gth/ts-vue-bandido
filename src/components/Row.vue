<template>
  <div class="row">
    <SquareVue
      class="square"
      v-for="(square, i) of squares"
      :key="i"
      :square="square"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SquareVue from "./Square.vue";

export default Vue.extend({
  name: "Row",
  props: {
    squares: Array
  },
  components: {
    SquareVue
  },
  mounted() {
    
    console.log("squares", this.squares);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
}
</style>
