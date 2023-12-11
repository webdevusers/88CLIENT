<template>
  <swiper
    :loop="true"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    :autoplay="{ delay: 5000 }"
    :space-between="30"
    class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide" alt="" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const slides = [
      'https://firebasestorage.googleapis.com/v0/b/eshop-5be01.appspot.com/o/banner.webp?alt=media&token=971b7fb2-9008-45c8-8e40-788ceb115190',
    ]

    return {
      modules: [Navigation, Pagination, Autoplay],
      slides
    }
  }
}
</script>
<style lang="scss">
.swiper-pagination-bullet-active {
  background-color: #efca00 !important;
}
.swiper-button-prev,
.swiper-button-next {
  background: url('https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Farrow-swiper.svg?alt=media&token=2eb68d75-e1b1-433c-aef7-ab1a6999b856&_gl=1*zyd7sy*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc3MTYzNi44LjEuMTY5ODc3NDgyNC40Ni4wLjA.');
  background-repeat: no-repeat;
  &::after {
    display: none !important;
  }
}
.swiper-button-prev {
  background: url('https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Farrow-swiper-prev.svg?alt=media&token=61b6c908-461d-4d1a-907f-356a5bf5ae02&_gl=1*1p45mzr*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc3MTYzNi44LjEuMTY5ODc3NDk4OS41Ny4wLjA.') !important;
  background-repeat: no-repeat !important;
}
</style>
<style scoped lang="scss">
.mySwiper {
  max-width: 840px !important;
}
.swiper-slide {
  max-width: 840px;
  img {
    max-width: 840px;
  }
}
@media (max-width: 1024px) {
  .mySwiper {
    max-width: 100% !important;
    width: 100%;
    img {
      max-width: 840px;
      max-height: 400px;
      width: 100%;
    }
  }
}
</style>
