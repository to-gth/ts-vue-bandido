<template>
  <div class="hand">
    <RowVue :row='row' />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RowVue from '@/components/Row.vue'
import SquareFilled from '../library/SquareFilled';
import Row from '../library/Row';
import CardType from '../library/CardType';

export default Vue.extend({
  name: "Hand",
  props: {
    hand: Number
  },
  components: {
    RowVue
  },
  computed: {
    row(): Row {
      const cardType = this.hand
      console.log('cardType', CardType[cardType], cardType)
      return SquareFilled.sFrom(cardType)
    }
  },
  methods: {
  },
  // mounted() {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #hands { */
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%; */

  /* grid-auto-rows: 1fr; */
  /* grid-auto-rows: 30px; */

  /* border: lightgrey 1px solid;
  margin-top: -1px;
  margin-left: -1px; */
/* } */
</style>
