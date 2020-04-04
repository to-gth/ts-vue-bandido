<template>
  <div id="app-title">
    <h1 id="title">
      Bandido
    </h1>
    <div id='made-with'>
      Vue and TypeScript
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: 'AppTitle',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app-title {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  margin: 30px;
  /* margin-top: 5px;
  margin-bottom: 10px; */
}
#title {
  text-align: center;
  font-size: 1.3em;
  letter-spacing: 0.05em;
  margin: 0;
}
#made-with {
  display: inline-block;
  margin-left: 0.6em;
  font-size: 0.9em;
  font-weight: lighter;
  letter-spacing: 0.03em;
}
#made-with::before {
  content: 'made with';
}
</style>