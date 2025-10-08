<template>
  <div class="froth" v-if="currentCreamer?.id === 'c1'" :style="{backgroundColor: creamers[0].color}">
    <div v-for=" in 5" class="foam"></div>
  </div>
  <div class="froth" v-else-if="currentCreamer?.id === 'c2'" :style="{backgroundColor: creamers[1].color}">
    <div v-for=" in 5" class="foam"></div>
  </div>
  <div class="froth" v-else-if="currentCreamer?.id === 'c3'" :style="{backgroundColor: creamers[2].color}">
    <div v-for=" in 5" class="foam"></div>
  </div>
  <div class="froth" v-else="currentCreamer?.id === 'c4'" :style="{backgroundColor: creamers[3].color}">
    <div v-for=" in 5" class="foam"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { creamerStore } from "../stores/beverage";
const creamerState = creamerStore();
const currentCreamer = computed(() => creamerState.currentCreamer);
const creamers = creamerState.creamers;
</script>
<style lang="scss" scoped>
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  background-color: #c6c6c6;
  animation: pour-tea 2s 2s forwards;
}
.foam {
  display: block;
  background: #e4e0d2;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
}

.foam:nth-child(1) {
  top: 0px;
  left: -3px;
}

.foam:nth-child(2) {
  top: 0px;
  left: 55px;
}

.foam:nth-child(3) {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  top: 3px;
  left: 30px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  border-radius: 45px;
  top: 5px;
  right: -2px;
}

.foam:nth-child(5) {
  top: 2px;
  right: 10px;
}
</style>