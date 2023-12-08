// store.js
import { defineStore } from "pinia";
import axios from "axios";

export const useApiStore = defineStore({
  id: "api",
  state: (data) => ({
    dataArray: data,
  }),
  actions: {
    async fetchDataAndSetArray() {
      try {
        const response = await axios.get("http://88.cx.ua:3000/item/all");
        this.dataArray = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
