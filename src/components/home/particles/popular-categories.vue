<template>
    <div class="popular">
        <div class="popular-title">
            Популярні товари
        </div>
        <div class="popular-categories">
            <ul>
                <li v-for="(i, idx) in updatedCategories" :key="idx" @click="goCategories(i._id, i.name)"
                    :class="{ 'active': choosenCategory === i.name }">
                    <div class="popular-categories-img">
                        <img :src="i.icon" alt="">
                    </div>
                    <div class="popular-categories-text">
                        <p>{{ i.name }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <template v-if="products.length > 0">
            <div class="items">

                <template v-for="(i, idx) in products" :key="idx">
                    <pc :title="i.name" :srcImage="i.images[0].url" :liked="i.liked" :discount="i.discount"
                        :oldprice="i.oldPrice" :price="i.price" :stock_quantity="i.stock_quantity"
                        :ratingVoid="i.reviews.length" :countRating="i.reviews.length" :id="i._id" />
                </template>
            </div>

        </template>
        <template v-else>
            <div class="container-non-data">
                <div class="container-non-data__img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/eshop-5be01.appspot.com/o/data.webp?alt=media&token=d6142da0-2d7d-40ba-a5e1-cf6e2f21eb4b"
                        alt="">
                </div>
                <div class="container-non-data__title">
                    Товарів ще немає :(
                </div>
                <div class="container-non-data__desc">
                    Але незабаром з'явиться, будемо чекати вас знову
                </div>
            </div>
        </template>

        <div class="btn btn-show">
            <router-link :to="{ name: 'subcategory', params: { query: choosenCategoryid || 123 } }">
                <div class="btn-text">
                    Перейти до усіх товарів
                </div>
                <div class="btn-img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Farrow.svg?alt=media&token=cedfac15-83e9-4e8a-9512-f6585e3b10b1&_gl=1*1vik1ed*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODkzMjI2My4xNC4xLjE2OTg5MzIyOTYuMjcuMC4w"
                        alt="">
                </div>
            </router-link>
        </div>
    </div>
</template>
<script setup>
import pc from '../../ui/product-card.vue'
</script>
<script>
import axios from 'axios';
import { onBeforeMount } from "vue";
// import { useApiStore } from "@/store/store";

export default {
    props: {
        updatedCategories: Array
    },
    data() {
        return {
            products: [
            ],
            choosenCategory: '',
            choosenCategoryid: ''
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
        getItems(id) {
            axios.post('http://localhost:8081/items/category/getCategory', {
                id,
                page: this.page
            }).then((response) => {
                this.products = []
                response.data = this.products;
            })
            console.log(id)
        },
        goCategories(id, name) {
            axios.post(`http://88.cx.ua:3000/item/getPopularProducts`, {
                id
            }).then((response) => {
                this.products = [];
                this.products = response.data
            })
            this.choosenCategory = name;
            this.choosenCategoryid = id;
        }
    },
    created() {
        this.goCategories("657397902f4f477d3f0a81d1", "Автомобільна тематика")
    }
};
</script>

<style lang="scss" scoped>
.container-non-data {
    max-width: 360px;
    margin: 0 auto;
    margin-bottom: 24px;

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

.popular {
    margin-bottom: 40px;

    &-title {
        font-size: 32px;
        text-align: center;
        font-family: '88';
        margin-bottom: 40px;
    }

    &-categories {
        ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            grid-gap: 20px;
            max-height: 100px;

            @media (max-width: 768px) {
                overflow-x: auto;
                flex-direction: column;
            }

            li {
                cursor: pointer;
                user-select: none;
                display: flex;
                flex-direction: row;
                align-items: center;
                transition: .7s;
                padding: 7.5px 6px;
                border-radius: 10px;
                transition: .3s;

                &:hover {
                    background: #EFCA00;

                }

                &.active {
                    background: #EFCA00;
                }
            }
        }

        &-img {
            max-width: 24px;
            width: 100%;
            margin-right: 20px;

            img {
                width: 100%;
            }
        }

        &-text {
            color: #292929;
            font-family: '88';
            font-size: 20px;
            font-weight: 500;

            @media (max-width: 968px) {
                font-size: 16px;
            }

            @media (max-width: 620px) {
                font-size: 14px;
            }
        }
    }
}

.btn {
    background: #EFCA00;
    margin: 0 auto;
    max-width: 250px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 15px 0;
    border-radius: 10px;
    font-size: 18px;
    font-family: '88';
    cursor: pointer;
    user-select: none;
    &-text {
        margin-right: 10px;
    }

    &-img {
        img {
            transform: rotate(270deg);
        }
    }
}

.items {
    margin-bottom: 40px;
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 45px;

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
}</style>