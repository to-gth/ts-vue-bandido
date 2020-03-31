<template>
  <div class="square">
    <div
      class="bit"
      v-for="(classname, i) of classnames"
      :key="i"
      :class="clasname"
    />
    <!-- <div class="bit blank"></div>
    <div class="bit fill"></div>
    <div class="bit blank"></div>
    <div class="bit fill"></div>
    <div class="bit fill"></div>
    <div class="bit fill"></div>
    <div class="bit blank"></div>
    <div class="bit fill"></div>
    <div class="bit blank"></div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SquareFilled from '../library/SquareFilled';
import LimbDirection from '../library/LimbDirection';
import Direction from '../foundation/Direction';
import BlankRestrict from '../library/BlankRestrict';
import SquareBlank from '../library/SquareBlank';

export default Vue.extend({
  name: "Square",
  props: {
    square: Object
  },
  // components: {},
  computed: {
    isFilled(): boolean {
      return SquareFilled.accepts(this.square)
    },
    classNamesOfFilled(): string[] {
      const filled = this.square
      const classnames = [...Array(9)].fill('wall')
      if (filled.deadlocks) classnames[4] = 'deadlock'
      if (LimbDirection.isIncludedIn(filled, Direction.Up)) classnames[1] = 'passage'
      if (LimbDirection.isIncludedIn(filled, Direction.Left)) classnames[3] = 'passage'
      if (LimbDirection.isIncludedIn(filled, Direction.Right)) classnames[5] = 'passage'
      if (LimbDirection.isIncludedIn(filled, Direction.Down)) classnames[7] = 'passage'
      return classnames
    },
    classNamesOfBlank(): string[] {
      const blank = this.square
      const classnames = [...Array(9)].fill('unfilled')
      classnames[1] = this.classnameOf(Direction.Up, blank)
      classnames[3] = this.classnameOf(Direction.Left, blank)
      classnames[5] = this.classnameOf(Direction.Right, blank)
      classnames[7] = this.classnameOf(Direction.Down, blank)
      return classnames
    },
    classNames(): string[] {
      return this.isFilled
        ? this.classNamesOfFilled
        : this.classNamesOfBlank
    },
  },
  methods: {
    classnameOf(direction: Direction, blank: SquareBlank) {
      const restrict = BlankRestrict.on(direction, blank)
      return BlankRestrict[restrict].toLowerCase()
    }
  },
  mounted() {
    console.log("square", this.square);
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
