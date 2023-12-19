import { defineStore } from 'pinia';

export const useItemsStore = defineStore({
  id: 'items',
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      try {
        const response = await fetch('https://88.cx.ua/api/item/all');
        const data = await response.json();
        this.categories = data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
  },
});
