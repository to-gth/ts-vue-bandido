<template>
  <div class="hand hand-gridder">
    <RowVue :row='row' />
    <div class="cursor" :class='{selected: isSelected}'></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RowVue from '@/components/Row.vue'
import SquareFilled from '../library/SquareFilled';
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
.hand {
  border: lightgrey 1px solid;
  margin: 10px;
}
.cursor.selected::before {
  content: '<';
}

.hand-gridder {
  display: grid;
  grid-template-columns: 1fr 30px;
}
</style>
