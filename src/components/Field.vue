<template>
<div id="field">
  <Row v-for="(row, r) of rows" :key="r" :squares="row" />
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Row from "./Row.vue";
import Square from "@/library/Square.ts";

export default Vue.extend({
name: "Field",
props: {},
components: {
  Row
},
computed: {
  rows(): Square[][] {
    return [this.row(), this.row(), this.row(), this.row()];
  }
},
methods: {
  row(): Square[] {
    return [
      Square.from(false, true, false, false),
      Square.from(false, false, true, false),
      Square.from(false, true, false, false),
      Square.from(false, false, true, false),
      Square.from(false, true, false, false),
      Square.from(false, false, true, false)
    ];
  }
}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#field {
width: 1000px;
height: 560px;
border: 1px solid red;
/* display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: 1fr; */
}
</style>
