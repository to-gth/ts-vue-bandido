<template>
  <div id="app" class='app-fullview app-gridder'
    @keydown.up="keyUp"
    @keydown.down="keyDown"
    @keydown.left="keyLeft"
    @keydown.right="keyRight"
    @keydown.enter="keyEnter"
    @keydown.188="keyLt"
    @keydown.190="keyGt"
    tabindex="999">
    <Field class='app-griddee-field'/>
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
    keyUp(): void {
      this.$store.dispatch('keyUp')
    },
    keyDown(): void {
      this.$store.dispatch('keyDown')
    },
    keyLeft(): void {
      this.$store.dispatch('keyLeft')
    },
    keyRight(): void {
      this.$store.dispatch('keyRight')
    },
    keyEnter(): void {
      this.$store.dispatch('keyEnter')
    },
    keyLt(): void {
      this.$store.dispatch('keyLt')
    },
    keyGt(): void {
      this.$store.dispatch('keyGt')
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
.app-griddee-field {
  grid-row: span 2;
}
</style>
