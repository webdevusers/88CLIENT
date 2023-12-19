<template>
    <div class="new">
        <div class="new-title">
            Новинки
        </div>
        <div class="items">
            <swiper :navigation="true" :modules="modules" class="mySwiper news" :slidesPerView="4" :spaceBetween="15"
                :breakpoints="breakpoints">
                <template v-for="(i, idx) in products" :key="idx">
                    <swiper-slide>
                        <pc :title="i.name" :srcImage="i.images[0].url" :liked="i.liked" :discount="i.discount"
                        :oldprice="i.oldPrice" :price="i.price" :stock_quantity="i.stock_quantity"
                        :ratingVoid="i.reviews.length" :countRating="i.reviews.length" :id="i._id" />

                    </swiper-slide>
                </template>
            </swiper>
        </div>
    </div>
</template>
  
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import pc from '@/components/ui/product-card.vue'
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
        pc
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    created() {
        axios.get('https://88.cx.ua/item/newProducts').then((response) =>
            this.products = response.data
        )
    }
};
</script>
  
  

<style lang="scss" scoped>
.news {

}
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
.swiper-slide {
    .card {
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