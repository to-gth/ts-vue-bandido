<template>
  <div id="hands">
    <Hand
      v-for="(hand, i) of hands"
      :key="i"
      :isSelected='isSelected(i)'
      :hand='hand'
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hand from './Hand.vue';

export default Vue.extend({
  name: "Square",
  props: {
    hands: Array,
    hand: Number,
  },
  components: {
    Hand
  },
  computed: {
  },
  methods: {
    isSelected(index: number): boolean {
      return index === this.hand
    }
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
