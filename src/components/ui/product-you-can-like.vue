<template>
  <div class="new">
    <div class="new-title">
      Вам також може сподобатись
    </div>
    <div class="items">
      <swiper :navigation="true" :modules="modules" class="mySwiper" :slidesPerView="4" :spaceBetween="30"
              :breakpoints="breakpoints">
        <template v-for="(i, idx) in products" :key="idx">
          <swiper-slide>
            <div class="card" :style="{ 'filter': i.stock_quantity ? 'blur(10px)' : '' }">
              <div class="card-image">
                <img :src="i.src" alt="">
              </div>
              <div class="card-text">
                <div class="card-title">
                  {{ i.title }}
                </div>
                <div class="card-rating">
                  <div class="card-rating-stars">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fstar.svg?alt=media&token=3ba8de8e-cc6d-423e-a62f-e36e8b62b228&_gl=1*9mof4n*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODIzMzguNDkuMC4w"
                         alt="">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fgray-star.svg?alt=media&token=e17a15d9-2f48-466a-8077-06b9fb9673bd&_gl=1*1fvygj6*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODIzNjMuMjQuMC4w"
                         alt="">
                  </div>
                  <div class="card-rating-count">
                    <div class="card-rating-count-image">
                      <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Freviews.svg?alt=media&token=65c408f6-940a-4b30-82d1-411cab6d12bf&_gl=1*15nk9h9*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODI1MDQuNDYuMC4w"
                           alt="">
                    </div>
                    <div class="card-rating-count-text">
                      {{ i.countRating }}
                    </div>
                  </div>
                </div>
                <template v-if="i.discount === true">
                  <div class="card-discount">
                    <p><strike>{{ i.oldprice }}</strike></p><span>{{ calculateDiscount(i.oldprice,
                      i.price) }}</span>
                  </div>
                </template>
                <div class="card-price">
                  {{ i.price }}₴
                </div>
                <div class="card-liked">
                  <template v-if="i.liked === true">
                    <img src="" alt="">
                  </template>
                  <template v-else>
                    <img src="" alt="">
                  </template>
                </div>
                <div class="addToCart" @click="addToCart(idx)">
                  <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fcart.svg?alt=media&token=0f861b5b-c2ff-4032-89d7-ddb78c69c635&_gl=1*2p0qzv*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODMwNzcuNDQuMC4w"
                       alt="">
                </div>
              </div>
            </div>
          </swiper-slide>
        </template>
        <template #navigation-prev>
          <div class="swiper-button-prev"></div>
        </template>
        <template #navigation-next>
          <div class="swiper-button-next"></div>
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';

export default {
  data() {
    return {
      products: [
        {
          _id: '1',
          title: "Apple iPhone 13 128GB Midnight",
          liked: false,
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/images%2Fiphone.png?alt=media&token=563f5e5f-41b7-4ce1-ba0e-9b2c9bb8de2c&_gl=1*jp6uwn*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODM1OTIuNTYuMC4w',
          stock_quantity: false,
          discount: true,
          oldprice: 29999,
          price: 19999,
          ratingVoid: 5,
          countRating: 10,
          discountPercentage: '',
        },
        {
          _id: '2',
          title: "Apple iPhone 13 128GB Midnight",
          liked: false,
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/images%2Fiphone.png?alt=media&token=563f5e5f-41b7-4ce1-ba0e-9b2c9bb8de2c&_gl=1*jp6uwn*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODM1OTIuNTYuMC4w',
          stock_quantity: false,
          discount: true,
          oldprice: 29999,
          price: 19999,
          ratingVoid: 5,
          countRating: 10,
          discountPercentage: '',
        }, {
          _id: '3',
          title: "Apple iPhone 13 128GB Midnight",
          liked: false,
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/images%2Fiphone.png?alt=media&token=563f5e5f-41b7-4ce1-ba0e-9b2c9bb8de2c&_gl=1*jp6uwn*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODM1OTIuNTYuMC4w',
          stock_quantity: false,
          discount: true,
          oldprice: 29999,
          price: 19999,
          ratingVoid: 5,
          countRating: 10,
          discountPercentage: '',
        }, {
          _id: '4',
          title: "Apple iPhone 13 128GB Midnight",
          liked: false,
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/images%2Fiphone.png?alt=media&token=563f5e5f-41b7-4ce1-ba0e-9b2c9bb8de2c&_gl=1*jp6uwn*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODM1OTIuNTYuMC4w',
          stock_quantity: false,
          discount: true,
          oldprice: 29999,
          price: 19999,
          ratingVoid: 5,
          countRating: 10,
          discountPercentage: '',
        },
        {
          _id: '5',
          title: "Apple iPhone 13 128GB Midnight",
          liked: false,
          src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/images%2Fiphone.png?alt=media&token=563f5e5f-41b7-4ce1-ba0e-9b2c9bb8de2c&_gl=1*jp6uwn*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODM1OTIuNTYuMC4w',
          stock_quantity: false,
          discount: true,
          oldprice: 29999,
          price: 19999,
          ratingVoid: 5,
          countRating: 10,
          discountPercentage: '',
        },
        // ...other products
      ],
      breakpoints: {
        1220: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        },
        968: {
          slidesPerView: 3,
        },
        570: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    };
  },
  methods: {
    calculateDiscount(oldprice, price) {
      const discountPercentage = Math.round(((oldprice - price) / oldprice) * 100);
      return `-${discountPercentage}%`;
    },
    addToCart(idx) {
      const id = this.products[idx]._id;
      axios.post('', {
        token: localStorage.getItem("token"),
        id,
      });
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>



<style lang="scss" scoped>
.new {
  margin-bottom: 40px;
  &-title {
    font-size: 32px;
    text-align: left;
    font-family: '88';
    margin-bottom: 40px;
  }
}

.mySwiper {
  padding: 30px;
  border-radius: 10px;
  box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.20);

}
</style>