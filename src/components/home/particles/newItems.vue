<template>
    <div class="new">
        <div class="new-title">
            Новинки
        </div>
        <div class="items">
            <swiper :navigation="true" :modules="modules" class="mySwiper" :slidesPerView="4" :spaceBetween="30"
                :breakpoints="breakpoints">
                <template v-for="(i, idx) in products" :key="idx">
                    <swiper-slide>
                        <router-link :to="{ name: 'product', params: { query: i._id || 123 } }">

                            <div class="card" :style="{ 'filter': i.stock_quantity < 0 ? 'blur(10px)' : '' }">
                                <div class="card-image">
                                    <img :src="i.images[0].url" alt="">
                                </div>
                                <div class="card-text">
                                    <div class="card-title">
                                        {{ truncateTitle(i.name, 68) }}
                                    </div>
                                    <div class="card-rating">
                                        <div class="card-rating-stars">
                                            <a-rate :value="i.reviews.length >= 0 ? 0 : calculateReviews()" /> &nbsp;

                                        </div>
                                        <div class="card-rating-count">
                                            <div class="card-rating-count-image">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Freviews.svg?alt=media&token=65c408f6-940a-4b30-82d1-411cab6d12bf&_gl=1*15nk9h9*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODI1MDQuNDYuMC4w"
                                                    alt="">
                                            </div>
                                            <div class="card-rating-count-text">
                                                {{ i.reviews.length }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-discount">
                                        <p><strike>{{ i.oldPrice.toFixed(0) }} ₴</strike></p><span>{{ calculateDiscount(i.oldPrice,
                                            i.price) }}</span>
                                    </div>
                                    <div class="card-price">
                                        {{ i.price.toFixed(0) }}₴
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
                        </router-link>

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
        truncateTitle(title, length) {
            if (title.length > length) {
                return title.substring(0, length) + '...';
            } else {
                return title;
            }
        }
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
    created() {
        axios.get('http://88.cx.ua:3000/item/newProducts').then((response) =>
            this.products = response.data
        )
    }
};
</script>
  
  

<style lang="scss" scoped>
.card {
    border: 1px solid transparent;
    transition: .3s;

    &:hover {
        box-shadow: unset;
        border-color: #EFCA00;

        .addToCart {
            background-color: #EFCA0080;

            svg {
                stroke: #EFCA00 !important;
            }
        }

    }
}
.new {
    margin-bottom: 40px;

    &-title {
        font-size: 32px;
        text-align: center;
        font-family: '88';
        margin-bottom: 40px;
    }
}

a {
    color: #292929;
}

.card-image {
    max-width: 220px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;

    img {
        width: 100%;
    }
}

.card-rating-count {
    padding-top: 15px;
}

.card-rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}

.mySwiper {
    padding: 30px;
    border-radius: 10px;
}
</style>