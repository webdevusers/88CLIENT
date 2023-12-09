<template>
    <router-link :to="{ name: 'product', params: { query: id || 123 } }">
        <div class="card" :style="{ 'opacity': this.stock_quantity ? '' : '.3' }">
            <div class="card-image">
                <img :src="srcImage" alt="">
            </div>
            <div class="card-text">
                <div class="card-title">
                    {{ truncateTitle(title, 68) }}
                </div>
                <div class="card-rating">
                    <div class="card-rating-stars">
                        <a-rate :value="ratingVoid" />
                    </div>
                    <div class="card-rating-count">
                        <div class="card-rating-count-image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Freviews.svg?alt=media&token=65c408f6-940a-4b30-82d1-411cab6d12bf&_gl=1*15nk9h9*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODI1MDQuNDYuMC4w"
                                alt="">
                        </div>
                        <div class="card-rating-count-text">
                            {{ countRating > 100 ? "99+" : countRating }}
                        </div>
                    </div>
                </div>
                <div class="card-discount">
                    <p><strike>{{ oldprice }}₴</strike></p><span>{{ calculateDiscount() }}</span>
                </div>
                <div class="card-price">
                    {{ price }}₴
                </div>
                <div class="card-liked">
                    <template v-if="liked === true">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fliked.svg?alt=media&token=84514119-702d-4b07-9be8-009277be6779&_gl=1*14lvitn*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY5MzQ3OC4zLjEuMTY5ODY5MzUzOC42MC4wLjA."
                            alt="" /> </template>
                    <template v-else>
                        <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fliked.svg?alt=media&token=84514119-702d-4b07-9be8-009277be6779&_gl=1*14lvitn*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY5MzQ3OC4zLjEuMTY5ODY5MzUzOC42MC4wLjA."
                            alt="" /> </template>
                </div>
                <div class="addToCart" @click="addToCart(this._id)"
                    :style="{ 'opacity': this.stock_quantity ? '' : '.7', 'background': this.stock_quantity ? '' : '#00000090' }">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fcart.svg?alt=media&token=0f861b5b-c2ff-4032-89d7-ddb78c69c635&_gl=1*2p0qzv*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODg4MTU2NC4xMy4xLjE2OTg4ODMwNzcuNDQuMC4w"
                        alt="">
                </div>
            </div>
        </div>
    </router-link>
</template>
  
<script>
import axios from 'axios'

export default {
    props: {
        id: String,
        srcImage: String,
        title: String,
        liked: Boolean,
        discount: Boolean,
        oldprice: Number,
        price: Number,
        ratingVoid: Number,
        countRating: Number,
        stock_quantity: Boolean,
    },
    data() {
        return {
            rating: "",
        }
    },
    methods: {
        calculateDiscount() {
            const discountPercentage = Math.round(((this.oldprice - this.price) / this.oldprice) * 100);
            return `-${discountPercentage}%`;
        },
        addToCart(id) {
            axios.post('', {
                token: localStorage.getItem("token"),
                id
            })
        },
        truncateTitle(title, length) {
            if (title.length > length) {
                return title.substring(0, length) + '...';
            } else {
                return title;
            }
        }
    },
};
</script>
  
<style lang="scss" scoped>
.card-rating {
    margin-bottom: 16px;
}

.card-rating-count {
    padding-top: 8px;
}

a {
    text-decoration: none;
    color: #292929;
}

.anticon svg {
    width: 12px !important;
}

.card {
    position: relative;
    border-radius: 10px;
    background: #FFF;
    padding-top: 35px;
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.20);
    z-index: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: 540px) {
    }

    &-image {
        text-align: center;
        margin-bottom: 16px;

        img {
            max-width: 180px;
        }
    }

    &-text {
        padding-left: 16px;
    }

    &-title {
        font-family: '88';
        font-size: 16px;
        font-weight: 600;
        text-align: left;
        margin-bottom: 8px;
        color: #292929;
    }

    &-rating {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-right: 16px;

        &-count {
            display: flex;
            flex-direction: row;
            align-items: center;

            &-text {
                margin-left: 4px;
                font-family: '88';
                padding-bottom: 2px;
            }
        }
    }

    &-discount {
        margin-bottom: 4px;
        display: flex;
        flex-direction: row;

        p {
            margin-right: 12px;
            color: rgba(41, 41, 41, 0.50);
            font-size: 16px;
            font-family: '88';
        }

        span {
            color: #E95050;
            font-family: '88';
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }

    &-price {
        font-family: '88';
        font-size: 24px;
        color: #292929;
        font-weight: 600;
    }
}

@media (max-width: 440px) {
    .card {
        min-height: 380px;

        &-image {
            padding: 0 5px;
        }

        &-title {
            font-size: 14px;
        }
    }
}

.addToCart {
    background: #EFCA00;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 82px;
    height: 51px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 0 10px 0;
    cursor: pointer;
    user-select: none;
    z-index: 5;
}</style>
  