<template>
  <div id="app" class='app-fullview app-gridder'
    @keydown.up="handPrev"
    @keydown.down="handNext"
    tabindex="999">
    <Field />
    <AppTitle />
    <Hands :hands='hands' :hand='hand' />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppTitle from "./components/AppTitle.vue";
import Field from "./components/Field.vue";
import Hands from "./components/Hands.vue";
import CardType from './library/CardType';

export default Vue.extend({
  name: "App",
  components: {
    AppTitle,
    Field,
    Hands,
  },
  computed: {
    hands(): CardType[] {
      return this.$store.state.hands
    },
    hand(): CardType[] {
      return this.$store.state.hand
    },
  },
  methods: {
    handPrev(): void {
      this.$store.dispatch('handPrev')
    },
    handNext(): void {
      this.$store.dispatch('handNext')
    },
  },
  mounted() {
    const el = document.getElementById('app')
    el ? el.focus() : null
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 0;
  padding: 20px;

  outline: 0;
}
.app-fullview {
  box-sizing: border-box;
  /* border: 10px solid lightgray; */
  width: 100%;
  height: 95vh;
}

.app-gridder {
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-template-columns: 1fr 200px;
  gap: 5px;
}
</style>
