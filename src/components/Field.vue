<template>
<div id="field" class='field-griddee'>
  <Row v-for="(row, r) of rows" :key="r" :row="row" :floatingLefts='floatingLeftsIn(r)'/>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Row from "./Row.vue";
import Rows from "@/library/Rows.ts";
import Address from '../library/Address';

export default Vue.extend({
  name: "Field",
  props: {},
  components: {
    Row,
  },
  computed: {
    rows(): Rows {
      // return this.$store.state.rows
      return this.$store.getters.rowsWithFloating
    }
  },
  methods: {
    floatingLeftFor({ left, top }: Address, r: number): number[] {
      return (r === top) ? [left] : []
    },
    floatingLeftsIn(r: number): number[] {
      if (!this.$store.getters.isFloatingMode) {
        return []
      }
      const { primary, secondary } =  this.$store.getters.floatingAddressPair
      const lefts = [
        ...this.floatingLeftFor(primary, r),
        ...this.floatingLeftFor(secondary, r),
      ]
      return lefts
    },
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
</style>
