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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                        <path d="M0.751468 0.0313749C0.469667 0.12409 0.216047 0.346606 0.0751468 0.624751C0.00939335 0.757643 0 0.822543 0 1.10378C0 1.40047 0.00626223 1.44373 0.0876712 1.59826C0.162818 1.73733 0.845401 2.42651 3.73542 5.28213C6.69119 8.20265 7.32681 8.81457 7.48337 8.89801C7.66184 8.99382 7.68689 9 8 9C8.31311 9 8.33816 8.99382 8.51663 8.89801C8.67632 8.81457 9.30568 8.20574 12.2771 5.26668C15.1108 2.46669 15.8622 1.70643 15.9249 1.58281C15.9906 1.44991 16 1.38501 16 1.10378C16 0.807091 15.9906 0.763824 15.9092 0.603117C15.7996 0.389874 15.618 0.210625 15.3894 0.0931854C15.2329 0.0159225 15.1859 0.00665092 14.9041 0.00665092C14.3562 0.00665092 14.6693 -0.262222 11.1249 3.23313L8 6.31127L4.87828 3.23313C1.3683 -0.222046 1.64697 0.0159225 1.14286 0.000470161C0.986301 -0.00261974 0.826614 0.00974178 0.751468 0.0313749Z" fill="white"/>
                      </svg>
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

    padding: 15px 0;
    border-radius: 10px;
    font-size: 18px;
    font-family: '88';
    cursor: pointer;
    user-select: none;
    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: white;
    }
    &-text {
        margin-right: 10px;
    }

    &-img {
        svg {
            transform: rotate(270deg);
        }
    }
}

.items {
    margin-bottom: 40px;
    padding-top: 40px;
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
}</style>