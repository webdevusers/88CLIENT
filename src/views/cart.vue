<script setup>
import TheHeader from '../components/base/TheHeader.vue';
import TheAction from '../components/base/TheAction.vue';
import TheFooter from '../components/base/TheFooter.vue';

import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
const items = cartStore.items;

const updateItemCount = (item) => {
    if (item.count < 1) {
        item.count = 1;
    }
    cartStore.updateItemCount(item);
}
let loading = false;

setTimeout(() => {
    loading = false;
}, 1);

</script>
<template>
    <TheHeader />
    <TheAction />
    <div class="content">
        <div class="content__wrap wrap">
            <div class="content-breadcrumbs">
                <router-link to="/">Головна</router-link> <span>/ Кошик</span>
            </div>
            <div class="content-title">
                Кошик
            </div>
            <template v-if="items.length > 0">
                <ul class="content-table mobile-hide">
                    <ul class="c4 names">
                        <li>Продукт</li>
                        <li>Ціна</li>
                        <li>Кількість</li>
                        <li>Сума</li>
                    </ul>
                </ul>
                <ul v-for="item in items" :key="item._id" class="c4 product content-table">
                    <li>
                        <div class="row">
                            <div class="row-img">
                                <img :src="item.images[0].url" alt="Product card" @click="openModalPhoto">
                            </div>
                            <div class="row-name">
                                {{ truncateTitle(item.name, 80) }}
                            </div>
                        </div>
                    </li>
                    <li class="align-left price">
                        {{ item.price }} ₴
                    </li>
                    <li class="align-left">
                        <a-input-number v-model:value="item.count" :min="1" :max="1000" @onChange="updateItemCount(item)" />
                    </li>
                    <li class="align-left">
                        {{ item.price * item.count }} ₴
                    </li>
                </ul>
                <div class="buttons-row">
                    <router-link to="/">
                        <div class="button gray">
                            Продовжити покупки
                        </div>
                    </router-link>
                    <router-link to="/checkout">
                        <div class="button yellow">
                            Оформити замовлення
                        </div>
                    </router-link>
                </div>
            </template>
            <template v-else>
                <div class="container-non-data">
                    <div class="container-non-data__img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/eshop-5be01.appspot.com/o/data.webp?alt=media&token=d6142da0-2d7d-40ba-a5e1-cf6e2f21eb4b"
                            alt="">
                    </div>
                    <div class="container-non-data__title">
                        Ви ще не вибрали жодного товару :(
                    </div>
                    <div class="container-non-data__desc">
                        Ми будемо чекати на вас
                    </div>
                </div>
            </template>
        </div>
    </div>
    <TheFooter />
</template>
<script>
export default {
    methods: {
        truncateTitle(title, length) {
            if (title.length > length) {
                return title.substring(0, length) + '...';
            } else {
                return title;
            }
        }
    },
    // computed: {
    //     totalSum() {
    //         return this.items.reduce((sum, item) => {
    //             return sum + item.price * item.count;
    //         }, 0);
    //     }
    // }
}
</script>
<style lang="scss" scoped>
.mobile-hide {
    @media (max-width: 768px) {
        display: none;
    }
}
.price {
    @media (max-width: 768px) {
        display: none;
    }
}
.container-non-data {
    max-width: 360px;
    margin: 0 auto;
    margin-bottom: 24px;
    margin-top: -50px;

    &__title {
        text-align: center;
        font-size: 32px;
        font-family: '88';
        margin-bottom: 16px;
    }

    &__desc {
        font-size: 20px;
        font-family: '88';
        text-align: center;
    }
}

.content {
    &-breadcrumbs {
        margin-bottom: 32px;

        a {
            color: #000;
            font-family: '88';
            font-size: 15px;
            font-weight: 400;
            line-height: 21px;
            opacity: .5;
        }

        span {
            color: #000;
            font-family: DIN Pro;
            font-size: 15px;
            font-weight: 400;
            line-height: 21px;
        }
    }

    &-title {
        color: #292929;
        font-family: DIN Pro;
        font-size: 32px;
        font-weight: 400;
        letter-spacing: 1.44px;
        margin-bottom: 64px;
    }

    &-table {
        border-radius: 10px;
        background: var(--gray-white, #FFF);
        box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
        margin-bottom: 32px;
    }

    &__wrap {
        margin-bottom: 64px;
    }
}

.buttons-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        a {
            margin-bottom: 16px;
            width: 100%;
        }
        .button {
            width: 100%;
        }
    }
    a {
        color: #292929;
    }

    .button {
        display: inline-flex;
        height: 57px;
        padding: 16px 48px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        font-family: '88';
        user-select: none;
        cursor: pointer;

        &.gray {
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.50);
        }

        &.yellow {
            border-radius: 10px;
            border: 1px solid #EFCA02;
            background: #EFCA00;
            color: white;
        }
    }
}

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

.c4 {
    list-style: none;
    display: grid;
    grid-template-columns: 50% 15% 15% 20%;
    color: #000;
    font-family: DIN Pro;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
    @media (max-width: 768px) {
        padding: 15px !important;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}

.names {
    padding: 24px 20px;
    text-align: center;
}

.product {
    align-items: center;
    padding: 20px 20px;

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;

        &-img {
            margin-right: 5px;

            img {
                max-width: 80px;
            }
        }

        &-text {
            text-align: left !important;
        }
    }
}
@media (max-width: 768px) {
    .row-name {
        font-size: 16px !important;
    }
    .ant-input-number {
        width: 50px !important;
    }
}
.align-left {
    text-align: center !important;
}
</style>