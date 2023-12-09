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
console.log(items)
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
            <ul class="content-table">
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
                            {{ truncateTitle(item.name, 29) }}
                        </div>
                    </div>
                </li>
                <li class="align-left">
                    {{ item.price }} ₴
                </li>
                <li class="align-left">
                    <a-input-number :value="item.count" :min="1" :max="1000" @onChange="updateItemCount(item)" />
                </li>
                <li class="align-left">
                    {{ item.price }} ₴
                </li>
            </ul>
        </div>
    </div>
    <TheFooter />
</template>
<script>
export default {
    data() {
        return {
            value: 0,
        }
    },
    methods: {
        truncateTitle(title, length) {
            if (title.length > length) {
                return title.substring(0, length) + '...';
            } else {
                return title;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
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
}

.c4 {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: #000;
    font-family: DIN Pro;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
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

.align-left {
    text-align: center !important;
}
</style>