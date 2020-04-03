<template>
  <div class="hand">
    <Row :row='row' />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Row from '@/components/Row.vue'

export default Vue.extend({
  name: "Hand",
  props: {
    hand: Object
  },
  components: {
    Row
  },
  computed: {
    // row(): Row {

    //   return 
    // }
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
