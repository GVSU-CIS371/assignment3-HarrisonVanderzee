<template>
  <div class="syrup" v-if="currentSyrup?.id === 's1'" :style="{backgroundColor: syrups[0].color}"></div>
  <div class="syrup" v-if="currentSyrup?.id === 's2'" :style="{backgroundColor: syrups[1].color}"></div>
  <div class="syrup" v-if="currentSyrup?.id === 's3'" :style="{backgroundColor: syrups[2].color}"></div>
  <div class="syrup" v-if="currentSyrup?.id === 's4'" :style="{backgroundColor: syrups[3].color}"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { syrupStore } from "../stores/beverage";
const syrupState = syrupStore();
const currentSyrup = computed(() => syrupState.currentSyrup);
const syrups = syrupState.syrups;
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>