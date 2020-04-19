<template>
  <div class="hand hand-gridder" :class='{selected: isSelected}'>
    <RowVue :row='row' />
    <div class="cursor cursor-triangle"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RowVue from '@/components/Row.vue'
import SquareFill from '../library/SquareFill';
import Row from '../library/Row';

export default Vue.extend({
  name: "Hand",
  props: {
    hand: Number,
    isSelected: Boolean,
  },
  components: {
    RowVue
  },
  computed: {
    row(): Row {
      const cardType = this.hand
      return SquareFill.sFrom(cardType)
    }
  },
  methods: {
  },
  // mounted() {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hand {
  border: lightgrey 1px solid;
  margin: 10px;
}

.cursor {
  width: 0;
  height: 0;
}
.hand.selected > .cursor-triangle {
  border-right: 16px solid grey;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.hand-gridder {
  display: grid;
  grid-template-columns: 1fr 30px;
  justify-content: center;
  align-items: center;
}
</style>
