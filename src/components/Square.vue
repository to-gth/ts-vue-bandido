<template>
  <div class="square square-gridder" :class='[which, side, limb, restrict]'>
    <!-- <div
      class="bit"
      v-for="(classname, i) of classnames"
      :key="i"
      :class="classname"
    /> -->
    <div class="bit bit-square"></div>
    <div class="bit bit-square"></div>
    <div class="bit bit-square"></div>
    <div class="bit bit-square"></div>
    <div class="bit bit-square"></div>
    <div class="bit bit-square"></div>
    <div class="bit bit-square"></div>
    <div class="bit bit-square"></div>
    <div class="bit bit-square"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SquareFill from '../library/SquareFill';
import LimbDirection from '../library/LimbDirection';
import Direction from '../foundation/Direction';
import RoomRestrict from '../library/RoomRestrict';
import SquareRoom from '../library/SquareRoom';
import Limbor from '../library/Limbor';

export default Vue.extend({
  name: "Square",
  props: {
    square: Object
  },
  // components: {},
  computed: {
    isFill(): boolean {
      return SquareFill.accepts(this.square)
    },
    isBlank(): boolean {
      return !this.isFill
    },
    which(): string {
      return 'square-' + (this.isFill ? 'Fill' : 'blank')
    },
    side(): string {
      if (this.isBlank) return  ''
      return 'side-' + LimbDirection.nameFor(this.square.side).toLowerCase()
    },
    limb(): string {
      if (this.isBlank) return  ''
      const names = Limbor.namesFrom(this.square.limb)
      return names.map((name) => 'limb-' + name.toLowerCase()).join(' ')
    },
    restrict(): string {
      if (this.isFill) return  ''
      return RoomRestrict
        .namesFrom(this.square)
        .map(name => 'restrict-' + name)
        .join(' ')
    },
    // isFill(): boolean {
    //   return SquareFill.accepts(this.square)
    // },
    // classnamesOfFill(): string[] {
    //   const Fill = this.square

    //   const classnames = [...Array(9)].fill('wall')
    //   classnames[4] = Fill.deadlocks ? 'deadlock' : 'passage'
    //   if (LimbDirection.isIncludedIn(Fill, Direction.Up)) classnames[1] = 'passage'
    //   if (LimbDirection.isIncludedIn(Fill, Direction.Left)) classnames[3] = 'passage'
    //   if (LimbDirection.isIncludedIn(Fill, Direction.Right)) classnames[5] = 'passage'
    //   if (LimbDirection.isIncludedIn(Fill, Direction.Down)) classnames[7] = 'passage'

    //   // const index = this.indexOfCorridorOf(Fill.side)
    //   // classnames[index] = 'passage'
    //   return classnames
    // },
    // classnamesOfBlank(): string[] {
    //   const blank = this.square
    //   const classnames = [...Array(9)].fill('unFill')
    //   classnames[1] = this.classnameOf(Direction.Up, blank)
    //   classnames[3] = this.classnameOf(Direction.Left, blank)
    //   classnames[5] = this.classnameOf(Direction.Right, blank)
    //   classnames[7] = this.classnameOf(Direction.Down, blank)
    //   return classnames
    // },
    // classnames(): string[] {
    //   return this.isFill
    //     ? this.classnamesOfFill
    //     : this.classnamesOfBlank
    // },
  },
  methods: {
    classnameOf(direction: Direction, blank: SquareRoom) {
      const restrict = RoomRestrict.on(direction, blank)
      return RoomRestrict[restrict].toLowerCase()
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
  /* height: 100%; */
  border: lightgrey 1px solid;
  margin-top: -1px;
  margin-left: -1px;
}
.square-gridder {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-auto-rows: 1fr; */
  /* grid-auto-rows: 30px; */
}

.bit {
  margin: 0;
  border: 0;
  padding: 0;
}
.bit-square {
  padding-bottom: 100%;
}

.square-Fill .bit {
  background-color: brown; /* .wall */
}
.square-blank .bit {
  background-color: whitesmoke; /* .unFill */
}

.side-left.limb-r .bit:nth-child(2),
.side-up.limb-h .bit:nth-child(2),
.side-right.limb-l .bit:nth-child(2),
.side-down .bit:nth-child(2),

.side-left.limb-h .bit:nth-child(4),
.side-up.limb-l .bit:nth-child(4),
.side-right .bit:nth-child(4),
.side-down.limb-r .bit:nth-child(4),

.side-left .bit:nth-child(6),
.side-up.limb-r .bit:nth-child(6),
.side-right.limb-h .bit:nth-child(6),
.side-down.limb-l .bit:nth-child(6),

.side-left.limb-l .bit:nth-child(8),
.side-up .bit:nth-child(8),
.side-right.limb-r .bit:nth-child(8),
.side-down.limb-h .bit:nth-child(8),

.square-Fill .bit:nth-child(5) { /* .passage */
  background-color: yellow;
}

.limb-d .bit:nth-child(5) {
  background-color: orangered;
}

/* .free { background-color: whitesmoke; } */

.restrict-top-open .bit:nth-child(2),
.restrict-left-open .bit:nth-child(4),
.restrict-right-open .bit:nth-child(6),
.restrict-bottom-open .bit:nth-child(8) {
  background-color: orange;
}
.restrict-top-close .bit:nth-child(2),
.restrict-left-close .bit:nth-child(4),
.restrict-right-close .bit:nth-child(6),
.restrict-bottom-close .bit:nth-child(8) {
  background-color: lightgray;
}
</style>
