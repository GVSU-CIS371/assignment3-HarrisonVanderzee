<template>
  <div>
  <Beverage :isIced="isIced" :creamer="creamerEnabled" :syrup="syrupEnabled"/>
    <ul>
      <li>
        <template v-for="temp in tempState.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="tempState.selectedTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in baseState.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base.name"
              :id="base.id"
              :value="base.id"
              v-model="baseState.selectedBaseId"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="cream in creamerState.creamers" :key="cream.id">
          <label>
            <input
              type="radio"
              name="cream.name"
              :id="cream.id"
              :value="cream.id"
              v-model="creamerState.selectedCreamerId"
            />
            {{ cream.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in syrupState.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup.name"
              :id="syrup.id"
              :value="syrup.id"
              v-model="syrupState.selectedSyrupId"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
    <div>
      <input 
        v-model="beverageName"
        type="text"
        placeholder="Enter Beverage Name"
      />
      <button @click="saveBeverage">Save Beverage</button>
      
      <div>
        <h3>Saved Beverages:</h3>
        <template v-for="bev in savedBeveragesState.beverages" :key="bev.name">
          <label>
            <input
              type="radio"
              name="savedBeverage"
              :value="bev.name"
              @change="loadBeverage(bev)"
            />
            {{ bev.name }}
          </label>
        </template>
      </div>
    </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { ref, computed } from 'vue'
import { tempStore, baseStore, creamerStore, syrupStore, savedBeveragesStore } from "./stores/beverage";

const tempState = tempStore();
const baseState = baseStore();
const creamerState = creamerStore();
const syrupState = syrupStore();
const savedBeveragesState = savedBeveragesStore();

const beverageName = ref('');
const isIced = computed(() => tempState.selectedTemp === 'Cold');
const creamerEnabled = computed(() => creamerState.selectedCreamerId !== 'c1');
const syrupEnabled = computed(() => syrupState.selectedSyrupId !== 's1');

const saveBeverage = () => {
  if (!beverageName.value) return;
  
  savedBeveragesState.addBeverage({
    name: beverageName.value,
    temp: tempState.selectedTemp,
    baseId: baseState.selectedBaseId,
    creamerId: creamerState.selectedCreamerId,
    syrupId: syrupState.selectedSyrupId
  });
  
  beverageName.value = '';
};

const loadBeverage = (bev: { name: string, temp: string, baseId: string, creamerId: string, syrupId: string }) => {
  tempState.setCurrentTemp(bev.temp);
  baseState.setCurrentBase(bev.baseId);
  creamerState.setCurrentCreamer(bev.creamerId);
  syrupState.setCurrentSyrup(bev.syrupId);
};

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>