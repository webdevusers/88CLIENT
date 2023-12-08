<template>
    <div class="popular">
        <div class="popular-title">
            Популярні товари
        </div>
        <div class="popular-categories">
            <ul>
                <li v-for="(i, idx) in updatedCategories" :key="idx">
                    <div class="popular-categories-img">
                        <img :src="i.icon" alt="">
                    </div>
                    <div class="popular-categories-text">
                        <p>{{ i.name }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="items">
            <template v-for="(i, idx) in products" :key="idx">
                <pc :title="i.title" :srcImage="i.src" :liked="i.liked" :discount="i.discount" :oldprice="i.oldprice"
                    :price="i.price" :stock_quantity="i.stock_quantity" :ratingVoid="i.ratingVoid"
                    :countRating="i.countRating" />
            </template>
        </div>
        <div class="btn btn-show" @click="goCategories()">
            <div class="btn-text">
                Перейти до усіх товарів
            </div>
            <div class="btn-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Farrow.svg?alt=media&token=cedfac15-83e9-4e8a-9512-f6585e3b10b1&_gl=1*1vik1ed*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODkzMjI2My4xNC4xLjE2OTg5MzIyOTYuMjcuMC4w" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
import pc from '../../ui/product-card.vue'
</script>
<script>
import axios from 'axios';
import { onBeforeMount } from "vue";
import { useApiStore } from "@/store/store";

export default {
    props: {
        updatedCategories: Array
    },
    data() {
        return {
            products: [
                {
                    _id: '1',
                    title: "Apple iPhone 13 128GB Midnight",
                    liked: false,
                    src: 'https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/images%2Fiphone.png?alt=media&token=563f5e5f-41b7-4ce1-ba0e-9b2c9bb8de2c&_gl=1*jp6uwn*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODM1OTIuNTYuMC4w',
                    stock_quantity: true,
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
                {
                    _id: '6',
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
                    _id: '7',
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
                    _id: '8',
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
            page: 1,
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
        goCategories() {
            // 
        }
    },
};
</script>

<style lang="scss" scoped>
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
                padding: 7.5px 5px;
                border-radius: 10px;

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
}
</style>