<template>
  <div id="hands">
    <div id="deck">deck remains: {{remains}}</div>
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
    remains(): number {
      return this.$store.state.deck.length
    }
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
#deck {
  border-bottom: lightgrey 3px double;
  margin: 40px;
  margin-top: 20px;
  padding: 3px;
}
</style>
