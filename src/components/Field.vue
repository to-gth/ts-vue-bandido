<template>
<div id="field" class='field-griddee'>
  <Row v-for="(row, r) of rows" :key="r" :row="row" />
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Row from "./Row.vue";
import Rows from "@/library/Rows.ts";

export default Vue.extend({
  name: "Field",
  props: {},
  components: {
    Row
  },
  computed: {
    rows(): Rows {
      return this.$store.state.rows
    }
  },
  methods: {
    // row(): Square[] {
    //   return [
    //     Square.from(false, true, false, false),
    //     Square.from(false, false, true, false),
    //     Square.from(false, true, false, false),
    //     Square.from(false, false, true, false),
    //     Square.from(false, true, false, false),
    //     Square.from(false, false, true, false)
    //   ];
    // }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#field {
/* width: 1000px;
height: 560px; */
border: 1px solid lightgrey;
/* display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: 1fr; */
}
.field-griddee {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
}
</style>
