<template>
    <div class="card" :style="{ 'opacity': this.stock_quantity ? '' : '.3' }">
        <router-link :to="{ name: 'product', params: { query: id || 123 } }">

            <div class="card-image">
                <img :src="srcImage" alt="">
            </div>
            <div class="card-text">
                <div class="card-title">
                    {{ truncateTitle(title, 60) }}
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
                    <p>{{ oldprice.toFixed(0) }}₴</p><span>{{ calculateDiscount() }}</span>
                </div>
                <div class="card-price">
                    {{ price.toFixed(0) }}₴
                </div>
                <div class="addToCart"
                    :style="{ 'opacity': this.stock_quantity ? '' : '.7', 'background': this.stock_quantity ? '' : '#00000090' }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M0.575428 0.794411L0.575343 0.794357C0.657749 0.660957 0.801512 0.557903 0.943024 0.521111C0.946876 0.521173 0.977318 0.517908 1.05065 0.514456C1.13502 0.510485 1.24827 0.507217 1.38373 0.504801C1.6535 0.499992 2.00016 0.498753 2.35778 0.501175C3.06935 0.511158 3.4218 0.522699 3.65995 0.558784C3.86061 0.589188 3.97138 0.634823 4.19889 0.756144C4.29673 0.809076 4.44964 0.931034 4.60754 1.09916C4.7643 1.26608 4.88682 1.43684 4.9462 1.55962L4.94917 1.56575L4.94921 1.56573C5.03989 1.74685 5.08261 1.84953 5.12403 2.02211C5.1707 2.21658 5.21444 2.49565 5.29038 3.03254L5.29064 3.03441C5.35529 3.47939 5.42294 3.92634 5.43967 4.01394L5.4409 4.02039L5.44094 4.02038L5.46907 4.15789L5.55086 4.55767H5.95892H14.4356C17.4127 4.55767 19.5493 4.56136 20.9624 4.56994C21.6692 4.57424 22.1931 4.57975 22.55 4.58659C22.7289 4.59002 22.863 4.59373 22.9561 4.59765C23.0029 4.59962 23.0361 4.60152 23.0578 4.60317C23.0597 4.60332 23.0614 4.60346 23.063 4.60359C23.3126 4.66835 23.4928 4.88727 23.4998 5.17003C23.4989 5.17436 23.4959 5.19993 23.4866 5.26007C23.4747 5.33728 23.4568 5.44543 23.4334 5.5816C23.3868 5.85339 23.3197 6.22899 23.2386 6.6753C23.0763 7.56751 22.8583 8.73743 22.6361 9.91389C22.4138 11.0903 22.1873 12.2723 22.0081 13.1886C21.9184 13.6468 21.8407 14.0377 21.7813 14.3278C21.7516 14.473 21.7267 14.5917 21.7074 14.6804C21.6977 14.7248 21.6897 14.7604 21.6833 14.7873L21.6757 14.8189C21.6748 14.8223 21.6742 14.8247 21.6737 14.8263C21.6735 14.8273 21.6733 14.828 21.6732 14.8284C21.4466 15.5766 20.7268 16.2885 19.9216 16.528C19.853 16.5476 19.7604 16.5717 18.916 16.5835C18.0842 16.5951 16.5732 16.5963 13.7089 16.5963C13.2926 16.5963 12.904 16.5964 12.5412 16.5965C9.94949 16.5971 8.66994 16.5974 7.97233 16.5626C7.57379 16.5427 7.41283 16.5126 7.32183 16.4835C7.25595 16.4624 7.224 16.444 7.13899 16.3951C7.10157 16.3736 7.05388 16.3462 6.98849 16.3101L6.98636 16.3089L6.98636 16.3089C6.45373 16.0178 5.93992 15.3852 5.77469 14.8398C5.77476 14.8396 5.77406 14.8359 5.77257 14.828C5.76924 14.8105 5.76197 14.7722 5.75032 14.7042C5.73374 14.6074 5.71195 14.4731 5.68543 14.3043C5.63243 13.967 5.56148 13.498 5.47718 12.928C5.30862 11.7884 5.08728 10.2489 4.85064 8.56041L4.85064 8.56037C4.61851 6.90498 4.40394 5.39071 4.24564 4.28399C4.16649 3.73069 4.10136 3.27894 4.0551 2.96224C4.03199 2.804 4.0135 2.67886 4.0003 2.59142C3.99372 2.54787 3.9883 2.5126 3.98419 2.48689L3.97846 2.45218L3.97516 2.43418C3.97508 2.43378 3.97144 2.41401 3.96499 2.39089C3.9647 2.38986 3.96441 2.38882 3.96411 2.38778L3.48343 2.52544C3.42717 2.32409 3.35685 2.31427 1.99251 2.28972L0.575428 0.794411ZM0.575428 0.794411L0.569984 0.802841C0.531867 0.861864 0.527826 0.877535 0.524571 0.890162L0.524534 0.890305C0.517564 0.917339 0.508907 0.972286 0.50439 1.12132L0.504437 1.12132L0.504135 1.12818C0.497043 1.28912 0.500377 1.34203 0.5049 1.36927L0.505054 1.37021C0.506726 1.38043 0.509385 1.39668 0.545411 1.46722C0.574672 1.51982 0.672123 1.63598 0.750649 1.69732C0.751046 1.69763 0.751444 1.69794 0.751841 1.69824L0.843578 1.76829L2.00151 1.7898M0.575428 0.794411L2.00151 1.7898M2.00151 1.7898C2.00161 1.7898 2.0017 1.7898 2.0018 1.7898L2.00151 1.7898Z"
                            stroke="white" />
                        <path
                            d="M8.13658 18.6611L8.13627 18.6612C7.33169 18.8669 6.72228 19.4425 6.44401 20.2951C6.38245 20.4871 6.34169 20.7497 6.33388 21.0235C6.326 21.2997 6.35278 21.5482 6.40144 21.7152L6.40144 21.7152L6.40214 21.7176C6.6621 22.6267 7.3251 23.2625 8.1163 23.4395C9.22255 23.6842 10.4323 22.9312 10.7694 21.6808L10.7696 21.6801C10.8044 21.5517 10.8269 21.295 10.8191 20.9965C10.8114 20.699 10.7756 20.4398 10.7335 20.3075L10.7332 20.3066C10.345 19.0783 9.16061 18.3987 8.13658 18.6611Z"
                            stroke="white" />
                        <path
                            d="M17.7642 18.6384L17.7642 18.6384L17.7566 18.6401C16.9197 18.8277 16.2254 19.471 15.9881 20.2556C15.9421 20.4098 15.9038 20.6507 15.8876 20.9114C15.8713 21.1735 15.8801 21.4106 15.9072 21.5582C16.0704 22.441 16.7745 23.2127 17.6058 23.4404L17.6058 23.4404L17.6111 23.4419C17.7284 23.4754 17.9365 23.5 18.1764 23.5C18.4152 23.5 18.6295 23.4756 18.7571 23.4405L18.7571 23.4405L18.7595 23.4399C19.4144 23.2634 19.9671 22.7919 20.2535 22.169C20.4464 21.7387 20.4994 21.4988 20.4994 21.0595C20.4994 20.018 19.8664 19.0995 18.9076 18.7321L18.9076 18.7321L18.9023 18.73C18.7971 18.6883 18.5818 18.6443 18.3277 18.6243C18.0715 18.6041 17.8607 18.6151 17.7642 18.6384Z"
                            stroke="white" />
                    </svg>
                </div>
            </div>
        </router-link>
        <div class="card-liked" @click="like()">
            <template v-if="this.liked === true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path
                        d="M5.73939 0.0287609C3.81718 0.281561 2.1575 1.35145 1.06512 3.04882C0.56347 3.8298 0.174339 4.89968 0.0383768 5.87477C-0.041325 6.44809 0.0102467 7.7482 0.127455 8.24478C0.455639 9.58552 1.25266 11.0933 2.36848 12.4702C4.27663 14.8266 7.52565 17.481 11.1779 19.6659C11.6983 19.9774 11.7545 20 11.9983 20C12.2421 20 12.2984 19.9774 12.8188 19.6659C14.1128 18.894 15.885 17.6842 17.0852 16.7497C21.2062 13.5491 23.5457 10.4523 23.9583 7.65792C24.0473 7.05752 23.9864 5.80254 23.8457 5.21568C23.5035 3.82528 22.8987 2.75539 21.9142 1.80288C21.1218 1.03996 20.3389 0.574989 19.3074 0.258989C18.6651 0.06036 18.2479 0.00167465 17.4837 0.00167465C17.1086 0.00167465 16.6445 0.0287609 16.4522 0.0648746C15.6037 0.209332 14.6425 0.597561 13.9159 1.08511C13.4048 1.43271 12.6031 2.20465 12.2796 2.67414C12.139 2.87728 12.0124 3.04431 11.9983 3.04431C11.9843 3.04431 11.8577 2.87728 11.717 2.67414C11.4029 2.21819 10.5496 1.39208 10.0667 1.07156C9.36817 0.615618 8.46801 0.240932 7.68505 0.0919609C7.23966 0.00618935 6.17072 -0.0299263 5.73939 0.0287609Z"
                        fill="#EFCA00" />
                </svg></template>
            <template v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="23" viewBox="0 0 27 23" fill="none">
                    <path
                        d="M6.51596 1.12744L6.51818 1.12714C6.7102 1.10092 7.08574 1.09312 7.49444 1.10664C7.90155 1.1201 8.28421 1.15277 8.48809 1.19217L8.48918 1.19238C9.27699 1.34282 10.2021 1.72762 10.9177 2.196C11.1444 2.34737 11.4841 2.63732 11.8182 2.96262C12.1543 3.2898 12.4459 3.61505 12.5898 3.82462L12.5904 3.82557C12.6704 3.94147 12.748 4.04947 12.8094 4.1307C12.8395 4.17038 12.8696 4.20893 12.8961 4.24019C12.9083 4.25452 12.9271 4.27615 12.9489 4.29756C12.9588 4.30718 12.9802 4.32775 13.0094 4.34927C13.0238 4.35988 13.0508 4.37874 13.0875 4.39681C13.1159 4.4108 13.1977 4.44884 13.3103 4.44884C13.4229 4.44884 13.5047 4.4108 13.5331 4.39681C13.5698 4.37874 13.5968 4.35988 13.6112 4.34927C13.6404 4.32775 13.6619 4.30718 13.6717 4.29756C13.6935 4.27615 13.7123 4.25452 13.7245 4.24019C13.751 4.20893 13.7812 4.17038 13.8112 4.1307C13.8726 4.04947 13.9502 3.94147 14.0302 3.82557L14.0308 3.82465C14.1805 3.60665 14.4615 3.29206 14.7867 2.97595C15.1094 2.66229 15.4454 2.37643 15.6925 2.20758C16.4319 1.71003 17.4184 1.31085 18.276 1.16432L18.2845 1.16288L18.2845 1.1628C18.4468 1.13218 18.9166 1.10194 19.3223 1.10194C20.1164 1.10194 20.5231 1.16083 21.1729 1.36252L21.1741 1.36291C22.2271 1.68666 23.0169 2.15655 23.8302 2.94239C24.8378 3.92095 25.4551 5.01278 25.8091 6.45474C25.8752 6.73241 25.9285 7.20181 25.9517 7.69834C25.975 8.19613 25.9655 8.66839 25.9238 8.95069L25.9237 8.95104C25.5008 11.8261 23.0699 15.1291 18.5781 18.6304L18.5776 18.6308C17.2786 19.6459 15.3533 20.965 13.9527 21.8036L13.9521 21.804C13.6542 21.983 13.5337 22.0508 13.4572 22.0819L13.4547 22.083C13.4231 22.0959 13.4129 22.1001 13.3103 22.1001C13.2077 22.1001 13.1975 22.0959 13.1659 22.083L13.1634 22.0819C13.087 22.0508 12.9664 21.983 12.6686 21.804L12.6685 21.804C8.69735 19.4196 5.1881 16.5355 3.14515 14.0033L3.14502 14.0032C1.95688 12.5317 1.12465 10.9392 0.786122 9.55299C0.733862 9.3293 0.68879 8.87739 0.669738 8.37843C0.650757 7.88132 0.660006 7.40176 0.697461 7.13115L6.51596 1.12744ZM6.51596 1.12744C4.56186 1.38537 2.87009 2.47468 1.74866 4.22334M6.51596 1.12744L1.74866 4.22334M1.74866 4.22334C1.24005 5.01803 0.837195 6.12559 0.697489 7.13095L1.74866 4.22334Z"
                        stroke="#292929" />
                </svg></template>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    props: {
        id: String,
        srcImage: String,
        title: String,
        discount: Boolean,
        oldprice: Number,
        price: Number,
        reviews: Array,
        countRating: Number,
        stock_quantity: Number,
    },
    data() {
        return {
            rating: "",
            liked: false
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
        },
        like() {
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

            const isLiked = favorites.some((item) => item.id === this.id);

            if (isLiked) {
                // Remove from favorites
                const updatedFavorites = favorites.filter((item) => item.id !== this.id);
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                this.liked = false; // Update liked property
            } else {
                // Add to favorites
                const newItem = {
                    id: this.id,
                    title: this.title,
                    srcImage: this.srcImage,
                    liked: true,
                };

                const updatedFavorites = [...favorites, newItem];
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                this.liked = true; // Update liked property
            }
        },
    },
    created() {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const isLiked = favorites.some((item) => item.id === this.id);

        this.liked = isLiked;
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
    border: 1px solid transparent;
    transition: .3s;
    padding-right: 10px;
    height: 100%;
    max-height: 430px;
    padding-bottom: 20px;

    &:hover {
        box-shadow: unset;
        border-color: #EFCA00;

        .addToCart {
            background-color: #EFCA0080;

            svg {
                stroke: #EFCA00 !important;
            }
        }

        .card-title {
            color: #0027ab !important;
        }

    }

    @media (max-width: 540px) {}

    &-image {
        text-align: center;
        margin-bottom: 16px;

        img {
            max-width: 160px;
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
        min-height: 60px;
    }

    &-rating {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

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

    &-liked {
        position: absolute;
        top: 16px;
        right: 16px;
        z-index: 100000;
        cursor: pointer;
    }
}

@media (max-width: 450px) {
    .card {
        min-height: unset !important;

        &-image {
            padding: 0 5px;
            max-width: 130px;
            margin: 0 auto;

            img {
                width: 100%;
            }
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
}
</style>
  