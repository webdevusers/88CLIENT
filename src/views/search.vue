<script setup>
import TheHeader from "@/components/base/TheHeader.vue";
import TheAction from "@/components/base/TheAction.vue";
import TheFooter from "@/components/base/TheFooter.vue";

import axios from "axios";
import pc from "../components/ui/product-card.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const current = ref(1);
const loading = ref(true);
const products = ref([]);
const pageCount = ref(null);
const requestText = ref("");

const route = useRoute();

const fetch = (page) => {
  loading.value = true;
  axios
    .get(`https://88.cx.ua/api/item/search?query=${requestText.value}&page=${page}`)
    .then((response) => {
      products.value = response.data.results;
      pageCount.value = response.data.totalPages;
      loading.value = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
};

onMounted(() => {
  const currentParams = { ...route.query };
  requestText.value = currentParams.query;

  axios
    .get(`https://88.cx.ua/api/item/search?query=${requestText.value}&page=1`)
    .then((response) => {
      products.value = response.data.results;
      pageCount.value = response.data.totalPages;
      loading.value = false;
    });
});
</script>
<template>
  <TheHeader />
  <TheAction />
  <template v-if="loading">
    <div class="circle-container">
      <svg
        fill="none"
        class="circle-svg-1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="circle" cx="50" cy="50" r="45" />
      </svg>
    </div>
  </template>
  <div class="content">
    <div class="content__wrap wrap">
      <div class="content-breadcrumbs">
        <router-link to="/"> Головна / </router-link>
        <span>Пошук</span>
      </div>
      <div class="content-title">
        Пошуковий запит <span>"{{ requestText }}"</span>
      </div>
      <div class="content-items">
        <template v-for="(i, idx) in products" :key="idx">
          <pc
            :title="i.name"
            :srcImage="i.images[0].url"
            :liked="i.liked"
            :discount="i.discount"
            :oldprice="i.oldPrice"
            :price="i.price"
            :stock_quantity="i.stock_quantity"
            :ratingVoid="i.reviews.length"
            :countRating="i.reviews.length"
            :id="i._id"
          />
        </template>
      </div>
      <a-pagination
        v-model:current="current"
        :total="pageCount"
        :defaultPageSize="1"
        :pageSizeOptions="[1]"
        show-less-items
        @change="fetch(current)"
      />
    </div>
  </div>

  <TheFooter />
</template>
<style lang="scss">
.ant-pagination-options {
  display: none !important;
}

.circle-svg-1 {
  --_circle-radius: 45px;
  --_svg-width: 100px;
  --_stroke-width: calc(var(--_svg-width) - 2 * var(--_circle-radius));
  --_animation_duration: 8000ms;
  --_angle: 1.6;

  width: var(--_svg-width);

  aspect-ratio: 1/1;

  stroke: #efca00;
  stroke-width: var(--_stroke-width);

  animation: loader_1 var(--_animation_duration) infinite, spin_1 3000ms infinite linear;
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

.content {
  &__wrap {
    margin-bottom: 64px;
  }

  &-breadcrumbs {
    margin-bottom: 32px;

    a {
      color: #000;
      font-family: "88";
      font-size: 15px;
      font-weight: 400;
      line-height: 21px;
      opacity: 0.5;
    }

    span {
      color: #000;
      font-family: "88";
      font-size: 15px;
      font-weight: 400;
      line-height: 21px;
    }
  }

  &-title {
    font-size: 24px;
    font-family: "88";
    margin-bottom: 32px;

    span {
      color: #003cff;
    }
  }

  &-items {
    margin-bottom: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;

    @media (max-width: 968px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 25px;
    }

    @media (max-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }

    @media (max-width: 440px) {
      grid-gap: 10px;
    }
  }
}
</style>
