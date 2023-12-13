<template>
  <RouterView v-if="renderComponent" />
  <template v-else>
    <TheHeader />
    <TheAction />
    <div class="circle-container">
      <svg fill="none" class="circle-svg-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle" cx="50" cy="50" r="45" />
      </svg>
    </div>
    <TheFooter />
  </template>
</template>
<script setup>
import { RouterView, useRoute } from 'vue-router'
import TheHeader from './components/base/TheHeader.vue';
import TheAction from './components/base/TheAction.vue';
import TheFooter from './components/base/TheFooter.vue';

import { useCartStore } from './store/cart';
import { useItemsStore } from './store/categories'

const cartStore = useCartStore();
cartStore.initializeItemsFromLocalStorage();

const itemsStore = useItemsStore();
itemsStore.fetchCategories();

import { nextTick, ref, watch } from 'vue';

const renderComponent = ref(true);
const route = useRoute();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

watch(() => route.fullPath, async () => {
  renderComponent.value = false;
  await nextTick();

  renderComponent.value = true;
  scrollToTop();
});
</script>
<!-- <script>
import { ref, onBeforeMount } from "vue";

export default {
  created() {
    const apiStore = useApiStore();
    const dataArray = ref([]);

    // onBeforeMount(async () => {
    //   try {
    //     await apiStore.fetchDataAndSetArray();

    //     dataArray.value = apiStore.dataArray;
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // });

    return {
      dataArray,
    };
  },
};
</script> -->
<style lang="scss">

.circle-svg-1 {
  --_circle-radius: 45px;
  --_svg-width: 100px;
  --_stroke-width: calc(var(--_svg-width) - 2 * var(--_circle-radius));
  --_animation_duration: 8000ms;
  --_angle: 1.6;

  width: var(--_svg-width);

  aspect-ratio: 1/1;

  stroke: #EFCA00;
  stroke-width: var(--_stroke-width);

  animation: loader_1 var(--_animation_duration) infinite,
    spin_1 3000ms infinite linear;
}

@keyframes loader_1 {

  /**
    small_arc == 30deg
  
    0.1666667 == small_arc / 180
    1.83333 == 2 - small_arc
  
    rotation step == 360 - (2 * small_arc) == 300
    number of animation steps == (360/small_arc + 1) == 13
    animation percent step == 100/(360/small_arc) == 8.33
  */
  0% {
    rotate: 0deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
  }

  8.33% {
    rotate: 0deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
  }

  16.66% {
    rotate: 300deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
  }

  25% {
    rotate: 300deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
  }

  33.33% {
    rotate: 600deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
  }

  41.66% {
    rotate: 600deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
  }

  50% {
    rotate: 900deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
  }

  58.33% {
    rotate: 900deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
  }

  66.66% {
    rotate: 1200deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
  }

  75% {
    rotate: 1200deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
  }

  83.33% {
    rotate: 1500deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
  }

  91.66% {
    rotate: 1500deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 1.83333333) 1000;
  }

  100% {
    rotate: 1800deg;
    stroke-dasharray: calc(var(--_circle-radius) * 3.1415 * 0.16666667) 1000;
  }
}

@keyframes spin_1 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@font-face {
  font-family: '88';
  src: url('/fonts/88.ttf');
}

@media (max-width: 768px) {
  .ant-rate {
    font-size: 16px !important;
  }
}

@media (max-width: 540px) {
  .ant-rate {
    font-size: 12px !important;
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body {
  background: #fafafa;
}

.wrap {
  max-width: 1220px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 620px) {
    padding: 0 10px;
  }
}

#hideMobile {
  @media (max-width: 968px) {
    display: none;
  }
}

#showMobile {
  display: none;

  @media (max-width: 968px) {
    display: block;
  }
}

.card {
  position: relative;
  border-radius: 10px;
  background: #FFF;
  padding-top: 35px;
  box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.20);
  z-index: 1;
  display: flex;
  flex-direction: column;

  &-image {
    text-align: center;
    margin-bottom: 16px;
  }

  &-text {
    padding-left: 16px;
  }

  &-title {
    font-family: '88';
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 8px;
  }

  &-rating {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 16px;

    &-count {
      display: flex;
      flex-direction: row;
      align-items: center;

      &-text {
        margin-left: 4px;
        font-family: '88';
        padding-bottom: 2px;
      }
    }
  }

  &-discount {
    margin-bottom: 4px;
    display: flex;
    flex-direction: row;

    p {
      margin-right: 12px;
      color: rgba(41, 41, 41, 0.50);
      font-size: 16px;
      font-family: '88';
    }

    span {
      color: #E95050;
      font-family: '88';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  &-price {
    font-family: '88';
    font-size: 24px;
    color: #292929;
    font-weight: 600;
  }
}

.addToCart {
  background: #EFCA00;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 82px;
  height: 51px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 10px 0;
  cursor: pointer;
  user-select: none;
  z-index: 5;
}
</style>
