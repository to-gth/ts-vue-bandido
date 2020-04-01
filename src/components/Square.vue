<template>
  <div class="square" :class='[side, limb]'>
    <div
      class="bit"
      v-for="(classname, i) of classnames"
      :key="i"
      :class="classname"
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
import Limb from '../library/Limb';
import Limbor from '../library/Limbor';

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
    isBlank(): boolean {
      return !this.isFilled
    },
    side(): string {
      if (this.isFilled) return  ''
      return 'side-' + LimbDirection.nameFor(this.square.side).toLowerCase()
    },
    limb(): string {
      const names = Limbor.namesFrom(this.square.limb)
      return names.map((name) => 'limb-' + name).join(' ')
    },
    // isFilled(): boolean {
    //   return SquareFilled.accepts(this.square)
    // },
    // classnamesOfFilled(): string[] {
    //   const filled = this.square

    //   const classnames = [...Array(9)].fill('wall')
    //   classnames[4] = filled.deadlocks ? 'deadlock' : 'passage'
    //   if (LimbDirection.isIncludedIn(filled, Direction.Up)) classnames[1] = 'passage'
    //   if (LimbDirection.isIncludedIn(filled, Direction.Left)) classnames[3] = 'passage'
    //   if (LimbDirection.isIncludedIn(filled, Direction.Right)) classnames[5] = 'passage'
    //   if (LimbDirection.isIncludedIn(filled, Direction.Down)) classnames[7] = 'passage'

    //   // const index = this.indexOfCorridorOf(filled.side)
    //   // classnames[index] = 'passage'
    //   return classnames
    // },
    // classnamesOfBlank(): string[] {
    //   const blank = this.square
    //   const classnames = [...Array(9)].fill('unfilled')
    //   classnames[1] = this.classnameOf(Direction.Up, blank)
    //   classnames[3] = this.classnameOf(Direction.Left, blank)
    //   classnames[5] = this.classnameOf(Direction.Right, blank)
    //   classnames[7] = this.classnameOf(Direction.Down, blank)
    //   return classnames
    // },
    // classnames(): string[] {
    //   return this.isFilled
    //     ? this.classnamesOfFilled
    //     : this.classnamesOfBlank
    // },
  },
  methods: {
    classnameOf(direction: Direction, blank: SquareBlank) {
      const restrict = BlankRestrict.on(direction, blank)
      return BlankRestrict[restrict].toLowerCase()
    },
    // indexOfCorridorOf(side: Direction): number {
    //   switch (side) {
    //     case Direction.Up: return 7
    //     case Direction.Left: return 5
    //     case Direction.Right: return 3
    //     case Direction.Down : return 1
    //     default: throw new ApplicationError(`Failed to get index-of-corridor from: ${side}`)
    //   }
    // },
  },
  // mounted() {}
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
  border: lightgrey 1px solid;
  margin-top: -1px;
  margin-left: -1px;
}
.bit {
  margin: 0;
  border: 0;
  padding: 0;
  /* margin-left: -1px; */
  padding-bottom: 100%;
}

.wall {
  background-color: brown;
}
.deadlock {
  background-color: orangered;
}
.unfilled {
  background-color: whitesmoke;
}
.free {
  background-color: whitesmoke;
}
.open {
  background-color: orange;
}
.close {
  background-color: grey;
}
.side-left .bit:nth-child(6),
.side-top .bit:nth-child(8),
.side-right .bit:nth-child(4),
.side-bottom .bit:nth-child(2),
.passage {
  background-color: yellow;
}
</style>
