import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),

  actions: {
    addItem(product) {
      const existingItem = this.items.find((item) => item._id === product._id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        this.items.push({ ...product, count: 1 });
      }
    },
    updateItemCount(item) {
      const index = this.items.findIndex((i) => i._id === item._id);
      if (index !== -1) {
        this.items[index].count = item.count;
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },

    clearCart() {
      this.items = [];
    },
    initializeItemsFromLocalStorage() {
      const userCart = localStorage.getItem("userCart");
      if (userCart) {
        const parsedCart = JSON.parse(userCart);
        this.items = parsedCart.map((item) => ({ ...item, count: 1 }));
      }
    },
  },
});