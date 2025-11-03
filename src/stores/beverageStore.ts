import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";

interface BeverageState {
  temps: string[];
  currentTemp: string;
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: (): BeverageState => ({
    temps: tempretures,
    currentTemp: tempretures[0],
  }),

  actions: {
    makeBeverage() {},
    showBeverage() {},
  },
});
