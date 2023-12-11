<template>
    <div v-if="catalogModal" :style="{ display: catalogModal ? 'block' : 'none' }">
        <div class="catalogModal">
            <div id="showMobile">
                <div class="logo">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Flogo.svg?alt=media&token=4f7b2228-5c40-4437-935e-2435c48deacd&_gl=1*1ytnyoy*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODY3NTAzMC4xLjEuMTY5ODY3NTU5OC4xMS4wLjA."
                        alt="" />
                </div>
                <div class="title">
                    Каталог товарів
                </div>
                <div class="close">
                    <img @click="catalogModal = false"
                        src="https://firebasestorage.googleapis.com/v0/b/dropshipping-2afce.appspot.com/o/icons%2Fclose.svg?alt=media&token=ed2a79ce-eeca-4259-998f-f3a1f0c77a81&_gl=1*1hi8n3w*_ga*NDA0ODk5NjE2LjE2OTg2NzUwMzA.*_ga_CW55HF8NVT*MTY5ODc3MTYzNi44LjEuMTY5ODc3MTY0Ny40OS4wLjA."
                        alt="" />
                </div>
            </div>
            <template v-if="windowWidth > 968">
                <aside class="catalogModal-aside">
                    <ul>
                        <li v-for="category in categories" :key="category._id" @mouseover="showTabContent(category.name)">
                            <img :src="category.img" alt="">
                            <p>{{ category.name }}</p>
                            <svg style="max-width: 32px; width: 100%" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#333333">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M7 10L12 15L17 10" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </li>
                    </ul>
                </aside>
            </template>
            <template v-else>
                <aside class="catalogModal-aside">
                    <ul style="overflow-y: auto; max-height: 500px;">
                        <li v-for="category in categories" :key="category._id" @click="showModalContent(category._id)">
                            <img :src="category.img" alt="">
                            <p>{{ category.name }}</p>
                            <svg style="max-width: 32px; width: 100%" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#333333">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M7 10L12 15L17 10" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </li>
                    </ul>
                </aside>
                <template v-if="categoryModal">
                    <div class="catalogModal-categories">
                        <ul>
                            <div class="title">

                                <svg @click="categoryModal = false, categoryModalContent = []"
                                    style="max-width: 32px; width: 100%" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#333333">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M7 10L12 15L17 10" stroke="#333333" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </svg>Категорія: {{ categoryModalContent[0].name }}
                            </div>
                            <li v-for="(item, idx) in categoryModalContent[0].childCategories" :key="idx">
                                <router-link :to="{ name: 'subcategory', params: { query: item._id } }">
                                    <p>{{ item.name }}</p>
                                    <svg style="max-width: 32px; width: 100%" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" stroke="#333333">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M7 10L12 15L17 10" stroke="#333333" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </g>
                                    </svg>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </template>
            </template>
            <div class="catalogModal-content">
                <div v-for="(category, index) in categories" :key="index" class="tab-content"
                    :class="{ active: showTab === category.name }">
                    <div v-if="showTab === category.name">
                        <h2 style="padding-top: 30px">{{ category.name }}</h2>
                        <img :src="category.img" alt="" id="categoryImg">
                    </div>
                    <template v-for="(item, index) in category.childCategories" :key="index">
                        <div class="catalogModal-content__grid">
                            <ul>
                                <li>
                                    <router-link :to="{ name: 'subcategory', params: { query: item._id } }">
                                        <p class="link-text">{{ item.name }}</p>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, onBeforeMount } from "vue";
// import { useApiStore } from "../../store/store";
import axios from "axios";

export default {
    props: {
        catalogModal: Boolean,
    },
    data() {
        return {
            categories: [],
            showTab: 'Популярні категорії',
            windowWidth: window.innerWidth,
            categoryModal: false,
            categoryModalContent: []
        };
    },
    methods: {
        showTabContent(tabTitle) {
            this.showTab = tabTitle;
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        showModalContent(modalId) {
            console.log(modalId);
            this.categoryModal = true;
            this.categoryModalContent = []
            this.categoryModalContent = this.categories
                .filter(category => category._id === modalId) // Фильтруем категории по modalId
                .map(category => {
                    return {
                        name: category.name,
                        _id: category._id,
                        childCategories: category.childCategories.map(childCategory => ({
                            name: childCategory.name,
                            _id: childCategory._id
                        }))
                    };
                });
        }
    },
    created() {
        axios.get('http://88.cx.ua:3000/item/all').then(
            (response) => {
                this.categories = response.data
            }
        )
    },
    watch: {
        catalogModal(val) {
            this.$emit('catalogModal', val)
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
};
</script>
  
<style scoped lang="scss">
.catalogModal-categories {
    position: absolute;
    top: 100px;
    background: #f8f8f8;
    height: 100vh;
    width: 100%;

    ul {
        padding-top: 20px;
        padding-right: 16px;

        .title {
            font-size: 18px;
            font-family: '88';
            margin-bottom: 32px;
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;

            svg {
                rotate: 90deg;
                margin-right: 15px;
            }

            &::after {
                position: absolute;
                content: "";
                display: block;
                width: 80px;
                height: 2px;
                background: #292929;
                bottom: -10px;
                left: 48px;
            }
        }

        list-style: none;
        padding-left: 16px;
        margin-bottom: 24px;

        li {
            margin-bottom: 16px;
        }

        a {
            color: #292929;
            font-size: 16px;
            font-family: '88';

            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 5px;
            transition: .3s;

            &:hover {
                background: #00000020;
                border-radius: 10px;
            }

            svg {
                rotate: -90deg;
            }

            p {
                width: 90%;
            }
        }
    }
}
.catalogModal-content__grid {
    grid-gap: 20px !important;
}
.catalogModal-content__grid {
    ul>li {
        list-style: none;

        a {
            text-decoration: none;

            p {
                color: #292929;

                &:hover {
                    color: #0027ab;
                }
            }
        }
    }
}

.catalogModal {
    max-width: 70%;
    width: 100%;
    position: fixed;
    top: 22%;
    background: #f8f8f8;
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    left: 50%;
    transform: translate(-50%);

    z-index: 10000;
    display: flex;
    flex-direction: row;

    @media (max-width: 968px) {
        z-index: 11000;
        max-width: 100% !important;
        top: 0;
        height: 100vh;
        overflow-y: fixed;

        &-aside {
            padding-top: 100px !important;
            width: 100% !important;

            ul {
                overflow-y: scroll;
                padding: 0 5px !important;

                li {
                    img {
                        min-width: 40px;
                    }

                    p {
                        width: 90% !important;
                        font-size: 18px !important;
                    }
                }
            }
        }

        &-content {
            display: none;
        }
    }

    &-aside {
        width: 28%;
        padding: 50px 0;

        ul {
            list-style: none;
            padding-left: 20px;

            li {
                cursor: pointer;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 8px 5px;
                border-radius: .5rem;
                font-family: '88';

                p {
                    width: 300px;
                    font-size: 18px;
                }

                img {
                    max-width: 30px;
                    margin-right: 10px;
                }

                svg {
                    rotate: 270deg;
                }

                &:hover {
                    p {
                        color: #007bff;
                    }

                    background: #00000020;
                }
            }
        }
    }

    &-content {
        padding: 20px;
        max-width: 80%;
        width: 100%;
        z-index: 10;
        font-family: '88';
        position: relative;

        &__grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 50px;
            margin: 1rem auto;

            &-title {
                font-size: 18px;
            }

            &-list {
                ul {
                    list-style: none;

                    a {
                        text-decoration: none;
                    }

                    li {
                        cursor: pointer;
                        color: #333;
                        margin-top: 15px;
                        border-radius: 10px;
                        font-size: 14px;
                        padding-bottom: 5px;
                        border-bottom: 1px solid transparent;

                        p {
                            padding-left: 5px;
                        }

                        &:hover {
                            border-bottom: 1px solid #000000;
                            background: #00000020;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1440px) {
        &-aside {
            ul {
                li {
                    margin-top: 10px;

                    p {
                        font-size: 14px;
                    }

                    img {
                        max-width: 24px;
                    }
                }
            }
        }

        &-content {
            &__grid {
                &-title {
                    font-size: 14px;
                }

                &-list {
                    ul li {
                        margin-top: 5px;
                        font-size: 12px;
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        max-width: 90%;
    }
}

#showMobile {
    display: none;

    @media (max-width: 968px) {
        display: block;
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 5px;

        .logo {
            img {
                max-width: 60px;
            }
        }

        .title {
            font-size: 24px;
            font-family: '88';
        }

        .close {}
    }

}

#categoryImg {
    position: absolute;
    opacity: .3;
    right: 0;
    bottom: 0;
    max-width: 350px;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.catalog {
    @media (max-width: 920px) {
        display: none;
    }

    user-select: none;
    cursor: pointer;
    max-width: 190px;
    width: 100%;
    background: #333333;
    border-radius: .7rem;

    &-items {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 0;

        img {
            width: 32px;
            margin-right: 10px;
        }

        p {
            font-size: 24px;
            color: white;
        }
    }

    @media (max-width: 1440px) {
        max-width: 140px;

        &-items {
            padding: 7.5px 0;

            img {
                width: 22px;
            }

            p {
                font-size: 14px;
            }
        }
    }
}</style>