import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/index.vue";
import Subcategory from "../views/subcategory.vue";
import Product from "../views/product.vue";
import CartPage from "../views/cart.vue";
import Checkout from "../views/checkout.vue";
import ThisSearch from "../views/search.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/categories",
      name: "Categories",
      component: () => import("../views/categories.vue"),
    },
    {
      name: "subcategory",
      path: "/subcategory/:query",
      component: Subcategory,
    },
    {
      name: "product",
      path: "/product/:query",
      component: Product,
    },
    // {
    //   path: '/:catchAll(.*)',
    //   component: Home
    // },
    {
      name: "cart",
      path: "/cart",
      component: CartPage,
    },
    {
      name: "checkout",
      path: "/checkout",
      component: Checkout,
    },
    {
      name: "search",
      path: "/search",
      component: ThisSearch,
      props: (route) => ({ query: route.query.query }),
    },
  ],
});

export default router;
