<template>
  <RouterView />
</template>
<script setup>
import { RouterView } from 'vue-router'

import { useCartStore } from './store/cart';

const cartStore = useCartStore();
cartStore.initializeItemsFromLocalStorage();
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
@font-face {
  font-family: '88';
  src: url('/fonts/88.ttf');
}
@media (max-width: 768px) {
  .ant-rate {
    font-size: 16px !important;
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
