<template>
      <div class="baseBeverage" v-if="currentBase?.id === 'b3'" :style="{backgroundColor: bases[2].color}"></div>
      <div class="baseBeverage" v-else-if="currentBase?.id === 'b2'" :style="{backgroundColor: bases[1].color}"></div>
      <div class="baseBeverage" v-else :style="{backgroundColor: bases[0].color}"></div>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { baseStore } from "../stores/beverage";
const baseState = baseStore();
const currentBase = computed(() => baseState.currentBase);
const bases = baseState.bases;
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>