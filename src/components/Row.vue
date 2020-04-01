<template>
  <div class="row">
    <Square
      class="square"
      v-for="(square, i) of row"
      :key="i"
      :square="square"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Square from "./Square.vue";

export default Vue.extend({
  name: "Row",
  props: {
    row: Array
  },
  components: {
    Square
  },
  // mounted() {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
}
</style>
