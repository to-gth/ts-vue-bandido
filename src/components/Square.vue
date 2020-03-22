<template>
  <div class="square">
    <div class="bit blank"></div>
    <div class="bit fill"></div>
    <div class="bit blank"></div>
    <div class="bit fill"></div>
    <div class="bit fill"></div>
    <div class="bit fill"></div>
    <div class="bit blank"></div>
    <div class="bit fill"></div>
    <div class="bit blank"></div>
    <!-- <div class="bits-row">
      <div class="bit blank"></div>
      <div class="bit fill"></div>
      <div class="bit blank"></div>
    </div>
    <div class="bits-row">
      <div class="bit fill"></div>
      <div class="bit fill"></div>
      <div class="bit fill"></div>
    </div>
    <div class="bits-row">
      <div class="bit blank"></div>
      <div class="bit fill"></div>
      <div class="bit blank"></div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Square",
  props: {
    // msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  /* grid-auto-rows: 1fr; */
  /* grid-auto-rows: 30px; */
}
.bit {
  margin: 0;
  border: 0;
  padding: 0;
  /* margin-left: -1px; */
  padding-bottom: 100%;
}
.blank {
  background-color: whitesmoke;
}
.fill {
  background-color: steelblue;
}
</style>
