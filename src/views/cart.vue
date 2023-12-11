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
                    <li class="deleteIcon" @click="removeItem(item)">
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            stroke="#292929">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
                                    stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
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
import { useCartStore } from '@/store/cart';
export default {
    methods: {
        truncateTitle(title, length) {
            if (title.length > length) {
                return title.substring(0, length) + '...';
            } else {
                return title;
            }
        },
        removeItem(item) {
            const cartStore = useCartStore();

            // Remove item from cartStore
            cartStore.removeItem(item);

            // Remove item from local storage
            const localUserCart = JSON.parse(window.localStorage.getItem("userCart"));

            if (localUserCart) {
                const updatedCart = localUserCart.filter(cartItem => cartItem._id !== item._id);
                window.localStorage.setItem("userCart", JSON.stringify(updatedCart));
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
            font-family: '88';
            font-size: 15px;
            font-weight: 400;
            line-height: 21px;
        }
    }

    &-title {
        color: #292929;
        font-family: '88';
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
    position: relative;

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

.deleteIcon {
    position: absolute;
    max-width: 32px;
    right: 15px;

    svg {
        max-width: 32px;
    }
    @media (max-width: 768px) {
        right: 100px !important;
        bottom: -5px;
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