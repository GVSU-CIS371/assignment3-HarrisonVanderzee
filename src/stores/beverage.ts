import { defineStore } from "pinia"

interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

interface CreamerType {
  id: string;
  name: string;
  color: string;
}

interface SyrupType {
  id: string;
  name: string;
  color: string;
}

export const temp = defineStore('tempStore', {
  state: () => {
    return { 
      temps: ["Hot", "Cold"] as string[],
      selectedTemp: "Cold",
    }
  },

  getters: {
    currentTemp: (state) => state.selectedTemp,
  },

  actions: {
    setCurrentTemp(temp: string) {
      this.selectedTemp = temp
    }
  }
});

export const base = defineStore('baseType', {
  state: () => {
    return {
      bases: [
        {
          id: "b1",
          name: "Black Tea",
          color: "#8B4513",
        },
        {
          id: "b2",
          name: "Green Tea",
          color: "#C8E6C9",
        },
        {
          id: "b3",
          name: "Coffee",
          color: "#6F4E37",
        },
      ] as BaseBeverageType[],
      selectedBaseId: "b1",
    };
  },
    getters: {
      getBaseById: (state) => {
        return (id: string) => state.bases.find((base) => base.id === id)
      },

      currentBase: (state) => state.bases.find((b) => b.id === state.selectedBaseId),

      returnBaseIds: (state) => {
        const returnedIds: string[] = []
        for (let index = 0; index < state.bases.length; index++) {
          const base = state.bases[index];
          returnedIds.push(base.id)
        }
        return returnedIds
      },
    },

    actions: {
      setCurrentBase(id: string) {
        this.selectedBaseId = id
      },
    },
});

export const creamer = defineStore('creamerType', {
  state: () => {
    return {
      creamers: [
        {
      id: "c1",
      name: "No Cream",
      color: "transparent",
    },
    {
      id: "c2",
      name: "Milk",
      color: "AliceBlue",
    },
    {
      id: "c3",
      name: "Cream",
      color: "#F5F5DC",
    },
    {
      id: "c4",
      name: "Half & Half",
      color: "#FFFACD",
    },
      ] as CreamerType[],
      selectedCreamerId: "c1",
    };
  },
  getters: {
    getCreamerById: (state) => {
      return (id: string) => state.creamers.find((creamer) => creamer.id === id)
    },

    currentCreamer: (state) => state.creamers.find((c) => c.id === state.selectedCreamerId),
  },

  actions: {
    setCurrentCreamer(id: string) {
      this.selectedCreamerId = id
    }
  },
});

export const syrup = defineStore('syrupType', {
  state: () => {
    return {
      syrups: [
        {
      id: "s1",
      name: "No Syrup",
      color: "#c6c6c6",
    },
    {
      id: "s2",
      name: "Vanilla",
      color: "#FFEFD5",
    },
    {
      id: "s3",
      name: "Caramel",
      color: "#DAA520",
    },
    {
      id: "s4",
      name: "Hazelnut",
      color: "#6B4423",
    },
      ] as SyrupType[],
      selectedSyrupId: "s1",
    };
  },
  getters: {
    getSyrupById: (state) => {
      return (id: string) => state.syrups.find((syrup) => syrup.id === id)
    },

    currentSyrup: (state) => state.syrups.find((s) => s.id === state.selectedSyrupId),
  },

  actions: {
    setCurrentSyrup(id: string) {
      this.selectedSyrupId = id
    },
  },
});

interface SavedBeverage {
  name: string;
  temp: string;
  baseId: string;
  creamerId: string;
  syrupId: string;
}

export const savedBeverages = defineStore('savedBeverages', {
  state: () => {
    return {
      beverages: [] as SavedBeverage[],
    };
  },

  getters: {
    getBeverages: (state) => state.beverages,
    getBeverageByName: (state) => {
      return (name: string) => state.beverages.find((beverage) => beverage.name === name)
    }
  },

  actions: {
    addBeverage(beverage: SavedBeverage) {
      this.beverages.push(beverage)
    },
  },
});

export type { BaseBeverageType, CreamerType, SyrupType };

export { temp as tempStore };
export { base as baseStore };
export { creamer as creamerStore };
export { syrup as syrupStore };
export { savedBeverages as savedBeveragesStore };