<template>
  <div id="app">
    <Field />
    <Hands :hands='hands' />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Field from "./components/Field.vue";
import Hands from "./components/Hands.vue";
import CardType from './library/CardType';

export default Vue.extend({
  name: "App",
  components: {
    Field,
    Hands,
  },
  computed: {
    hands(): CardType[] {
      return this.$store.state.hands
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
